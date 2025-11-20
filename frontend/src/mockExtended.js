// Extended mock data with 12 categories and detailed SEO content
import { categoryDetailsEN } from './translations/seoTexts_en';
import { categoryDetailsHU, categoryDetailsPL } from './translations/seoTexts_hu_pl';

export const companyInfo = {
  name: 'Autoteile Flott',
  phone: '+49 174 4185651',
  email: 'flott.autoteile@gmail.com',
  address: {
    street: 'Friedrich-Schüle-Straße 12',
    zipCity: '85622 Feldkirchen'
  },
  logo: 'https://customer-assets.emergentagent.com/job_autoberatung/artifacts/064d552m_Logo%202-01.png'
};

export const categoryDetails = {
  en: categoryDetailsEN,
  hu: categoryDetailsHU || {},
  pl: categoryDetailsPL || {},
  de: {
    brakes: {
      title: 'Bremskomponenten für alle Fahrzeuge',
      intro: 'Hochwertige Bremsscheiben, Bremsbeläge und komplette Bremssysteme für maximale Sicherheit.',
      content: `
        <h3>Warum sind qualitativ hochwertige Bremsen so wichtig?</h3>
        <p>Das Bremssystem ist das wichtigste Sicherheitselement Ihres Fahrzeugs. Verschlissene oder minderwertige Bremskomponenten können zu gefährlichen Situationen führen. Bei Autoteile Flott bieten wir Ihnen ausschließlich geprüfte Markenqualität, die höchste Sicherheitsstandards erfüllt.</p>
        
        <h3>Unsere Bremskomponenten im Überblick</h3>
        <ul>
          <li><strong>Bremsscheiben:</strong> Gelochte und geschlitzte Ausführungen für optimale Bremsleistung</li>
          <li><strong>Bremsbeläge:</strong> Organische und metallische Varianten für verschiedene Fahrstile</li>
          <li><strong>Bremsflüssigkeit:</strong> DOT 3, DOT 4 und DOT 5.1 für alle Anforderungen</li>
          <li><strong>Bremssättel:</strong> Original und hochwertige Alternativen</li>
          <li><strong>Bremsschläuche:</strong> Verstärkte Ausführungen für Langlebigkeit</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Wie oft sollten Bremsbeläge gewechselt werden?</strong><br>
        In der Regel alle 30.000 bis 70.000 km, abhängig von Ihrem Fahrstil und den Fahrbedingungen.</p>
        
        <p><strong>Woran erkenne ich verschlissene Bremsscheiben?</strong><br>
        Quietschende Geräusche beim Bremsen, Vibrationen im Lenkrad oder verlängerte Bremswege sind klare Anzeichen.</p>
        
        <p><strong>Beratung vom Experten:</strong> Rufen Sie uns an und wir finden die passenden Bremskomponenten für Ihr Fahrzeug – garantiert kompatibel und zum besten Preis-Leistungs-Verhältnis.</p>
      `,
      keywords: ['Bremsscheiben', 'Bremsbeläge', 'Bremsflüssigkeit', 'Bremssättel', 'Bremsschläuche']
    },
    filters: {
      title: 'Filter für optimale Motorleistung',
      intro: 'Luftfilter, Ölfilter, Kraftstofffilter – für saubere Verbrennung und lange Motorlebensdauer.',
      content: `
        <h3>Die Bedeutung regelmäßiger Filterwechsel</h3>
        <p>Filter sind die "Nieren" Ihres Fahrzeugs. Sie halten Schmutz, Staub und Verunreinigungen fern und sorgen dafür, dass Motor und Kraftstoffsystem einwandfrei funktionieren. Ein rechtzeitiger Wechsel spart Kraftstoff und verhindert teure Reparaturen.</p>
        
        <h3>Unsere Filter-Palette</h3>
        <ul>
          <li><strong>Luftfilter:</strong> Standard- und Sportluftfilter für bessere Leistung</li>
          <li><strong>Ölfilter:</strong> Für alle Motortypen, inklusive synthetische Öle</li>
          <li><strong>Kraftstofffilter:</strong> Benzin und Diesel, auch für moderne Direkteinspritzer</li>
          <li><strong>Innenraumfilter:</strong> Mit und ohne Aktivkohle für saubere Luft</li>
          <li><strong>Getriebeölfilter:</strong> Für Automatikgetriebe</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Wie oft sollte der Luftfilter gewechselt werden?</strong><br>
        Üblicherweise alle 15.000 bis 30.000 km oder einmal jährlich.</p>
        
        <p><strong>Was passiert bei einem verstopften Kraftstofffilter?</strong><br>
        Der Motor kann ruckeln, an Leistung verlieren oder im schlimmsten Fall gar nicht mehr starten.</p>
        
        <p><strong>Profitieren Sie von unserer Expertise:</strong> Wir beraten Sie, welche Filter für Ihr Wartungsintervall optimal sind.</p>
      `,
      keywords: ['Luftfilter', 'Ölfilter', 'Kraftstofffilter', 'Innenraumfilter', 'Getriebeölfilter']
    },
    chassis: {
      title: 'Fahrwerkskomponenten für sicheres Fahren',
      intro: 'Stoßdämpfer, Federn, Querlenker – für Komfort und Fahrsicherheit.',
      content: `
        <h3>Ein intaktes Fahrwerk ist essenziell</h3>
        <p>Das Fahrwerk verbindet Ihr Fahrzeug mit der Straße. Verschlissene Komponenten beeinträchtigen nicht nur den Fahrkomfort, sondern auch die Sicherheit. Wir liefern hochwertige Fahrwerksteile, die perfekt zu Ihrem Fahrzeug passen.</p>
        
        <h3>Unsere Fahrwerkskomponenten</h3>
        <ul>
          <li><strong>Stoßdämpfer:</strong> Gas- und Öldämpfer für alle Fahrzeugtypen</li>
          <li><strong>Federn:</strong> Original-Federn und Sportfedern</li>
          <li><strong>Querlenker:</strong> Komplett mit Buchsen und Kugelgelenken</li>
          <li><strong>Stabilisatoren:</strong> Für besseres Kurvenverhalten</li>
          <li><strong>Achsschenkel und Radlager:</strong> In Erstausrüsterqualität</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Wann müssen Stoßdämpfer gewechselt werden?</strong><br>
        Bei schwammigem Fahrverhalten, längeren Bremswegen oder ungleichmäßigem Reifenverschleiß.</p>
        
        <p><strong>Vertrauen Sie unserer Erfahrung:</strong> Wir finden die passenden Fahrwerksteile für Ihre Ansprüche.</p>
      `,
      keywords: ['Stoßdämpfer', 'Federn', 'Querlenker', 'Stabilisatoren', 'Radlager']
    },
    electrical: {
      title: 'Elektrische Komponenten für Zuverlässigkeit',
      intro: 'Batterien, Anlasser, Lichtmaschinen – damit Ihr Fahrzeug immer startet.',
      content: `
        <h3>Elektrische Systeme – das Herzstück moderner Fahrzeuge</h3>
        <p>Ohne funktionierende Elektrik läuft nichts. Von der Batterie über den Anlasser bis zur Lichtmaschine – wir bieten zuverlässige Komponenten für alle elektrischen Systeme Ihres Fahrzeugs.</p>
        
        <h3>Unser Elektrik-Sortiment</h3>
        <ul>
          <li><strong>Starterbatterien:</strong> AGM, EFB und Blei-Säure-Batterien</li>
          <li><strong>Anlasser:</strong> Für Benzin- und Dieselmotoren</li>
          <li><strong>Lichtmaschinen:</strong> Original und aufbereitete Qualität</li>
          <li><strong>Zündkerzen:</strong> Kupfer, Platin und Iridium</li>
          <li><strong>Sensoren:</strong> Lambdasonden, ABS-Sensoren, Kurbelwellensensoren, Nockenwellensensor, Abgastemperatursensor, Differenzdrucksensor, NOX-Sensor, Öldrucksensor, Temperatursensor Kühlwasser, Ladedrucksensor, Drucksensor Saugrohr</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Wie lange hält eine Autobatterie?</strong><br>
        In der Regel 4-6 Jahre, abhängig von Nutzung und Witterungsbedingungen.</p>
        
        <p><strong>Was sind Anzeichen für einen defekten Anlasser?</strong><br>
        Klickende Geräusche beim Startversuch oder ein sehr langsam drehendes Schwungrad.</p>
        
        <p><strong>Lassen Sie sich beraten:</strong> Wir prüfen, welche elektrischen Komponenten Ihr Fahrzeug benötigt.</p>
      `,
      keywords: ['Batterie', 'Anlasser', 'Lichtmaschine', 'Zündkerzen', 'Sensoren']
    },
    lighting: {
      title: 'Beleuchtung für Sicherheit und Sichtbarkeit',
      intro: 'Scheinwerfer, Rücklichter, LED-Technologie – für optimale Sicht bei Tag und Nacht.',
      content: `
        <h3>Sehen und gesehen werden</h3>
        <p>Eine funktionierende Beleuchtung ist gesetzlich vorgeschrieben und lebenswichtig. Wir führen alle Arten von Leuchtmitteln und Beleuchtungskomponenten für Ihr Fahrzeug.</p>
        
        <h3>Unser Beleuchtungssortiment</h3>
        <ul>
          <li><strong>Scheinwerfer:</strong> Halogen, Xenon und LED-Scheinwerfer + LED-Umrüstsets</li>
          <li><strong>Leuchtmittel:</strong> H1, H4, H7 und alle gängigen Typen</li>
          <li><strong>Rückleuchten:</strong> in Erstausrüster Qualität</li>
          <li><strong>Nebelscheinwerfer:</strong> Für bessere Sicht bei schlechtem Wetter</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Darf ich LED-Leuchtmittel in Halogen-Scheinwerfer einbauen?</strong><br>
        Nur mit entsprechender Zulassung und Prüfzeichen, sonst erlischt die Betriebserlaubnis.</p>
        
        <p><strong>Wie lange halten Xenon-Brenner?</strong><br>
        Etwa 2.000 bis 3.000 Betriebsstunden, deutlich länger als Halogenlampen.</p>
        
        <p><strong>Wir beraten Sie gerne:</strong> Finden Sie die richtige Beleuchtung für Ihr Fahrzeug – legal und leistungsstark.</p>
      `,
      keywords: ['Scheinwerfer', 'Leuchtmittel', 'Rückleuchten', 'LED', 'Xenon']
    },
    exhaust: {
      title: 'Auspuffanlagen für Leistung und Umwelt',
      intro: 'Auspufftöpfe, Katalysatoren, Abgasrohre – für saubere Abgase und optimale Performance.',
      content: `
        <h3>Die Auspuffanlage – mehr als nur Schalldämpfung</h3>
        <p>Eine intakte Auspuffanlage reduziert nicht nur Lärm, sondern auch Schadstoffe und beeinflusst die Motorleistung. Wir bieten Komplettsysteme und Einzelkomponenten in bester Qualität.</p>
        
        <h3>Unser Auspuff-Sortiment</h3>
        <ul>
          <li><strong>Endschalldämpfer:</strong> Original und Sportauspuff</li>
          <li><strong>Katalysatoren:</strong> Metallkatalysatoren und Keramik-Kats</li>
          <li><strong>Mittelschalldämpfer:</strong> Für alle Fahrzeugtypen</li>
          <li><strong>Partikelfilter:</strong> Für Dieselfahrzeuge</li>
          <li><strong>Auspuffrohre und Schellen:</strong> Rostfreie Qualität</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Woran erkenne ich einen defekten Katalysator?</strong><br>
        Leistungsverlust, erhöhter Kraftstoffverbrauch und eine leuchtende Motorkontrollleuchte.</p>
        
        <p><strong>Kann ich einen Sportauspuff eintragen lassen?</strong><br>
        Ja, wenn dieser über eine ABE oder ein Teilegutachten verfügt.</p>
        
        <p><strong>Rufen Sie uns an:</strong> Wir finden die passende Auspuffanlage für Ihr Fahrzeug.</p>
      `,
      keywords: ['Endschalldämpfer', 'Katalysator', 'Partikelfilter', 'Auspuffrohr', 'Sportauspuff']
    },
    clutch: {
      title: 'Kupplungen für sanfte Gangwechsel',
      intro: 'Kupplungssätze, Ausrücklager, Schwungscheiben – für perfektes Schalten.',
      content: `
        <h3>Die Kupplung – das Bindeglied zwischen Motor und Getriebe</h3>
        <p>Eine verschlissene Kupplung macht sich durch Rutschen, schweres Schalten oder Geräusche bemerkbar. Wir liefern komplette Kupplungssätze und Einzelkomponenten für alle Fahrzeuge.</p>
        
        <h3>Unser Kupplungs-Sortiment</h3>
        <ul>
          <li><strong>Kupplungssätze:</strong> 3-teilig mit Druckplatte, Scheibe und Ausrücklager</li>
          <li><strong>Zweimassenschwungräder:</strong> in Erstausrüster Qualität</li>
          <li><strong>Ausrücksysteme:</strong> Hydraulisch und mechanisch</li>
          <li><strong>Kupplungsscheiben:</strong> in Erstausrüster Qualität</li>
          <li><strong>Geberzylinder:</strong> Für hydraulische Kupplungen</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Wie lange hält eine Kupplung?</strong><br>
        Bei normaler Fahrweise zwischen 100.000 und 200.000 km.</p>
        
        <p><strong>Was kostet ein Kupplungswechsel?</strong><br>
        Das hängt vom Fahrzeug ab. Wir beraten Sie gerne zu den Kosten für Ihr Modell.</p>
        
        <p><strong>Vertrauen Sie unserer Beratung:</strong> Wir finden den richtigen Kupplungssatz für Ihr Fahrzeug.</p>
      `,
      keywords: ['Kupplungssatz', 'Zweimassenschwungrad', 'Ausrücklager', 'Kupplungsscheibe', 'Zentralausrücklager', 'Geberzylinder', 'Nehmerzylinder']
    },
    engine: {
      title: 'Motorkomponenten für Leistung und Zuverlässigkeit',
      intro: 'Zylinderkopfdichtungen, Steuerketten, Wasserpumpen – für einen gesunden Motor.',
      content: `
        <h3>Der Motor – das Herz Ihres Fahrzeugs</h3>
        <p>Motorkomponenten müssen höchsten Belastungen standhalten. Wir bieten Ersatzteile in Erstausrüsterqualität, die Langlebigkeit und Performance garantieren.</p>
        
        <h3>Unser Motor-Sortiment</h3>
        <ul>
          <li><strong>Zylinderkopfdichtungen:</strong> Für alle Motortypen</li>
          <li><strong>Steuerketten und Zahnriemen:</strong> In Erstausrüsterqualität, oder günstiger von Markenhersteller für zeitwertgerechte Reparatur</li>
          <li><strong>Wasserpumpen:</strong> Mechanische, schaltbare oder rein elektrische Wasserpumpen</li>
          <li><strong>Kolben und Pleuel:</strong> Standard und verstärkte Ausführungen</li>
          <li><strong>Nockenwellen:</strong> Original und Performance-Varianten</li>
          <li><strong>Additive:</strong> Hydrostössel Additiv, Einspritzsystem-Reiniger, Blei-Ersatz für Oldtimer Motoren, Visco-Additiv gegen Ölverbrauch</li>
          <li><strong>Ventile:</strong> Einlass- Auslassventile, Ventilschaftdichtungen in Erstausrüsterqualität</li>
          <li><strong>Ölwanne:</strong> Stahlwannen rosten mit der Zeit, ein häufiges Problem bei TÜV-Untersuchungen</li>
          <li><strong>Dichtringe:</strong> z.B.: Kurbelwellendichtringe verursachen oft Ölverlust und sorgen ebenso für ein häufiges Problem bei TÜV-Untersuchungen</li>
          <li><strong>Thermostat:</strong> sorgt für optimale Kühlung für den Motor aber auch für einen warmen Innenraum im Winter</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Wann muss der Zahnriemen gewechselt werden?</strong><br>
        Laut Herstellerangabe, meist zwischen 60.000 und 220.000 km.</p>
        
        <p><strong>Was passiert bei einer defekten Zylinderkopfdichtung?</strong><br>
        Kühlwasserverlust, weißer Rauch aus dem Auspuff und Überhitzung sind typische Symptome.</p>
        
        <p><strong>Lassen Sie sich beraten:</strong> Wir finden die richtigen Motorkomponenten für Ihr Fahrzeug.</p>
      `,
      keywords: ['Zylinderkopfdichtung', 'Zahnriemen', 'Steuerkette', 'Wasserpumpe', 'Kolben', 'Dichtring', 'Ventil', 'Thermostat', 'Additiv', 'Ölverbrauch']
    },
    body: {
      title: 'Karosserieteile für Optik und Funktion',
      intro: 'Spiegel, Türgriffe, Stoßfänger – für ein perfektes Erscheinungsbild.',
      content: `
        <h3>Karosserieteile – für Form und Funktion</h3>
        <p>Beschädigte oder verschlissene Karosserieteile beeinträchtigen nicht nur die Optik, sondern auch die Funktionalität. Wir liefern passende Ersatzteile für alle Fahrzeugmodelle.</p>
        
        <h3>Unser Karosserie-Sortiment</h3>
        <ul>
          <li><strong>Außenspiegel:</strong> Komplett oder einzelne Spiegelgläser</li>
          <li><strong>Spiegelglas:</strong> Ersatzgläser für verschiedene Fahrzeugmodelle</li>
          <li><strong>Türgriffe:</strong> Innen und außen</li>
          <li><strong>Stoßfänger:</strong> Grundiert oder lackiert</li>
          <li><strong>Kotflügel:</strong> Original und Aftermarket</li>
          <li><strong>Schweller / Einstieg:</strong> Reparaturbleche und Ersatzteile</li>
          <li><strong>Reparaturblech für Kotflügel:</strong> Für präzise Karosseriereparaturen</li>
          <li><strong>Zierleisten:</strong> Chrom und Kunststoff</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Kann ich Karosserieteile selbst lackieren?</strong><br>
        Mit entsprechender Vorbereitung ja, für beste Ergebnisse empfehlen wir jedoch einen Fachbetrieb.</p>
        
        <p><strong>Sind Aftermarket-Teile genauso gut wie Originalteile?</strong><br>
        Hochwertige Aftermarket-Teile bieten oft das gleiche Qualitätsniveau zu einem günstigeren Preis.</p>
        
        <p><strong>Wir beraten Sie gerne:</strong> Finden Sie die passenden Karosserieteile für Ihr Fahrzeug.</p>
      `,
      keywords: ['Außenspiegel', 'Türgriffe', 'Stoßfänger', 'Kotflügel', 'Zierleisten', 'Spiegelglas', 'Schweller', 'Reparaturblech']
    },
    drivetrain: {
      title: 'Antriebskomponenten für kraftvolle Leistungsübertragung',
      intro: 'Antriebswellen, Gelenkwellen, Kardanwellen – für sichere Kraftübertragung auf die Räder.',
      content: `
        <h3>Der Antrieb – Das Herzstück der Kraftübertragung</h3>
        <p>Der Antriebsstrang überträgt die Motorleistung auf die Räder. Verschleiß oder Defekte führen zu Vibrationen, Geräuschen und können die Fahrsicherheit beeinträchtigen. Wir liefern hochwertige Antriebskomponenten in Erstausrüster-Qualität.</p>
        
        <h3>Unser Antriebs-Sortiment</h3>
        <ul>
          <li><strong>Antriebswellen:</strong> Komplett mit Gelenken und Manschetten</li>
          <li><strong>Gelenkwellen:</strong> Für Front-, Heck- und Allradantrieb</li>
          <li><strong>Kardanwellen:</strong> Für Hinterrad- und Allradfahrzeuge</li>
          <li><strong>CV-Gelenke:</strong> Homokinetische Gelenke für gleichmäßigen Lauf</li>
          <li><strong>Antriebswellenmanschetten:</strong> Für zuverlässigen Schutz der Gelenke</li>
          <li><strong>Kardanwellenlager:</strong> Für vibrationsfreien Lauf</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Woran erkenne ich eine defekte Antriebswelle?</strong><br>
        Typische Symptome sind klackende Geräusche beim Lenken, Vibrationen beim Beschleunigen oder sichtbar beschädigte Manschetten.</p>
        
        <p><strong>Können Antriebswellen repariert werden?</strong><br>
        In den meisten Fällen ist ein Austausch wirtschaftlicher und sicherer als eine Reparatur.</p>
        
        <p><strong>Wie oft sollten Antriebswellenmanschetten geprüft werden?</strong><br>
        Bei jeder Inspektion sollten die Manschetten auf Risse und Beschädigungen kontrolliert werden.</p>
        
        <p><strong>Vertrauen Sie auf unsere Erfahrung:</strong> Wir finden die passenden Antriebskomponenten für Ihr Fahrzeug – ob Frontantrieb, Heckantrieb oder Allrad.</p>
      `,
      keywords: ['Antriebswelle', 'Gelenkwelle', 'Kardanwelle', 'CV-Gelenk', 'Homokinetisch', 'Manschette']
    },
    climate: {
      title: 'Klima & Heizung für perfekte Temperatur',
      intro: 'Klimakompressoren, Heizungsgebläse, Kühler – für angenehmes Klima im Fahrzeug.',
      content: `
        <h3>Klima- und Heizsysteme – Komfort zu jeder Jahreszeit</h3>
        <p>Eine funktionierende Klimaanlage und Heizung sorgen für angenehme Temperaturen und freie Sicht. Wir liefern alle Komponenten für Ihr Klimasystem.</p>
        
        <h3>Unser Klima-Sortiment</h3>
        <ul>
          <li><strong>Klimakompressoren:</strong> Original und hochwertige Alternativen</li>
          <li><strong>Kondensatoren:</strong> Für effiziente Kühlung</li>
          <li><strong>Heizungsgebläse:</strong> Für warme Luft im Winter</li>
          <li><strong>Widerstand Heizgebläse:</strong> wenn die Stufen der Lüftung sich nicht mehr durchschalten lassen</li>
          <li><strong>Kühlmittelkühler:</strong> Für optimale Motortemperatur</li>
          <li><strong>Trockner und Filter:</strong> Für saubere Klimaanlagen</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Warum kühlt meine Klimaanlage nicht mehr richtig?</strong><br>
        Häufige Ursachen sind Kältemittelverlust, defekter Kompressor oder verstopfter Kondensator.</p>
        
        <p><strong>Wie oft sollte die Klimaanlage gewartet werden?</strong><br>
        Einmal jährlich, idealerweise vor dem Sommer.</p>
        
        <p><strong>Vertrauen Sie unserer Expertise:</strong> Wir finden die richtigen Komponenten für Ihr Klimasystem.</p>
      `,
      keywords: ['Klimakompressor', 'Kondensator', 'Heizungsgebläse', 'Kühler', 'Klimaservice']
    },
    others: {
      title: 'Weitere Autoteile und Zubehör',
      intro: 'Alles, was Sie sonst noch benötigen – von Scheibenwischern bis Pflegemitteln.',
      content: `
        <h3>Umfangreiches Sortiment für alle Bedürfnisse</h3>
        <p>Neben den Hauptkategorien führen wir ein breites Sortiment an weiteren Autoteilen und Zubehör. Egal was Sie suchen – wir haben es oder besorgen es für Sie.</p>
        
        <h3>Weitere Produkte</h3>
        <ul>
          <li><strong>Scheibenwischer:</strong> Alle Längen und Typen</li>
          <li><strong>Pflegemittel:</strong> Motoröl, Frostschutz, Reiniger</li>
          <li><strong>Reifendrucksensor:</strong> Für moderne Fahrzeuge mit RDKS</li>
          <li><strong>Poliermittel:</strong> Für glänzende Lackpflege</li>
          <li><strong>Scheinwerfer Versiegelung / Politur:</strong> Für klare Sicht und gepflegte Optik</li>
          <li><strong>Scheibenklar / Scheibenfrostschutz für den Winter:</strong> Für freie Sicht bei Minusgraden</li>
          <li><strong>Abdeckhauben für Windschutzscheibe / Halbgaragen:</strong> Schutz vor Witterung</li>
        </ul>
        
        <h3>Häufig gestellte Fragen</h3>
        <p><strong>Haben Sie auch Spezialteile für Oldtimer?</strong><br>
        Ja, wir können auch schwer erhältliche Teile für Oldtimer beschaffen.</p>
        
        <p><strong>Bieten Sie auch Einbauservice an?</strong><br>
        Wir können Ihnen gerne Partnerwerkstätten empfehlen.</p>
        
        <p><strong>Kontaktieren Sie uns:</strong> Für alle Autoteile, die Sie nicht online finden – wir helfen weiter!</p>
      `,
      keywords: ['Scheibenwischer', 'Reifen', 'Anhängerkupplung', 'Pflegemittel', 'Zubehör', 'Reifendrucksensor', 'Poliermittel', 'Scheibenfrostschutz']
    }
  }
};
