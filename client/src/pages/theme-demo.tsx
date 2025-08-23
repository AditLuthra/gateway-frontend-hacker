import React, { useState } from "react";
import {
  Sun,
  Moon,
  Monitor,
  Star,
  Heart,
  CheckCircle,
  AlertTriangle,
  Info,
  XCircle,
  Zap,
  Palette,
  Settings,
  User,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import { Navigation } from '@/components/Navigation';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();
  const [selectedTab, setSelectedTab] = useState("components");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const tabs = [
    { id: "components", label: "Components" },
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "forms", label: "Forms" },
    { id: "icons", label: "Icons" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-makr-blue/20 to-makr-yellow/20"></div>
      </div>

      <div className="relative pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-8 h-8 text-makr-yellow" />
            <h1 className="text-4xl font-bold text-makr-yellow tracking-wider">
              THEME_DEMO.render()
            </h1>
          </div>
          <p className="text-lg text-gray-400 mb-6">
            Explore MakrX's cyberpunk design system and component library
          </p>

          {/* Theme Status */}
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-900 border border-makr-blue/30 rounded-xl">
            <span className="text-sm font-medium text-gray-300">
              Current Theme:{" "}
              <span className="font-bold text-makr-blue">{theme}</span>
            </span>
            <span className="text-gray-500">|</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1 bg-makr-blue/20 border border-makr-blue/50 rounded-lg hover:bg-makr-blue/30 transition-colors"
            >
              {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              <span className="text-makr-blue text-sm">Toggle</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTab === tab.id
                    ? "bg-makr-blue/20 border border-makr-blue/50 text-makr-blue"
                    : "bg-gray-900 border border-gray-700 text-gray-400 hover:text-makr-yellow hover:border-makr-yellow/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Components Tab */}
          {selectedTab === "components" && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-6">UI_COMPONENTS.showcase()</h2>
              
              {/* Buttons */}
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 bg-makr-blue/20 border border-makr-blue/50 text-makr-blue rounded-lg hover:bg-makr-blue/30 transition-colors">
                    Primary
                  </button>
                  <button className="px-4 py-2 bg-makr-yellow/20 border border-makr-yellow/50 text-makr-yellow rounded-lg hover:bg-makr-yellow/30 transition-colors">
                    Secondary
                  </button>
                  <button className="px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                    Success
                  </button>
                  <button className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                    Danger
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Cards</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black border border-makr-blue/30 rounded-lg p-4 hover:border-makr-yellow/50 transition-colors">
                    <h4 className="font-semibold text-makr-yellow mb-2">Standard Card</h4>
                    <p className="text-gray-400 text-sm">Basic card component with hover effects</p>
                  </div>
                  <div className="bg-black border border-green-500/30 rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mb-2" />
                    <h4 className="font-semibold text-green-400 mb-2">Success Card</h4>
                    <p className="text-gray-400 text-sm">Card with success state styling</p>
                  </div>
                  <div className="bg-black border border-red-500/30 rounded-lg p-4">
                    <AlertTriangle className="w-6 h-6 text-red-400 mb-2" />
                    <h4 className="font-semibold text-red-400 mb-2">Warning Card</h4>
                    <p className="text-gray-400 text-sm">Card with warning state styling</p>
                  </div>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Status Indicators</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400">Operational</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-makr-yellow/10 border border-makr-yellow/30 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-makr-yellow" />
                      <span className="text-makr-yellow">Warning</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-400">Error</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-makr-blue/10 border border-makr-blue/30 rounded-lg">
                      <Info className="w-5 h-5 text-makr-blue" />
                      <span className="text-makr-blue">Information</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Colors Tab */}
          {selectedTab === "colors" && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-6">COLOR_PALETTE.display()</h2>
              
              {/* Primary Colors */}
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Primary Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-makr-blue rounded-lg mx-auto mb-2 border border-makr-blue/50"></div>
                    <p className="text-makr-blue font-semibold">Makr Blue</p>
                    <p className="text-gray-500 text-xs">#00BCD4</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-makr-yellow rounded-lg mx-auto mb-2 border border-makr-yellow/50"></div>
                    <p className="text-makr-yellow font-semibold">Makr Yellow</p>
                    <p className="text-gray-500 text-xs">#FFEB3B</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-400 rounded-lg mx-auto mb-2 border border-green-400/50"></div>
                    <p className="text-green-400 font-semibold">Terminal Green</p>
                    <p className="text-gray-500 text-xs">#00FF00</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-400 rounded-lg mx-auto mb-2 border border-red-400/50"></div>
                    <p className="text-red-400 font-semibold">Alert Red</p>
                    <p className="text-gray-500 text-xs">#FF5252</p>
                  </div>
                </div>
              </div>

              {/* Background Colors */}
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Background Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-lg mx-auto mb-2 border border-gray-700"></div>
                    <p className="text-white font-semibold">Black</p>
                    <p className="text-gray-500 text-xs">#000000</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-900 rounded-lg mx-auto mb-2 border border-gray-700"></div>
                    <p className="text-gray-300 font-semibold">Gray 900</p>
                    <p className="text-gray-500 text-xs">#111827</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-800 rounded-lg mx-auto mb-2 border border-gray-700"></div>
                    <p className="text-gray-300 font-semibold">Gray 800</p>
                    <p className="text-gray-500 text-xs">#1F2937</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-700 rounded-lg mx-auto mb-2 border border-gray-700"></div>
                    <p className="text-gray-300 font-semibold">Gray 700</p>
                    <p className="text-gray-500 text-xs">#374151</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Typography Tab */}
          {selectedTab === "typography" && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-6">TYPOGRAPHY.styles()</h2>
              
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Headings</h3>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-makr-yellow">H1 Heading - 4xl</h1>
                  <h2 className="text-3xl font-bold text-makr-yellow">H2 Heading - 3xl</h2>
                  <h3 className="text-2xl font-bold text-makr-yellow">H3 Heading - 2xl</h3>
                  <h4 className="text-xl font-bold text-makr-yellow">H4 Heading - xl</h4>
                  <h5 className="text-lg font-bold text-makr-yellow">H5 Heading - lg</h5>
                  <h6 className="text-base font-bold text-makr-yellow">H6 Heading - base</h6>
                </div>
              </div>

              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Body Text</h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-300">
                    Large body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="text-base text-gray-300">
                    Regular body text - Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-sm text-gray-400">
                    Small text - Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="text-xs text-gray-500">
                    Extra small text - Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Code & Terminal</h3>
                <div className="space-y-4">
                  <code className="block p-3 bg-black border border-makr-blue/30 rounded text-green-400">
                    const makrx = new MakrXAPI();<br/>
                    makrx.connect();<br/>
                    console.log("Connected to MakrX ecosystem");
                  </code>
                  <div className="p-3 bg-black border border-makr-blue/30 rounded">
                    <div className="text-makr-blue text-sm mb-1">makrx@terminal:~$</div>
                    <div className="text-green-400">npm install @makrx/sdk</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Forms Tab */}
          {selectedTab === "forms" && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-6">FORM_ELEMENTS.demo()</h2>
              
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Input Fields</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Text Input</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 bg-black border border-makr-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-makr-yellow/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Input</label>
                    <input
                      type="email"
                      placeholder="user@makrx.org"
                      className="w-full px-4 py-2 bg-black border border-makr-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-makr-yellow/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Select Menu</label>
                    <select className="w-full px-4 py-2 bg-black border border-makr-blue/30 rounded-lg text-white focus:outline-none focus:border-makr-yellow/50 transition-colors">
                      <option>Choose an option</option>
                      <option>3D Printing</option>
                      <option>CNC Machining</option>
                      <option>Laser Cutting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">File Upload</label>
                    <input
                      type="file"
                      className="w-full px-4 py-2 bg-black border border-makr-blue/30 rounded-lg text-white file:bg-makr-blue/20 file:border-0 file:text-makr-blue file:px-3 file:py-1 file:rounded-md file:mr-3"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Textarea</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project..."
                    className="w-full px-4 py-2 bg-black border border-makr-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-makr-yellow/50 transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Checkboxes & Radio Buttons</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Services (Multiple)</h4>
                    <div className="space-y-2">
                      {["3D Printing", "CNC Machining", "Laser Cutting", "PCB Assembly"].map((service) => (
                        <label key={service} className="flex items-center">
                          <input type="checkbox" className="w-4 h-4 text-makr-blue bg-black border-makr-blue/30 rounded focus:ring-makr-blue focus:ring-2" />
                          <span className="ml-2 text-gray-300">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Account Type (Single)</h4>
                    <div className="space-y-2">
                      {["Maker", "Makerspace Owner", "Service Provider"].map((type) => (
                        <label key={type} className="flex items-center">
                          <input type="radio" name="accountType" className="w-4 h-4 text-makr-blue bg-black border-makr-blue/30 focus:ring-makr-blue focus:ring-2" />
                          <span className="ml-2 text-gray-300">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Icons Tab */}
          {selectedTab === "icons" && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-makr-yellow mb-6">ICON_LIBRARY.showcase()</h2>
              
              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Interface Icons</h3>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                  {[Settings, User, Mail, Phone, Globe, Heart, Star, Zap].map((Icon, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-makr-blue/20 border border-makr-blue/50 rounded-lg flex items-center justify-center mx-auto mb-2 hover:bg-makr-blue/30 transition-colors">
                        <Icon className="w-6 h-6 text-makr-blue" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Status Icons</h3>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                  {[CheckCircle, AlertTriangle, XCircle, Info].map((Icon, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Icon className={`w-6 h-6 ${
                          index === 0 ? 'text-green-400' :
                          index === 1 ? 'text-makr-yellow' :
                          index === 2 ? 'text-red-400' : 'text-makr-blue'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-makr-blue mb-4">Theme Icons</h3>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                  {[Sun, Moon, Monitor, Palette].map((Icon, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-makr-yellow/20 border border-makr-yellow/50 rounded-lg flex items-center justify-center mx-auto mb-2 hover:bg-makr-yellow/30 transition-colors">
                        <Icon className="w-6 h-6 text-makr-yellow" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto px-6 mt-16 pt-8 border-t border-makr-blue/30">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              This demo showcases MakrX's cyberpunk design system with consistent theming, 
              color palettes, and component styling.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/docs" className="text-makr-blue hover:text-makr-yellow transition-colors">
                View Documentation
              </a>
              <span className="text-gray-600">•</span>
              <a href="/" className="text-makr-blue hover:text-makr-yellow transition-colors">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}