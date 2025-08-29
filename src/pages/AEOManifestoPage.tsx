import { useState, useEffect } from 'react';
import { CheckCircle, Shield, Target, BarChart3, Search, Brain, Zap, Download, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import AEOFAQSection from '../components/AEOFAQSection';
import AEOVsSEOSection from '../components/AEOVsSEOSection';
import { BlogPost, supabase } from '../lib/supabase';
import { track } from '../lib/analytics';
import SEOContactForm from '../components/SEOContactForm';

const AEOManifestoPage = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [csIndex, setCsIndex] = useState(0);
  const csImages = [
    {
      src: 'https://obeabrdrtlxhucegkkiq.supabase.co/storage/v1/object/public/files/blog/mkheli-w-gpt3.png',
      alt: 'MK Helicopters - zrzut z odpowiedzi AI/ChatGPT (przykład 1)'
    },
    {
      src: 'https://obeabrdrtlxhucegkkiq.supabase.co/storage/v1/object/public/files/blog/mkheli-w-gpt2.png',
      alt: 'MK Helicopters - zrzut z odpowiedzi AI/ChatGPT (przykład 2)'
    }
  ];

  

  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  const fetchFeaturedPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setFeaturedPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min czytania`;
  };

  const handleMouseLeave = () => {
    // Popup temporarily disabled
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-contact-section]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuditClick = () => {
    scrollToContact();
  };

  const handleDownloadGuide = () => {
    window.open('/contact', '_blank');
    setShowExitPopup(false);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white" onMouseLeave={handleMouseLeave} data-gtm-page="pozycjonowanie-ai">
        <SEOHead
          title="Pozycjonowanie AI - Kiedy AI Odpowiada Za Ciebie | WebDKW"
          description="Specjalizujemy się w pozycjonowaniu pod AI Overviews. Pakiety GEO (lokalne) i AEO (krajowe). Rewolucja w wyszukiwaniu już się dzieje. Audyt potencjału za 800 zł."
          keywords="pozycjonowanie AI, AI Overviews, pozycjonowanie pod sztuczną inteligencję, optymalizacja odpowiedzi AI"
          url="https://webdkw.net/pozycjonowanie-ai"
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
                🔥 Przygotuj się na rewolucję w wyszukiwaniu - AI zmienia zasady gry
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
                Kiedy Google odpowiada za Ciebie – <span className="text-primary-600 font-semibold">Twoi konkurenci tracą klientów.</span>
                <br className="hidden md:block" />
                Rewolucja AI już się dzieje. Nie daj się wyprzedzić.
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
            
            {/* Enhanced CTA - single prominent button */}
            <div className="flex justify-center mb-16">
              <button
                id="cta-hero-audyt-seo-ai"
                data-gtm="cta_hero_audyt_seo_ai"
                data-gtm-location="hero"
                aria-label="CTA: Darmowy Audyt SEO AI"
                onClick={() => { track({ event: 'cta_click', category: 'engagement', label: 'audyt_seo_ai_free', location: 'hero' }); scrollToContact(); }}
                className="relative group bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-6 rounded-xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center justify-center gap-3 overflow-hidden border-2 border-green-400"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 animate-pulse bg-green-400/20"></div>
                <Target className="h-6 w-6 relative z-10" />
                <span className="relative z-10">🎁 Darmowy Audyt SEO AI - Sprawdź Swój Potencjał!</span>
                <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Trust message */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 font-medium">
                ⚡ <span className="text-primary-600 font-semibold">Otrzymasz raport w 24h</span> • 
                🎯 <span className="text-primary-600 font-semibold">15-min konsultacja GRATIS</span> • 
                🛡️ <span className="text-primary-600 font-semibold">Bez zobowiązań</span>
              </p>
            </div>

            {/* Trust indicators with improved design */}
            <div className="grid md:grid-cols-3 gap-6" data-gtm-section="trust_indicators">
              <div className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-2 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <Shield className="h-6 w-6 text-primary-500" />
                  </div>
                  <span className="font-semibold text-gray-700">Specjaliści od widoczności w ChatGPT, Gemini i Perplexity</span>
                </div>
              </div>
              <div className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-2 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <Brain className="h-6 w-6 text-primary-500" />
                  </div>
                  <span className="font-semibold text-gray-700">Śledzenie trendów AI od początku rewolucji</span>
                </div>
              </div>
              <div className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 p-2 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <CheckCircle className="h-6 w-6 text-primary-500" />
                  </div>
                  <span className="font-semibold text-gray-700">Sprawdzone metody dla firm z różnych branż</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section - przeniesiona pod hero */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced section header */}
            <div className="text-center mb-4">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-green-50 border border-green-200 text-green-700 rounded-full text-xs md:text-sm font-semibold">
                📈 Sprawdzony Sukces
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Case Study: Jak MK Helicopters zwiększyło liczbę zapytań o 40% dzięki SEO i AEO
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Firma MK Helicopters, lider w branży ekskluzywnego transportu helikopterem, walczyła z niską widocznością w Google. 
              Wdrożyliśmy precyzyjną strategię SEO i AEO, skoncentrowaną na intencjach użytkowników i odpowiedziach AI.
            </p>

            <article className="grid md:grid-cols-2 gap-10 items-start">
              <figure className="relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                <div className="relative aspect-[819/662]">
                  {csImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${idx === csIndex ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}

                  <button
                    type="button"
                    onClick={() => setCsIndex((csIndex - 1 + csImages.length) % csImages.length)}
                    aria-label="Poprzednie zdjęcie"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full p-2 shadow-sm hover-scale"
                  >
                    <ArrowRight className="h-5 w-5 -scale-x-100" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCsIndex((csIndex + 1) % csImages.length)}
                    aria-label="Następne zdjęcie"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full p-2 shadow-sm hover-scale"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                    {csImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCsIndex(i)}
                        aria-label={`Pokaż slajd ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full border border-white/60 ${i === csIndex ? 'bg-primary-500' : 'bg-white/70'}`}
                      />
                    ))}
                  </div>
                </div>
                <figcaption className="px-4 py-3 text-sm text-gray-500">Klient: MK Helicopters</figcaption>
              </figure>

              <div>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  40% więcej zapytań ofertowych w 3 miesiące
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Nasze działania</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                        <p className="text-gray-700">Tworzenie treści Q&A: przygotowaliśmy artykuły odpowiadające na konkretne pytania osób szukających transportu helikopterem.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                        <p className="text-gray-700">Rozbudowa sekcji FAQ: zbudowaliśmy wyczerpującą bazę wiedzy, która rozwiewa kluczowe wątpliwości klientów.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                        <p className="text-gray-700">Wdrożenie znaczników strukturalnych: dodaliśmy specjalne kody, które pomagają Google lepiej zrozumieć treść FAQ i wyróżnić ją w wynikach wyszukiwania.</p>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Rezultaty w 3 miesiące</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        <p className="text-gray-700">Znaczący wzrost ruchu organicznego.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        <p className="text-gray-700">Widoczność w AI Overviews i odpowiedziach ChatGPT – wzmocnienie autorytetu marki.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        <p className="text-gray-700">Wzrost liczby zapytań ofertowych o <strong>40%</strong>.</p>
                      </li>
                    </ul>
                  </section>

                  <div className="pt-4">
                    <button
                      onClick={() => { track({ event: 'cta_click', category: 'engagement', label: 'case_study_contact', location: 'case_study' }); scrollToContact(); }}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                    >
                      🎯 Chcę podobne wyniki
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Enhanced urgency CTA after case study */}
            <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ⚠️ Nie czekaj, aż konkurencja zajmie Twoje miejsce w AI
              </h3>
              <p className="text-lg text-primary-100 mb-6">
                Każdy dzień zwłoki to stracone leady. Zacznij już dziś!
              </p>
              
              <button
                onClick={() => { track({ event: 'cta_click', category: 'engagement', label: 'urgency_cta', location: 'case_study_urgency' }); scrollToContact(); }}
                className="bg-white text-primary-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4"
              >
                🚀 Zacznij od DARMOWEGO Audytu SEO AI
              </button>
              
              <p className="text-primary-100 text-sm">
                💬 <strong className="text-white">Otrzymasz raport w 24h</strong> + bezpłatną konsultację
              </p>
            </div>

            {/* Structured Data for Case Study */}
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "CaseStudy",
                  "headline": "Jak MK Helicopters zwiększyło liczbę zapytań o 40% dzięki SEO i AEO",
                  "description": "Strategia Q&A, rozbudowana sekcja FAQ i wdrożenie danych strukturalnych FAQPage przyniosły 40% wzrost zapytań w 3 miesiące.",
                  "image": "https://webdkw.net/images/clients/mkhelicopters.webp",
                  "author": { "@type": "Organization", "name": "WebDKW" },
                  "publisher": { "@type": "Organization", "name": "WebDKW", "logo": { "@type": "ImageObject", "url": "https://webdkw.net/images/webdkw-logo.svg" } },
                  "about": "MK Helicopters",
                  "mainEntityOfPage": "https://webdkw.net/uslugi/pozycjonowanie-ai",
                  "keywords": ["case study SEO", "AEO", "pozycjonowanie AI", "MK Helicopters", "FAQPage", "Q&A content"],
                  "inLanguage": "pl-PL"
                })}
              </script>
            </Helmet>
          </div>
        </section>

        {/* Benefits Section for SEO AI (AEO/GEO) - przeniesiona pod case study */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Eyebrow */}
            <div className="text-center mb-4">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-50 border border-primary-200 text-primary-700 rounded-full text-xs md:text-sm font-semibold">
                ✨ SEO AI • AEO • GEO
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Co Twoja firma zyska dzięki SEO AI (AEO/GEO)
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto text-center">
              🤖 SEO AI to nie tylko „pozycje" w Google. To dominacja w odpowiedziach generowanych przez AI — od <strong>AI Overviews</strong> w Google, przez <strong>ChatGPT</strong> i <strong>Gemini</strong>, po <strong>Perplexity</strong> i <strong>Bing Copilot</strong>. 📈 Efekt? Więcej zapytań od klientów gotowych do zakupu i rosnący <strong>Answer Share™</strong> Twojej marki.
            </p>

            {/* Enhanced benefits grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover-scale">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dominacja w odpowiedziach AI</h3>
                <p className="text-gray-600 text-sm">Twoja firma staje się źródłem odpowiedzi w ChatGPT, Gemini, Perplexity i AI Overviews Google.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover-scale">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Klienci gotowi do zakupu</h3>
                <p className="text-gray-600 text-sm">AI odpowiada na pytania klientów i kieruje ich prosto do Ciebie, omijając konkurencję.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover-scale">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ochrona przed AI-zombie</h3>
                <p className="text-gray-600 text-sm">Gdy konkurencja stanie się niewidoczna dla AI, Ty będziesz liderem branży.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover-scale">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wyższy Answer Share™</h3>
                <p className="text-gray-600 text-sm">Mierzalne zwiększenie obecności w odpowiedziach AI dla Twojej branży.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover-scale">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Przyszłościowa strategia</h3>
                <p className="text-gray-600 text-sm">Inwestycja w długoterminową przewagę konkurencyjną w erze AI.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover-scale">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Szybsze efekty</h3>
                <p className="text-gray-600 text-sm">AI reaguje szybciej niż tradycyjne SEO - pierwsze efekty w ciągu tygodni.</p>
              </div>
            </div>

            {/* CTA dla benefits */}
            <div className="text-center">
              <button
                onClick={() => { track({ event: 'cta_click', category: 'engagement', label: 'benefits_cta', location: 'benefits_section' }); scrollToContact(); }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
              >
                🎯 Sprawdź swój potencjał AEO
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        <AEOVsSEOSection />

        {/* Featured Articles Section */}
        {featuredPosts.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-50 border border-primary-200 text-primary-700 rounded-full text-xs md:text-sm font-semibold">
                  📚 Najnowsze Artykuły
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-4">
                  Pogłęb swoją wiedzę o SEO AI
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Regularnie publikujemy najnowsze trendy i strategie w pozycjonowaniu AI. Bądź na bieżąco z rewolucją.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale">
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.created_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {getReadingTime(post.content)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold gap-1"
                      >
                        Czytaj więcej
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/blog"
                  className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-semibold gap-2"
                >
                  Zobacz wszystkie artykuły
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>
        )}

        <AEOFAQSection />

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gotowy na dominację w AI? Zacznij już dziś!
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Nie pozwól, by konkurencja wyprzedziła Cię w odpowiedziach AI. Każdy dzień zwłoki to stracone leady.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => { track({ event: 'cta_click', category: 'engagement', label: 'final_cta_free', location: 'final_section' }); scrollToContact(); }}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🎁 Darmowy Audyt SEO AI
              </button>
              <button
                onClick={() => { track({ event: 'cta_click', category: 'engagement', label: 'final_cta_paid', location: 'final_section' }); handleAuditClick(); }}
                className="bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary-800 transition-all duration-300 border-2 border-primary-300"
              >
                📊 Płatny Audyt AEO (800 zł)
              </button>
            </div>
          </div>
        </section>

        <SEOContactForm />
        <Footer />

        {/* Exit Intent Popup */}
        {showExitPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
              <button
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-primary-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Przed wyjściem...
                </h3>
                <p className="text-gray-600 mb-6">
                  Pobierz darmowy przewodnik "5 kroków do dominacji w AI Overviews" i nie pozwól konkurencji Cię wyprzedzić!
                </p>
                
                <div className="space-y-3">
                  <button
                    onClick={handleDownloadGuide}
                    className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600"
                  >
                    Pobierz przewodnik GRATIS
                  </button>
                  <button
                    onClick={() => setShowExitPopup(false)}
                    className="w-full text-gray-500 hover:text-gray-700"
                  >
                    Może później
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
};

export default AEOManifestoPage;