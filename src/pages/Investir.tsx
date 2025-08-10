import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThirdwebConnect } from "@/components/ThirdwebConnect";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Investir() {
  const [amount, setAmount] = useState<number[]>([100]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Réseau des Communes",
    url: window.location.origin,
  };

  return (
    <>
      <SEO
        title="Investir dès 100€ — Réseau des Communes"
        description="Devenez co‑bâtisseur de communes autonomes. Adhésion dès 100€, gouvernance partagée, transparence."
        jsonLd={jsonLd}
      />
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-16">
        <header className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Investir dans des Communes Utiles</h1>
          <p className="text-muted-foreground text-lg">Votre contribution finance l’achat, la rénovation frugale et l’activation des lieux. 1 personne = 1 voix.</p>
        </header>

        <section aria-labelledby="montant" className="max-w-2xl mx-auto bg-card rounded-xl p-6 shadow-soft">
          <h2 id="montant" className="text-xl font-semibold mb-2">Choisissez votre montant</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">100€</span>
            <Slider value={amount} min={100} max={10000} step={50} onValueChange={setAmount} className="flex-1" />
            <span className="text-sm text-muted-foreground">10 000€</span>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold">{amount[0].toLocaleString()}€</p>
              <p className="text-sm text-muted-foreground">Contribution estimée</p>
            </div>
            <ThirdwebConnect label="Adhérer maintenant" />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Le capital est à risque. Ceci n’est pas un conseil financier.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mt-12" aria-label="Avantages">
          <article className="bg-card rounded-lg p-5 shadow-soft">
            <h3 className="font-semibold mb-1">Droit de vote</h3>
            <p className="text-sm text-muted-foreground">Décisions clés votées par les membres.</p>
          </article>
          <article className="bg-card rounded-lg p-5 shadow-soft">
            <h3 className="font-semibold mb-1">Transparence</h3>
            <p className="text-sm text-muted-foreground">Budgets et rapports trimestriels publiés.</p>
          </article>
          <article className="bg-card rounded-lg p-5 shadow-soft">
            <h3 className="font-semibold mb-1">Accès membre</h3>
            <p className="text-sm text-muted-foreground">Invitations aux ouvertures et priorités de réservation.</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
