import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Gouvernance() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Qui décide ?", acceptedAnswer: { "@type": "Answer", text: "1 personne = 1 voix. Les budgets et étapes clés sont votés par les membres." } },
      { "@type": "Question", name: "Comment est‑on informé ?", acceptedAnswer: { "@type": "Answer", text: "Rapports et budgets trimestriels publiés, comptes rendus accessibles." } }
    ]
  };

  return (
    <>
      <SEO
        title="Gouvernance — Une personne, une voix"
        description="Notre méthode de décision et de transparence pour gérer des lieux communs."
        jsonLd={jsonLd}
      />
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Gouverner Ensemble, Décider Clair</h1>
        <section className="grid md:grid-cols-3 gap-6">
          <article className="bg-card p-6 rounded-xl shadow-soft">
            <h2 className="font-semibold mb-1">1 personne = 1 voix</h2>
            <p className="text-sm text-muted-foreground">Chaque membre participe aux décisions majeures via des votes.</p>
          </article>
          <article className="bg-card p-6 rounded-xl shadow-soft">
            <h2 className="font-semibold mb-1">Budgets votés</h2>
            <p className="text-sm text-muted-foreground">Les budgets des territoires et des opportunités sont soumis au vote.</p>
          </article>
          <article className="bg-card p-6 rounded-xl shadow-soft">
            <h2 className="font-semibold mb-1">Transparence</h2>
            <p className="text-sm text-muted-foreground">Rapports trimestriels publics et charte accessible à tous.</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
