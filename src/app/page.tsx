
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Tu Website Vende Más"
              subheadline="Creamos y rediseñamos sitios web optimizados con inteligencia artificial para maximizar tus ventas online. Comienza gratis y observa el crecimiento."
              cta1="Empieza Gratis Ahora"
            />

            <How
              step1Title="Step 1"
              step1Desc="Description 1"
              step2Title="Step 2"
              step2Desc="Description 2"
              step3Title="Step 3"
              step3Desc="Description 3"
            />

            <Aboutus
              headline="Webgo: Tu Puente al Éxito Online"
              subheadline="Descripción"
              beneficio1="Websites Gratis"
              beneficio2="Sitios optimizados con AI sin costo inicial."
              beneficiotitulo1="Rediseño Efectivo"
              beneficiotitulo2="Transforma tu sitio para maximizar ventas."
            />

            <Services
              heading="Nuestros Servicios"
              description="Ofrecemos una gran variedad de servicios."
              services={[]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Cómo puede ayudarme Webgo si estoy empezando a vender online?","respuesta":"Si estás comenzando tu aventura de ventas en línea, Webgo ofrece un sitio web gratuito optimizado con inteligencia artificial. Esto significa que no solo tendrás una presencia online profesional desde el inicio, sino también una optimizada para atraer y convertir visitantes en clientes."},{"pregunta":"¿Qué ventajas ofrece el rediseño de sitios web de Webgo para mi negocio existente?","respuesta":"El servicio de rediseño de Webgo transforma tu sitio web actual en uno centrado en la funcionalidad y la conversión. Esto es crucial porque mejora la experiencia del usuario y optimiza tu sitio para ventas, asegurando que no solo se vea bien, sino que trabaje eficientemente para aumentar tus ingresos."},{"pregunta":"¿Por qué es importante tener un sitio web optimizado para ventas y no solo un diseño atractivo?","respuesta":"Un sitio web debe ser más que atractivo; debe ser una herramienta efectiva para generar ventas. Webgo se enfoca en crear sitios web que no solo capturan la atención visualmente, sino que también están diseñados para guiar a los visitantes hacia la compra, usando estrategias probadas de conversión."},{"pregunta":"¿Puedo gestionar mi sitio web de Webgo yo mismo una vez que esté en línea?","respuesta":"¡Sí! Los sitios web creados por Webgo son fáciles de administrar, incluso si no tienes experiencia técnica. Te proporcionamos las herramientas y el soporte necesario para que puedas actualizar tu contenido y gestionar tu sitio de manera eficiente."},{"pregunta":"¿Cómo asegura Webgo que mi nuevo sitio web estará optimizado para atraer más clientes?","respuesta":"Webgo utiliza avanzadas técnicas de SEO y conocimientos de marketing digital para asegurar que tu sitio no solo se vea bien, sino que también se clasifique bien en los motores de búsqueda y atraiga tráfico orgánico. Esto se traduce en más visitantes, más ventas potenciales y un mejor retorno de inversión para tu negocio."}]}
            />

            <BookAppointment
              heading="Contáctenos"
              description="Estamos aquí para ayudarle con sus necesidades."
            />
<Footer />
    </main>
  );
}
    