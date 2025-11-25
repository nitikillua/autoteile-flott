# Vercel Deployment Anleitung - Kontaktformular mit Serverless Function

## ✅ Was wurde geändert?

Das Kontaktformular wurde für statisches Deployment auf Vercel umgebaut:

### Vorher (funktioniert nur in Emergent Preview):
- Backend (FastAPI/Python) mit direkter SMTP-Verbindung
- SMTP-Credentials im Backend `.env`

### Jetzt (funktioniert auf Vercel):
- **Vercel Serverless Function** (`/api/sendMail.js`)
- Frontend sendet per `fetch` an `/api/sendMail`
- Dateianhänge als Base64 im JSON-Body
- SMTP-Credentials als Vercel Environment Variables

---

## 🔧 Deployment-Schritte

### 1. Code zu GitHub pushen

Stellen Sie sicher, dass alle Änderungen committed und gepusht sind:

```bash
git add .
git commit -m "Add Vercel serverless function for contact form"
git push origin main
```

### 2. Vercel Environment Variables setzen

Gehen Sie zu Ihrem Vercel-Projekt:
**https://vercel.com/your-username/autoteile-flott/settings/environment-variables**

Fügen Sie folgende Variablen hinzu:

| Variable       | Wert                              | Beschreibung                    |
|----------------|-----------------------------------|---------------------------------|
| `MAIL_HOST`    | `host285.checkdomain.de`         | SMTP Server                     |
| `MAIL_PORT`    | `465`                            | SMTP Port                       |
| `MAIL_SECURE`  | `true`                           | SSL/TLS aktiviert               |
| `MAIL_USER`    | `info@autoteile-flott.de`        | SMTP Benutzername               |
| `MAIL_PASS`    | `Sigmund81829!!`                 | SMTP Passwort                   |
| `MAIL_FROM`    | `info@autoteile-flott.de`        | Absender-E-Mail                 |
| `MAIL_TO`      | `info@autoteile-flott.de`        | Empfänger-E-Mail                |

**Wichtig:** 
- Setzen Sie diese für **alle Umgebungen** (Production, Preview, Development)
- Klicken Sie auf "Save" nach jeder Variable

### 3. Vercel neu deployen

Nach dem Setzen der Environment Variables:

1. Gehen Sie zu: **https://vercel.com/your-username/autoteile-flott**
2. Klicken Sie auf **"Deployments"**
3. Klicken Sie auf den **"..." Button** beim letzten Deployment
4. Wählen Sie **"Redeploy"**

Das neue Deployment wird:
- Die Serverless Function `/api/sendMail.js` erstellen
- Die Environment Variables verwenden
- Das Frontend mit dem neuen Fetch-Code deployen

---

## 🧪 Testen nach Deployment

### Test 1: Direkt die API testen

```bash
curl -X POST https://autoteile-flott.de/api/sendMail \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+49 123 456789",
    "hsn": "1234",
    "tsn": "ABC",
    "message": "Dies ist ein Test",
    "attachments": []
  }'
```

Erwartete Antwort:
```json
{"ok":true,"message":"Email sent successfully"}
```

### Test 2: Formular auf der Website

1. Gehen Sie zu https://autoteile-flott.de
2. Scrollen Sie zum Kontaktformular
3. Füllen Sie alle Felder aus
4. Laden Sie eine Datei hoch (optional)
5. Klicken Sie auf "Anfrage absenden"
6. Überprüfen Sie `info@autoteile-flott.de` Postfach

### Test 3: Vercel Logs prüfen

1. Gehen Sie zu: **https://vercel.com/your-username/autoteile-flott/logs**
2. Filtern Sie nach **"Functions"**
3. Suchen Sie nach `/api/sendMail`
4. Überprüfen Sie Logs auf Fehler

---

## 🐛 Troubleshooting

### Problem: "500 Server Error"

**Ursache:** SMTP-Verbindung fehlgeschlagen

**Lösung:**
1. Überprüfen Sie alle Environment Variables in Vercel
2. Testen Sie SMTP-Credentials lokal:
   ```bash
   npm install nodemailer
   node test-smtp.js  # Erstellen Sie ein Test-Script
   ```
3. Prüfen Sie Vercel Logs für genaue Fehlermeldung

### Problem: "405 Method Not Allowed"

**Ursache:** GET-Request statt POST

**Lösung:** 
- Stellen Sie sicher, dass Frontend `method: 'POST'` verwendet
- Testen Sie mit `curl -X POST` wie oben gezeigt

### Problem: "400 Missing required fields"

**Ursache:** Pflichtfelder fehlen

**Lösung:**
- Überprüfen Sie, ob alle Felder ausgefüllt sind: name, email, hsn, tsn
- Prüfen Sie Browser DevTools → Network Tab → Request Payload

### Problem: Anhänge kommen nicht an

**Ursache:** Base64-Encoding fehlerhaft oder Datei zu groß

**Lösung:**
- Maximale Dateigröße: 10 MB
- Vercel Function Payload Limit: 4.5 MB
- Für größere Dateien: Verwenden Sie Cloud Storage (S3, Cloudinary)

### Problem: E-Mail kommt nicht an

**Checkliste:**
- ✅ Vercel Logs zeigen "Email sent successfully"?
- ✅ Spam-Ordner überprüft?
- ✅ `MAIL_TO` korrekt gesetzt?
- ✅ SMTP-Server erreichbar? (Firewall, ISP-Blockierung?)

---

## 📁 Wichtige Dateien

| Datei | Beschreibung |
|-------|--------------|
| `/api/sendMail.js` | Vercel Serverless Function für E-Mail-Versand |
| `/api/package.json` | Dependencies (nodemailer) für die Function |
| `/frontend/src/components/ContactForm.jsx` | Frontend-Formular mit Fetch zu `/api/sendMail` |

---

## 🔒 Sicherheit

✅ **Was ist sicher:**
- SMTP-Credentials sind nur in Vercel Environment Variables
- Niemals im Browser-Code sichtbar
- Serverless Function läuft auf Vercel-Servern

⚠️ **Best Practices:**
- Ändern Sie regelmäßig das SMTP-Passwort
- Verwenden Sie Rate Limiting (Vercel bietet das automatisch)
- Aktivieren Sie CAPTCHA bei Spam-Problemen

---

## 📞 Support

Bei Problemen:
1. Überprüfen Sie **Vercel Logs**: https://vercel.com/logs
2. Testen Sie lokal mit `vercel dev`
3. Prüfen Sie Browser DevTools → Console & Network Tab

**Hinweis:** Das alte Backend (`/app/backend/`) wird **nicht mehr** für das Kontaktformular verwendet. Es ist nur noch für die Emergent-Preview relevant.
