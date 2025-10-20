import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AGB = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 sm:p-12">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Startseite
        </button>

        <h1 className="text-3xl font-bold text-slate-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Geltungsbereich</h2>
            <p className="text-slate-700">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen AUTOTEILE FLOTT (nachfolgend "Anbieter") und seinen Kunden (nachfolgend "Kunde").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Vertragsschluss</h2>
            <p className="text-slate-700">
              Der Vertrag kommt durch telefonische Bestellung oder persönliche Absprache zustande. Die Darstellung der Produkte stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Bestellung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Preise und Zahlung</h2>
            <p className="text-slate-700">
              Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt bei Abholung der bestellten Teile in bar oder nach Vereinbarung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Lieferung und Abholung</h2>
            <p className="text-slate-700">
              Die bestellten Autoteile sind in der Regel innerhalb von 24 Stunden abholbereit. Der Kunde wird über die Abholbereitschaft informiert. Eine Lieferung kann nach Absprache erfolgen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Gewährleistung</h2>
            <p className="text-slate-700">
              Es gelten die gesetzlichen Gewährleistungsbestimmungen. Der Kunde hat die Ware unverzüglich nach Erhalt auf Vollständigkeit und Mängel zu überprüfen. Mängel sind unvezüglich anzuzeigen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Haftung</h2>
            <p className="text-slate-700">
              Der Anbieter haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit sowie bei der Verletzung wesentlicher Vertragspflichten. Die Haftung ist auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Datenschutz</h2>
            <p className="text-slate-700">
              Der Anbieter verpflichtet sich, die datenschutzrechtlichen Bestimmungen einzuhalten. Personenbezogene Daten werden nur im Rahmen der Auftragsabwicklung erhoben und verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Schlussbestimmungen</h2>
            <p className="text-slate-700">
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AGB;
