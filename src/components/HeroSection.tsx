import { Button } from "@/components/ui/button";
import { ChevronRight, Network, Users, Globe, Zap, Shield, Star } from "lucide-react";
import communityGathering from "/lovable-uploads/0a3e519a-7871-4f9d-9d79-393c652214ee.png";
import heroPortrait from "/lovable-uploads/53182d9e-f20d-4927-8092-8aefbc7458f6.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-128 h-128 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered Ultra-Modern Layout */}
          <div className="text-center space-y-12 mb-16">
            {/* Main Title with Holographic Effect */}
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl block">
                  RÉSEAU
                </span>
                <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl">
                  COMMUNES
                </span>
              </h1>
              
              {/* Holographic Lines */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
            </div>
            
            {/* Subtitle with Glitch Effect */}
            <div className="relative">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 drop-shadow-lg mb-8 tracking-wider">
                SYSTÈME D'ACTIVATION TERRITORIALE
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-full w-full animate-pulse"></div>
            </div>
            
            {/* Stats with Futuristic Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-40 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">10K</div>
                  <div className="text-cyan-300 font-semibold">PIONNIERS</div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-40 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                  <div className="flex items-center justify-center mb-4">
                    <Zap className="w-12 h-12 text-purple-400" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">1M€</div>
                  <div className="text-purple-300 font-semibold">FONDS</div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-40 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                  <div className="flex items-center justify-center mb-4">
                    <Globe className="w-12 h-12 text-emerald-400" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">20</div>
                  <div className="text-emerald-300 font-semibold">TERRITOIRES</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Revolutionary Membership Cards */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* DAO Cards */}
            <div className="grid gap-8">
              {/* Local Card */}
              <div className="group relative overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                <div className="relative bg-black/50 backdrop-blur-2xl rounded-3xl p-10 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 group-hover:scale-105">
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-3xl"></div>
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <Network className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-3xl font-black text-cyan-400">10€</div>
                        <div className="text-lg text-cyan-300/80">+ prix libre</div>
                      </div>
                      
                      <h3 className="text-2xl font-black text-white mb-3 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                        ADHÉSION LOCALE
                      </h3>
                      
                      <p className="text-white/80 text-lg font-medium leading-relaxed">
                        Habitants unis, projets réalisés
                      </p>
                      
                      {/* Tech Details */}
                      <div className="flex items-center space-x-4 mt-4 text-cyan-300/60 text-sm">
                        <Shield className="w-4 h-4" />
                        <span>Gouvernance Locale</span>
                        <Star className="w-4 h-4" />
                        <span>Impact Direct</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
              
              {/* Architect Card */}
              <div className="group relative overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-800 rounded-3xl blur-lg opacity-50 group-hover:opacity-100 transition-all duration-700 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="relative bg-black/50 backdrop-blur-2xl rounded-3xl p-10 border-2 border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 group-hover:scale-105">
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 rounded-3xl"></div>
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <Globe className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="text-3xl font-black text-emerald-400 mb-4">100€</div>
                      
                      <h3 className="text-2xl font-black text-white mb-3 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                        ADHÉSION ARCHITECTE
                      </h3>
                      
                      <p className="text-white/80 text-lg font-medium leading-relaxed">
                        Territoires connectés, impact démultiplié
                      </p>
                      
                      {/* Tech Details */}
                      <div className="flex items-center space-x-4 mt-4 text-emerald-300/60 text-sm">
                        <Network className="w-4 h-4" />
                        <span>Réseau Global</span>
                        <Star className="w-4 h-4" />
                        <span>Scaling Effect</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>
            
            {/* Futuristic Image Section */}
            <div className="relative group">
              {/* Holographic Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              
              <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl p-4 border border-white/30 hover:border-white/50 transition-all duration-500">
                {/* Main image container */}
                <div className="relative w-full h-96 lg:h-[450px] xl:h-[550px] overflow-hidden rounded-2xl">
                  {/* Default image - Community gathering */}
                  <img 
                    src={communityGathering} 
                    alt="Rassemblement communautaire"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 group-hover:opacity-0"
                  />
                  
                  {/* Hover image - Portrait mystique */}
                  <img 
                    src={heroPortrait} 
                    alt="Portrait mystique"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 opacity-0 group-hover:opacity-100"
                  />
                  
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                  
                  {/* Scan Lines Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_98%,rgba(0,255,255,0.3)_100%)] bg-[length:100%_4px] opacity-20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Revolutionary CTA */}
          <div className="text-center">
            <div className="group relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <Button 
                size="lg"
                className="relative text-xl px-16 py-8 rounded-3xl bg-black/50 backdrop-blur-xl border-2 border-white/30 hover:border-white/60 text-white font-black tracking-wider hover:scale-105 transition-all duration-500 shadow-2xl"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ADHÉRER AU RÉSEAU
                </span>
                <ChevronRight className="w-6 h-6 ml-2 text-cyan-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;