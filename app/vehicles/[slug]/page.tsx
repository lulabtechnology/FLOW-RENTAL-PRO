// app/vehicles/[slug]/page.tsx
import { notFound } from "next/navigation";
import ReservationForm from "@/components/ReservationForm";

const vehicles = [
  {
    slug: "scooter-150",
    id: "scooter-150",
    name: "Scooter 150cc",
    subtitle: "Perfecta para moverte suave por Bocas",
    description:
      "Scooter automática 150cc, ideal para parejas o viajeros que quieren moverse con flow por la isla.",
    image: "/inventory/scooter-150.jpg", // tú subes esta imagen luego
    tag: "Moto",
  },
  {
    slug: "honda-navi-100",
    id: "honda-navi-100",
    name: "Honda Navi 100cc",
    subtitle: "Ligera, divertida y fácil de manejar",
    description:
      "Moto tipo Navi 100cc, excelente consumo de gasolina y muy maniobrable para explorar sin estrés.",
    image: "/inventory/honda-navi-100.jpg",
    tag: "Moto",
  },
  {
    slug: "ebike-26",
    id: "ebike-26",
    name: 'Ebike Grande 26"',
    subtitle: "Más tamaño, más comodidad",
    description:
      "Ebike eléctrica aro 26, ideal para trayectos un poco más largos con asistencia eléctrica suave.",
    image: "/inventory/ebike-26.jpg",
    tag: "Ebike",
  },
  {
    slug: "ebike-20",
    id: "ebike-20",
    name: 'Ebike Pequeña 20"',
    subtitle: "Compacta y ágil para la ciudad",
    description:
      "Ebike eléctrica aro 20, súper compacta para moverte fácil entre las calles de Bocas.",
    image: "/inventory/ebike-20.jpg",
    tag: "Ebike",
  },
];

function findVehicle(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}

interface VehiclePageProps {
  params: { slug: string };
}

export default function VehiclePage({ params }: VehiclePageProps) {
  const vehicle = findVehicle(params.slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-950 to-black text-stone-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 lg:flex-row lg:items-start lg:gap-16">
        {/* IZQUIERDA: foto + info */}
        <div className="flex-1 space-y-6">
          <span className="inline-flex rounded-full bg-amber-500/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-amber-400">
            {vehicle.tag} · Flow Rental
          </span>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {vehicle.name}
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-xl">
            {vehicle.subtitle}
          </p>

          <p className="text-sm text-stone-400 max-w-xl">
            {vehicle.description}
          </p>

          <div className="relative mt-4 overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/40 shadow-2xl">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 text-xs text-stone-200">
              <div className="space-y-1">
                <div className="font-semibold tracking-wide">
                  Tarifas Flow Rental
                </div>
                <div className="text-[11px] text-stone-400">
                  Full Day (8:00 am – 6:30 pm) · $30.00
                </div>
                <div className="text-[11px] text-stone-400">
                  24 horas · $40.00
                </div>
              </div>
              <div className="text-right text-[11px] text-stone-500">
                * Se solicita depósito de seguridad y documento de identidad
                válido.
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="mt-4 rounded-3xl border border-stone-800 bg-stone-900/60 p-4 shadow-xl space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold">¿Dónde recoges tu ride?</h2>
                <p className="text-xs text-stone-400">
                  Flow Rental · Bocas del Toro, Panamá
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/PAMzQobYx7xv9YYg9"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-amber-500 px-3 py-1.5 text-[11px] font-semibold text-stone-950 hover:bg-amber-400"
              >
                Abrir en Maps
              </a>
            </div>
            <div className="mt-2 overflow-hidden rounded-2xl border border-stone-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4138!2d-82.246!3d9.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses-419!2spa!4v0000000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-52 w-full border-0"
              />
            </div>
          </div>
        </div>

        {/* DERECHA: formulario */}
        <div className="flex-1 max-w-xl lg:max-w-md">
          <ReservationForm
            vehicleId={vehicle.id}
            vehicleName={vehicle.name}
          />
        </div>
      </div>
    </div>
  );
}
