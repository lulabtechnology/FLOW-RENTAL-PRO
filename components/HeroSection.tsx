import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-flow-cream/90 via-sand to-sand pb-12 pt-10 md:pb-16 md:pt-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          {/* Texto */}
          <div>
            <p className="badge-pill mb-4">
              <span className="h-2 w-2 rounded-full bg-flow-teal" />
              Alquiler fácil · Flow asegurado
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-flow-dark sm:text-5xl md:text-[3.2rem] md:leading-[1.02]">
              Motos y Ebikes para{" "}
              <span className="text-flow-orange">recorrer Bocas</span> con flow.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-flow-dark/75 md:text-base">
              Elige tu scooter, Honda Navi o ebike, reserva en línea y
              nosotros nos encargamos del resto. Full Day o 24 horas, tú
              decides el ritmo.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#inventario"
                className="inline-flex items-center justify-center rounded-full bg-flow-dark px-6 py-2.5 text-sm font-semibold text-flow-cream shadow-soft transition hover:-translate-y-0.5 hover:bg-flow-orange"
              >
                Ver motos y ebikes
              </a>
              <a
                href="https://wa.me/50765217465?text=Hola%20Flow%20Rental,%20quiero%20cotizar%20una%20moto%20o%20ebike."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-flow-dark/25 bg-flow-cream px-5 py-2.5 text-sm font-semibold text-flow-dark/80 hover:border-flow-dark/50"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-flow-dark/70">
              <div className="badge-pill">
                Full Day: 8:00am – 6:30pm · $30
              </div>
              <div className="badge-pill">24 horas: $40</div>
            </div>
          </div>

          {/* Tarjeta visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-flow-dark text-flow-cream shadow-soft">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#fbbf2430,transparent_60%),radial-gradient(circle_at_100%_100%,#0f766e30,transparent_55%)]" />
              <div className="relative space-y-3 px-5 py-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-flow-cream/70">
                  Flow Rental · Bocas del Toro
                </p>
                <p className="text-lg font-semibold">
                  Verano todo el año,
                  <br />
                  transporte sin complicaciones.
                </p>
                <div className="rounded-2xl bg-flow-cream/10 p-3 text-xs text-flow-cream/80">
                  <p className="font-semibold text-flow-cream">
                    Próxima salida confirmada
                  </p>
                  <p>Hoy · 8:00am – Scooter 150cc · 24h</p>
                  <p className="mt-1 text-[0.7rem]">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />{" "}
                    Contratos digitales · Pagos seguros BAC · Reservas online
                  </p>
                </div>
                <div className="flex items-center justify-between text-[0.7rem] text-flow-cream/70">
                  <span>Ubicación: Bocas del Toro, Panamá</span>
                  <span>+507 6521-7465</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
