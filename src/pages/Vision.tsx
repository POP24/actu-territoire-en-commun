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
      <section className="pt-40 lg:pt-60 pb-20 bg-black relative overflow-hidden">
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
              Réveiller les territoires vivants
            </p>
            <p className="text-sm sm:text-lg text-cyan-200/80 mt-4 max-w-3xl mx-auto">
              Nous sommes les tisserands d'une nouvelle trame - celle qui relie les peuples, les terres et les sagesses.
            </p>
          </div>
        </div>
      </section>

      {/* Déclaration de Reliance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-foreground">
                DÉCLARATION DE RELIANCE
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p className="font-medium">Nous reconnaissons que tout est déjà là.</p>
                <p>Les outils, les savoirs, les cœurs prêts à s'ouvrir.</p>
                <p>Il nous manque seulement de relier les points.</p>
                
                <div className="my-12 space-y-4 text-foreground/80">
                  <p>Imaginez des territoires qui se souviennent de leur pouvoir ancestral.</p>
                  <p>Des cercles de parole où la démocratie retrouve son essence première.</p>
                  <p>Des lieux où les sagesses millénaires rencontrent les défis contemporains.</p>
                </div>
                
                <p className="text-xl font-medium text-primary">
                  La Suite du Monde active un réseau de territoires autonomes et reliés, où chaque communauté locale devient gardienne de ses ressources et de ses liens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le temps du tissage */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              LE TEMPS DU TISSAGE
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-12 text-center text-primary">
              Relier ce qui a été séparé
            </h3>

            <div className="space-y-8 mb-16">
              <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <p className="text-lg leading-relaxed text-foreground/90">
                  Entre les peuples qui luttent et ceux qui cherchent, il manquait un pont.<br />
                  Entre les sagesses ancestrales et l'urgence du présent, il manquait une traduction.<br />
                  Entre les territoires isolés et la force du collectif, il manquait une trame.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 text-primary">Ce que nous tissons ensemble :</h4>
                <ul className="space-y-4 text-lg text-foreground/90">
                  <li>• Des cercles de vision où le bâton de parole circule, où chaque voix compte</li>
                  <li>• Des cagnottes territoriales pour que l'argent serve le vivant localement</li>
                  <li>• Des lieux physiques ouverts où s'expérimentent d'autres formes de vie</li>
                  <li>• Des ponts entre les luttes - de l'Amazonie aux ZAD, de la Guyane aux campagnes françaises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'humanité du cœur */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              L'HUMANITÉ DU CŒUR
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-12 text-center text-primary">
              Revenir à l'essentiel
            </h3>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  Nous savons que sans le cœur, les plus belles structures s'effondrent.<br />
                  Nous savons que la transformation commence par la connexion profonde - à soi, aux autres, au vivant.
                </p>
                
                <h4 className="text-xl font-bold mb-4 text-orange-500">Dans chaque territoire activé :</h4>
                <ul className="space-y-3 text-lg text-foreground/90">
                  <li>• La médecine des plantes retrouve sa place</li>
                  <li>• Les cercles autour du feu rallument la démocratie première</li>
                  <li>• Les différences deviennent richesses quand les cœurs s'ouvrent</li>
                  <li>• La lumière du regard occidental protège les terres menacées</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cartographier la reliance */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              CARTOGRAPHIER LA RELIANCE
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-12 text-center text-primary">
              Rendre visible l'invisible
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <h4 className="text-xl font-bold mb-6 text-primary">Les points de lumière :</h4>
                <ul className="space-y-3 text-lg text-foreground/90">
                  <li>• Territoires en lutte qui ont besoin de témoins</li>
                  <li>• Communautés qui expérimentent et transmettent</li>
                  <li>• Sagesses ancestrales qui demandent à circuler</li>
                  <li>• Lieux de rencontre entre les mondes</li>
                </ul>
              </div>

              <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20">
                <h4 className="text-xl font-bold mb-6 text-secondary">Les fils à tisser :</h4>
                <ul className="space-y-3 text-lg text-foreground/90">
                  <li>• Jumelages entre territoires du Nord et du Sud</li>
                  <li>• Échanges de savoirs et de médecines</li>
                  <li>• Soutiens financiers directs aux gardiens du vivant</li>
                  <li>• Présence physique là où la destruction opère dans l'ombre</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le serment des territoires */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              LE SERMENT DES TERRITOIRES
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-12 text-center text-primary">
              Notre engagement
            </h3>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 mb-12">
              <h4 className="text-xl font-bold mb-6 text-primary">Nous faisons le serment de :</h4>
              <ul className="space-y-4 text-lg text-foreground/90">
                <li><strong>Créer du nous</strong> - dépasser nos différences pour tisser le commun</li>
                <li><strong>Porter le regard</strong> - éclairer les zones d'ombre où le vivant souffre</li>
                <li><strong>Activer les liens</strong> - entre générations, entre peuples, entre territoires</li>
                <li><strong>Muscler le cœur</strong> - car c'est la clé de toute transformation durable</li>
              </ul>
            </div>

            <div className="text-center space-y-6 text-lg">
              <p className="text-foreground/90">Nous ne sommes pas des sauveurs.</p>
              <p className="text-foreground/90">Nous sommes des tisserands.</p>
              <p className="text-xl font-medium text-primary">Nous reconnectons ce qui n'aurait jamais dû être séparé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* L'appel */}
      <section className="py-20 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-foreground">
              L'APPEL
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-12 text-primary">
              Tout est là, il suffit de relier
            </h3>

            <div className="space-y-6 text-lg text-foreground/90 mb-12">
              <p>Si vous sentez que votre territoire appelle à être activé,</p>
              <p>Si vous portez des sagesses qui demandent à circuler,</p>
              <p>Si vous êtes prêts à mettre votre énergie au service du tissage,</p>
              <p className="text-xl font-bold text-primary">Rejoignez la trame.</p>
            </div>

            <div className="bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 mb-12">
              <blockquote className="text-lg italic text-foreground/90 mb-4">
                "Car comme le dit la prophétie des Rainbow Warriors :<br />
                Quand la Terre sera malade et les animaux mourront, une nouvelle tribu viendra de toutes les cultures, qui par ses actes redonnera vie à la Terre."
              </blockquote>
              
              <div className="space-y-3 text-xl font-bold">
                <p className="text-orange-500">Cette tribu, c'est nous.</p>
                <p className="text-yellow-600">Ce temps, c'est maintenant.</p>
                <p className="text-primary">Ces territoires, ce sont les nôtres.</p>
              </div>
              
              <div className="mt-8 space-y-2 text-lg">
                <p className="text-foreground">Tout est déjà là.</p>
                <p className="text-xl font-bold text-primary">Il ne reste qu'à tisser.</p>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                ACTIVER MON TERRITOIRE
              </button>
              <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                REJOINDRE UN CERCLE
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                CONTRIBUER À LA CAGNOTTE
              </button>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                DEVENIR TISSERAND
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;