import { Helmet } from "react-helmet-async";
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEOStructuredData } from "@/components/SEOStructuredData";
import { ThreeBackground } from "@/components/ThreeBackground";
import { HeroSection } from "@/components/HeroSection";
import { AnimatedStats } from "@/components/AnimatedStats";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ProjectsSection } from "@/components/ProjectsSection";
import { MakrCaveSection } from "@/components/MakrCaveSection";
import { StoreSection } from "@/components/StoreSection";
import { VideoShowcase } from "@/components/VideoShowcase";
import { TestimonialsSection } from "@/components/TestimonialsSection";

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
      </Helmet>

      {/* Enhanced SEO Structured Data */}
      <SEOStructuredData type="organization" />
      <SEOStructuredData type="website" />

      <ThreeBackground />
      <EnhancedNavigation />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <AnimatedStats />
        <AboutSection />
        <HowItWorks />
        <MakrCaveSection />
        <StoreSection />
        <TestimonialsSection />
      </main>
      <EnhancedFooter />
    </>
  );
}
