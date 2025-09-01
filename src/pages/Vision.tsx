import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Vision() {
  const paroles = [
    {
      id: "memoire-terre",
      titre: "La mémoire de la Terre",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 8 L20 32 M8 20 L32 20" stroke="currentColor" strokeWidth="1"/>
          <circle cx="20" cy="14" r="2" fill="currentColor"/>
          <circle cx="20" cy="26" r="2" fill="currentColor"/>
          <circle cx="14" cy="20" r="2" fill="currentColor"/>
          <circle cx="26" cy="20" r="2" fill="currentColor"/>
        </svg>
      ),
      contenu: `La Terre se souvient d'un temps où chaque vallée avait sa voix, chaque montagne son gardien, chaque source son mystère partagé. Un temps où les humains savaient que marcher, c'est tisser. Que parler, c'est relier. Que vivre ensemble, c'est créer le monde.

Cette mémoire n'est pas perdue. Elle dort sous le béton, elle attend sous les champs de monoculture, elle pulse dans les dernières forêts. Elle vit surtout dans nos cellules, dans cette part de nous qui sait encore trembler devant un coucher de soleil, qui reconnaît le chant de la pluie, qui sent la parenté avec tout ce qui vit.

Le moment est venu de réveiller cette mémoire. Non pas pour retourner en arrière - il n'y a pas d'arrière. Mais pour reprendre le fil là où nous l'avons lâché et tisser maintenant la suite du monde.`
    },
    {
      id: "heure-retournement",
      titre: "L'heure du retournement",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 12 Q28 20 20 28 Q12 20 20 12" fill="currentColor" opacity="0.3"/>
          <circle cx="20" cy="20" r="3" fill="currentColor"/>
        </svg>
      ),
      contenu: `Nous vivons l'heure où le serpent se mord la queue. Où la ligne droite du progrès infini rencontre le mur du réel. Où la grande machine tousse, craque, révèle ses limites.

C'est l'heure terrible et magnifique où tout bascule.

Les peuples qui ont traversé des apocalypses nous l'enseignent : c'est dans l'effondrement que germe le renouveau. C'est quand la nuit est la plus noire que les étoiles deviennent guides. C'est quand tout semble perdu que l'essentiel se révèle.

Nous ne sommes pas la première humanité à vivre une fin du monde. Mais nous sommes peut-être la première à pouvoir consciemment choisir le monde d'après. À condition de nous souvenir que nous ne sommes pas les propriétaires de la Terre, mais ses enfants. Pas ses maîtres, mais ses apprentis.`
    },
    {
      id: "peuple-seuil",
      titre: "Le peuple du seuil",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <rect x="8" y="8" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 20 L32 20" stroke="currentColor" strokeWidth="2"/>
          <circle cx="15" cy="13" r="2" fill="currentColor"/>
          <circle cx="25" cy="27" r="2" fill="currentColor"/>
          <path d="M20 8 L20 32" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        </svg>
      ),
      contenu: `Nous sommes le peuple du seuil. Ni tout à fait dans l'ancien monde, ni encore dans le nouveau. Nous portons en nous les codes des deux réalités.

Nous connaissons la solitude des villes et la nostalgie des communautés.
Nous portons la blessure de la séparation et la mémoire de l'unité.
Nous avons goûté au poison de l'accumulation et nous cherchons la médecine du partage.

Cette position inconfortable est notre force. Nous sommes les traducteurs entre les mondes. Nous pouvons entendre les ancêtres et parler aux enfants à naître. Nous comprenons la langue des machines et nous réapprenons celle des arbres.

Notre génération n'est pas maudite. Elle est bénie de la plus grande responsabilité : tenir le pont pendant la grande traversée.`
    },
    {
      id: "prophetie-mycelium",
      titre: "La prophétie du mycélium",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <circle cx="20" cy="20" r="3" fill="currentColor"/>
          <path d="M20 20 L12 8 M20 20 L28 8 M20 20 L8 24 M20 20 L32 24 M20 20 L15 32 M20 20 L25 32" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="8" r="2" fill="currentColor"/>
          <circle cx="28" cy="8" r="2" fill="currentColor"/>
          <circle cx="8" cy="24" r="2" fill="currentColor"/>
          <circle cx="32" cy="24" r="2" fill="currentColor"/>
          <circle cx="15" cy="32" r="2" fill="currentColor"/>
          <circle cx="25" cy="32" r="2" fill="currentColor"/>
        </svg>
      ),
      contenu: `Sous la surface visible, dans l'obscurité fertile, quelque chose grandit. Comme le mycélium qui relie tous les arbres de la forêt, un réseau invisible se tisse entre ceux qui ont compris.

Ce réseau n'a pas de centre. Pas de chef. Pas de dogme. Il a mille nœuds et chaque nœud est souverain. Il pulse de l'intelligence collective de tous ceux qui le composent.

Quand un territoire souffre, le réseau le sent et envoie les nutriments.
Quand une solution émerge, elle voyage instantanément à tous les nœuds.
Quand une communauté s'éveille, elle active toutes les autres.

Cette prophétie n'est pas à venir. Elle est déjà là. Dans chaque jardin partagé, chaque cercle de parole, chaque cagnotte solidaire, le mycélium grandit. Invisible aux radars du vieux monde. Inarrêtable comme la vie elle-même.`
    },
    {
      id: "serment-vivant",
      titre: "Le serment du vivant",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <path d="M20 5 L25 15 L15 15 Z" fill="currentColor"/>
          <path d="M12 18 L28 18 L28 28 L12 28 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 22 L20 26 L28 14" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="35" r="3" fill="currentColor"/>
        </svg>
      ),
      contenu: `Nous ne sommes pas une organisation. Nous sommes un organisme.
Nous ne suivons pas un plan. Nous suivons le vivant.
Nous ne conquérons pas. Nous composons.

Voici notre serment :

Là où la terre est blessée, nous serons la médecine.
Là où les liens sont rompus, nous serons le fil.
Là où la parole est confisquée, nous serons le cercle.
Là où l'ancien meurt seul, nous serons la présence.
Là où l'enfant ne trouve pas sa place, nous serons le village.

Ce serment ne se prête pas. Il se vit.
Il ne s'écrit pas dans le marbre mais dans la chair du quotidien.
Il ne demande pas de mourir pour une cause mais de vivre pour la Vie.`
    },
    {
      id: "architecture-sacree",
      titre: "L'architecture sacrée du commun",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <polygon points="20,5 30,15 30,30 10,30 10,15" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="20" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15 25 L25 25 M17.5 28 L22.5 28" stroke="currentColor" strokeWidth="1"/>
          <path d="M20 5 L20 16" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
        </svg>
      ),
      contenu: `Le sacré n'est pas dans les temples. Il est dans l'espace entre nous quand nous créons ensemble.

Chaque territoire porte en lui une architecture invisible : les lignes de désir où les gens marchent vraiment, les points de rassemblement naturels où la vie converge, les seuils où les mondes se touchent.

Notre travail n'est pas d'imposer un plan mais de révéler ce qui est déjà là. De reconnaître les confluences naturelles. D'honorer les centres vivants. De protéger les bordures fertiles où la diversité foisonne.

Le commun n'est pas ce qui appartient à tous. C'est ce qui n'appartient à personne et dont tous prennent soin. C'est l'eau de la source, l'ombre du grand chêne, le four du village, la mémoire des anciens, le rire des enfants.

Créer des communs, c'est se souvenir que nous sommes communs. Issus de la même source. Tissés de la même étoffe. Promis au même retour.`
    },
    {
      id: "grande-respiration",
      titre: "La grande respiration",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 8 Q8 20 20 32 Q32 20 20 8" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M12 14 Q20 6 28 14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 26 Q20 34 28 26" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      contenu: `L'univers respire. Expansion, contraction. Systole, diastole. Inspire, expire.

Nous avons vécu cinq siècles d'expansion. De conquête. D'extraction. L'humanité occidentale a inspiré jusqu'à l'étouffement.

Vient maintenant le temps de l'expiration. Du retour. Du don.

Ce n'est pas une punition. C'est une grâce. Enfin nous pouvons relâcher. Enfin nous pouvons rendre. Enfin nous pouvons nous reposer dans quelque chose de plus grand que notre volonté de puissance.

Les territoires qui se réveillent sont les premiers à entrer dans cette nouvelle respiration. Ils inspirent du ciel et expirent vers la terre. Ils reçoivent l'ancien et enfantent le nouveau. Ils accueillent le blessé et libèrent le guéri.`
    },
    {
      id: "nous-sommes-medecine",
      titre: "Nous sommes la médecine",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <path d="M20 5 L20 35 M5 20 L35 20" stroke="currentColor" strokeWidth="3"/>
          <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 16 L24 24 M24 16 L16 24" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      contenu: `La maladie de ce temps a un nom : la séparation.
Séparation d'avec la nature. D'avec les autres. D'avec nous-mêmes. D'avec le sacré.

Mais toute maladie porte en elle sa médecine. Et la médecine de la séparation, c'est nous. Nous qui sentons la douleur de la coupure. Nous qui ne pouvons plus supporter l'isolement. Nous qui cherchons, parfois maladroitement, à retisser.

Nous sommes le système immunitaire de la Terre qui s'active. Les anticorps du vivant. La fièvre qui monte pour brûler ce qui doit mourir et protéger ce qui doit vivre.

Cette médecine n'est pas douce. Elle brûle parfois. Elle exige que nous lâchions nos armures, nos certitudes, nos conforts. Mais elle est la seule médecine. Et elle opère déjà.`
    },
    {
      id: "futur-ancien",
      titre: "Le futur est ancien",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 12 L20 20 L26 26" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="8" r="1.5" fill="currentColor"/>
          <circle cx="32" cy="20" r="1.5" fill="currentColor"/>
          <circle cx="20" cy="32" r="1.5" fill="currentColor"/>
          <circle cx="8" cy="20" r="1.5" fill="currentColor"/>
        </svg>
      ),
      contenu: `Le nouveau monde que nous cherchons n'est pas à inventer. Il est à se rappeler.

Les solutions sont millénaires : le cercle, le feu, le partage, la réciprocité, l'entraide, le respect, la célébration, la transmission.

La sagesse est éternelle : tout est lié, tout est vivant, tout est sacré, tout retourne à la source.

L'architecture est organique : des petites unités autonomes reliées en réseau, la diversité comme force, l'adaptation constante, la coopération plutôt que la compétition.

Nous ne sommes pas des révolutionnaires. Nous sommes des archéologues du futur. Nous déterrons ce qui a toujours été là, sous les couches de béton et d'oubli. Nous essuyons la poussière sur les vieux miroirs jusqu'à ce qu'ils reflètent à nouveau le ciel.`
    },
    {
      id: "maintenant",
      titre: "Maintenant",
      symbol: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary">
          <circle cx="20" cy="20" r="15" fill="currentColor" opacity="0.1"/>
          <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="20" cy="20" r="4" fill="currentColor"/>
          <path d="M20 5 L22 8 L18 8 Z" fill="currentColor"/>
        </svg>
      ),
      contenu: `Il n'y a pas de sauveur à attendre.
Il n'y a pas de moment plus propice.
Il n'y a pas de lieu plus adapté que là où vous êtes.
Il n'y a pas de meilleur équipement que vos mains nues et votre cœur ouvert.

Maintenant est le seul temps du verbe être.
Ici est le centre du monde.
Vous êtes le maillon exact qui manquait à la chaîne.

La Suite du Monde n'est pas une organisation que vous rejoignez.
C'est un mouvement qui vous traverse quand vous décidez de vivre en cohérence avec ce que vous savez être vrai.

Le territoire ne vous attend pas demain.
Il vous attend maintenant.
Il a toujours su que vous viendriez.

**Tout commence quand vous dites oui.**`
    }
  ];

  return (
    <>
      <SEO 
        title="Vision - Le Temps de la Grande Convergence | SDM DAO"
        description="Découvrez les dix paroles sacrées qui fondent notre vision d'un monde tissé de reliances, où chaque territoire retrouve sa souveraineté et sa connexion au vivant."
      />
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section avec background sombre et effets */}
        <section className="pt-40 lg:pt-60 pb-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white">
                Vision
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-cyan-100">
                Le Temps de la Grande Convergence
              </h2>
              <p className="text-xl text-cyan-200/80 max-w-3xl mx-auto leading-relaxed">
                Dix paroles sacrées pour tisser la suite du monde
              </p>
            </div>
          </div>
        </section>

        <main className="bg-gradient-to-br from-background via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 py-16">

          {/* Accordéon mystique des paroles */}
          <div className="max-w-5xl mx-auto mb-16">
            <Accordion type="single" collapsible className="space-y-4">
              {paroles.map((parole, index) => (
                <AccordionItem 
                  key={parole.id} 
                  value={parole.id}
                  className="border border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                        {parole.symbol}
                      </div>
                      <div>
                        <div className="text-sm text-primary font-medium mb-1">
                          {index + 1}ère parole
                        </div>
                        <div className="text-xl font-semibold text-foreground">
                          {parole.titre}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pt-4 border-t border-primary/10">
                      <div className="text-lg leading-relaxed text-foreground/90 whitespace-pre-line">
                        {parole.contenu}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Appel final mystique */}
          <section className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-2xl -z-10"></div>
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-4xl font-bold mb-8 text-primary">
                Tout commence quand vous dites oui
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                La Suite du Monde vous attend là où vous êtes, maintenant.
              </p>
            </div>
            
            {/* Boutons d'action cosmiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Button size="lg" className="h-16 text-base font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                ACTIVER MON<br />TERRITOIRE
              </Button>
              <Button size="lg" variant="outline" className="h-16 text-base font-semibold border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                REJOINDRE<br />UN CERCLE
              </Button>
              <Button size="lg" variant="outline" className="h-16 text-base font-semibold border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                CONTRIBUER<br />À LA CAGNOTTE
              </Button>
              <Button size="lg" variant="outline" className="h-16 text-base font-semibold border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                DEVENIR<br />TISSERAND
              </Button>
            </div>
          </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}