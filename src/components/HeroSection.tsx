import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const clients = [
    { name: "Akademia Lutowania", logo: "/images/clients/akademia-lutowania.webp" },
    { name: "Contenty", logo: "/images/clients/contenty.webp" },
    { name: "Grzegorz Kusz", logo: "/images/clients/gk.webp" },
    { name: "GlowUP", logo: "/images/clients/glowup.webp" },
    { name: "Investment Partners", logo: "/images/clients/inp.svg" },
    { name: "MKHelicopters", logo: "/images/clients/mkhelicopters.webp" },
    { name: "WellDone", logo: "/images/clients/welldone.webp" }
  ]

  // Duplicate clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients, ...clients]

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed
      
      // Reset position when we've scrolled through one set of clients
      const maxScroll = scrollContainer.scrollWidth / 3
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('kontakt')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Profesjonalne strony internetowe dla firm -{' '}
          Twój <span className="text-orange-500">najlepszy sprzedawca</span> 24/7.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Tworzymy strony i sklepy internetowe, które szybko pojawiają się w Google, są gotowe na AI i gwarantują realne wyniki biznesowe.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Bezpłatna konsultacja + wycena w 24h</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="text-sm text-gray-500">
              ⏱️ 30 minut • 🎯 Bez zobowiązań
            </div>
          </div>

          {/* Client logos - infinite scroll */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm mb-6">Zaufali nam:</p>
            <div className="relative overflow-hidden">
              <div 
                ref={scrollContainerRef}
                className="flex gap-12 overflow-x-hidden"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {duplicatedClients.map((client, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="h-12 sm:h-16 w-auto filter grayscale invert transition-all duration-300 opacity-60 hover:opacity-100 object-contain" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
