import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Vision = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Vision — SDM DAO"
        description="Nous relions le monde qui émerge déjà partout. La France des territoires vivants naît maintenant."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        {/* Tech background similar to governance */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8">
              <span className="text-white">VISION</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-cyan-100 leading-relaxed">
              Notre vision pour les territoires vivants
            </p>
          </div>
        </div>
      </section>

      {/* Vision Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Vision Principale */}
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-foreground">
                L'HEURE EST VENUE
              </h2>
              
              <div className="max-w-4xl mx-auto text-sm sm:text-lg md:text-xl leading-relaxed space-y-6 sm:space-y-8 text-foreground/90">
                <p>Nous ne sommes pas en train de créer un nouveau monde.</p>
                <p>Nous relions celui qui émerge déjà partout.</p>
                
                <div className="space-y-4 my-12">
                  <p>Quand les fils seront tissés,</p>
                  <p>quand les communes seront reliées,</p>
                  <p>quand les caisses seront communes,</p>
                  <p>alors la France des territoires vivants sera née.</p>
                </div>
                
                <p className="text-xl md:text-2xl font-bold text-orange-500">
                  Pas demain. Maintenant.
                </p>
              </div>
            </div>

            {/* Vision Millénaire */}
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-elegant">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  🌈 UNE VISION MILLÉNAIRE, UNE ACTION IMMÉDIATE
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8 text-sm sm:text-lg md:text-xl leading-relaxed">
                <div className="text-center space-y-3 sm:space-y-4">
                  <p className="text-foreground/90">
                    Depuis des siècles, les peuples racines nous enseignent :
                  </p>
                  <blockquote className="text-base sm:text-xl md:text-2xl italic text-orange-600 font-medium">
                    "Quand la Terre sera malade, toutes les nations se rassembleront<br className="hidden sm:block" />
                    pour créer un nouveau monde." - Prophétie des Rainbow Warriors
                  </blockquote>
                  <p className="text-foreground/80 mt-4 sm:mt-6">
                    Cette vision n'appartient à aucune religion, aucun dogme.<br className="hidden sm:block" />
                    C'est le simple bon sens de ceux qui observent la nature.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mt-8 sm:mt-16">
                  {/* Ce que disent les anciens */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-white/20">
                    <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-orange-500">
                      CE QUE DISENT LES ANCIENS :
                    </h3>
                    <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-foreground/90">
                      <li>• <strong>Les Lakotas :</strong> "Mitakuye Oyasin" - Nous sommes tous reliés</li>
                      <li>• <strong>Les Aborigènes :</strong> Le temps du rêve où tout se reconnecte</li>
                      <li>• <strong>Les peuples d'Europe :</strong> Les commons, les biens communs du village</li>
                      <li>• <strong>Les anciens de partout :</strong> L'heure du tissage arrive</li>
                    </ul>
                  </div>

                  {/* Notre traduction moderne */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-white/20">
                    <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-orange-500">
                      NOTRE TRADUCTION MODERNE :
                    </h3>
                    <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-foreground/90">
                      <li>→ Créer des ponts entre les îlots isolés</li>
                      <li>→ Relier ce qui est déjà là mais dispersé</li>
                      <li>→ Fédérer sans uniformiser</li>
                      <li>→ Agir localement, penser en réseau</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;