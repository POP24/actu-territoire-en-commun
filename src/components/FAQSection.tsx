import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              QUESTIONS <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">FRÉQUENTES</span>
            </h2>
            <p className="text-lg text-muted-foreground">Trouvez les réponses aux questions les plus courantes sur La Suite du Monde</p>
          </div>

          <Tabs defaultValue="gouvernance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1 rounded-xl">
              <TabsTrigger 
                value="gouvernance" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all"
              >
                🏛️ GOUVERNANCE
              </TabsTrigger>
              <TabsTrigger 
                value="financement" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all"
              >
                💰 FINANCEMENT
              </TabsTrigger>
              <TabsTrigger 
                value="communaute" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all"
              >
                🌱 COMMUNAUTÉ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gouvernance" className="mt-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="legal" className="bg-card rounded-xl border border-border px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    C'est légal ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    → 100% légal. Association loi 1901 + défiscalisation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="secte" className="bg-card rounded-xl border border-border px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    C'est une secte ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    → Non. Zéro gourou, zéro doctrine. Juste de l'entraide.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="politique" className="bg-card rounded-xl border border-border px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    C'est politique ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    → Apartisan. On travaille avec tous les maires motivés.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="financement" className="mt-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="adhesion" className="bg-card rounded-xl border border-border px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Je récupère quoi pour 100€ adhésion nationale ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    → Droit de vote + 10 nuits/an dans le réseau + impact réel.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="echec" className="bg-card rounded-xl border border-border px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Et si ça marche pas ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    → Remboursement 30 jours. Mais ça marche déjà.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="investissement" className="bg-card rounded-xl border border-border px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Comment investir via La Suite du Monde ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    → Choisissez votre territoire, votre montant, et devenez co-propriétaire d'un lieu d'exception.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="communaute" className="mt-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="village" className="bg-card rounded-xl border border-border px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Mon village peut participer ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    → Oui ! On cherche justement des territoires motivés.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="debut" className="bg-card rounded-xl border border-border px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Ça commence quand ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    → Maintenant.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rejoindre" className="bg-card rounded-xl border border-border px-6 py-2">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    Comment je rejoins l'aventure ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
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