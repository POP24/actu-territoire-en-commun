import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Vision = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Vision — Le Réseau des Communes"
        description="Nous relions le monde qui émerge déjà partout. La France des territoires vivants naît maintenant."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              VISION
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Notre vision pour les territoires vivants
            </p>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Vision Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Vision Principale */}
            <div className="bg-white/5 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-elegant">
              <blockquote className="text-2xl md:text-3xl leading-relaxed text-center space-y-8">
                <p className="text-foreground/90">
                  "Nous ne sommes pas en train de créer un nouveau monde.
                </p>
                <p className="text-foreground/90">
                  Nous relions celui qui émerge déjà partout.
                </p>
                <p className="text-foreground/90 mt-12">
                  Quand les fils seront tissés,<br />
                  quand les communes seront reliées,<br />
                  quand les caisses seront communes,<br />
                  alors la France des territoires vivants sera née.
                </p>
                <p className="text-2xl md:text-4xl font-bold text-orange-500 mt-12">
                  Pas demain. Maintenant."
                </p>
              </blockquote>
            </div>

            {/* Vision Millénaire */}
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-12 shadow-elegant">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  🌈 UNE VISION MILLÉNAIRE, UNE ACTION IMMÉDIATE
                </h2>
              </div>

              <div className="space-y-8 text-lg md:text-xl leading-relaxed">
                <div className="text-center space-y-4">
                  <p className="text-foreground/90">
                    Depuis des siècles, les peuples racines nous enseignent :
                  </p>
                  <blockquote className="text-xl md:text-2xl italic text-orange-600 font-medium">
                    "Quand la Terre sera malade, toutes les nations se rassembleront<br />
                    pour créer un nouveau monde." - Prophétie des Rainbow Warriors
                  </blockquote>
                  <p className="text-foreground/80 mt-6">
                    Cette vision n'appartient à aucune religion, aucun dogme.<br />
                    C'est le simple bon sens de ceux qui observent la nature.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-16">
                  {/* Ce que disent les anciens */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold mb-6 text-orange-500">
                      CE QUE DISENT LES ANCIENS :
                    </h3>
                    <ul className="space-y-4 text-foreground/90">
                      <li>• <strong>Les Lakotas :</strong> "Mitakuye Oyasin" - Nous sommes tous reliés</li>
                      <li>• <strong>Les Aborigènes :</strong> Le temps du rêve où tout se reconnecte</li>
                      <li>• <strong>Les peuples d'Europe :</strong> Les commons, les biens communs du village</li>
                      <li>• <strong>Les anciens de partout :</strong> L'heure du tissage arrive</li>
                    </ul>
                  </div>

                  {/* Notre traduction moderne */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold mb-6 text-orange-500">
                      NOTRE TRADUCTION MODERNE :
                    </h3>
                    <ul className="space-y-4 text-foreground/90">
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