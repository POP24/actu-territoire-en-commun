import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";  
import ChatButton from "@/components/ChatButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FranceMap from "@/components/FranceMap";
import RegionProposalDialog from "@/components/RegionProposalDialog";
import { ChevronDown, ChevronUp } from "lucide-react";

const Vision = () => {
  const [isDeclarationExpanded, setIsDeclarationExpanded] = useState(false);

  const scrollToDeclaration = () => {
    const element = document.getElementById('declaration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Vision - La Suite du Monde" 
        description="Créons ensemble 1000 lieux d'accueil pour se rencontrer, expérimenter, s'entraider. Organiser la suite du monde."
      />
      <Header />
      
      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-[60vh] md:min-h-[65vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(/lovable-uploads/ae030518-6c8f-4494-9e81-4210b0f6c729.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h1 className="page-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              Vision
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              Organiser la suite
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Créons ensemble 1000 lieux d'accueil pour se rencontrer, expérimenter, s'entraider.
            </p>
          </ScrollReveal>
          <Button 
            onClick={scrollToDeclaration}
            className="btn-cta-blue px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            DÉCLARATION DE LA SUITE DU MONDE
          </Button>
        </div>
      </section>

      {/* Vision Section - 4 subsections */}
      <div className="bg-background">
        
        {/* 2.1 Vision principale */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Imaginez des territoires où l'on achète ensemble des lieux stratégiques
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Des espaces pour tester un autre mode de vie, se rencontrer, jardiner, transmettre, expérimenter et bifurquer ensemble.
              </p>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mt-4 leading-relaxed">
                La Suite du Monde bâtit un maillage vivant, solidaire et accueillant de lieux qui permettent à chacun de changer de vie sans risque, sans mobiliser tout son capital dès le départ.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FranceMap />
              </div>
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <RegionProposalDialog>
                    <Button className="btn-cta-orange px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      PROPOSER UNE IDÉE
                    </Button>
                  </RegionProposalDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2.2 Le maillon manquant */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
              Le maillon manquant : la rencontre
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Entre le rêve d'une autre vie et le saut dans l'inconnu, il manquait un espace. Un lieu pour se donner le temps.
              </p>
              
              <div className="bg-white/60 p-6 rounded-xl shadow-sm">
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    Le temps de rencontrer un territoire, ses habitants, ses possibles.
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    Le temps de tester des modes de vie, des métiers, des relations.
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    Le temps d'explorer sans mobiliser tout son capital, sans s'engager trop vite.
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    Le temps d'attendre de ne plus être seul avant de s'ancrer durablement.
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                Combien se sont précipités sur le premier corps de ferme, le premier habitat, portés par l'urgence du changement ? Combien ont investi toutes leurs ressources dans un lieu découvert en quelques semaines, pour réaliser ensuite que ce n'était pas là qu'ils pourraient vivre des décennies heureuses ?
              </p>

              <p className="text-lg leading-relaxed">
                Ce que nous faisons ensemble, c'est de créer ce maillon manquant : des espaces transitoires où l'on peut se poser, respirer, expérimenter. Des lieux où l'erreur est permise, où les essais sont encouragés, où les rencontres façonnent progressivement le projet de vie qui nous correspond vraiment.
              </p>

              <p className="text-lg leading-relaxed">
                Ici, on peut jardiner sans posséder la terre. Construire sans s'endetter. Tisser des liens sans s'enfermer. Découvrir quel territoire nous appelle, quelles personnes résonnent avec nos aspirations, quelle vie nous voulons vraiment mener.
              </p>

              <p className="text-lg leading-relaxed">
                Ces lieux d'accueil temporaire sont les antichambres de l'engagement pérenne. Ils permettent de passer de la solitude du projet individuel à la force du collectif déjà constitué. De transformer l'angoisse du grand saut en une succession de petits pas conscients et choisis.
              </p>
            </div>
          </div>
        </section>

        {/* 2.3 Il est grand temps de s'entraider */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
              Il est grand temps de s'entraider
            </h2>
            <p className="text-lg text-center text-gray-700 mb-16 max-w-4xl mx-auto">
              Nous ne sommes pas seuls. Partout, des femmes et des hommes inventent de nouvelles formes de vie, plus autonomes et solidaires. La Suite du Monde facilite ces transitions en créant des passerelles entre ceux qui cherchent et ceux qui accueillent.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-green-800">Des terres et des liens</h3>
                <p className="mb-4 text-green-700 font-medium">Nous créerons des espaces d'accueil :</p>
                <ul className="space-y-3 mb-6 text-green-700">
                  <li className="flex items-center"><span className="text-green-500 mr-3">•</span>Campings partagés</li>
                  <li className="flex items-center"><span className="text-green-500 mr-3">•</span>Fermes collectives</li>
                  <li className="flex items-center"><span className="text-green-500 mr-3">•</span>Habitats légers</li>
                  <li className="flex items-center"><span className="text-green-500 mr-3">•</span>Espaces d'apprentissage</li>
                </ul>
                <p className="text-green-600 italic">Chaque lieu est une porte ouverte pour tester et s'installer.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-800">Les ressources à partager</h3>
                <p className="mb-4 text-blue-700 font-medium">Nous mutualiserons :</p>
                <ul className="space-y-3 mb-6 text-blue-700">
                  <li className="flex items-center"><span className="text-blue-500 mr-3">•</span>Outils et savoirs</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-3">•</span>Réseaux d'entraide</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-3">•</span>Moyens de production</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-3">•</span>Espaces de stockage</li>
                </ul>
                <p className="text-blue-600 italic">Rendre accessible ce qui semble hors de portée seul.</p>
              </div>
            </div>

            <div className="text-center space-x-4">
              <Button className="btn-cta-green px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                PROPOSER UN PARTENARIAT
              </Button>
              <Button className="btn-cta-blue px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                DEVENIR VOLONTAIRE
              </Button>
            </div>
          </div>
        </section>

        {/* 2.4 S'il fallait une raison : les enfants */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
              S'il fallait une raison : les enfants
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-gray-700">
              Si nous ne le faisons pas pour nous, faisons-le pour eux.
            </h3>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Pour celles et ceux qui arrivent, grandissent, observent — et nous regardent faire.
                Pour qu'ils puissent vivre demain dans un monde habitable, habité et accueillant.
              </p>

              <p className="text-lg leading-relaxed">
                Dans chaque lieu, nous créons des espaces pensés pour l'enfance :
                des bois à explorer, des jardins à cultiver, des cabanes à bâtir, des histoires à raconter.
                Des lieux où l'on apprend en vivant, où l'on joue sérieusement, où l'on découvre le réel avec ses mains, ses sens, son cœur.
              </p>

              <p className="text-lg leading-relaxed font-medium">Mais cela ne suffit pas.</p>

              <p className="text-lg leading-relaxed">
                Nous voulons soutenir les écoles alternatives, les pédagogies libres, les collectifs d'instruction, les familles qui cherchent des chemins d'émancipation.
                Offrir des campings qui deviennent aussi des écoles de la forêt, des villages de savoirs partagés, des points d'ancrage pour des éducations choisies, vivantes, joyeuses.
              </p>

              <p className="text-lg leading-relaxed">
                Soutenir les enfants, c'est aussi soutenir les parents.
                Créer un environnement accueillant pour les familles, faciliter le quotidien, ouvrir des temps de répit, de transmission, de complicité.
                Permettre aux mères et aux pères de ne pas être seuls, de s'entraider, de respirer.
                Et permettre aux aînés de transmettre, de vieillir entourés d'enfants et de rester utiles aux autres.
              </p>

              <p className="text-lg leading-relaxed">
                C'est pourquoi nous tissons un réseau global, maillé, autonome, intergénérationnel :
                Des lieux en lien les uns avec les autres, unis par une même volonté de préparer un monde plus doux, plus solidaire, plus fertile.
              </p>

              <div className="bg-white/70 p-8 rounded-xl shadow-sm border-l-4 border-orange-400 mt-8">
                <p className="text-lg leading-relaxed font-medium mb-4">Nous plantons des arbres aujourd'hui.</p>
                <p className="text-lg leading-relaxed mb-4">Mais pas seulement pour les voir pousser.</p>
                <p className="text-lg leading-relaxed italic text-orange-700">
                  Nous plantons des racines de confiance. Des structures d'accueil. Des graines de liberté.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Declaration Section */}
      <section id="declaration" className="py-16 px-4" style={{ backgroundColor: '#f8f7ef' }}>
        <div className="container mx-auto max-w-4xl">
          {/* Logo */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">LSM</span>
            </div>
            <h2 className="text-2xl font-bold mb-8 text-gray-800">EN QUELQUES MOTS</h2>
          </div>
          
          <div className="text-center mb-16">
            <p className="text-lg leading-relaxed text-gray-700">
              Face à l'effondrement en cours, la Suite du Monde acquiert puis libère des terres agricoles et biens immobiliers afin d'y développer des projets liés à l'habitat, la production agricole, l'énergie, l'organisation communaliste, l'événementiel, l'éducation, ou toute activité permettant davantage d'autonomie. Elle multiplie les activités de recherche, d'expérimentation et de conseil afin de rendre multipliables ces Communes Imaginées, connectées entre-elles.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Déclaration de la Suite du Monde
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>Nous voulons permettre l'autogestion de grappes de terrains de vie et de production,</p>
              <p>Nous voulons expérimenter une organisation communaliste afin de faire communs et communes,</p>
              <p>Nous voulons multiplier les pratiques coopératives locales et connectées entre elles,</p>
              <p>Nous voulons, face à l'effondrement écologique, économique, démocratique, nous organiser,</p>
              <p>Aussi nous convenons de déclarer "Communes Imaginées" les lieux, outils et moments qui nous rassemblent.</p>

              <div className="my-8"></div>

              <p>La Suite du Monde acquiert et contractualise à ces fins des terres et bâtis,</p>
              <p>Sur lesquels nous faisons le serment commun de nous confronter ensemble au monde,</p>
              <p>Le pacte de compter sur nos propres forces comme sources de nos libertés,</p>
              <p>Afin d'y vivre, apprendre, échanger et cultiver de façon solidaire,</p>
              <p>De préserver des terres de la prédation et de prendre soin du vivant,</p>
              <p>De veiller à la qualité de nos liens, tout en demeurant rejoignables.</p>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 italic">
                  Première rédaction le 25 novembre 2018, à Saint-Barthélemy-de-Bussière, France<br />
                  Commune Imaginée du Bandiat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le monde change très vite - Collapsible Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => setIsDeclarationExpanded(!isDeclarationExpanded)}
            className="w-full text-left mb-8 group"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 group-hover:text-primary transition-colors">
              Le monde change très vite
            </h2>
            <p className="text-xl text-center text-gray-600 mb-4">
              Beaucoup de privés, peu de communs.
            </p>
            <div className="flex justify-center">
              {isDeclarationExpanded ? (
                <ChevronUp className="w-6 h-6 text-gray-500 group-hover:text-primary transition-colors" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-500 group-hover:text-primary transition-colors" />
              )}
            </div>
          </button>
          
          {isDeclarationExpanded && (
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 animate-fade-in">
              <p>
                Monter des associations, des coopératives, des structures pour faire société et décider ensemble. Aider les communs, soutenir des collectifs, s'organiser encore, partout, mailler le territoire, se lier encore, toujours, porter des coups, prendre des lieux, tisser des complicités et bâtir, cultiver ensemble. Faire Commune. Prendre des communes. Occuper, bloquer, défaire ce qui oppresse : capitalisme, racisme, patriarcat, destruction du vivant. Faire ce qui émancipe.
              </p>

              <p>
                Il est dans le feu de ces diversités de tactiques aucune qui ne soit pas urgente, aucune à délaisser, aucune à ostraciser.
              </p>

              <p>
                Il est des écrans, de fumées, de flux, des voiles et des intérêts dressés contre nos colères. Il y a le confort plus encore que le conformisme. La peur aussi. Puissent-ils alors nous voler la peur.
              </p>

              <p>
                Des fragments de la suite du monde, se détachaient deux rives, plus que jamais liées. Nous vivions à la lisière. Du monde effondré, normé, d'aussi loin que leur fiction causait bruit, la clameur marchande avait peu à peu cessé de porter.
              </p>

              <p>
                C'était il y a un instant ou une éternité, maintenant et sans doute demain. Dans des fermes autonomes, vers la Commune, dans des marchés, dans des villages, dans des villes, dans des tiers-lieux, en campements. Un maillage intense et réprimé, joyeux et secret. Sous nos yeux et nos pieds crottés. Quand il ne s'agit plus d'occupation de temps ou de places mais d'habiter et vivre pleinement, d'être pris par la terre, les livres, le vent, le bois à fendre et les adventices, alors, de ces fragments d'ils et elles jaillit un NOUS! Inattendu si ce n'est inespéré, impréparé, sauvage, spontané. Sans Appel ni consigne. Juste une étincelle, dit-on : les prémices du printemps.
              </p>

              <p>
                Jamais nous n'avions été si multiples et déterminés. La veille encore, nul pourtant ne pressentit cette fougue. Quand le fleuve et les fous sortirent de leur lit, le courant fut si fort qu'il emporta digues et barrages, submergea les conforts préconstruits et emplit à jamais sillons et consciences de ponts d'attention. En chaque interstice étincelait l'impérieux besoin de réapprendre à VIVRE.
              </p>

              <p>
                Cette année-là, un archipel émergea. C'était la fin des États, de partout rongés par la liberté reprise de bosquets en vallées, cimes et bocages. Dans ces Communes Imaginées Autogérées, la fête dura mille ans. Si vous tendez l'oreille - cela demande un effort - vous en entendrez sans doute les premières notes, ténues, dans les flammes qui crépitent.
              </p>

              <div className="text-center my-12 bg-gray-50 p-8 rounded-xl">
                <p className="font-bold text-lg leading-relaxed">
                  Ventre mou de l'histoire,<br />
                  Tout s'effondre,<br />
                  L'ennemi s'organise,<br />
                  Lions-nous,<br />
                  Désertons,<br />
                  Pensons,<br />
                  Bâtissons,<br />
                  Pour lutter gaiement,<br />
                  Face au pire.
                </p>
              </div>

              <p>
                Casser le plan, dépasser le projet-profit, habiter le présent et ses lisières, dés-aménager, composer ensemble pour fracturer l'état-béton.
              </p>

              <p>
                Reprendre la ville. Les forêts. Du gris faire commune. Des espaces publics, un tableau vivant. Graffer nos rêves de Communes sur les murs aveugles de leurs métropoles.
              </p>

              <p>
                Des déclarations d'autochtonie, des forêts et communes libres, riches de complicités nouvelles : l'hiver est chaud quand on se lie.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Vision;