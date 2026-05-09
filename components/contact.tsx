"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/573001234567?text=¡Hola! Quisiera más información sobre sus productos.", "_blank");
  };

  return (
    <section id="contacto" className="py-16 bg-[#C470A7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Contáctanos
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros
            canales y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <Phone className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Teléfono</h3>
            <p className="text-white/80">+57 300 123 4567</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <Mail className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-white/80">info@macadamia.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <MapPin className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Ubicación</h3>
            <p className="text-white/80">Colombia</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <Clock className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Horario</h3>
            <p className="text-white/80">Lun - Sáb: 8am - 6pm</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg text-lg hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Escríbenos por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
