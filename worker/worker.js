// Contact form backend for riskrescuesolutions.com.au.
// The site POSTs JSON here; this Worker emails it to Paul through Resend.
// The Resend key is a Worker secret, so it never reaches the browser.
//
// Settings (Cloudflare dashboard → Workers → rrs-contact → Settings → Variables):
//   RESEND_API_KEY   secret, required
//   LEAD_TO_EMAIL    where enquiries go
//   LEAD_FROM_EMAIL  sender. Must be on a domain verified in Resend, e.g.
//                    "Risk Rescue Website <website@riskrescuesolutions.com.au>".
//                    Resend's test sender (onboarding@resend.dev) only delivers
//                    to the email that owns the Resend account.

const ALLOWED_ORIGINS = [
  'https://www.riskrescuesolutions.com.au',
  'https://riskrescuesolutions.com.au',
  'http://localhost:5179',
];

const cors = (origin) => ({
  'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
  Vary: 'Origin',
});

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const clean = (v, max) => String(v ?? '').trim().slice(0, max);

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = cors(origin);
    const reply = (body, status = 200) =>
      new Response(JSON.stringify(body), { status, headers: { ...headers, 'Content-Type': 'application/json' } });

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (request.method !== 'POST') return reply({ ok: false, error: 'POST only' }, 405);
    if (!ALLOWED_ORIGINS.includes(origin)) return reply({ ok: false, error: 'Not allowed' }, 403);

    let data;
    try {
      data = await request.json();
    } catch {
      return reply({ ok: false, error: 'Could not read the form.' }, 400);
    }

    // Honeypot: a bot filled the hidden field. Pretend it worked and send nothing.
    if (data._honey) return reply({ ok: true });

    const name = clean(data.name, 120);
    const email = clean(data.email, 200);
    const phone = clean(data.phone, 40);
    const message = clean(data.message, 5000);
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return reply({ ok: false, error: 'Please add your name, a valid email and a message.' }, 400);
    }

    if (!env.RESEND_API_KEY) return reply({ ok: false, error: 'Email is not set up yet.' }, 503);

    const rows = [['Name', name], ['Email', email], ['Phone', phone]].filter(([, v]) => v);
    const html =
      '<div style="font-family:Arial,sans-serif;color:#222;max-width:600px">' +
      '<h2 style="margin:0 0 16px">New website enquiry</h2>' +
      '<table style="border-collapse:collapse;margin-bottom:16px">' +
      rows.map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0">${esc(v)}</td></tr>`).join('') +
      '</table>' +
      `<p style="white-space:pre-wrap;border-left:3px solid #c2272d;padding-left:12px;margin:0">${esc(message)}</p>` +
      '<p style="color:#888;font-size:12px;margin-top:24px">Sent from the contact form on riskrescuesolutions.com.au. Hit reply to answer them directly.</p>' +
      '</div>';
    const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${message}`;

    let res;
    try {
      res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.LEAD_FROM_EMAIL || 'Risk Rescue Website <onboarding@resend.dev>',
          to: [env.LEAD_TO_EMAIL || 'paul@riskrescuesolutions.com.au'],
          reply_to: email,
          subject: `Website enquiry from ${name}`,
          html,
          text,
        }),
      });
    } catch {
      return reply({ ok: false, error: 'Could not reach the email service.' }, 502);
    }

    if (!res.ok) {
      console.log('Resend error', res.status, await res.text().catch(() => ''));
      return reply({ ok: false, error: 'Could not send right now.' }, 502);
    }
    return reply({ ok: true });
  },
};
