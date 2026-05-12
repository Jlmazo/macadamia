"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";

export function MapSection() {
  return (
    <section id="ubicacion" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Nuestra <span className="text-[#C470A7]">Ubicación</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Visítanos en nuestra tienda física y conoce todos nuestros productos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#C470A7]/10 to-[#C470A7]/5 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#C470A7] p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Dirección</h3>
                  <p className="text-neutral-600 text-sm">
                    Calle Principal #123<br />
                    Barrio Centro<br />
                    Colombia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#C470A7]/10 to-[#C470A7]/5 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#C470A7] p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Horarios</h3>
                  <p className="text-neutral-600 text-sm">
                    Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                    Sábados: 9:00 AM - 4:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#C470A7]/10 to-[#C470A7]/5 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#C470A7] p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Teléfono</h3>
                  <p className="text-neutral-600 text-sm">
                    {contactInfo.phoneDisplay}<br />
                    {contactInfo.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border-4 border-[#C470A7]/20 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8534851987467!2d-74.07220032426355!3d4.609710495333356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7c9c3c3c3%3A0x8c3c3c3c3c3c3c3c!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1699999999999!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Macadamia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
