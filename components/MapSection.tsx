export default function MapSection() {
  return (
    <section
      id="ubicacion"
      className="bg-sand pb-16 pt-10 md:pb-20 md:pt-14"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div>
            <h2 className="section-title">Dónde encontrar Flow Rental</h2>
            <p className="section-subtitle">
              Estamos en Bocas del Toro, Panamá. Abres el mapa y te lleva
              directo con nuestra ubicación en vivo para que llegues sin perder
              tiempo.
            </p>

            <div className="mt-6 space-y-2 text-sm text-flow-dark/80">
              <p>
                <span className="font-semibold">WhatsApp:</span>{" "}
                +507 6521-7465
              </p>
              <p>
                <span className="font-semibold">Horarios:</span> 8:00am – 6:30pm
                (entrega y devolución coordinada por WhatsApp).
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/PAMzQobYx7xv9YYg9?g_st=ipc"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-flow-dark px-5 py-2.5 text-sm font-semibold text-flow-cream shadow-soft hover:-translate-y-0.5 hover:bg-flow-orange"
            >
              Ver ubicación en Google Maps
            </a>

            <p className="mt-2 text-[0.75rem] text-flow-dark/65">
              *(Puedes reemplazar el enlace por un iframe de Google Maps
              embebido cuando quieras algo aún más integrado.)*
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-flow-dark/95 text-flow-cream shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,#f59e0b40,transparent_55%),radial-gradient(circle_at_100%_100%,#0f766e40,transparent_55%)]" />
            <div className="relative p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-flow-cream/70">
                Ubicación en vivo
              </p>
              <p className="mt-2 text-sm font-medium">
                Bocas del Toro, Panamá · Flow Rental
              </p>
              <p className="mt-1 text-xs text-flow-cream/80">
                Usa el botón “Ver en Google Maps” para abrir la ubicación en tu
                app o navegador y seguir la ruta hasta el local.
              </p>

              <div className="mt-4 h-52 rounded-2xl bg-gradient-to-br from-flow-cream/10 via-flow-teal/30 to-flow-orange/40">
                <div className="flex h-full flex-col items-center justify-center gap-2 text-xs text-flow-cream/90">
                  <span className="badge-pill bg-flow-dark/60 text-flow-cream">
                    Vista previa del mapa
                  </span>
                  <span className="text-center text-[0.7rem]">
                    Aquí puedes incrustar un iframe de Google Maps
                    <br />
                    cuando quieras mostrar el mapa directamente.
                  </span>
                </div>
              </div>

              <p className="mt-3 text-[0.7rem] text-flow-cream/75">
                También podemos añadir instrucciones especiales (punto de
                encuentro, referencias visuales, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
