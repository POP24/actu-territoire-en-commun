import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const territories = [
  { name: "Dordogne‑Périgord", desc: "Groupe local en formation", slug: "dordogne" },
  { name: "Alpes‑Rhône", desc: "Opportunités montagne", slug: "alpes" },
  { name: "Bretagne‑Finistère", desc: "Côtes et vallées", slug: "bretagne" },
];

export default function Territoires() {
  return (
    <>
      <SEO
        title="Territoires — Communautés locales"
        description="Rejoignez un groupe local pour sourcer, évaluer et opérer des lieux communs."
      />
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Les Territoires qui s’activent</h1>
        <section className="grid md:grid-cols-3 gap-6">
          {territories.map(t => (
            <article key={t.slug} className="bg-card rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold">{t.name}</h2>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-4 flex gap-2">
                <Button variant="secondary">Voir le groupe</Button>
                <Button variant="cta">Rejoindre</Button>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
