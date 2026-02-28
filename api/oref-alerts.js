export default async function handler(req, res) {
  try {
    const r = await fetch('https://www.oref.org.il/WarningMessages/alert/alerts.json', {
      headers: {
        'Referer': 'https://www.oref.org.il/',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const data = await r.json().catch(() => ({ data: [] }));
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (e) {
    res.status(200).json({ data: [] });
  }
}
