import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ObjectiveSection = () => {
  return (
    <TooltipProvider>
      <section className="pt-16 sm:pt-20 pb-4 sm:pb-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
              <span className="text-foreground">L'HEURE</span>{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">EST VENUE</span>
            </h2>
            
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-items-center max-w-6xl mx-auto mb-6 sm:mb-8">
              
              {/* LES LIEUX ATTENDENT */}
              <div className="flex justify-center animate-scale-in">
                <div className="w-full max-w-xs sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-68 lg:h-80 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-green-400/60 hover:ring-4 hover:ring-green-400/30 cursor-pointer">
                  <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 md:mb-3">🏡</div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-green-700 dark:text-green-300 mb-1 sm:mb-2 tracking-wide text-center">DES ESPACES PRÊTS<br />À RENAÎTRE</h3>
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1 sm:mb-2 md:mb-3 text-center">Des milliers de villages où tout reste à inventer</p>
                  <div className="space-y-1 text-center text-xs">
                    <p className="text-green-600 dark:text-green-400">30 800 communes rurales</p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-green-600 dark:text-green-400 cursor-help underline decoration-dotted">3 500 tiers-lieux en mouvement</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Espaces partagés mêlant coworking, ateliers, culture et convivialité</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-green-600 dark:text-green-400">150 000 hectares en friches</p>
                    <p className="text-green-600 dark:text-green-400 italic">Terres endormies qui n'attendent que vos projets</p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-green-600 dark:text-green-400 cursor-help underline decoration-dotted">1 500 écolieux actifs</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Lieux de vie collectifs écologiques et solidaires</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-green-600 dark:text-green-400">5 000+ fermes disponibles</p>
                    <p className="text-green-600 dark:text-green-400 italic text-xs">Pour cultiver l'avenir autrement</p>
                    <div className="w-6 sm:w-8 md:w-12 h-px bg-green-500 my-1 sm:my-2 mx-auto"></div>
                    <p className="text-xs font-black text-green-700 dark:text-green-200 mb-4 sm:mb-6 italic">Les terres se libèrent, les murs s'ouvrent</p>
                  </div>
                </div>
              </div>

              {/* LES OUTILS FONCTIONNENT */}
              <div className="flex justify-center animate-scale-in">
                <div className="w-full max-w-xs sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-68 lg:h-80 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-blue-400/60 hover:ring-4 hover:ring-blue-400/30 cursor-pointer">
                  <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 md:mb-3">⚙️</div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-blue-700 dark:text-blue-300 mb-1 sm:mb-2 tracking-wide text-center">SOLUTIONS CONCRÈTES<br />ET OPÉRATIONNELLES</h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2 md:mb-3 text-center">Solutions éprouvées et gratuites</p>
                  <div className="space-y-1 text-center text-xs">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-blue-600 dark:text-blue-400 cursor-help underline decoration-dotted">Decidim, Loomio testés</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Decidim - plateforme de démocratie participative | Loomio - outil de décision collective</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-blue-600 dark:text-blue-400 cursor-help underline decoration-dotted">HelloAsso : 20k associations</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Plateforme gratuite de paiement et billetterie pour associations - helloasso.com</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-blue-600 dark:text-blue-400 cursor-help underline decoration-dotted">Open Collective transparent</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Gestion financière transparente pour collectifs - opencollective.com</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-blue-600 dark:text-blue-400 cursor-help underline decoration-dotted">Terre de Liens collectif</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Mouvement citoyen qui achète des terres pour installer des paysans bio - terredeliens.org</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-blue-600 dark:text-blue-400 cursor-help underline decoration-dotted">SCIC, SCI rodés</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>SCIC - Société Coopérative d'Intérêt Collectif | SCI - Société Civile Immobilière, structures juridiques pour projets collectifs</p>
                      </TooltipContent>
                    </Tooltip>
                    <div className="w-6 sm:w-8 md:w-12 h-px bg-blue-500 my-1 sm:my-2 mx-auto"></div>
                    <p className="text-xs font-black text-blue-700 dark:text-blue-200 mb-4 sm:mb-6 italic">Pas besoin de réinventer, juste de s'approprier</p>
                  </div>
                </div>
              </div>

              {/* LES FORCES VIVES BOUILLONNENT - Prend toute la largeur sur mobile, normal sur desktop */}
              <div className="flex justify-center animate-scale-in col-span-2 sm:col-span-1">
                <div className="w-full max-w-xs sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-68 lg:h-80 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-purple-400/60 hover:ring-4 hover:ring-purple-400/30 cursor-pointer">
                  <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 md:mb-3">✊</div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-purple-700 dark:text-purple-300 mb-1 sm:mb-2 tracking-wide text-center">L'ÉNERGIE HUMAINE<br />EST LÀ</h3>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2 md:mb-3 text-center">1 million de personnes prêtes</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic mb-2">Cherchent un projet qui fait sens</p>
                  <div className="space-y-1 text-center text-xs">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-purple-600 dark:text-purple-400 cursor-help underline decoration-dotted">200k néo-ruraux depuis 2020</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Citadins ayant quitté la ville pour s'installer à la campagne</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-purple-600 dark:text-purple-400">50k+ porteurs agricoles</p>
                    <p className="text-purple-600 dark:text-purple-400 italic text-xs">Nouvelle génération d'agriculteurs en devenir</p>
                    <p className="text-purple-600 dark:text-purple-400">30k jeunes cherchent terres</p>
                    <p className="text-purple-600 dark:text-purple-400 italic text-xs">Pour cultiver leur autonomie</p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-purple-600 dark:text-purple-400 cursor-help underline decoration-dotted">Réseaux CIVAM, MRJC actifs</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>CIVAM - Centres d'Initiatives pour Valoriser l'Agriculture et le Milieu rural | MRJC - Mouvement Rural de Jeunesse Chrétienne</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-purple-600 dark:text-purple-400 cursor-help underline decoration-dotted">100k+ membres AMAP</p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Association pour le Maintien d'une Agriculture Paysanne - circuits courts producteur-consommateur</p>
                      </TooltipContent>
                    </Tooltip>
                    <div className="w-6 sm:w-8 md:w-12 h-px bg-purple-500 my-1 sm:my-2 mx-auto"></div>
                    <p className="text-xs font-black text-purple-700 dark:text-purple-200 mb-4 sm:mb-6 italic">L'énergie est là, reste à la canaliser ensemble</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RELIONS-NOUS Section */}
            <div className="flex justify-center py-4 sm:py-6 animate-fade-in">
              <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">RELIONS</span> - NOUS.
                </h3>
                <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-6 sm:p-8 md:p-10 max-w-3xl mx-auto">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Lieux • Cagnottes • Votes
                  </h4>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                    On ne part pas de zéro. Les initiatives existent, les outils sont prêts, les énergies convergent.<br className="hidden sm:block" />
                    <span className="text-primary font-semibold">Il ne manque que le fil qui relie tout ça pour faire basculer nos territoires vers l'autonomie choisie.</span>
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mt-4 sm:mt-6 md:mt-8">
                  <button className="w-full sm:w-auto btn-cta-blue px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm">
                    ADHÉRER
                  </button>
                  <a 
                    href="https://test24.lasuitedumonde.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto btn-cta-orange px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm"
                  >
                    INVESTIR LOCALEMENT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </TooltipProvider>
  );
};

export default ObjectiveSection;