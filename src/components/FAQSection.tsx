import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="title-with-underline text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Questions <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Fréquentes</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Trouvez les réponses aux questions les plus courantes sur La Suite du Monde</p>
          </div>

          <Tabs defaultValue="gouvernance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8 bg-muted/50 p-1 rounded-xl">
              <TabsTrigger 
                value="gouvernance" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold py-2 sm:py-3 px-2 sm:px-6 rounded-lg transition-all text-xs sm:text-sm"
              >
                🏛️ <span className="hidden sm:inline">GOUVERNANCE</span><span className="sm:hidden">GOV</span>
              </TabsTrigger>
              <TabsTrigger 
                value="financement" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold py-2 sm:py-3 px-2 sm:px-6 rounded-lg transition-all text-xs sm:text-sm"
              >
                💰 <span className="hidden sm:inline">FINANCEMENT</span><span className="sm:hidden">FIN</span>
              </TabsTrigger>
              <TabsTrigger 
                value="communaute" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold py-2 sm:py-3 px-2 sm:px-6 rounded-lg transition-all text-xs sm:text-sm"
              >
                🌱 <span className="hidden sm:inline">COMMUNAUTÉ</span><span className="sm:hidden">COM</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gouvernance" className="mt-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="legal" className="bg-card rounded-xl border border-border px-3 sm:px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm sm:text-base">
                    C'est légal ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    → 100% légal. Association loi 1901 + défiscalisation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="secte" className="bg-card rounded-xl border border-border px-3 sm:px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm sm:text-base">
                    C'est une secte ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    → Non. Zéro gourou, zéro doctrine. Juste de l'entraide.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="politique" className="bg-card rounded-xl border border-border px-3 sm:px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm sm:text-base">
                    C'est politique ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    → Apartisan. On travaille avec tous les maires motivés.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="financement" className="mt-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="adhesion" className="bg-card rounded-xl border border-border px-3 sm:px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm sm:text-base">
                    Je récupère quoi pour 100€ adhésion nationale ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    → Droit de vote + 10 nuits/an dans le réseau + impact réel.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="echec" className="bg-card rounded-xl border border-border px-3 sm:px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm sm:text-base">
                    Et si ça marche pas ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    → Remboursement 30 jours. Mais ça marche déjà.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="investissement" className="bg-card rounded-xl border border-border px-3 sm:px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm sm:text-base">
                    Comment investir via La Suite du Monde ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    → Choisissez votre territoire, votre montant, et devenez co-propriétaire d'un lieu d'exception.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="communaute" className="mt-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="village" className="bg-card rounded-xl border border-border px-3 sm:px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm sm:text-base">
                    Mon village peut participer ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    → Oui ! On cherche justement des territoires motivés.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="debut" className="bg-card rounded-xl border border-border px-3 sm:px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm sm:text-base">
                    Ça commence quand ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    → Maintenant.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rejoindre" className="bg-card rounded-xl border border-border px-3 sm:px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm sm:text-base">
                    Comment je rejoins l'aventure ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-sm sm:text-base">
                    → Adhésion en ligne + participation aux votes + investissement selon vos moyens.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;