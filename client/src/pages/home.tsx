import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { ThreeBackground } from "@/components/ThreeBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { MakrCaveSection } from "@/components/MakrCaveSection";
import { StoreSection } from "@/components/StoreSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>MakrX.org - Dream. Make. Share. | Futuristic Makerspace Community</title>
        <meta 
          name="description" 
          content="Join MakrX.org, the ultimate futuristic makerspace community. Access cutting-edge workshops, collaborate with innovators, showcase projects, and shop exclusive maker gear. Dream big, make it real, share your creation."
        />
        <meta 
          name="keywords" 
          content="makerspace, hacker community, cyberpunk, innovation, workshops, 3D printing, electronics, programming, maker tools, tech community, futuristic design"
        />
        <meta name="author" content="MakrX Team" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://makrx.org/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://makrx.org/" />
        <meta property="og:title" content="MakrX.org - Dream. Make. Share." />
        <meta 
          property="og:description" 
          content="Join the ultimate futuristic makerspace community. Access cutting-edge workshops, collaborate with innovators, and showcase your projects."
        />
        <meta property="og:image" content="https://makrx.org/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="MakrX.org" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://makrx.org/" />
        <meta property="twitter:title" content="MakrX.org - Dream. Make. Share." />
        <meta 
          property="twitter:description" 
          content="Join the ultimate futuristic makerspace community. Access cutting-edge workshops, collaborate with innovators, and showcase your projects."
        />
        <meta property="twitter:image" content="https://makrx.org/og-image.jpg" />
        <meta property="twitter:creator" content="@MakrXOrg" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#00BCD4" />
        <meta name="msapplication-TileColor" content="#00BCD4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MakrX" />

        {/* Structured Data for Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MakrX.org",
            description: "Futuristic makerspace community for innovators and creators",
            url: "https://makrx.org",
            logo: "https://makrx.org/logo.png",
            foundingDate: "2025",
            sameAs: [
              "https://twitter.com/MakrXOrg",
              "https://github.com/makrx",
              "https://discord.gg/makrx"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-MAKR-X",
              contactType: "customer service",
              availableLanguage: "English"
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Innovation District",
              addressLocality: "Tech City",
              addressRegion: "TC",
              postalCode: "12345",
              addressCountry: "US"
            }
          })}
        </script>
      </Helmet>

      <ThreeBackground />
      <Navigation />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <MakrCaveSection />
        <StoreSection />
      </main>
      <Footer />
    </>
  );
}
