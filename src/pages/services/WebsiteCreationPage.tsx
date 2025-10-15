import {
  ArrowRight,
  BarChart,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Code,
  Lightbulb,
  LineChart,
  Palette,
  Phone,
  Search,
  Shield,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import FAQSchema from "../../components/FAQSchema";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SEOHead from "../../components/SEOHead";
import ServiceSchema from "../../components/ServiceSchema";

const WebsiteCreationPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hero stats
  const heroStats = [
    { label: "Średnia ocena", value: "4.9/5", icon: <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" /> },
    { label: "Zrealizowanych projektów", value: "150+", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
    { label: "Średni wzrost konwersji", value: "+280%", icon: <TrendingUp className="h-5 w-5 text-orange-500" /> },
  ];

  // Problems & Solutions
  const problems = [
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      problem: "Strona nie przynosi klientów",
      solution: "Tworzymy strony, które zachęcają odwiedzających do kontaktu i zakupu"
    },
    {
      icon: <Search className="h-8 w-8 text-red-500" />,
      problem: "Nikt nie znajduje Twojej firmy w Google",
      solution: "Dbamy o to, żeby Twoja strona była widoczna dla potencjalnych klientów"
    },
    {
      icon: <Zap className="h-8 w-8 text-red-500" />,
      problem: "Strona wolno się ładuje i odstrasza użytkowników",
      solution: "Strona ładuje się błyskawicznie - nawet na słabszym łączu i telefonie"
    },
    {
      icon: <BarChart className="h-8 w-8 text-red-500" />,
      problem: "Reklamy Google nie przynoszą efektów",
      solution: "Przygotowujemy strony pod kampanie, żeby każda złotówka się liczyła"
    },
  ];

  // Solutions features
  const solutions = [
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Strona, która skutecznie sprzedaje",
      description: "Każdy przycisk i formularz jest zaprojektowany tak, żeby odwiedzający łatwo się z Tobą skontaktował"
    },
    {
      icon: <Search className="h-8 w-8 text-orange-500" />,
      title: "Widoczność w Google i wyszukiwarkach AI",
      description: "Twoja strona będzie odpowiadać na pytania klientów - zarówno w Google, jak i w ChatGPT czy innych asystentach AI"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Błyskawiczna szybkość na każdym urządzeniu",
      description: "Strona ładuje się natychmiastowo - niezależnie czy klient wchodzi z telefonu, tabletu czy komputera"
    },
    {
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
      title: "Gotowa na reklamy Google i Meta",
      description: "Wiemy dokładnie, które reklamy przynoszą klientów - śledzimy każde kliknięcie i telefon"
    },
  ];

  // Offer scope
  const offerScope = [
    {
      category: "Typy stron",
      items: ["Strony sprzedażowe jednego produktu", "Strony firmowe wizytówki", "Strony typu one-page", "Strony z blogiem i aktualnościami"]
    },
    {
      category: "Sklepy internetowe",
      items: ["Sklepy z płatnościami online", "Połączenie z systemami płatności (PayU, Przelewy24)", "Integracja z magazynem i systemami firmowymi", "Sprzedaż na marketplace"]
    },
    {
      category: "Widoczność w Google i AI",
      items: ["Strategia słów kluczowych", "Przygotowanie pod wyszukiwarki AI", "Optymalizacja dla lokalnych firm", "Informacje o firmie czytelne dla Google"]
    },
    {
      category: "Projekt i treści",
      items: ["Nowoczesny design dopasowany do Twojej marki", "Profesjonalne teksty zachęcające do zakupu", "Strona działa idealnie na telefonach", "Testy różnych wersji przycisków i formularzy"]
    },
    {
      category: "Szybkość",
      items: ["Strona ładuje się błyskawicznie", "Zdjęcia w najnowszych formatach", "Szybkie serwery", "Priorytet dla wersji mobilnej"]
    },
    {
      category: "Mierzenie efektów",
      items: ["Google Analytics i Search Console", "Kody śledzące dla reklam", "Nagrania sesji użytkowników", "Śledzenie połączeń telefonicznych"]
    },
    {
      category: "Opieka po wdrożeniu",
      items: ["Instrukcje i szkolenie jak zarządzać stroną", "Wsparcie techniczne", "Regularne aktualizacje i kopie zapasowe", "Gwarancja poprawnego działania"]
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: "Poznajemy Twój biznes",
      description: "Sprawdzamy czego potrzebują Twoi klienci, co robią konkurenci i jak najlepiej zaprezentować Twoją ofertę",
      duration: "1 tydzień",
      deliverables: ["Dokument z ustaleniami", "Analiza konkurencji", "Plan działania"]
    },
    {
      number: 2,
      icon: <Palette className="h-8 w-8 text-orange-500" />,
      title: "Projektujemy i piszemy treści",
      description: "Tworzymy szkice strony, nowoczesny design i profesjonalne teksty, które zachęcają do kontaktu",
      duration: "1-2 tygodnie",
      deliverables: ["Szkice układu strony", "Projekt graficzny", "Gotowe teksty"]
    },
    {
      number: 3,
      icon: <Code className="h-8 w-8 text-orange-500" />,
      title: "Tworzymy stronę",
      description: "Budujemy stronę, łączymy ją z potrzebnymi systemami i dbamy o to, żeby Google ją polubił",
      duration: "2-3 tygodnie",
      deliverables: ["Działająca strona", "Połączenia z systemami", "Przygotowanie pod Google"]
    },
    {
      number: 4,
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
      title: "Testujemy i uruchamiamy",
      description: "Sprawdzamy czy wszystko działa jak należy, testujemy szybkość i bezpieczeństwo, po czym publikujemy stronę",
      duration: "1 tydzień",
      deliverables: ["Raport z testów", "Opublikowana strona", "Instrukcja obsługi"]
    },
    {
      number: 5,
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Pomagamy rosnąć",
      description: "Przez 3 miesiące pomagamy ulepszyć wyniki, szkolimy z obsługi strony i regularnie raportujemy postępy",
      duration: "3 miesiące",
      deliverables: ["Co-miesięczne raporty", "Pomoc techniczna", "Sugestie ulepszeń"]
    },
  ];

  // Case studies
  const caseStudies = [
    {
      company: "TechStart Solutions",
      industry: "IT",
      problem: "Strona przynosiła tylko 2-3 zapytania miesięcznie",
      solution: "Przeprojektowaliśmy stronę z myślą o klientach, przetestowaliśmy różne wersje i poprawiliśmy widoczność w Google",
      results: [
        { metric: "Wzrost zapytań", value: "+340%", icon: <TrendingUp /> },
        { metric: "Zapytania miesięcznie", value: "8-12", icon: <Target /> },
        { metric: "Szybkość ładowania", value: "1.2s", icon: <Zap /> },
        { metric: "Pozycje w Google", value: "TOP 3", icon: <Search /> },
      ]
    },
    {
      company: "EcoGreen Consulting",
      industry: "Doradztwo",
      problem: "Reklamy Google kosztowały dużo a nie przynosiły klientów",
      solution: "Stworzyliśmy specjalne strony pod reklamy, dokładnie śledziliśmy efekty i uprościliśmy proces kontaktu",
      results: [
        { metric: "Zwrot z reklam", value: "+420%", icon: <LineChart /> },
        { metric: "Koszt pozyskania klienta", value: "-65%", icon: <TrendingUp /> },
        { metric: "Odsetek kontaktów", value: "12.8%", icon: <Target /> },
        { metric: "Wzrost odwiedzin z Google", value: "+280%", icon: <Search /> },
      ]
    },
    {
      company: "LuxuryHome Design",
      industry: "Sklep online",
      problem: "Strona ładowała się strasznie wolno, klienci uciekali zanim cokolwiek zobaczyli",
      solution: "Przebudowaliśmy stronę od podstaw, maksymalnie przyspieszyliśmy i zadbaliśmy o wygodę zakupów na telefonie",
      results: [
        { metric: "Szybkość strony", value: "-78%", icon: <Zap /> },
        { metric: "Odsetek odrzuceń", value: "-45%", icon: <Users /> },
        { metric: "Średnia wartość koszyka", value: "+85%", icon: <TrendingUp /> },
        { metric: "Zakupy z telefonu", value: "+195%", icon: <Smartphone /> },
      ]
    },
  ];

  // Packages - Simplified
  const packages = [
    {
      name: "START",
      price: "od 5 000 zł",
      description: "Dla małych firm i startupów",
      recommended: false,
      features: [
        "Do 5 podstron",
        "Responsywny design",
        "Podstawowe SEO",
        "Formularz kontaktowy",
      ],
      timeframe: "2-3 tygodnie",
      sla: "Odpowiedź w 48h"
    },
    {
      name: "BIZNES",
      price: "od 10 000 zł",
      description: "Dla rozwijających się firm",
      recommended: true,
      features: [
        "Do 15 podstron",
        "Zaawansowane SEO",
        "Integracje (CRM, analityka)",
        "Panel zarządzania treścią",
        "3 miesiące wsparcia gratis",
      ],
      timeframe: "4-6 tygodni",
      sla: "Odpowiedź w 24h"
    },
    {
      name: "E-COMMERCE",
      price: "od 18 000 zł",
      description: "Dla sklepów internetowych",
      recommended: false,
      features: [
        "Pełna funkcjonalność sklepu",
        "Płatności online",
        "Integracja z kurierami",
        "SEO dla produktów",
        "6 miesięcy wsparcia gratis",
      ],
      timeframe: "6-10 tygodni",
      sla: "Odpowiedź w 12h"
    },
  ];

  // Add-ons - Hidden but kept for future use
  // const addOns = [
  //   { name: "Profesjonalne artykuły na blog", price: "500-1500 zł/artykuł" },
  //   { name: "Sesja zdjęciowa/filmowa", price: "2000-5000 zł" },
  //   { name: "Automatyzacje i łączenie systemów", price: "1500-3000 zł" },
  //   { name: "Dodatkowe wersje językowe", price: "2000-4000 zł/język" },
  //   { name: "Dedykowane integracje", price: "3000-8000 zł" },
  //   { name: "Materiały do pobrania dla klientów (PDF)", price: "1000-2500 zł" },
  // ];

  // Social proof - clients
  const clients = [
    { name: "Contenty", logo: "/images/clients/contenty.webp" },
    { name: "GK", logo: "/images/clients/gk.webp" },
    { name: "Glowup", logo: "/images/clients/glowup.webp" },
    { name: "MK Helicopters", logo: "/images/clients/mkhelicopters.webp" },
    { name: "Welldone", logo: "/images/clients/welldone.webp" },
    { name: "INP", logo: "/images/clients/inp.svg" },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Anna Kowalska",
      company: "TechStart Solutions",
      role: "Właścicielka",
      text: "WebDKW stworzyli nam nie tylko ładną stronę, ale przede wszystkim narzędzie do pozyskiwania klientów. Mamy teraz 3 razy więcej zapytań. Inwestycja zwróciła się w 4 miesiące.",
      rating: 5,
      metric: "+340% zapytań"
    },
    {
      name: "Tomasz Wiśniewski",
      company: "EcoGreen Consulting",
      role: "Założyciel",
      text: "Po uruchomieniu nowej strony ilość zapytań wzrosła o 280%. Najważniejsze, że to klienci, którzy naprawdę chcą z nami współpracować i mają na to budżet.",
      rating: 5,
      metric: "+280% zapytań"
    },
    {
      name: "Katarzyna Nowak",
      company: "LuxuryHome Design",
      role: "Dyrektor Marketingu",
      text: "Kamil to prawdziwy partner w biznesie. Jego rady i wiedza pomogły nam zwiększyć średnią wartość koszyka o 85%. Polecam każdemu, kto myśli o rozwoju w internecie.",
      rating: 5,
      metric: "+85% wartość koszyka"
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "Ile kosztuje strona internetowa?",
      answer: "Cena zależy od tego, czego potrzebujesz. Prosta strona sprzedażowa to 5-8 tys. zł. Pełna strona firmowa z blogiem i widocznością w Google to 10-18 tys. zł. Sklep internetowy to 18-35 tys. zł. Dokładną cenę ustalimy po krótkiej rozmowie, w której poznamy Twoje potrzeby."
    },
    {
      question: "Jak długo trzeba czekać na gotową stronę?",
      answer: "Prosta strona: 2-3 tygodnie. Strona firmowa: 4-6 tygodni. Sklep online: 6-10 tygodni. To czas od rozmowy o Twoich potrzebach, przez projekt i tworzenie, aż po uruchomienie. Dokładny termin ustalimy razem."
    },
    {
      question: "Co jeśli coś nie będzie działać?",
      answer: "Wszystko jest objęte gwarancją zgodnie z umową. Odpowiadamy na zgłoszenia w 12-48 godzin (w zależności od pakietu). Naprawiamy wszystkie błędy bezpłatnie. Strona, kod i wszystkie konta są w 100% Twoje. Robimy codzienne kopie zapasowe. Po uruchomieniu pomagamy przez 1-6 miesięcy."
    },
    {
      question: "WordPress czy dedykowana strona - co lepsze?",
      answer: "WordPress to szybsze wdrożenie, niższy koszt i łatwa edycja treści - świetny dla większości firm i blogów. Dedykowana strona (bez WordPress) to maksymalna szybkość i dowolne funkcje - idealny dla sklepów i bardziej złożonych projektów. Doradzimy co będzie najlepsze dla Ciebie."
    },
    {
      question: "Czy będę mógł sam zmieniać teksty na stronie?",
      answer: "Tak! Pokażemy Ci jak edytować teksty, dodawać zdjęcia i publikować artykuły. To jest bardzo proste i nie wymaga żadnej wiedzy technicznej. Dostaniesz też filmy instruktażowe i zawsze możesz zapytać nas o pomoc."
    },
    {
      question: "Czy możecie połączyć stronę z moimi systemami?",
      answer: "Tak, łączymy strony z najpopularniejszymi systemami: CRM (np. HubSpot, Salesforce), systemami firmowymi, płatnościami online (PayU, Przelewy24, Stripe), emailingiem (Mailchimp, GetResponse), Allegro, Amazon i wieloma innymi. Powiemy Ci co jest możliwe w Twoim przypadku."
    },
    {
      question: "Co się dzieje po uruchomieniu strony?",
      answer: "Przez określony czas (1-6 miesięcy w zależności od pakietu) pomagamy i poprawiamy wszystko co trzeba. Aktualizujemy zabezpieczenia, robimy kopie zapasowe, monitorujemy czy strona działa, wysyłamy raporty z wyników i radzimy jak poprawić efekty."
    },
    {
      question: "Czy strona będzie działać z reklamami Google?",
      answer: "Tak! Przygotowujemy specjalne strony pod reklamy Google i Facebook. Dodajemy kody śledzące, dzięki którym będziesz wiedział które reklamy przynoszą klientów. Śledzimy też telefony z reklam. Testujemy różne wersje, żeby reklamy jak najlepiej działały."
    },
  ];

  // Team
  const team = {
    name: "Kamil Krukowski",
    role: "Założyciel i główny specjalista",
    bio: "Ponad 10 lat doświadczenia w tworzeniu stron i marketingu internetowym. Pomagam firmom być widocznymi w Google, w ChatGPT i innych narzędziach AI. Tworzę strony, które nie tylko ładnie wyglądają, ale przede wszystkim przynoszą klientów.",
    linkedin: "https://www.linkedin.com/in/kamil-krukowski",
    image: "/images/Kamil-Krukowski-small.webp"
  };

  // NAP data
  const nap = {
    company: "WebDKW - DKW Group",
    phone: "+48 881 046 689",
    email: "contact.dkwgroup@gmail.com",
    address: "Warszawa, Polska",
    coverage: "Cała Polska (zdalnie)",
    hours: "Pn-Pt: 9:00-18:00"
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <SEOHead
          title="Tworzenie Stron Internetowych - Strony, Które Sprzedają | WebDKW"
          description="Projektujemy strony, które sprzedają. Szybkie, responsywne, zoptymalizowane pod SEO/GEO/AEO. WordPress, custom, e-commerce. Gwarancje jakości, SLA, transparentne ceny. Umów konsultację 15 min."
          keywords="tworzenie stron internetowych, strona firmowa, landing page, sklep online, e-commerce, SEO, GEO, AEO, WordPress, headless, UX/UI, Core Web Vitals, Google Ads"
          url="https://webdkw.net/uslugi/tworzenie-stron"
        />
        
        <ServiceSchema
          name="Tworzenie Stron Internetowych"
          description="Profesjonalne tworzenie stron internetowych, landing pages i sklepów online. Szybkie, responsywne, zoptymalizowane pod SEO/GEO/AEO i dane strukturalne."
          provider="WebDKW"
          areaServed="Polska"
          url="https://webdkw.net/uslugi/tworzenie-stron"
        />

        <FAQSchema items={faqs} />

        <Header />

        <main className="pt-16">
          {/* HERO Section */}
          <section className="relative bg-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Projektujemy strony, które{" "}
                  <span className="text-primary-500">sprzedają</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Szybkie, widoczne w Google i gotowe na AI. WordPress, custom, e‑commerce z gwarancjami jakości i SLA.
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
                  <Link
                    to="/kontakt"
                    className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Umów konsultację 15 min</span>
                  </Link>
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

                {/* Client logos - Horizontal Scroll */}
                <div className="mt-12">
                  <p className="text-sm text-gray-500 mb-6 uppercase tracking-wide">Zaufali nam</p>
                  <div className="overflow-x-auto">
                    <div className="flex items-center justify-start gap-12 min-w-max px-4 opacity-60">
                      {clients.map((client, index) => (
                        <img
                          key={index}
                          src={client.logo}
                          alt={client.name}
                          className="h-8 md:h-10 object-contain filter brightness-0 flex-shrink-0"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problems & Solutions Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Znasz te problemy?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  90% MŚP w Polsce zmaga się z tymi wyzwaniami. Mamy sprawdzone rozwiązania.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                {problems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-4 border-red-500 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.problem}
                        </h3>
                        <div className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-600">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Solutions grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-4">{solution.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Offer & Scope Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Kompleksowa oferta i zakres
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Od strategii i projektu, przez wdrożenie i integracje, po analitykę i wsparcie
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {offerScope.map((scope, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-primary-500" />
                      </div>
                      {scope.category}
                    </h3>
                    <ul className="space-y-2">
                      {scope.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Sprawdzony proces 5 kroków
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Transparentny harmonogram z gwarancjami jakości i SLA
                </p>
              </div>

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      {/* Number */}
                      <div className="flex-shrink-0 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          {step.icon}
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                              {step.title}
                            </h3>
                            <p className="text-primary-500 font-semibold">{step.duration}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/proces-realizacji"
                  className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Zobacz szczegółowy opis procesu</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Sprawdzone rezultaty
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Konkretne wyniki z prawdziwych projektów
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="bg-primary-50 p-6 border-b border-gray-200">
                      <div className="text-sm text-primary-500 font-semibold mb-1">
                        {study.industry}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {study.company}
                      </h3>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-red-500 mb-2 uppercase">
                          Problem
                        </h4>
                        <p className="text-gray-600 text-sm">{study.problem}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-primary-500 mb-2 uppercase">
                          Rozwiązanie
                        </h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase">
                          Wyniki
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="flex justify-center mb-2 text-primary-500">
                                {result.icon}
                              </div>
                              <div className="text-2xl font-bold text-gray-900 mb-1">
                                {result.value}
                              </div>
                              <div className="text-xs text-gray-600">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Zobacz wszystkie case studies</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Packages Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Pakiety i cennik
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Transparentne widełki cenowe. Finalna wycena po konsultacji 15 min.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                      pkg.recommended
                        ? "border-primary-500 transform lg:scale-105"
                        : "border-gray-200"
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          NAJPOPULARNIEJSZY
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {pkg.name}
                        </h3>
                        <div className="text-3xl font-bold text-primary-500 mb-4">
                          {pkg.price}
                        </div>
                        <p className="text-gray-600 text-sm">{pkg.description}</p>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-3 mb-6 text-center">
                        <p className="text-sm text-gray-600">
                          <Clock className="inline h-4 w-4 mr-1" />
                          Czas realizacji: <strong>{pkg.timeframe}</strong>
                        </p>
                        <p className="text-sm text-gray-600">
                          <Shield className="inline h-4 w-4 mr-1" />
                          SLA: <strong>{pkg.sla}</strong>
                        </p>
                      </div>

                      <Link
                        to="/kontakt"
                        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                          pkg.recommended
                            ? "bg-primary-500 text-white hover:bg-primary-600"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        }`}
                      >
                        Zamów wycenę
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add-ons - Hidden */}

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">
                  Potrzebujesz indywidualnej wyceny? Umów bezpłatną konsultację.
                </p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5" />
                  <span>Umów konsultację 15 min</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Opinie klientów
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Sprawdź, co mówią o nas zadowoleni klienci
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-500">
                          {testimonial.metric}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Najczęściej zadawane pytania
                </h2>
                <p className="text-xl text-gray-600">
                  Wszystko, co musisz wiedzieć przed rozpoczęciem współpracy
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
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

              <div className="text-center mt-12 bg-white rounded-lg p-8 shadow-sm">
                <p className="text-gray-900 font-semibold mb-4">
                  Nie znalazłeś odpowiedzi na swoje pytanie?
                </p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>Umów konsultację 15 min</span>
                </Link>
              </div>
            </div>
          </section>

          {/* About/Team Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  O nas
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Doświadczenie w IT i marketingu. Misja: AI-ready web.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-lg p-8 shadow-lg flex flex-col md:flex-row items-center gap-8">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-32 h-32 rounded-full object-cover shadow-md"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {team.name}
                    </h3>
                    <p className="text-primary-500 font-semibold mb-4">{team.role}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {team.bio}
                    </p>
                    <a
                      href={team.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-500 hover:underline"
                    >
                      <Users className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* NAP data */}
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Dane kontaktowe</h4>
                    <div className="space-y-3 text-gray-600">
                      <p>
                        <strong>Firma:</strong> {nap.company}
                      </p>
                      <p>
                        <strong>Telefon:</strong>{" "}
                        <a href={`tel:${nap.phone}`} className="text-primary-500 hover:underline">
                          {nap.phone}
                        </a>
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${nap.email}`} className="text-primary-500 hover:underline">
                          {nap.email}
                        </a>
                      </p>
                      <p>
                        <strong>Lokalizacja:</strong> {nap.address}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Zasięg działania</h4>
                    <div className="space-y-3 text-gray-600">
                      <p>
                        <strong>Obszar:</strong> {nap.coverage}
                      </p>
                      <p>
                        <strong>Godziny pracy:</strong> {nap.hours}
                      </p>
                      <p className="pt-4">
                        <Link
                          to="/o-nas"
                          className="text-primary-500 hover:underline inline-flex items-center gap-2"
                        >
                          <span>Dowiedz się więcej o nas</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Local Pages - Minimalist Linking */}
          <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Tworzenie stron internetowych w Twoim regionie:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <Link
                    to="/katowice-tworzenie-stron"
                    className="text-primary-500 hover:text-primary-600 font-semibold hover:underline transition-colors"
                  >
                    Katowice
                  </Link>
                  <span className="text-gray-300">•</span>
                  <Link
                    to="/chorzow-tworzenie-stron"
                    className="text-primary-500 hover:text-primary-600 font-semibold hover:underline transition-colors"
                  >
                    Chorzów
                  </Link>
                  <span className="text-gray-300">•</span>
                  <Link
                    to="/gliwice-tworzenie-stron"
                    className="text-primary-500 hover:text-primary-600 font-semibold hover:underline transition-colors"
                  >
                    Gliwice
                  </Link>
                  <span className="text-gray-300">•</span>
                  <Link
                    to="/strony-internetowe-seo-slask"
                    className="text-primary-500 hover:text-primary-600 font-semibold hover:underline transition-colors"
                  >
                    Cały Śląsk
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-primary-500 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Gotowy na stronę, która sprzedaje?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Umów bezpłatną konsultację 15 min i otrzymaj indywidualną wycenę w 24-48h
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/kontakt"
                  className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span>Zamów wycenę teraz</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/kontakt"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Zarezerwuj termin</span>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default WebsiteCreationPage;