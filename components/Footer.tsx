export default function Footer() {
  return (
    <footer className="border-t border-flow-cream/70 bg-flow-cream/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-flow-dark/70 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} Flow Rental. Todos los derechos reservados.</p>
        <p className="space-x-3 text-right">
          <span>WhatsApp: +507 6521-7465</span>
          <span className="hidden md:inline">·</span>
          <a
            href="https://wa.me/50765217465"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-flow-teal underline-offset-2 hover:underline"
          >
            Escribir ahora
          </a>
        </p>
      </div>
    </footer>
  );
}
