import Link from "next/link";
import Image from "next/image";
import { inventory } from "@/lib/inventory";
import type { Vehicle } from "@/lib/types";

const categories = [
  { id: "all", label: "Todo" },
  { id: "moto", label: "Motos" },
  { id: "ebike", label: "Ebikes" }
];

interface InventoryGridProps {
  activeCategory: "all" | "moto" | "ebike";
  onCategoryChange: (category: "all" | "moto" | "ebike") => void;
}

export default function InventoryGrid({
  activeCategory,
  onCategoryChange
}: InventoryGridProps) {
  const filtered: Vehicle[] =
    activeCategory === "all"
      ? inventory
      : inventory.filter((v) => v.category === activeCategory);

  return (
    <section
      id="inventario"
      className="bg-flow-cream/60 pb-14 pt-10 md:pb-16 md:pt-12"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">Elige tu Flow de hoy</h2>
            <p className="section-subtitle">
              Motos para moverte rápido y ebikes para disfrutar tranquilo. Todas
              incluyen casco y explicación rápida antes de salir.
            </p>
          </div>
          <div className="flex gap-2 rounded-full bg-sand/60 p-1 text-xs font-medium">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => onCategoryChange(c.id as any)}
                className={`rounded-full px-3 py-1.5 transition ${
                  activeCategory === c.id
                    ? "bg-flow-dark text-flow-cream shadow-soft"
                    : "text-flow-dark/70 hover:bg-flow-cream"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link
              href={`/reserve/${item.id}`}
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-sand shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                {/* Imagen: usa imageFileName dentro de /public/vehicles/ */}
                <div className="absolute inset-0 bg-gradient-to-tr from-flow-orange/25 via-transparent to-flow-teal/25" />
                <Image
                  src={`/vehicles/${item.imageFileName}`} // tú subes los archivos reales
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute left-3 top-3 flex gap-2 text-[0.65rem]">
                  <span className="badge-pill bg-flow-cream/90 text-[0.65rem]">
                    {item.category === "moto" ? "Moto" : "Ebike"}
                  </span>
                  <span className="badge-pill bg-flow-dark/80 text-flow-cream">
                    Pasa el mouse para ver
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <div>
                  <h3 className="text-base font-semibold text-flow-dark">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-flow-dark/55">
                    {item.model}
                  </p>
                  <p className="mt-1 text-xs text-flow-dark/75 line-clamp-2">
                    {item.details}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-2 rounded-2xl bg-flow-cream px-3 py-2 text-xs">
                  <div>
                    <p className="font-semibold text-flow-dark">
                      ${item.fullDayPrice.toFixed(2)}{" "}
                      <span className="text-[0.7rem] font-normal text-flow-dark/70">
                        · Full Day
                      </span>
                    </p>
                    <p className="text-[0.7rem] text-flow-dark/70">
                      {item.fullDayLabel}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-flow-dark">
                      ${item.twentyFourPrice.toFixed(2)}{" "}
                      <span className="text-[0.7rem] font-normal text-flow-dark/70">
                        · 24h
                      </span>
                    </p>
                    <p className="text-[0.7rem] text-flow-dark/70">
                      {item.twentyFourLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[0.7rem]">
                  <span className="text-flow-dark/60">
                    Click para reservar este vehículo
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-flow-dark text-flow-cream transition group-hover:bg-flow-orange">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
