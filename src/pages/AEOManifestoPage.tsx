import { useState } from 'react';
import { ChevronDown, CheckCircle, Star, Shield, Target, BarChart3, Search, Brain, Zap, Phone, Download } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const AEOManifestoPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showExitPopup, setShowExitPopup] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleMouseLeave = () => {
    if (!showExitPopup) {
      setShowExitPopup(true);
    }
  };

  const faqData = [
    {
      question: "Czym dokładnie różni się AEO/GEO od tradycyjnego SEO?",
      answer: "Tradycyjne SEO koncentruje się na rankingu w wynikach wyszukiwania. AEO (Answer Engine Optimization) i GEO (Generative Engine Optimization) optymalizują pod AI Overviews - gdy Google AI odpowiada bezpośrednio na pytania użytkowników. To oznacza, że Twoja firma może być polecana przez AI bez konieczności klikania przez użytkownika."
    },
    {
      question: "Po jakim czasie zobaczę pierwsze rezultaty?",
      answer: "Pierwsze sygnały widoczności w AI Overviews możesz zobaczyć już po 2-4 tygodniach. Znaczące wyniki - po 2-3 miesiącach. Pełny potencjał pakietu rozwija się w ciągu 6 miesięcy, dlatego nasze umowy są zawierane na minimum 6 miesięcy."
    },
    {
      question: "Na czym polega wasza gwarancja wyników?",
      answer: "Dla pakietu AEO Dominator gwarantujemy, że Twoja strona pojawi się w co najmniej 30% odpowiedzi AI dla top 10 zapytań w Twojej branży w ciągu 6 miesięcy. Jeśli tego nie osiągniemy, zwracamy 100% kosztów lub kontynuujemy pracę bezpłatnie do osiągnięcia celu."
    },
    {
      question: "Co to jest ten wskaźnik 'Answer Share™' i jak go mierzycie?",
      answer: "Answer Share™ to nasz autorski wskaźnik pokazujący, jaki procent odpowiedzi AI w Twojej branży zawiera informacje o Twojej firmie. Mierzymy go poprzez systematyczne testowanie zapytań związanych z Twoją działalnością i analizę, czy AI poleca Twoją firmę jako rozwiązanie."
    },
    {
      question: "Czy te usługi są dla mojej firmy, jeśli jestem małym przedsiębiorcą?",
      answer: "Pakiet GEO Launchpad jest idealny dla małych firm lokalnych - prawników, lekarzy, restauratorów. Koszt 4500 zł/mies. to inwestycja, która szybko się zwraca dzięki lepszej widoczności lokalnej i pozyskiwaniu klientów przez AI."
    },
    {
      question: "Czy współpracujecie z firmami spoza Katowic?",
      answer: "Tak! Pracujemy z firmami z całej Polski. Pakiet GEO Launchpad działa dla każdego miasta w Polsce, a AEO Dominator dla firm krajowych. Większość współpracy odbywa się zdalnie, z regularnymi spotkaniami online."
    }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white" onMouseLeave={handleMouseLeave}>
        <SEOHead
          title="Pozycjonowanie AEO i GEO - Pierwsza Agencja AI w Polsce | WebDKW"
          description="Specjalizujemy się w pozycjonowaniu pod AI Overviews. Pakiety GEO (lokalne) i AEO (krajowe). Gwarancja wyników. Audyt potencjału za 950 zł."
          keywords="pozycjonowanie AEO, pozycjonowanie GEO, AI Overviews, pozycjonowanie pod sztuczną inteligencję, optymalizacja odpowiedzi AI"
          url="https://webdkw.net/aeo-manifesto"
        />

        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-primary-50/30 to-blue-50/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,139,0,0.1),rgba(255,255,255,0))]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-200/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/20 rounded-full blur-xl animate-pulse hidden lg:block" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-purple-200/20 rounded-full blur-lg animate-pulse hidden md:block" style={{animationDelay: '2s'}}></div>
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
            <div className="mb-8 animate-fade-in">
              {/* Badge with improved styling */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-50 border border-primary-200 text-primary-700 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></span>
                🚀 Pierwsza agencja AEO/GEO w Polsce
              </div>
              
              {/* Main Headline with improved typography */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Nie pozwól, by AI ukryło{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                    Twoją firmę
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-primary-600/20 blur-lg -z-10"></div>
                </span>{' '}
                przed klientami
              </h1>
              
              {/* Subtitle with enhanced styling */}
              <div className="relative mb-8">
                <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
                  Jako pierwsi w Polsce oferujemy pozycjonowanie pod nową erę wyszukiwania. 
                  <br className="hidden md:block" />
                  Gdy Google odpowiada za Ciebie – <span className="text-primary-600 font-semibold">Twoi konkurenci tracą klientów.</span>
                </h2>
              </div>
              
              {/* Lead paragraph with icon */}
              <div className="flex flex-col items-center mb-12">
                <div className="mb-4 p-3 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Rewolucja już się dzieje. AI Overviews zmieniają sposób, w jaki ludzie szukają usług. 
                  <br className="hidden md:block" />
                  <span className="font-semibold text-gray-700">99% firm nie ma strategii na to, co nadchodzi.</span> Czy Twoja ma?
                </p>
              </div>
            </div>
            
            {/* Enhanced CTAs with gradient backgrounds */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="relative group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Target className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Sprawdź swój potencjał AEO - Audyt za 950 zł</span>
              </button>
              <button className="relative group border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                <Phone className="h-5 w-5" />
                Umów bezpłatną konsultację
              </button>
            </div>

            {/* Trust indicators with improved design */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-2 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <Shield className="h-6 w-6 text-primary-500" />
                  </div>
                  <span className="font-semibold text-gray-700">Pierwsza agencja AEO/GEO w Polsce</span>
                </div>
              </div>
              <div className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-2 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <Brain className="h-6 w-6 text-primary-500" />
                  </div>
                  <span className="font-semibold text-gray-700">Autorska metodologia AI-Growth Framework™</span>
                </div>
              </div>
              <div className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-2 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <CheckCircle className="h-6 w-6 text-primary-500" />
                  </div>
                  <span className="font-semibold text-gray-700">Gwarancja wyników w umowie</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Wybierz swój pakiet dominacji w erze AI
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* GEO Launchpad Package */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-lg">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Search className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">GEO Launchpad</h3>
                  <h4 className="text-xl text-primary-600 font-semibold mb-4">Zdominuj lokalny rynek</h4>
                  <p className="text-gray-600">
                    Idealny dla firm usługowych takich jak prawnicy, lekarze czy restauratorzy, 
                    które chcą być pierwszym wyborem AI dla klientów w swoim mieście.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-xl mb-8">
                  <h5 className="font-bold text-gray-900 mb-2">Główna obietnica:</h5>
                  <p className="text-gray-700">
                    Sprawimy, że AI będzie polecać Twoją firmę lokalnym klientom gotowym do zakupu.
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Mistrzowska optymalizacja Google Business Profile</strong> - pełna konfiguracja i optymalizacja wizytówki</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>10-15 "Knowledge Assets" miesięcznie</strong> - tworzenie i optymalizacja treści odpowiadających na kluczowe pytania klientów</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Wdrożenie danych strukturalnych schema.org</strong> - LocalBusiness, FAQPage i Review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Strategia zarządzania reputacją</strong> - aktywne monitorowanie i pozyskiwanie opinii</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Answer Share™ Dashboard</strong> - widzi swój procentowy udział w odpowiedziach AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Monitoring pozycji w Local Pack</strong> na mapach Google</span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">4 500 zł</div>
                    <div className="text-gray-600 mb-2">miesięcznie</div>
                    <div className="text-sm text-gray-500">+ 2 500 zł opłata startowa</div>
                    <div className="text-sm text-gray-500">minimum 6 miesięcy</div>
                  </div>
                </div>

                <button className="w-full bg-primary-500 text-white py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300">
                  Chcę zdominować rynek lokalny
                </button>
              </div>

              {/* AEO Dominator Package */}
              <div className="bg-gradient-to-b from-primary-50 to-white border-2 border-primary-300 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NAJPOPULARNIEJSZY
                </div>
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">AEO Dominator</h3>
                  <h4 className="text-xl text-primary-600 font-semibold mb-4">Zostań krajowym liderem myśli</h4>
                  <p className="text-gray-600">
                    Stworzony dla e-commerce, firm B2B i SaaS, które chcą osiągnąć status głównego źródła odpowiedzi dla AI w całej Polsce.
                  </p>
                </div>

                <div className="bg-primary-100 p-6 rounded-xl mb-8">
                  <h5 className="font-bold text-gray-900 mb-2">Główna obietnica:</h5>
                  <p className="text-gray-700">
                    Osiągnij status autorytetu, którego AI cytuje jako pierwsze i najważniejsze źródło w Twojej branży.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">Gwarancja wyników:</span>
                  </div>
                  <p className="text-yellow-800 text-sm">
                    Gwarantujemy, że Twoja strona pojawi się w co najmniej 30% odpowiedzi AI dla top 10 zapytań w Twojej branży w ciągu 6 miesięcy.
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Wszystko z pakietu GEO Launchpad</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Zaawansowany content marketing oparty na AI</strong> - projektowanie i wdrażanie strategii pillar page i klastrów tematycznych</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Strategiczne budowanie autorytetu E-E-A-T</strong> - wykraczające poza stronę</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Optymalizacja pod wyszukiwanie komercyjne</strong> - frazy prowadzące do sprzedaży</span>
                  </li>
                </ul>

                <div className="bg-primary-600 text-white p-6 rounded-xl mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">8 500 zł</div>
                    <div className="text-primary-100 mb-2">miesięcznie</div>
                    <div className="text-sm text-primary-200">+ 4 500 zł opłata startowa</div>
                    <div className="text-sm text-primary-200">minimum 6 miesięcy</div>
                  </div>
                </div>

                <button className="w-full bg-primary-500 text-white py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300">
                  Chcę być liderem w branży
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              AI-Growth Framework™ - Nasz autorski proces w 4 krokach do dominacji
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                  <Search className="h-8 w-8 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
                  <p className="text-gray-600 text-sm">
                    Głębokie zrozumienie biznesu klienta, jego celów, analiza konkurencji i audyt potencjału.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                  <Target className="h-8 w-8 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
                  <p className="text-gray-600 text-sm">
                    Stworzenie precyzyjnej mapy drogowej opartej na danych i zaplanowanie, jakie pytania zostaną zdobyte dla klienta.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                  <Zap className="h-8 w-8 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
                  <p className="text-gray-600 text-sm">
                    Systematyczne wdrażanie strategii, od optymalizacji technicznej po tworzenie treści.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                  <BarChart3 className="h-8 w-8 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring & Optimization</h3>
                  <p className="text-gray-600 text-sm">
                    Ciągły pomiar wskaźnika Answer Share™ i optymalizacja działań.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Nie wierz nam na słowo. Zobacz, co mówią liczby i nasi klienci.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Po 3 miesiącach współpracy nasze wzrost udziału w odpowiedziach AI o 45%. 
                  Teraz gdy klienci pytają Google o prawnika w Katowicach, AI poleca naszą kancelarię."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Jan Kowalski</div>
                  <div className="text-sm text-gray-500">Kancelaria Prawna Kowalski</div>
                  <div className="text-primary-600 font-bold mt-2">Wzrost Answer Share™: +45%</div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Nasza klinika jest teraz pierwszym wyborem AI dla pacjentów szukających 
                  dentysty. Wzrost nowych pacjentów o 60% w 4 miesiące."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Dr Anna Nowak</div>
                  <div className="text-sm text-gray-500">Klinika Stomatologiczna Dent+</div>
                  <div className="text-primary-600 font-bold mt-2">Wzrost pacjentów: +60%</div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Dzięki strategii AEO jesteśmy głównym źródłem informacji o naszej branży. 
                  AI cytuje nas w 40% odpowiedzi dla naszych kluczowych fraz."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Marcin Wiśniewski</div>
                  <div className="text-sm text-gray-500">TechSolutions B2B</div>
                  <div className="text-primary-600 font-bold mt-2">Answer Share™: 40%</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-8">Zaufali nam również:</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                  Logo Klienta 1
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                  Logo Klienta 2
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                  Logo Klienta 3
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                  Logo Klienta 4
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Masz pytania? Mamy odpowiedzi.
            </h2>
            
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-gray-900">{item.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 text-gray-600 animate-fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Gotowy na dominację w erze AI?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Nie czekaj, aż konkurencja Cię wyprzedzi. Rewolucja AI już trwa, 
              a my jesteśmy jedyną agencją w Polsce, która wie, jak ją wykorzystać dla Twojego zysku.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Target className="h-5 w-5" />
                  Audyt Potencjału AEO - 950 zł
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Bezpłatna konsultacja - 30 min
                </button>
              </div>
              <div className="text-center">
                <a href="tel:+48123456789" className="text-white/90 hover:text-white transition-colors underline">
                  Lub zadzwoń: +48 123 456 789
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Exit Intent Popup */}
        {showExitPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center animate-scale-in">
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Czekaj! Nie odchodź jeszcze</h3>
              <p className="text-gray-600 mb-6">
                Pobierz BEZPŁATNY przewodnik "5 sposobów na przygotowanie firmy na erę AI"
              </p>
              <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors mb-4 flex items-center justify-center gap-2">
                <Download className="h-5 w-5" />
                Pobierz przewodnik za darmo
              </button>
              <button 
                onClick={() => setShowExitPopup(false)}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Nie, dziękuję
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default AEOManifestoPage;