import { Play, Zap } from "lucide-react";

export const VideoShowcase = () => {
  return (
    <section className="py-24 sm:py-28 lg:py-36 bg-gradient-to-br from-makr-blue/10 via-purple-500/10 to-makr-yellow/10 border-t border-makr-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-makr-yellow/10 backdrop-blur-sm border border-makr-yellow/30 rounded-full px-6 py-2 mb-6">
            <Zap className="h-5 w-5 text-makr-yellow animate-pulse" />
            <span className="text-makr-yellow font-mono font-semibold tracking-wider">
              ECOSYSTEM IN ACTION
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-cyberpunk mb-4 sm:mb-6 font-mono">
            See MakrX in Action
          </h2>
          <p className="text-lg sm:text-xl text-dark-text-secondary max-w-3xl mx-auto px-4 font-mono">
            Watch how makers are transforming ideas into reality with our ecosystem
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-scale-in">
          <div className="aspect-video bg-dark-bg-secondary/50 backdrop-blur border border-makr-blue/30 rounded-2xl overflow-hidden shadow-neon-lg">
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300BCD4' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
              
              <button
                className="group relative w-20 h-20 bg-makr-yellow/90 backdrop-blur border border-makr-yellow/50 rounded-full flex items-center justify-center hover:bg-makr-yellow hover:scale-110 transition-all duration-300 shadow-neon-yellow"
                aria-label="Play video about MakrX ecosystem"
                onClick={() =>
                  alert(
                    "🚀 Video showcase coming soon! This will feature real maker stories, ecosystem tours, and project highlights.",
                  )
                }
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
                <Play
                  className="w-8 h-8 text-dark-bg-primary ml-1 group-hover:scale-110 transition-transform relative z-10"
                  aria-hidden="true"
                />
              </button>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-makr-blue rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-6 w-1 h-1 bg-makr-yellow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-terminal-green rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-makr-blue rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
          
          <p className="text-dark-text-muted mt-6 text-center font-mono">
            🎬 Watch how MakrX is transforming the maker ecosystem across India
          </p>
          
          {/* Video highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-4 card-cyberpunk">
              <div className="w-12 h-12 bg-makr-blue/10 border border-makr-blue/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-makr-blue font-mono font-bold">🏭</span>
              </div>
              <h3 className="font-semibold text-gradient-cyberpunk mb-2 font-mono">Makerspace Tours</h3>
              <p className="text-sm text-dark-text-secondary font-mono">See our state-of-the-art facilities</p>
            </div>
            
            <div className="text-center p-4 card-cyberpunk">
              <div className="w-12 h-12 bg-makr-yellow/10 border border-makr-yellow/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-makr-yellow font-mono font-bold">👥</span>
              </div>
              <h3 className="font-semibold text-gradient-cyberpunk mb-2 font-mono">Maker Stories</h3>
              <p className="text-sm text-dark-text-secondary font-mono">Real success stories from our community</p>
            </div>
            
            <div className="text-center p-4 card-cyberpunk">
              <div className="w-12 h-12 bg-terminal-green/10 border border-terminal-green/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-terminal-green font-mono font-bold">⚡</span>
              </div>
              <h3 className="font-semibold text-gradient-cyberpunk mb-2 font-mono">Live Projects</h3>
              <p className="text-sm text-dark-text-secondary font-mono">Projects being built right now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};