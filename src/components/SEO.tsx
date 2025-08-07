import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

// Lightweight SEO helper without extra deps
export default function SEO({ title, description, canonical, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      return el;
    };

    if (description) {
      const metaDesc = ensureMeta("description");
      metaDesc.setAttribute("content", description);
    }

    const linkRel = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const href = canonical || window.location.href;
    if (linkRel) linkRel.href = href;
    else {
      const l = document.createElement("link");
      l.rel = "canonical";
      l.href = href;
      document.head.appendChild(l);
    }

    // Structured data
    const prev = document.getElementById("seo-jsonld");
    if (prev) prev.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "seo-jsonld";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, jsonLd]);

  return null;
}
