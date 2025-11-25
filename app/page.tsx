// app/page.tsx
import Link from "next/link";

const inventory = [
  {
    slug: "scooter-150",
    type: "Moto",
    name: "Scooter 150cc",
    desc: "Automática, cómoda y perfecta para recorrer Bocas con flow.",
    image: "/inventory/scooter-150.jpg", // tú subes esta imagen luego
    stock: 2,
  },
  {
    slug: "honda-navi-100",
    type: "Moto",
    name: "Honda Navi 100cc",
    desc: "Ligera, divertida y fácil de manejar para explorar la isla.",
    image: "/inventory/honda-navi-100.jpg",
    stock: 4,
  },
  {
    slug: "ebike-26",
    type: "Ebike",
    name: 'Ebike Grande 26"',
    desc: "Más comodidad y asistencia eléctrica suave para trayectos largos.",
    image: "/inventory/ebike-26.jpg",
    stock: 5,
  },
  {
    slug: "ebike-20",
    type: "Ebike",
    name: 'Ebike Pequeña 20"',
    desc: "Compacta, ágil y eléctrica para moverte fácil por Bocas.",
    image: "/inventory/ebike-20.jpg",
    stock: 4,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-black to-stone-900 text-stone-50">
      {/* HERO */}
      <main className="mx-auto max-w-6xl px-4 pt-20 pb-20">
        <section className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Texto principal */}
          <div className="max-w-xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
              Flow Rental · Bocas del Toro
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              Tu ride con{" "}
              <span className="text-amber-400">flow</span> en Bocas del Toro
            </h1>

            <p className="text-sm sm:text-base text-stone-300">
              Alquiler de <strong>motos</strong> y <strong>ebikes</strong> para
              que explores Bocas del Toro a tu ritmo. Full Day desde{" "}
              <span className="font-semibold text-amber-300">$30.00</span> o{" "}
              <span className="font-semibold text-amber-300">24 horas</span> por{" "}
              <span className="font-semibold text-amber-300">$40.00</span>.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-stone-800 bg-stone-900/80 p-4 text-xs text-stone-200 shadow-xl">
                <h2 className="text-sm font-semibold mb-1">
                  ¿Cómo funciona Flow Rental?
                </h2>
                <ul className="space-y-1 text-[11px] text-stone-300">
                  <li>1. Elige tu moto o ebike.</li>
                  <li>2. Envía tu solicitud con cédula y licencia.</li>
                  <li>3. Aprobamos tu reserva y recibes link de pago.</li>
                  <li>4. Pagas online y firmas contrato digital.</li>
                  <li>5. Solo llegas, recoges y sales con flow. 😎</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 justify-between rounded-3xl border border-amber-500/40 bg-amber-500/10 p-4 text-xs text-amber-50 shadow-xl">
                <div>
                  <h2 className="text-sm font-semibold mb-1">
                    Reserva rápida por WhatsApp
                  </h2>
                  <p className="text-[11px] text-amber-100/90">
                    ¿Prefieres hablar directo? Escríbenos y armamos tu reserva
                    al toque.
                  </p>
                </div>
                <a
                  href="https://wa.me/50765217465"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-4 py-2 text-xs font-semibold text-stone-950 hover:bg-amber-400 transition"
                >
                  Chatear por WhatsApp · +507 6521-7465
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta con logo + mapa mini */}
          <div className="w-full max-w-md space-y-4">
            <div className="rounded-3xl border border-stone-800 bg-stone-900/90 p-5 shadow-2xl flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 overflow-hidden rounded-3xl bg-stone-950 border border-stone-800 flex items-center justify-center">
                {/* Logo: tú subirás este archivo al /public */}
                <img
                  src="/images/flow-rental-logo.png"
                  alt="Flow Rental"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-center space-y-1">
                <div className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  Bocas del Toro · Panamá
                </div>
                <p className="text-sm text-stone-200">
                  Ubicados cerca del centro de Bocas. Te mandamos la ubicación
                  exacta al confirmar tu reserva.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-800 bg-stone-900/80 p-3 shadow-xl">
              <div className="flex items-center justify-between text-[11px] text-stone-300 mb-2">
                <span className="font-semibold">Ubicación en vivo</span>
                <a
                  href="https://maps.app.goo.gl/PAMzQobYx7xv9YYg9"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-500 px-3 py-1 font-semibold text-stone-950 hover:bg-amber-400"
                >
                  Abrir en Maps
                </a>
              </div>
              <div className="overflow-hidden rounded-2xl border border-stone-800">
                {/* Cuando quieras puedes reemplazar este iframe por el embed real de tu Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4138!2d-82.246!3d9.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses-419!2spa!4v0000000000000"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-40 w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INVENTARIO */}
        <section className="mt-16 space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Inventario disponible
              </h2>
              <p className="text-sm text-stone-400">
                Motos y ebikes listas para rodar hoy mismo. Pasa el mouse por
                encima para ver el detalle y haz click para reservar.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {inventory.map((item) => (
              <Link
                key={item.slug}
                href={`/vehicles/${item.slug}`}
                className="group rounded-3xl border border-stone-800 bg-stone-900/80 p-3 shadow-xl transition hover:border-amber-500/70 hover:bg-stone-900"
              >
                <div className="relative overflow-hidden rounded-2xl bg-stone-950">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition" />
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="rounded-full bg-black/60 px-3 py-1 font-semibold text-stone-100">
                        {item.type}
                      </span>
                      <span className="rounded-full bg-amber-500/90 px-3 py-1 font-semibold text-stone-950">
                        Full Day $30 · 24h $40
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-stone-50 drop-shadow">
                        {item.name}
                      </h3>
                      <p className="text-xs text-stone-200/90">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-stone-300">
                  <span>
                    Disponibles:{" "}
                    <span className="font-semibold text-amber-300">
                      {item.stock}
                    </span>
                  </span>
                  <span className="text-stone-400 group-hover:text-amber-300 transition">
                    Click para reservar →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PIE / ENLACE ADMIN */}
        <section className="mt-14 flex flex-col items-center gap-2 text-[11px] text-stone-500">
          <p>Flow Rental · Bocas del Toro, Panamá.</p>
          <p>Reservas y consultas: WhatsApp +507 6521-7465</p>
          <Link
            href="/admin"
            className="mt-2 rounded-full border border-stone-700 bg-stone-900/80 px-4 py-1.5 text-[11px] font-semibold text-stone-300 hover:border-amber-400 hover:text-amber-300"
          >
            Acceso administrador
          </Link>
        </section>
      </main>
    </div>
  );
}
