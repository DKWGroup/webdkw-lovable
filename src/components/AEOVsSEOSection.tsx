import React from "react";

const AEOVsSEOSection: React.FC = () => {
  return (
    <section aria-labelledby="aeo-vs-seo-title" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 id="aeo-vs-seo-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AEO/GEO vs SEO – krótko i konkretnie
          </h2>
          <p className="text-lg text-gray-600">
            SEO to fundament. AEO (Answer Engine Optimization) i GEO to jego nowoczesne rozszerzenie –
            dostosowane do sposobu, w jaki dziś odpowiadają wyszukiwarki i asystenci AI.
            Dzięki niemu nie tylko „pojawiasz się w wynikach”, ale jesteś <strong className="text-gray-800">polecany w odpowiedziach AI</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-gray-50 rounded-xl p-6 h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Najważniejsze różnice w praktyce</h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Zasięg i kontekst:</span> GEO – lokalne odpowiedzi AI (miasto/region, „w pobliżu”);
                AEO – zapytania ogólnopolskie i tematyczne.
              </li>
              <li>
                <span className="font-semibold">Cel optymalizacji:</span> SEO – pozycje w SERP; AEO/GEO – udział w odpowiedziach AI
                (Answer Share), tak by asystent <em>polecał Twoją ofertę</em>.
              </li>
              <li>
                <span className="font-semibold">Sygnały rankingowe:</span> SEO – technikalia, content, linki; AEO/GEO – intencja pytań,
                encje (entity), dane strukturalne, reputacja i opinie (E‑E‑A‑T).
              </li>
              <li>
                <span className="font-semibold">Format treści:</span> SEO – artykuły i landing pages; AEO/GEO – treści Q&A,
                poradniki, streszczenia, cytowalne źródła gotowe do użycia przez AI.
              </li>
              <li>
                <span className="font-semibold">Pomiar efektów:</span> SEO – pozycje i ruch; AEO/GEO – widoczność w AI Overviews,
                Answer Share, zapytania długiego ogona.
              </li>
            </ul>
          </article>

          <aside className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6 h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Najważniejsze: to nie „coś innego” niż SEO</h3>
            <p className="text-gray-700 mb-4">
              AEO/GEO <strong className="text-gray-900">nie zastępuje</strong> SEO – ono je <strong className="text-gray-900">wzmacnia</strong> tam,
              gdzie dziś decyduje AI. Dlatego zaczynamy od solidnych podstaw SEO, a następnie
              rozszerzamy strategię o sygnały, które zwiększają szansę na rekomendacje w odpowiedziach AI.
            </p>
            <p className="text-gray-700">
              Chcesz zobaczyć gotowe checklisty i przykłady?
              {" "}
              <a
                href="https://webdkw.net/blog/seo-ai-jak-zoptymalizowac-strone-pod-aeo-i-zamienic-odpowiedzi-ai-w-realnych-klientow"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-4"
              >
                Przeczytaj nasz przewodnik SEO + AI
              </a>
              .
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AEOVsSEOSection;
