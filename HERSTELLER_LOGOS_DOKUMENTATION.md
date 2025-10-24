# Hersteller-Logos Integration - Dokumentation

## Übersicht
Die Autoteile Flott Website zeigt jetzt **68 Hersteller-Logos** dynamisch in den jeweiligen Kategorie-Detailseiten an.

## Implementierung

### Dateien
- **`/app/frontend/src/manufacturerLogos.js`**: Zentrale Datei mit allen Hersteller-Logos und Kategorie-Zuordnungen
- **`/app/frontend/src/components/CategoryDetailModal.jsx`**: Modal-Komponente mit Logo-Anzeige

### Funktionsweise
1. **Dynamisches Mapping**: Jeder Hersteller ist einer oder mehreren Kategorien zugeordnet
2. **Automatische Anzeige**: Wenn eine Kategorie geöffnet wird, werden nur die relevanten Hersteller angezeigt
3. **Logo-Loading**: Logos werden von offiziellen Quellen (Wikipedia, Clearbit, offizielle Websites) geladen
4. **Fehlerbehandlung**: Wenn ein Logo nicht lädt, wird automatisch der Herstellername als Text angezeigt

## Kategorie-Mapping

### Bremsen (brakes)
ATE, Brembo, Budweg Caliper, BOSCH, Herth+Buss, Maxgear, Meyle, Optimal, Quaro, Textar, TRW, Blue Print
**→ 12 Hersteller**

### Öl und Filter (filters)  
BOSCH, MAHLE, MANN-FILTER, ZF
**→ 4 Hersteller**

### Fahrwerk (chassis)
Bilstein, Blue Print, FAG, Febi, KYB, Lemförder, Lesjöfors, Maxgear, Meyle, NK, Optimal, Quaro, Sachs
**→ 13 Hersteller**

### Elektrik (electrical)
AS, Beru, Borgwarner, BOSCH, ERA, HELLA, Herth+Buss, Magneti Marelli
**→ 8 Hersteller**

### Beleuchtung (lighting)
HELLA, Narva, Philips
**→ 3 Hersteller**

### Auspuff (exhaust)
BOSAL, Imasaf, Borgwarner
**→ 3 Hersteller**

### Kupplung (clutch)
LUK, Valeo, Japanparts
**→ 3 Hersteller**

### Motor (engine)
Ajusa, Continental, Corteco, Dayco, Elring, Febi, INA, Kolbenschmidt, MAHLE, Metzger, Nissens, Pierburg, Japanparts, Victor Reinz
**→ 14 Hersteller**

### Karosserie (body)
Van Wezel
**→ 1 Hersteller**

### Innenraum (interior)
Stabilus
**→ 1 Hersteller**

### Klima & Heizung (climate)
Nissens
**→ 1 Hersteller**

### Sonstige (others)
Arnott, BH SENS, Bugiad, Castrol, ELF, GKN, Liqui Moly, Löbro, Mobil, Motul, NGK, NTK, Ravenol, Shell, SKF, Spidan, SWF, Total, Varta
**→ 19 Hersteller**

---

## Design-Spezifikationen

### Layout
- **Grid**: 6 Spalten auf Desktop, responsiv auf kleineren Bildschirmen
- **Logo-Größe**: Max. 150x60px, einheitlich skaliert
- **Spacing**: 16px Gap zwischen Logos
- **Container**: Weißer Hintergrund mit Gradient, Border und Shadow

### Visueller Effekt
- **Standard**: Grayscale-Filter (logos in Graustufen)
- **Hover**: Farbige Logos + Shadow-Effekt
- **Fallback**: Text-Anzeige wenn Logo nicht lädt

### Responsive Verhalten
- **Desktop (lg)**: 6 Spalten
- **Tablet (md)**: 5 Spalten  
- **Mobile (sm)**: 4 Spalten
- **Extra Small**: 3 Spalten

## Logo-Quellen

### Priorität der Quellen:
1. **Wikipedia Commons** - Hochwertige SVG-Logos von bekannten Marken
2. **Clearbit Logo API** - Automatisches Logo-Fetching
3. **Offizielle Websites** - Direkte Logo-URLs von Hersteller-Websites
4. **Placeholder** - Fallback für unbekannte Marken

### Bekannte funktionierende Logos:
- Bilstein, BorgWarner, Bosch, Brembo, Castrol, Continental
- ELF, FAG, GKN, HELLA, INA, KYB, LUK
- Magneti Marelli, MAHLE, Mobil, Motul, NGK, Philips
- Sachs, Shell, SKF, Total, TRW, Valeo, Varta, ZF

## Wartung & Updates

### Neuen Hersteller hinzufügen:
```javascript
// In /app/frontend/src/manufacturerLogos.js
neuerHersteller: {
  name: 'Hersteller Name',
  logo: 'https://logo-url.com/logo.png',
  categories: ['brakes', 'chassis'] // Relevante Kategorien
}
```

### Logo-URL aktualisieren:
Wenn ein Logo nicht lädt, ersetzen Sie die URL in `manufacturerLogos.js`:
```javascript
hersteller: {
  name: 'Name',
  logo: 'https://neue-logo-url.com/logo.png', // Neue URL
  categories: ['kategorie']
}
```

### Kategorie-Zuordnung ändern:
Fügen Sie oder entfernen Sie Kategorie-IDs im `categories` Array:
```javascript
categories: ['brakes', 'chassis', 'electrical'] // Mehrere Kategorien möglich
```

## Vorteile der Implementierung

✅ **Professioneller Auftritt**: Zeigt Vertrauen durch bekannte Marken
✅ **Dynamisch**: Nur relevante Hersteller pro Kategorie
✅ **Skalierbar**: Einfaches Hinzufügen neuer Hersteller
✅ **Performance**: Lazy Loading, nur wenn Modal geöffnet wird
✅ **Fehlerresistent**: Automatischer Fallback auf Text
✅ **Responsive**: Passt sich allen Bildschirmgrößen an

## Technische Details

### Import & Verwendung:
```javascript
import { getManufacturersByCategory } from '../manufacturerLogos';

const manufacturers = getManufacturersByCategory('brakes');
// Gibt Array von Herstellern für Bremsen-Kategorie zurück
```

### Fehlerbehandlung:
```javascript
onError={(e) => {
  // Bei Ladefehler: Logo ausblenden, Text einblenden
  e.target.style.display = 'none';
  e.target.parentElement.innerHTML = `<span class="text-xs">${name}</span>`;
}}
```

### Performance-Optimierung:
- Logos werden erst geladen, wenn Modal geöffnet wird
- Lazy Loading durch Browser native `loading="lazy"` (kann ergänzt werden)
- Grayscale-Filter reduziert visuelle Überladung

---

**Erstellt:** 24. Januar 2025  
**Letzte Aktualisierung:** 24. Januar 2025  
**Version:** 1.0
