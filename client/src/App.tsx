import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/home";
import Ecosystem from "@/pages/ecosystem";
import About from "@/pages/about";
import Events from "@/pages/events";
import Store from "@/pages/store";
import Blog from "@/pages/blog";
import Careers from "@/pages/careers";
import Contact from "@/pages/contact";
import Docs from "@/pages/docs";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ThemeProvider>
            <BrowserRouter>
              <div className="min-h-screen theme-transition">
                {/* Skip Link for Accessibility */}
                <a
                  href="#main-content"
                  className="skip-link"
                >
                  Skip to main content
                </a>
                
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/ecosystem" element={<Ecosystem />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/docs" element={<Docs />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                
                <Toaster />
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
