import {
  ArrowRight,
  BarChart,
  Check,
  CheckCircle,
  Clock,
  Code,
  Lightbulb,
  LineChart,
  Minus,
  Palette,
  Phone,
  Plus,
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
      problem: "Brak zapytań ofertowych i sprzedaży",
      solution: "Projektujemy strony pod konwersję z przemyślanymi CTA i ścieżkami użytkownika"
    },
    {
      icon: <Search className="h-8 w-8 text-red-500" />,
      problem: "Niska widoczność w Google",
      solution: "Optymalizacja pod SEO/GEO/AEO z danymi strukturalnymi i planem intencji"
    },
    {
      icon: <Zap className="h-8 w-8 text-red-500" />,
      problem: "Wolna strona i słaba jakość UX",
      solution: "Core Web Vitals <2.5s LCP, mobile-first, dostępność WCAG 2.1 AA"
    },
    {
      icon: <BarChart className="h-8 w-8 text-red-500" />,
      problem: "Brak przygotowania pod kampanie reklamowe",
      solution: "Landing pages z pixel trackingiem, A/B testing i integracją z CRM"
    },
  ];

  // Solutions features
  const solutions = [
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Projektujemy pod konwersję",
      description: "Każdy element strony ma cel - dopracowane CTA, ścieżki użytkownika i optymalizacja pod sprzedaż"
    },
    {
      icon: <Search className="h-8 w-8 text-orange-500" />,
      title: "SEO przyszłości (GEO/AEO)",
      description: "Dane strukturalne schema.org, optymalizacja pod AI (ChatGPT, Gemini) i asystentów głosowych"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Szybkość i mobile-first",
      description: "LCP <2.5s, CLS <0.1, TTFB <0.9s. WebP/AVIF, lazy loading, CDN"
    },
    {
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
      title: "Gotowe pod kampanie",
      description: "Piksele reklamowe, call tracking, mapy ciepła, nagrania sesji, integracja z GA4"
    },
  ];

  // Offer scope
  const offerScope = [
    {
      category: "Typy stron",
      items: ["Landing page sprzedażowe", "Strony firmowe (5-50 podstron)", "Strony onepage", "Strony rozbudowane z blogiem"]
    },
    {
      category: "E-commerce",
      items: ["Sklepy online z integracjami", "Płatności (Stripe, PayU, Przelewy24)", "Magazyny i ERP/CRM", "Marketplace i dropshipping"]
    },
    {
      category: "SEO/GEO/AEO",
      items: ["Plan intencji i strategia", "Dane strukturalne (schema.org)", "Optymalizacja pod AI i głos", "LocalBusiness i NAP"]
    },
    {
      category: "UX/UI i treści",
      items: ["Projekt UX/UI pod konwersję", "Copywriting sprzedażowy", "Responsywność i dostępność", "A/B testing setup"]
    },
    {
      category: "Wydajność",
      items: ["Core Web Vitals", "Optymalizacja obrazów", "CDN i caching", "Mobile-first"]
    },
    {
      category: "Analityka",
      items: ["GA4 i GSC", "Piksele (Google, Meta, LinkedIn)", "Mapy ciepła i nagrania sesji", "Call tracking"]
    },
    {
      category: "Wsparcie",
      items: ["Dokumentacja i szkolenie", "SLA i support", "Aktualizacje i backupy", "Gwarancje jakości"]
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: "Diagnoza i strategia",
      description: "Audyt konkurencji, analiza grupy docelowej, definicja celów biznesowych i strategii konwersji",
      duration: "1 tydzień",
      deliverables: ["Brief projektowy", "Analiza konkurencji", "Plan konwersji"]
    },
    {
      number: 2,
      icon: <Palette className="h-8 w-8 text-orange-500" />,
      title: "UX/UI i treści",
      description: "Wireframes, projekt graficzny zoptymalizowany pod konwersję, copywriting sprzedażowy",
      duration: "1-2 tygodnie",
      deliverables: ["Wireframes", "Design system", "Treści sprzedażowe"]
    },
    {
      number: 3,
      icon: <Code className="h-8 w-8 text-orange-500" />,
      title: "Wdrożenie",
      description: "Kodowanie, integracje, SEO techniczne, dane strukturalne, optymalizacja wydajności",
      duration: "2-3 tygodnie",
      deliverables: ["Działająca strona", "Integracje", "SEO on-page"]
    },
    {
      number: 4,
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
      title: "Testy i uruchomienie",
      description: "Testy funkcjonalności, wydajności, security audit, uruchomienie na produkcji",
      duration: "1 tydzień",
      deliverables: ["Raporty testów", "Live strona", "Dokumentacja"]
    },
    {
      number: 5,
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Wzrost i wsparcie",
      description: "3 miesiące wsparcia, optymalizacja wyników, raportowanie, szkolenie z CMS",
      duration: "3 miesiące",
      deliverables: ["Miesięczne raporty", "Support 24/7", "Optymalizacje"]
    },
  ];

  // Case studies
  const caseStudies = [
    {
      company: "TechStart Solutions",
      industry: "IT",
      problem: "Strona generowała tylko 2-3 zapytania miesięcznie",
      solution: "Przeprojektowanie pod konwersję, A/B testing, optymalizacja SEO",
      results: [
        { metric: "Wzrost konwersji", value: "+340%", icon: <TrendingUp /> },
        { metric: "Zapytania ofertowe", value: "8-12/mies.", icon: <Target /> },
        { metric: "LCP", value: "1.2s", icon: <Zap /> },
        { metric: "Pozycje w Google", value: "TOP 3", icon: <Search /> },
      ]
    },
    {
      company: "EcoGreen Consulting",
      industry: "Consulting",
      problem: "Wysokie koszty kampanii Google Ads bez rezultatów",
      solution: "Dedykowane landing pages, pixel tracking, optymalizacja ścieżek",
      results: [
        { metric: "ROI z Ads", value: "+420%", icon: <LineChart /> },
        { metric: "Koszt leada", value: "-65%", icon: <TrendingUp /> },
        { metric: "Współczynnik konwersji", value: "12.8%", icon: <Target /> },
        { metric: "Ruch organiczny", value: "+280%", icon: <Search /> },
      ]
    },
    {
      company: "LuxuryHome Design",
      industry: "E-commerce",
      problem: "Wolna strona, wysokie bounce rate, niskie pozycje w Google",
      solution: "Rebuild na headless, Core Web Vitals, SEO techniczne, dane strukturalne",
      results: [
        { metric: "Czas ładowania", value: "-78%", icon: <Zap /> },
        { metric: "Bounce rate", value: "-45%", icon: <Users /> },
        { metric: "Średnia wartość zamówienia", value: "+85%", icon: <TrendingUp /> },
        { metric: "Ruch mobilny", value: "+195%", icon: <Smartphone /> },
      ]
    },
  ];

  // Packages
  const packages = [
    {
      name: "START",
      price: "5 000 - 8 000 zł",
      description: "Dla małych firm i freelancerów rozpoczynających działalność online",
      recommended: false,
      features: [
        "Landing page lub onepage (3-5 sekcji)",
        "Responsywny design mobile-first",
        "Podstawowe SEO (meta, sitemap, robots)",
        "Formularz kontaktowy z walidacją",
        "Dane strukturalne (Organization, Service)",
        "GA4 i GSC",
        "Core Web Vitals <2.5s LCP",
        "1 miesiąc wsparcia",
        "Dokumentacja i szkolenie",
      ],
      timeframe: "2-3 tygodnie",
      sla: "48h response time"
    },
    {
      name: "BIZNES",
      price: "10 000 - 18 000 zł",
      description: "Kompleksowa strona firmowa zoptymalizowana pod konwersję i SEO",
      recommended: true,
      features: [
        "Strona firmowa (10-20 podstron)",
        "UX/UI pod konwersję + A/B testing",
        "Zaawansowane SEO/GEO/AEO",
        "Dane strukturalne (FAQ, HowTo, Review, LocalBusiness)",
        "Blog z CMS",
        "Integracja z CRM",
        "Piksele reklamowe + call tracking",
        "Mapy ciepła i nagrania sesji",
        "Core Web Vitals premium",
        "3 miesiące wsparcia + optymalizacje",
        "Content premium (10 artykułów)",
        "Miesięczne raporty",
      ],
      timeframe: "4-6 tygodni",
      sla: "24h response time"
    },
    {
      name: "E-COMMERCE",
      price: "18 000 - 35 000 zł",
      description: "Sklep online z zaawansowanymi integracjami i automatyzacjami",
      recommended: false,
      features: [
        "Sklep online (50-500 produktów)",
        "Zaawansowany UX/UI e-commerce",
        "Integracje płatności (Stripe, PayU, P24)",
        "Integracja z magazynem/ERP/CRM",
        "Marketplace i dropshipping",
        "SEO e-commerce + dane strukturalne (Product, Review)",
        "Automatyzacje (remarketing, abandoned cart)",
        "GA4 Enhanced E-commerce",
        "Headless architecture (opcja)",
        "Core Web Vitals premium",
        "6 miesięcy wsparcia + optymalizacje",
        "Szkolenie zaawansowane",
        "Cotygodniowe raporty",
      ],
      timeframe: "6-10 tygodni",
      sla: "12h response time"
    },
  ];

  // Add-ons
  const addOns = [
    { name: "Content premium (artykuły blog)", price: "500-1500 zł/artykuł" },
    { name: "Sesja foto/wideo", price: "2000-5000 zł" },
    { name: "Automatyzacje (Zapier, Make)", price: "1500-3000 zł" },
    { name: "Dodatkowe języki (tłumaczenie + wdrożenie)", price: "2000-4000 zł/język" },
    { name: "Integracje niestandardowe (API)", price: "3000-8000 zł" },
    { name: "Lead magnet (PDF/checklist/guide)", price: "1000-2500 zł" },
  ];

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
      role: "CEO",
      text: "WebDKW nie tylko stworzyli piękną stronę, ale przede wszystkim narzędzie, które generuje nam 3x więcej leadów. ROI zwrócił się w 4 miesiące.",
      rating: 5,
      metric: "+340% konwersji"
    },
    {
      name: "Tomasz Wiśniewski",
      company: "EcoGreen Consulting",
      role: "Founder",
      text: "Po wdrożeniu SEO nasze zapytania wzrosły o 280%. Najważniejsze, że to jakościowi klienci z odpowiednim budżetem.",
      rating: 5,
      metric: "+280% zapytań"
    },
    {
      name: "Katarzyna Nowak",
      company: "LuxuryHome Design",
      role: "Marketing Director",
      text: "Marcin to prawdziwy partner biznesowy. Jego doradztwo strategiczne pomogło nam podnieść średnią wartość zamówienia o 85%.",
      rating: 5,
      metric: "+85% AOV"
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "Ile kosztuje strona internetowa i od czego zależy cena?",
      answer: "Cena zależy od złożoności projektu, liczby podstron, integracji i funkcjonalności. Pakiet START to 5-8k zł (landing/onepage), BIZNES 10-18k zł (strona firmowa z SEO), E-COMMERCE 18-35k zł (sklep z integracjami). Finalna wycena powstaje po konsultacji 15 min i uzupełnieniu briefu."
    },
    {
      question: "Ile czasu zajmuje realizacja projektu?",
      answer: "START: 2-3 tygodnie, BIZNES: 4-6 tygodni, E-COMMERCE: 6-10 tygodni. Obejmuje to wszystkie etapy od strategii po uruchomienie i testy. Dokładny harmonogram ustalamy na etapie briefu."
    },
    {
      question: "Jakie gwarancje i zabezpieczenia oferujecie?",
      answer: "Gwarancja jakości zgodna z umową, SLA (12-48h response time), poprawki błędów, prawa autorskie i własność kodu, pełna własność kont (hosting, domeny, analityka), backupy codzienne, wsparcie powdrożeniowe (1-6 miesięcy w zależności od pakietu)."
    },
    {
      question: "WordPress vs custom - co wybrać?",
      answer: "WordPress: szybsze wdrożenie, niższy koszt, łatwa edycja treści, idealne dla stron firmowych i blogów. Custom (headless): maksymalna wydajność, dedykowane funkcje, skalowalność, idealne dla e-commerce i platform. Doradzimy najlepsze rozwiązanie po analizie potrzeb."
    },
    {
      question: "Czy mogę samodzielnie zarządzać treścią?",
      answer: "Tak! Każda strona ma intuicyjny CMS (WordPress lub Headless CMS). Przeprowadzamy szkolenie z obsługi, dostarczamy dokumentację wideo i oferujemy support. Możesz edytować teksty, dodawać zdjęcia, publikować artykuły bez znajomości kodu."
    },
    {
      question: "Jakie integracje są możliwe?",
      answer: "CRM (HubSpot, Salesforce, Pipedrive), ERP (Comarch, Subiekt), płatności (Stripe, PayU, Przelewy24, PayPal), email marketing (Mailchimp, GetResponse), automatyzacje (Zapier, Make), marketplace (Allegro, Amazon), magazyny, call tracking, live chat."
    },
    {
      question: "Co obejmuje wsparcie i utrzymanie?",
      answer: "Aktualizacje bezpieczeństwa, backupy codzienne, monitoring uptime, support techniczny zgodny z SLA, poprawki błędów, optymalizacje wydajności, miesięczne raporty (GA4, GSC, wyniki SEO), konsultacje strategiczne."
    },
    {
      question: "Czy strona będzie przygotowana pod Google Ads?",
      answer: "Tak! Implementujemy piksele (Google, Meta, LinkedIn), tworzymy dedykowane landing pages pod kampanie, konfigurujemy konwersje w GA4, dodajemy call tracking, A/B testing i optymalizujemy ścieżki użytkownika pod reklamę płatną."
    },
  ];

  // Team
  const team = {
    name: "Kamil Krukowski",
    role: "Founder & Lead Developer",
    bio: "10+ lat doświadczenia w IT i marketingu. Specjalizacja: SEO/GEO/AEO, UX/UI, performance optimization. Misja: AI-ready web - strony gotowe na przyszłość AI.",
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

                {/* Client logos */}
                <div className="mt-12">
                  <p className="text-sm text-gray-500 mb-6 uppercase tracking-wide">Zaufali nam</p>
                  <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                    {clients.map((client, index) => (
                      <img
                        key={index}
                        src={client.logo}
                        alt={client.name}
                        className="h-8 md:h-10 object-contain filter brightness-0"
                      />
                    ))}
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

              {/* Add-ons */}
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Dodatki opcjonalne
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {addOns.map((addon, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                    >
                      <span className="text-gray-900">{addon.name}</span>
                      <span className="text-primary-500 font-semibold">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>

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
                        <Minus className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-primary-500 flex-shrink-0" />
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