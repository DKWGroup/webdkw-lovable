import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEOHead from "../components/SEOHead";
import { supabase } from "../lib/supabase";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [rodoConsent, setRodoConsent] = useState(false);
  const [showRodoInfo, setShowRodoInfo] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!rodoConsent) {
      setError("Wymagana jest zgoda na przetwarzanie danych osobowych");
      setIsSubmitting(false);
      return;
    }

    try {
      // Save to database first (this is the most important part)
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            message: formData.message,
            lead_magnet: false,
          },
        ]);

      if (dbError) throw dbError;

      // Try to send emails via edge function (optional - if it fails, form is still submitted)
      try {
        const emailResponse = await fetch(
          `${
            import.meta.env.VITE_SUPABASE_URL
          }/functions/v1/send-contact-email`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              company: formData.company,
              phone: formData.phone,
              message: formData.message,
              lead_magnet: false,
            }),
          }
        );

        if (!emailResponse.ok) {
          console.warn(
            "Email sending failed, but form was submitted successfully"
          );
        }
      } catch (emailError) {
        console.warn("Email function error:", emailError);
        // Don't throw - form submission was successful
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie lub napisz bezpośrednio na email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-gray-50">
          <SEOHead
            title="Kontakt | Tworzenie Stron, SEO, Marketing Internetowy"
            description="Skontaktuj się z nami! Zapytaj o tworzenie stron internetowych, sklepów online, optymalizację SEO i skuteczne kampanie marketingowe. Czekamy na Twój kontakt!"
            keywords="strony internetowe, tworzenie stron www, sklepy internetowe, pozycjonowanie SEO, Google Ads, marketing internetowy"
            url="https://webdkw.net"
          />

          <Header />
          <main className="pt-20">
            <section className="py-20">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-white rounded-2xl shadow-xl p-12">
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-8" />
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Dziękuję za wiadomość!
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Otrzymałem Twoje zapytanie i odpowiem w ciągu 24 godzin.
                    Sprawdź skrzynkę email (również spam) w poszukiwaniu
                    potwierdzenia i mojej odpowiedzi.
                  </p>
                  <p className="text-gray-500 mb-8">
                    W pilnych sprawach dzwoń: <strong>+48 881 046 689</strong>
                  </p>
                  <Link
                    to="/"
                    className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300"
                  >
                    Wróć na stronę główną
                  </Link>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <SEOHead
          title="Kontakt | Tworzenie Stron, SEO, Marketing Internetowy"
          description="Skontaktuj się z nami! Zapytaj o tworzenie stron internetowych, sklepów online, optymalizację SEO i skuteczne kampanie marketingowe. Czekamy na Twój kontakt!"
          keywords="strony internetowe, tworzenie stron www, sklepy internetowe, pozycjonowanie SEO, Google Ads, marketing internetowy"
          url="https://webdkw.net"
        />

        <Header />

        <main className="pt-20">
          {/* Header section */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-4 mb-8">
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Powrót na stronę główną</span>
                </Link>
              </div>

              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Skontaktuj się z nami
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Gotowy na rozmowę o Twoim projekcie? Wypełnij formularz lub
                  skorzystaj z jednej z dostępnych form kontaktu.
                </p>
              </div>
            </div>
          </section>

          {/* Contact section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Wyślij zapytanie
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Wypełnij formularz, a odpowiem w ciągu 24 godzin z
                      propozycją bezpłatnej konsultacji strategicznej.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-bold text-gray-900 mb-2"
                          >
                            Imię i nazwisko *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="Jan Kowalski"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-bold text-gray-900 mb-2"
                          >
                            Nazwa firmy
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="ABC Sp. z o.o."
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-bold text-gray-900 mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="jan@firma.pl"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-bold text-gray-900 mb-2"
                          >
                            Telefon
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="+48 123 456 789"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-bold text-gray-900 mb-2"
                        >
                          Opisz swój projekt *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                          placeholder="Opowiedz o swoim biznesie, jaką stronę potrzebujesz, jaki jest Twój budżet i deadline..."
                        />
                      </div>

                      {/* RODO Consent Checkbox */}
                      <div className="relative">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="rodo-consent"
                              type="checkbox"
                              checked={rodoConsent}
                              onChange={(e) => setRodoConsent(e.target.checked)}
                              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                              required
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="rodo-consent"
                              className="text-gray-600"
                            >
                              Zapoznałem/am się z{" "}
                              <button
                                type="button"
                                className="text-orange-500 hover:text-orange-700 underline"
                                onClick={() => setShowRodoInfo(!showRodoInfo)}
                                onMouseEnter={() => setShowRodoInfo(true)}
                                onMouseLeave={() => setShowRodoInfo(false)}
                              >
                                informacją o administratorze i przetwarzaniu
                                danych
                              </button>
                              . *
                            </label>
                          </div>
                        </div>

                        {/* RODO Info Popup */}
                        {showRodoInfo && (
                          <div className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-xl border border-gray-200 text-sm text-gray-700 max-w-md">
                            <p>
                              Wyrażam zgodę na przetwarzanie moich danych
                              osobowych zgodnie z ustawą o ochronie danych
                              osobowych w celu wysyłania informacji handlowej.
                              Podanie danych osobowych jest dobrowolne. Zostałem
                              poinformowany, że przysługuje mi prawo dostępu do
                              swoich danych, możliwości ich poprawiania, żądania
                              zaprzestania ich przetwarzania. Administratorem
                              danych jest DM.me Dawid Myszka ul. Bolesława
                              Chrobrego 32/103, Katowice 40-881.
                            </p>
                          </div>
                        )}
                      </div>

                      {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                            <p className="text-red-800 text-sm">{error}</p>
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting || !rodoConsent}
                        className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>
                          {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
                        </span>
                        {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                      </button>

                      <p className="text-sm text-gray-500 text-center">
                        * Pola wymagane. Odpowiem w ciągu 24 godzin.
                      </p>
                    </form>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  {/* Direct contact */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Kontakt bezpośredni
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Email
                          </div>
                          <a
                            href="mailto:contact.dkwgroup@gmail.com"
                            className="text-orange-500 hover:text-orange-600"
                          >
                            contact.dkwgroup@gmail.com
                          </a>
                          <p className="text-sm text-gray-500 mt-1">
                            Odpowiedź w ciągu 24h
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Telefon
                          </div>
                          <a
                            href="tel:+48881046689"
                            className="text-orange-500 hover:text-orange-600"
                          >
                            +48 881 046 689
                          </a>
                          <p className="text-sm text-gray-500 mt-1">
                            W pilnych sprawach
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Godziny pracy
                          </div>
                          <div className="text-gray-600">
                            Pon-Pt: 9:00-17:00
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Czas odpowiedzi: do 2h
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Lokalizacja
                          </div>
                          <div className="text-gray-600">Katowice, Polska</div>
                          <p className="text-sm text-gray-500 mt-1">
                            Spotkania online i stacjonarne
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Response guarantee */}
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h4 className="font-bold text-blue-900 mb-2">
                      Gwarancja odpowiedzi
                    </h4>
                    <p className="text-blue-800">
                      Odpowiadam na wszystkie zapytania w ciągu{" "}
                      <strong>24 godzin</strong>. W pilnych sprawach dzwoń
                      bezpośrednio - zawsze znajdę czas na rozmowę.
                    </p>
                  </div>
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

export default ContactPage;
