export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.oref.org.il/WarningMessages/alert/alerts.json', {
      headers: {
        'Referer': 'https://www.oref.org.il/',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    // אם אין התראות, הקובץ לפעמים חוזר ריק או עם שגיאה
    const data = await response.text();
    const json = data ? JSON.parse(data) : { data: [] };
    
    res.status(200).json(json);
  } catch (e) {
    res.status(200).json({ data: [] }); // מחזירים מערך ריק במקרה של תקלה
  }
}
