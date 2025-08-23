import React from 'react';
import { ExternalLink, Upload, FileText, Calculator, Printer, Zap, Clock, Shield } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function ThreeDStore() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-makr-blue/20"></div>
      </div>

      <div className="relative pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600/20 to-purple-500/10 py-20 border-b border-purple-500/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Printer className="w-16 h-16 text-makr-yellow mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-makr-yellow mb-6 tracking-wider">
              3D.MAKRX.STORE
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Upload your 3D files and get instant quotes for custom fabrication. 
              From rapid prototyping to production runs, we've got you covered.
            </p>
            <a
              href="https://3d.makrx.store/upload"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow font-semibold rounded-xl hover:bg-makr-yellow/30 transition-all duration-300 hover:scale-105"
            >
              Upload a File
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Upload to Quote Workflow */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              UPLOAD_TO_QUOTE.process()
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-makr-blue/20 border border-makr-blue/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-makr-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">Upload File</h3>
                <p className="text-gray-400">Drop your STL, OBJ, or other 3D files directly into our platform.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">Specify Details</h3>
                <p className="text-gray-400">Choose materials, quality settings, quantity, and delivery options.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">Instant Quote</h3>
                <p className="text-gray-400">Get pricing from multiple verified providers within minutes.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-makr-yellow/20 border border-makr-yellow/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Printer className="w-8 h-8 text-makr-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-makr-yellow">Production</h3>
                <p className="text-gray-400">Track progress and receive your printed parts with quality guarantee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Technologies */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              MANUFACTURING_TECH.getSupported()
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "3D Printing",
                  technologies: ["FDM", "SLA", "SLS", "Multi Jet Fusion"],
                  materials: ["PLA", "ABS", "PETG", "Resin", "Metal"],
                  color: "makr-blue"
                },
                {
                  name: "CNC Machining", 
                  technologies: ["3-axis", "4-axis", "5-axis", "Turning"],
                  materials: ["Aluminum", "Steel", "Titanium", "Plastics"],
                  color: "green-400"
                },
                {
                  name: "Laser Cutting",
                  technologies: ["CO2 Laser", "Fiber Laser", "Engraving"],
                  materials: ["Acrylic", "Wood", "Metal", "Fabric"],
                  color: "purple-400"
                },
                {
                  name: "Sheet Metal",
                  technologies: ["Bending", "Welding", "Forming", "Assembly"],
                  materials: ["Steel", "Aluminum", "Copper", "Brass"],
                  color: "makr-yellow"
                }
              ].map((tech, index) => (
                <div key={index} className="bg-black border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors">
                  <h3 className={`text-lg font-semibold mb-3 text-${tech.color}`}>{tech.name}</h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tech.technologies.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Materials:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tech.materials.map((m, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400">{m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* File Format Support */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              FILE_FORMATS.supported()
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">3D Files</h3>
                <div className="space-y-2">
                  {[
                    { ext: ".STL", desc: "Standard 3D printing format" },
                    { ext: ".OBJ", desc: "Common 3D object format" },
                    { ext: ".PLY", desc: "Polygon file format" },
                    { ext: ".3MF", desc: "3D Manufacturing format" },
                    { ext: ".STEP", desc: "Engineering CAD format" },
                    { ext: ".IGES", desc: "CAD data exchange format" }
                  ].map((format, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-makr-yellow font-semibold">{format.ext}</span>
                      <span className="text-gray-400">{format.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">CAD Files</h3>
                <div className="space-y-2">
                  {[
                    { ext: ".SLDPRT", desc: "SolidWorks part file" },
                    { ext: ".DWG", desc: "AutoCAD drawing" },
                    { ext: ".DXF", desc: "Drawing exchange format" },
                    { ext: ".F3D", desc: "Fusion 360 archive" },
                    { ext: ".CATPART", desc: "CATIA part file" },
                    { ext: ".PRT", desc: "Pro/ENGINEER part" }
                  ].map((format, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-makr-yellow font-semibold">{format.ext}</span>
                      <span className="text-gray-400">{format.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">2D Files</h3>
                <div className="space-y-2">
                  {[
                    { ext: ".SVG", desc: "Scalable vector graphics" },
                    { ext: ".AI", desc: "Adobe Illustrator file" },
                    { ext: ".PDF", desc: "Portable document format" },
                    { ext: ".EPS", desc: "Encapsulated PostScript" },
                    { ext: ".CDR", desc: "CorelDRAW file" },
                    { ext: ".DXF", desc: "2D CAD exchange format" }
                  ].map((format, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-makr-yellow font-semibold">{format.ext}</span>
                      <span className="text-gray-400">{format.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Guarantees */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              QUALITY_ASSURANCE.guarantee()
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Zap className="w-12 h-12 text-makr-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-makr-yellow mb-3">Lightning Fast</h3>
                <p className="text-gray-400">Quotes in minutes, production starts within 24 hours for most orders.</p>
              </div>

              <div className="text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-400 mb-3">Quality Guaranteed</h3>
                <p className="text-gray-400">100% quality guarantee with free reprints for manufacturing defects.</p>
              </div>

              <div className="text-center">
                <Clock className="w-12 h-12 text-makr-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-makr-blue mb-3">On-Time Delivery</h3>
                <p className="text-gray-400">Tracking from production to delivery with guaranteed delivery dates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-makr-yellow">
              PRICING_TIERS.calculate()
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-makr-blue mb-3">Prototype</h3>
                <div className="text-3xl font-bold text-makr-yellow mb-2">₹99</div>
                <div className="text-gray-400 text-sm mb-4">Starting price</div>
                <ul className="text-left space-y-2 text-gray-300 text-sm">
                  <li>• 1-5 parts</li>
                  <li>• Standard materials</li>
                  <li>• 3-5 day delivery</li>
                  <li>• Basic finishing</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-makr-yellow/50 rounded-xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-makr-yellow text-black px-3 py-1 rounded-full text-xs font-semibold">
                  POPULAR
                </div>
                <h3 className="text-xl font-semibold text-makr-yellow mb-3">Production</h3>
                <div className="text-3xl font-bold text-makr-yellow mb-2">₹499</div>
                <div className="text-gray-400 text-sm mb-4">Starting price</div>
                <ul className="text-left space-y-2 text-gray-300 text-sm">
                  <li>• 10-100 parts</li>
                  <li>• Premium materials</li>
                  <li>• 5-7 day delivery</li>
                  <li>• Professional finishing</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-makr-blue mb-3">Enterprise</h3>
                <div className="text-3xl font-bold text-makr-yellow mb-2">Custom</div>
                <div className="text-gray-400 text-sm mb-4">Quote on demand</div>
                <ul className="text-left space-y-2 text-gray-300 text-sm">
                  <li>• 100+ parts</li>
                  <li>• All materials</li>
                  <li>• Rush delivery available</li>
                  <li>• Custom finishing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600/20 to-makr-blue/20 border-t border-purple-500/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-makr-yellow">
              UPLOAD_NOW.execute()
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to bring your ideas to life? Upload your 3D files and get started today.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://3d.makrx.store/upload"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow font-semibold rounded-xl hover:bg-makr-yellow/30 transition-all duration-300 hover:scale-105"
              >
                Upload Files
                <Upload className="w-5 h-5" />
              </a>
              <a
                href="https://3d.makrx.store/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue font-semibold rounded-xl hover:bg-makr-blue/30 transition-all duration-300"
              >
                Get Quote
                <Calculator className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Free quotes • No minimum order • Quality guaranteed
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}