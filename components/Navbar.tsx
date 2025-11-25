import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-flow-cream/60 bg-sand/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="group inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-flow-dark text-flow-cream text-lg font-bold tracking-tight">
            F
          </div>
          <div className="leading-tight">
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-flow-dark/60">
              Flow Rental
            </span>
            <span className="block text-sm font-medium text-flow-dark">
              Motos & Ebikes · Bocas
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-flow-dark/80 md:flex">
          <a href="#servicios" className="hover:text-flow-dark">
            Servicios
          </a>
          <a href="#inventario" className="hover:text-flow-dark">
            Inventario
          </a>
          <a href="#ubicacion" className="hover:text-flow-dark">
            Ubicación
          </a>
          <Link
            href="/admin"
            className="rounded-full border border-flow-dark/10 px-3 py-1 text-xs font-semibold text-flow-dark/70 hover:border-flow-dark/40 hover:bg-flow-cream/80"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
