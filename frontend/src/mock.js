// Mock data for Autoteile Flott website
import { companyInfo, categoryDetails } from './mockExtended';
import { categoriesHU, categoriesPL } from './translations/categories_hu_pl';

export const translations = {
  de: {
    nav: {
      start: 'Start',
      categories: 'Kategorien',
      about: 'Über uns',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Autoteile Flott – Wir finden das richtige Teil für Ihr Fahrzeug.',
      subtitle: 'Professionelle Beratung, schnelle Lieferung, 100 % passgenau.',
      cta: 'Jetzt Kontakt aufnehmen'
    },
    categories: {
      title: 'Unsere Autoteil-Kategorien',
      subtitle: 'Klicken Sie auf eine Kategorie für mehr Informationen',
      readMore: 'Weiterlesen',
      callNow: 'Kontakt',
      showMore: 'Mehr anzeigen',
      showAll: 'Alle anzeigen',
      items: [
        {
          id: 'brakes',
          name: 'Bremsen',
          description: 'Wir liefern hochwertige Bremskomponenten für alle Fahrzeugtypen – Bremsscheiben, Bremsbeläge und komplette Bremssysteme. Unsere Experten beraten Sie, welche Teile perfekt zu Ihrem Fahrzeug passen.',
          image: 'https://images.unsplash.com/photo-1613214150384-14921ff659b2'
        },
        {
          id: 'filters',
          name: 'Öl und Filter',
          description: 'Luftfilter, Ölfilter, Kraftstofffilter – wir haben die richtigen Filter für optimale Motorleistung. Lassen Sie sich von uns beraten, welcher Filter zu Ihrem Wartungsintervall passt.',
          image: 'https://images.unsplash.com/photo-1588294020274-1e23a4815b72'
        },
        {
          id: 'chassis',
          name: 'Fahrwerk',
          description: 'Stoßdämpfer, Federn, Querlenker und weitere Fahrwerkskomponenten in geprüfter Qualität. Wir sorgen dafür, dass Sie die passenden Teile für sicheres Fahren erhalten.',
          image: 'https://images.unsplash.com/photo-1610876126529-fb3aa7e9abc1'
        },
        {
          id: 'electrical',
          name: 'Elektrik',
          description: 'Batterien, Anlasser, Lichtmaschinen und elektrische Komponenten – kompetente Beratung für alle elektrischen Autoteile. Wir finden die richtige Lösung für Ihr Fahrzeug.',
          image: 'https://images.unsplash.com/photo-1640018578914-abe1d592ef50'
        },
        {
          id: 'lighting',
          name: 'Beleuchtung',
          description: 'Scheinwerfer, Leuchtmittel, Rücklichter – für optimale Sicht und Sicherheit bei Tag und Nacht. LED, Xenon oder Halogen – wir haben die richtige Beleuchtung für Ihr Fahrzeug.',
          image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f'
        },
        {
          id: 'exhaust',
          name: 'Auspuff',
          description: 'Auspufftöpfe, Katalysatoren, Partikelfilter und Abgasrohre – für saubere Abgase und optimale Performance. Original oder Sportauspuff, wir beraten Sie kompetent.',
          image: 'https://images.unsplash.com/photo-1556783151-c6d5e7d296bb'
        },
        {
          id: 'clutch',
          name: 'Kupplung',
          description: 'Kupplungssätze, Zweimassenschwungräder, Ausrücklager – für sanfte Gangwechsel und lange Lebensdauer. Wir finden den passenden Kupplungssatz für Ihr Fahrzeug.',
          image: 'https://images.unsplash.com/photo-1603925246538-193f96ec9acd'
        },
        {
          id: 'engine',
          name: 'Motor',
          description: 'Zylinderkopfdichtungen, Zahnriemen, Steuerketten, Wasserpumpen – für einen zuverlässigen Motor. Hochwertige Komponenten in Erstausrüsterqualität.',
          image: 'https://images.unsplash.com/photo-1552656967-7a0991a13906'
        },
        {
          id: 'body',
          name: 'Karosserie',
          description: 'Außenspiegel, Türgriffe, Stoßfänger, Kotflügel – für perfekte Optik und Funktionalität. Original- und Aftermarket-Teile in geprüfter Qualität.',
          image: 'https://images.unsplash.com/photo-1661501316011-607a6871ecce'
        },
        {
          id: 'interior',
          name: 'Innenraum',
          description: 'Sitzbezüge, Lenkräder, Verkleidungen, Fußmatten – für Komfort und Wohlfühlatmosphäre. Wir haben die passenden Innenraumteile für Ihr Fahrzeug.',
          image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d'
        },
        {
          id: 'climate',
          name: 'Klima & Heizung',
          description: 'Klimakompressoren, Kondensatoren, Heizungsgebläse – für angenehme Temperaturen zu jeder Jahreszeit. Professionelle Beratung für Ihr Klimasystem.',
          image: 'https://customer-assets.emergentagent.com/job_autoberatung/artifacts/idk0bzb2_heizung.png'
        },
        {
          id: 'others',
          name: 'Sonstige',
          description: 'Scheibenwischer, Reifen, Anhängerkupplungen und vieles mehr. Alles was Sie für Ihr Fahrzeug benötigen – wir haben es oder besorgen es für Sie.',
          image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3'
        }
      ]
    },
    about: {
      title: 'Über uns',
      text1: 'Autoteile Flott steht für persönliche Beratung und Fachwissen aus jahrelanger Erfahrung. Wir helfen Ihnen, das exakt passende Autoteil zu finden – garantiert. Statt riskanter Online-Bestellungen erhalten Sie bei uns geprüfte Qualität, individuelle Beratung und die Sicherheit, dass alles passt.',
      text2: 'Innerhalb von 24 Stunden ist Ihr bestelltes Teil abholbereit – zuverlässig und unkompliziert.'
    },
    contact: {
      title: 'Jetzt beraten lassen',
      subtitle: 'Schreiben Sie uns auf WhatsApp und wir finden das passende Teil für Ihr Fahrzeug.',
      email: companyInfo.email,
      cta: 'WhatsApp Nachricht senden',
      whatsappMessage: 'Hallo, ich interessiere mich für Autoteile und hätte gerne eine Beratung.',
      location: `${companyInfo.address.street}, ${companyInfo.address.zipCity}`
    },
    footer: {
      tagline: '© 2025 Autoteile Flott. Alle Rechte vorbehalten.',
      links: ['Impressum', 'Datenschutz', 'AGB']
    }
  },
  en: {
    nav: {
      start: 'Home',
      categories: 'Categories',
      about: 'About Us',
      contact: 'Contact'
    },
    hero: {
      title: 'Autoteile Flott – We find the right part for your vehicle.',
      subtitle: 'Professional consulting, fast delivery, 100% perfect fit.',
      cta: 'Contact us on WhatsApp'
    },
    categories: {
      title: 'Our Auto Parts Categories',
      subtitle: 'Click on a category for more information',
      readMore: 'Read More',
      callNow: 'WhatsApp Message',
      showMore: 'Show More',
      showAll: 'Show All',
      items: [
        {
          id: 'brakes',
          name: 'Brakes',
          description: 'We supply high-quality brake components for all vehicle types – brake discs, brake pads, and complete brake systems. Our experts will advise you on which parts are perfect for your vehicle.',
          image: 'https://images.unsplash.com/photo-1613214150384-14921ff659b2'
        },
        {
          id: 'filters',
          name: 'Oil and Filters',
          description: 'Air filters, oil filters, fuel filters – we have the right filters for optimal engine performance. Let us advise you on which filter suits your maintenance interval.',
          image: 'https://images.unsplash.com/photo-1588294020274-1e23a4815b72'
        },
        {
          id: 'chassis',
          name: 'Chassis',
          description: 'Shock absorbers, springs, control arms, and other chassis components in tested quality. We ensure you get the right parts for safe driving.',
          image: 'https://images.unsplash.com/photo-1610876126529-fb3aa7e9abc1'
        },
        {
          id: 'electrical',
          name: 'Electrical',
          description: 'Batteries, starters, alternators, and electrical components – expert advice for all electrical auto parts. We find the right solution for your vehicle.',
          image: 'https://images.unsplash.com/photo-1640018578914-abe1d592ef50'
        },
        {
          id: 'lighting',
          name: 'Lighting',
          description: 'Headlights, bulbs, taillights – for optimal visibility and safety day and night. LED, Xenon or Halogen – we have the right lighting for your vehicle.',
          image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f'
        },
        {
          id: 'exhaust',
          name: 'Exhaust',
          description: 'Mufflers, catalytic converters, particulate filters and exhaust pipes – for clean emissions and optimal performance. Original or sports exhaust, we advise you competently.',
          image: 'https://images.unsplash.com/photo-1556783151-c6d5e7d296bb'
        },
        {
          id: 'clutch',
          name: 'Clutch',
          description: 'Clutch kits, dual-mass flywheels, release bearings – for smooth gear changes and long service life. We find the right clutch kit for your vehicle.',
          image: 'https://images.unsplash.com/photo-1603925246538-193f96ec9acd'
        },
        {
          id: 'engine',
          name: 'Engine',
          description: 'Cylinder head gaskets, timing belts, timing chains, water pumps – for a reliable engine. High-quality components in OEM quality.',
          image: 'https://images.unsplash.com/photo-1552656967-7a0991a13906'
        },
        {
          id: 'body',
          name: 'Body',
          description: 'Side mirrors, door handles, bumpers, fenders – for perfect appearance and functionality. Original and aftermarket parts in tested quality.',
          image: 'https://images.unsplash.com/photo-1661501316011-607a6871ecce'
        },
        {
          id: 'interior',
          name: 'Interior',
          description: 'Seat covers, steering wheels, trim panels, floor mats – for comfort and well-being. We have the right interior parts for your vehicle.',
          image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d'
        },
        {
          id: 'climate',
          name: 'Climate & Heating',
          description: 'AC compressors, condensers, heater blowers – for comfortable temperatures in any season. Professional advice for your climate system.',
          image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399'
        },
        {
          id: 'others',
          name: 'Others',
          description: 'Wiper blades, tires, trailer hitches and much more. Everything you need for your vehicle – we have it or we get it for you.',
          image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3'
        }
      ]
    },
    about: {
      title: 'About Us',
      text1: 'Autoteile Flott stands for personal consulting and expertise from years of experience. We help you find the exactly matching auto part – guaranteed. Instead of risky online orders, you receive verified quality, individual consulting, and the security that everything fits.',
      text2: 'Within 24 hours, your ordered part is ready for pickup – reliable and uncomplicated.'
    },
    contact: {
      title: 'Get Consultation Now',
      subtitle: 'Message us on WhatsApp and we will find the right part for your vehicle.',
      email: companyInfo.email,
      cta: 'Send WhatsApp Message',
      whatsappMessage: 'Hello, I am interested in auto parts and would like some advice.',
      location: `${companyInfo.address.street}, ${companyInfo.address.zipCity}`
    },
    footer: {
      tagline: '© 2025 Autoteile Flott. All rights reserved.',
      links: ['Imprint', 'Privacy', 'Terms']
    }
  },
  hu: {
    nav: {
      start: 'Kezdőlap',
      categories: 'Kategóriák',
      about: 'Rólunk',
      contact: 'Kapcsolat'
    },
    hero: {
      title: 'Autoteile Flott – Megtaláljuk a megfelelő alkatrészt járműve számára.',
      subtitle: 'Szakmai tanácsadás, gyors szállítás, 100%-os pontosság.',
      cta: 'WhatsApp üzenet küldése'
    },
    categories: {
      title: 'Autóalkatrész Kategóriáink',
      subtitle: 'Kattintson egy kategóriára további információkért',
      readMore: 'Tovább olvasom',
      callNow: 'WhatsApp üzenet',
      showMore: 'Továbbiak megjelenítése',
      showAll: 'Összes megjelenítése',
      items: categoriesHU
    },
    about: {
      title: 'Rólunk',
      text1: 'Az Autoteile Flott a személyes tanácsadást és az évek tapasztalatából származó szakértelmet képviseli.',
      text2: '24 órán belül a megrendelt alkatrész átvehető – megbízhatóan és bonyolultság nélkül.'
    },
    contact: {
      title: 'Kérjen tanácsadást most',
      subtitle: 'Írjon nekünk WhatsAppon, és megtaláljuk a megfelelő alkatrészt járműve számára.',
      email: companyInfo.email,
      cta: 'WhatsApp üzenet küldése',
      whatsappMessage: 'Szia, autóalkatrészek iránt érdeklődöm és szeretnék tanácsot kérni.',
      location: `${companyInfo.address.street}, ${companyInfo.address.zipCity}`
    },
    footer: {
      tagline: '© 2025 Autoteile Flott. Minden jog fenntartva.',
      links: ['Impresszum', 'Adatvédelem', 'ÁSZF']
    }
  },
  pl: {
    nav: {
      start: 'Start',
      categories: 'Kategorie',
      about: 'O nas',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Autoteile Flott – Znajdziemy odpowiednią część do Twojego pojazdu.',
      subtitle: 'Profesjonalne doradztwo, szybka dostawa, 100% dopasowanie.',
      cta: 'Napisz na WhatsApp'
    },
    categories: {
      title: 'Nasze Kategorie Części Samochodowych',
      subtitle: 'Kliknij kategorię, aby uzyskać więcej informacji',
      readMore: 'Czytaj więcej',
      callNow: 'Wiadomość WhatsApp',
      showMore: 'Pokaż więcej',
      showAll: 'Pokaż wszystkie',
      items: categoriesPL
    },
    about: {
      title: 'O nas',
      text1: 'Autoteile Flott oznacza osobiste doradztwo i wiedzę fachową z wieloletniego doświadczenia.',
      text2: 'W ciągu 24 godzin zamówiona część jest gotowa do odbioru – niezawodnie i bez komplikacji.'
    },
    contact: {
      title: 'Uzyskaj poradę teraz',
      subtitle: 'Napisz do nas na WhatsApp, a znajdziemy odpowiednią część do Twojego pojazdu.',
      email: companyInfo.email,
      cta: 'Wyślij wiadomość WhatsApp',
      whatsappMessage: 'Cześć, interesuję się częściami samochodowymi i chciałbym uzyskać poradę.',
      location: `${companyInfo.address.street}, ${companyInfo.address.zipCity}`
    },
    footer: {
      tagline: '© 2025 Autoteile Flott. Wszelkie prawa zastrzeżone.',
      links: ['Impressum', 'Prywatność', 'Regulamin']
    }
  }
};

export const heroImage = 'https://images.unsplash.com/photo-1718824331840-399943ff5c1e';
export { companyInfo, categoryDetails };
