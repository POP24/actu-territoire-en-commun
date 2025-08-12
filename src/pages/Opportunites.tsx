import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import campingCollectif from "@/assets/camping-collectif.jpg";
import moulinLac from "@/assets/moulin-lac.jpg";
import masDomaine from "@/assets/mas-domaine.jpg";

export default function Opportunites() {
  return (
    <>
      <SEO
        title="Opportunités — Campings & lieux à reprendre"
        description="Découvrez les sites étudiés par le collectif et proposez un lieu dans votre territoire."
      />
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Les Campings à Rejoindre</h1>
        <p className="text-muted-foreground max-w-2xl">Dossiers en étude, potentiels de reprise ou co‑exploitation. Filtrez par région, taille et budget.</p>

        <section className="grid md:grid-cols-3 gap-6 mt-10">
          {[{img: campingCollectif, title: "Camping forêt vivante", region: "Dordogne", budget: "350–500 k€", isActive: true},
            {img: moulinLac, title: "Moulin au bord du lac", region: "Lot", budget: "500–800 k€", isActive: false},
            {img: masDomaine, title: "Mas & domaine agricole", region: "Alpes", budget: "700–900 k€", isActive: false}].map((card) => (
            <article 
              key={card.title} 
              className={`bg-card rounded-xl overflow-hidden shadow-soft transition-all duration-300 cursor-pointer group ${
                card.isActive 
                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-2' 
                  : 'hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              <div className="relative">
                <img src={card.img} alt={`${card.title} — ${card.region}`} className="w-full h-44 object-cover" loading="lazy" />
                {card.isActive && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                    EN COURS
                  </div>
                )}
                {card.isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 text-primary px-4 py-2 rounded-lg font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Cliquez pour voir le projet
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.region} • Budget: {card.budget}</p>
                <div className="mt-4 flex gap-2">
                  <Button variant="secondary">Voir le dossier</Button>
                  <Button variant={card.isActive ? "default" : "cta"}>
                    {card.isActive ? "Rejoindre le projet" : "Voter cette étape"}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 bg-card p-6 rounded-xl shadow-soft">
          <h2 className="text-2xl font-semibold mb-2">Proposer un camping</h2>
          <p className="text-muted-foreground mb-4">Vous connaissez un site à potentiel ? Partagez les infos clés et nous reviendrons vers vous.</p>
          <Button variant="hero">Soumettre un site</Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
