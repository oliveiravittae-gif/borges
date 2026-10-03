import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { catalog } from "@/data/catalog";
import { copy } from "@/data/site";
import { openWhatsApp } from "@/lib/whatsapp";

export function ProductCatalog() {
  const [line, setLine] = useState("Ferro");
  const [finish, setFinish] = useState("");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(6);
  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const finishes = [...new Set(catalog.filter((p) => p.line === line).map((p) => p.finish))];
  const products = catalog.filter(
    (p) =>
      p.line === line &&
      (!finish || p.finish === finish) &&
      normalize(p.name).includes(normalize(query)),
  );
  return (
    <section id="catalogo" className="section-space catalog-section scroll-mt-20">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-primary">Catálogo Borges</p>
            <h2 className="section-title mt-4">{copy.catalogTitle}</h2>
          </div>
          <p className="body-copy">{copy.catalogIntro}</p>
        </div>
        <div className="catalog-toolbar">
          <div className="catalog-tabs" aria-label="Material">
            {["Ferro", "Alumínio", "Madeira"].map((material) => (
              <button
                key={material}
                aria-pressed={line === material}
                onClick={() => {
                  setLine(material);
                  setFinish("");
                  setLimit(6);
                }}
              >
                {material}
              </button>
            ))}
          </div>
          <label>
            Acabamento
            <select
              value={finish}
              onChange={(e) => {
                setFinish(e.target.value);
                setLimit(6);
              }}
            >
              <option value="">Todos os acabamentos</option>
              {finishes.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </label>
          <label>
            Buscar modelo
            <input
              type="search"
              value={query}
              placeholder="Ex.: veneziana, portão, janela"
              onChange={(e) => {
                setQuery(e.target.value);
                setLimit(6);
              }}
            />
          </label>
        </div>
        <p className="catalog-count" role="status">
          {products.length} {products.length === 1 ? "modelo encontrado" : "modelos encontrados"} ·{" "}
          {copy.catalogNote}
        </p>
        <div className="catalog-grid">
          {products.slice(0, limit).map((product) => (
            <article key={product.id} className="catalog-product">
              <a
                href={`${import.meta.env.BASE_URL}${product.detail}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver ficha: ${product.name} — ${product.line} ${product.finish}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${product.image}`}
                  alt={`${product.name} — ${product.line} ${product.finish}`}
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <span>Ver ficha do produto ↗</span>
              </a>
              <div className="catalog-product-copy">
                <p className="eyebrow text-primary">
                  {product.line} · {product.finish}
                </p>
                <h3>{product.name}</h3>
                <Button
                  variant="ghost"
                  onClick={() =>
                    openWhatsApp({
                      source: "catalog",
                      category: product.line,
                      product: `${product.name} — ${product.line} ${product.finish}`,
                    })
                  }
                >
                  Consultar para meu pedido
                  <ArrowRight size={17} />
                </Button>
              </div>
            </article>
          ))}
        </div>
        {products.length === 0 && (
          <p className="body-copy">Nenhum modelo encontrado. Tente outro nome ou acabamento.</p>
        )}
        {limit < products.length && (
          <Button variant="outline" className="mt-8" onClick={() => setLimit(limit + 12)}>
            Ver mais modelos
            <ArrowRight size={17} />
          </Button>
        )}
      </div>
    </section>
  );
}
