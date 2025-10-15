import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Star,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEOHead from "../components/SEOHead";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import FAQSchema from "../components/FAQSchema";
import ServiceSchema from "../components/ServiceSchema";

const KatowiceWebsitesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hero stats
  const heroStats = [
    { label: "Średnia ocena", value: "4.9/5", icon: <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" /> },
    { label: "Projektów w Katowicach", value: "50+", icon: <MapPin className="h-5 w-5 text-primary-500" /> },
    { label: "Średni wzrost zapytań", value: "+280%", icon: <TrendingUp className="h-5 w-5 text-green-500" /> },
  ];

  // Local case studies
  const caseStudies = [
    {
      company: "Sklep z elektroniką - Katowice",
      problem: "Mała widoczność w Google Maps, brak zapytań online",
      solution: "Strona z lokalnym SEO, opinie Google, optymalizacja profilu GMB",
      result: "+340% zapytań z Google Maps"
    },
    {
      company: "Firma transportowa - Śląsk",
      problem: "Strona wolno się ładowała, wysokie koszty reklam",
      solution: "Szybka strona landing page, integracja z Google Ads",
      result: "-65% koszt pozyskania klienta"
    },
    {
      company: "Studio fryzjerskie - Katowice Centrum",
      problem: "Brak możliwości rezerwacji online",
      solution: "Strona z kalendarzem rezerwacji i Google Maps",
      result: "+195% rezerwacji online"
    },
  ];

  // Packages - simplified
  const packages = [
    {
      name: "START",
      price: "od 3 000 zł",
      description: "Dla małych firm w Katowicach",
      features: [
        "Strona wizytówka (do 5 podstron)",
        "Responsywny design",
        "Lokalne SEO (Katowice)",
        "Formularz kontaktowy",
        "Google Maps",
      ],
      timeframe: "2-3 tygodnie"
    },
    {
      name: "BIZNES",
      price: "od 6 000 zł",
      recommended: true,
      description: "Najpopularniejszy w regionie",
      features: [
        "Pełna strona firmowa (do 15 podstron)",
        "Zaawansowane lokalne SEO",
        "Integracja z Google Business Profile",
        "Panel do edycji treści",
        "3 miesiące wsparcia gratis",
      ],
      timeframe: "4-6 tygodni"
    },
    {
      name: "E-COMMERCE",
      price: "od 10 000 zł",
      description: "Dla sklepów online",
      features: [
        "Sklep internetowy",
        "Płatności online (PayU, Przelewy24)",
        "Integracja z kurierami",
        "Lokalne SEO dla produktów",
        "6 miesięcy wsparcia gratis",
      ],
      timeframe: "6-10 tygodni"
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "Ile kosztuje strona internetowa w Katowicach?",
      answer: "Strona wizytówka od 3 000 zł, strona firmowa od 6 000 zł, sklep online od 10 000 zł. Dokładną cenę ustalimy po krótkiej rozmowie o Twoich potrzebach."
    },
    {
      question: "Jak długo trzeba czekać na stronę?",
      answer: "Prosta strona: 2-3 tygodnie, strona firmowa: 4-6 tygodni, sklep: 6-10 tygodni. Działamy szybko i transparentnie."
    },
    {
      question: "Czy strona będzie widoczna w Google w Katowicach?",
      answer: "Tak! Optymalizujemy każdą stronę pod lokalne wyszukiwania. Dodajemy Twoją firmę do Google Maps, dbamy o opinie i lokalne SEO."
    },
    {
      question: "Czy mogę sam edytować treści?",
      answer: "Oczywiście! Pokazujemy jak dodawać teksty i zdjęcia. To bardzo proste, nie potrzebujesz wiedzy technicznej."
    },
    {
      question: "Co po uruchomieniu strony?",
      answer: "Przez 1-6 miesięcy (zależnie od pakietu) pomagamy, poprawiamy, monitorujemy i raportujemy wyniki. Jesteśmy z Tobą na każdym kroku."
    },
  ];

  // NAP data
  const nap = {
    company: "WebDKW - Tworzenie Stron Katowice",
    phone: "+48 881 046 689",
    email: "contact.dkwgroup@gmail.com",
    address: "Katowice, Śląskie",
    city: "Katowice",
    region: "Śląskie",
    postalCode: "40-001",
    country: "Polska",
    hours: "Pn-Pt: 9:00-18:00"
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <SEOHead
          title="Tworzenie Stron Internetowych Katowice - Strony, Które Sprzedają | WebDKW"
          description="Tworzymy strony internetowe w Katowicach. Szybkie, widoczne w Google i Google Maps. WordPress, sklepy online. Lokalne SEO. Umów konsultację 15 min."
          keywords="tworzenie stron katowice, strona internetowa katowice, sklep internetowy katowice, strony www katowice, SEO katowice, pozycjonowanie katowice"
          url="https://webdkw.net/katowice-tworzenie-stron"
        />
        
        <LocalBusinessSchema
          baseUrl="https://webdkw.net"
        />

        <ServiceSchema
          name="Tworzenie Stron Internetowych Katowice"
          description="Profesjonalne tworzenie stron internetowych, landing pages i sklepów online w Katowicach. Lokalne SEO i optymalizacja pod Google Maps."
          provider="WebDKW"
          areaServed="Katowice, Śląskie"
          url="https://webdkw.net/katowice-tworzenie-stron"
        />

        <FAQSchema items={faqs} />

        <Header />

        <main className="pt-16">
          {/* HERO Section */}
          <section className="relative bg-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>Działamy lokalnie w Katowicach i na Śląsku</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Projektujemy strony, które{" "}
                  <span className="text-primary-500">sprzedają w Katowicach</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Szybkie, widoczne w Google Maps i gotowe na lokalne wyszukiwania. Kompleksowa obsługa od projektu po wsparcie.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link
                    to="/kontakt"
                    className="group w-full sm:w-auto bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <span>Zamów wycenę</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+48881046689"
                    className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+48 881 046 689</span>
                  </a>
                </div>

                {/* Trust signals */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {heroStats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {stat.icon}
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Problems & Solutions - Local */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Problemy firm w Katowicach
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Znamy lokalne wyzwania i mamy sprawdzone rozwiązania
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white border-l-4 border-red-500 rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Nikt nie znajduje firmy w Google Maps
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Większość klientów szuka usług lokalnie przez telefon. Bez widoczności w Google Maps tracisz zlecenia.
                  </p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 font-semibold">Optymalizujemy profil Google Business i lokalnie SEO</p>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Strona nie przynosi zapytań ofertowych
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Masz stronę, ale klienci nie dzwonią ani nie piszą. Brakuje formularzy lub są źle umieszczone.
                  </p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 font-semibold">Projektujemy strony, które prowadzą do kontaktu</p>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Strona wolno się ładuje na telefonie
                  </h3>
                  <p className="text-gray-600 mb-4">
                    70% użytkowników odwiedza strony przez telefon. Wolna strona = utraceni klienci.
                  </p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 font-semibold">Tworzymy błyskawiczne strony mobilne</p>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Reklamy Google nie działają
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Płacisz za reklamy, ale nie wiesz które przynoszą klientów. Wysokie koszty, mało efektów.
                  </p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 font-semibold">Przygotowujemy landing pages i śledzimy konwersje</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies - Local */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Realizacje w Katowicach i regionie
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Sprawdzone wyniki dla lokalnych firm
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {study.company}
                    </h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-red-500 mb-2 uppercase">
                        Problem
                      </h4>
                      <p className="text-gray-600 text-sm">{study.problem}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-primary-500 mb-2 uppercase">
                        Rozwiązanie
                      </h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {study.result}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Packages - Simplified */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Pakiety i Cennik
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Proste pakiety dla firm z Katowic
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`border rounded-2xl p-8 hover:shadow-xl transition-shadow relative ${
                      pkg.recommended
                        ? "border-primary-500 shadow-xl"
                        : "border-gray-200"
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Najpopularniejszy
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <div className="mb-8">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6 text-center">
                      <p className="text-sm text-gray-600">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Czas realizacji: <strong>{pkg.timeframe}</strong>
                      </p>
                    </div>
                    <Link
                      to="/kontakt"
                      className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                        pkg.recommended
                          ? "bg-primary-500 text-white hover:bg-primary-600"
                          : "border-2 border-primary-500 text-primary-500 hover:bg-primary-50"
                      }`}
                    >
                      Zamów wycenę
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Nie wiesz, który pakiet wybrać? Umów bezpłatną konsultację.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/kontakt"
                    className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Zamów wycenę
                  </Link>
                  <a
                    href="tel:+48881046689"
                    className="inline-block border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    Zadzwoń: +48 881 046 689
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Najczęściej zadawane pytania
                </h2>
                <p className="text-xl text-gray-600">
                  Odpowiedzi na pytania firm z Katowic
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <h3 className="text-lg font-bold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section - Local */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Skontaktuj się z nami
                </h2>
                <p className="text-xl text-gray-600">
                  Działamy lokalnie w Katowicach i na całym Śląsku
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Dane kontaktowe</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">Adres</div>
                          <div className="text-gray-600">{nap.address}</div>
                          <div className="text-gray-600">{nap.city}, {nap.region}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">Telefon</div>
                          <a href={`tel:${nap.phone}`} className="text-primary-500 hover:underline">
                            {nap.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">Email</div>
                          <a href={`mailto:${nap.email}`} className="text-primary-500 hover:underline">
                            {nap.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">Godziny pracy</div>
                          <div className="text-gray-600">{nap.hours}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Umów konsultację</h3>
                    <div className="space-y-4">
                      <Link
                        to="/kontakt"
                        className="block text-center bg-primary-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                      >
                        Wypełnij formularz kontaktowy
                      </Link>
                      <a
                        href="tel:+48881046689"
                        className="block text-center border-2 border-primary-500 text-primary-500 px-6 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                      >
                        Zadzwoń: +48 881 046 689
                      </a>
                      <p className="text-sm text-gray-600 text-center">
                        Odpowiadamy w ciągu 24 godzin
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Obsługiwane obszary</h3>
                  <p className="text-gray-600">
                    Katowice, Sosnowiec, Bytom, Gliwice, Zabrze, Ruda Śląska, Tychy, Dąbrowa Górnicza, Chorzów, Jaworzno oraz cały region śląski.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default KatowiceWebsitesPage;
