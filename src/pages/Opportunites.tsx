import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import campingCollectif from "@/assets/camping-collectif.jpg";

export default function Opportunites() {
  return (
    <>
      <SEO
        title="Opportunités — Campings & lieux à reprendre"
        description="Découvrez les sites étudiés par le collectif et proposez un lieu dans votre territoire."
      />
      <Header />
      <main className="container mx-auto px-6 pt-40 lg:pt-60 pb-16">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Les Campings à Rejoindre</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">Dossiers en étude, potentiels de reprise ou co‑exploitation. Filtrez par région, taille et budget.</p>

        <section className="mt-6 sm:mt-10">
          <div className="bg-card rounded-xl overflow-hidden shadow-soft ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg shadow-primary/20">
            <div className="flex flex-col lg:flex-row">
              {/* Image à gauche */}
              <div className="relative lg:w-1/2">
                <img src={campingCollectif} alt="Camping en commun - Dordogne" className="w-full h-64 lg:h-96 object-cover" loading="lazy" />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  EN COURS
                </div>
              </div>
              
              {/* Informations à droite */}
              <div className="p-6 lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Camping en commun - DORDOGNE</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[80px]">Lieu:</span>
                      <span>Dordogne, Périgord Vert</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[80px]">Surface:</span>
                      <span>4,3 hectares, 35 emplacements</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[80px]">Cadre:</span>
                      <span>Étang privé, piscine, infrastructures existantes</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[80px]">Budget:</span>
                      <span className="text-lg font-bold">775 000€</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[80px]">Financement:</span>
                      <span className="text-red-500 font-semibold">0% FINANCÉ</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-medium min-w-[80px]">Statut:</span>
                      <span>Ouverture de la campagne le 30 août 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" className="flex-1">Voir le dossier</Button>
                  <Button variant="default" className="flex-1">Rejoindre le projet</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 sm:mt-12 bg-card p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-soft">
          <h2 className="text-lg sm:text-2xl font-semibold mb-2">Proposer un camping</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">Vous connaissez un site à potentiel ? Partagez les infos clés et nous reviendrons vers vous.</p>
          <Button variant="hero" size="sm" className="text-sm sm:text-base">Soumettre un site</Button>
        </section>
      </main>
      <Footer />
    </>
  );
}