// app/pay/[reservationId]/page.tsx
import { notFound } from "next/navigation";
import { getReservationById } from "@/lib/reservations";

interface PayPageProps {
  params: { reservationId: string };
}

export default function PayPage({ params }: PayPageProps) {
  const reservation = getReservationById(params.reservationId);

  if (!reservation) {
    notFound();
  }

  const rentalLabel =
    reservation.rentalType === "fullDay"
      ? "Full Day (8:00 am – 6:30 pm) – $30.00"
      : "24 horas – $40.00";

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-black to-stone-900 text-stone-50">
      <div className="mx-auto max-w-xl px-4 pb-16 pt-24">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Pagar reserva
          </h1>
          <p className="mt-2 text-sm text-stone-400">
            Completa el pago para confirmar tu{" "}
            <span className="font-semibold text-stone-200">
              Flow Rental
            </span>{" "}
            en Bocas del Toro.
          </p>
        </div>

        <div className="mb-6 rounded-3xl border border-stone-800 bg-stone-900/80 p-4 shadow-xl space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] text-stone-500">Nombre</div>
              <div className="font-semibold">
                {reservation.firstName} {reservation.lastName}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-stone-500">Documento</div>
              <div>{reservation.documentNumber}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="text-[11px] text-stone-500">Vehículo</div>
              <div>{reservation.vehicleName}</div>
            </div>
            <div>
              <div className="text-[11px] text-stone-500">Tipo de alquiler</div>
              <div>{rentalLabel}</div>
            </div>
            <div>
              <div className="text-[11px] text-stone-500">Día</div>
              <div>{reservation.pickupDate}</div>
            </div>
            <div>
              <div className="text-[11px] text-stone-500">Hora de recogida</div>
              <div>{reservation.pickupTime}</div>
            </div>
          </div>

          {reservation.notes && (
            <div className="mt-2 rounded-2xl bg-stone-900 p-2 text-xs text-stone-300 border border-stone-800">
              {reservation.notes}
            </div>
          )}
        </div>

        <div className="mb-6 rounded-3xl border border-stone-800 bg-stone-900/80 p-4 text-sm space-y-3">
          <h2 className="text-base font-semibold">
            Paso final: pago seguro con BAC
          </h2>
          <p className="text-sm text-stone-300">
            Aquí va el botón / formulario del API de pagos de BAC Panamá. Cuando
            conectes el API, reemplazas este bloque por el componente de pago
            real.
          </p>

          <button
            disabled
            className="mt-2 w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-stone-950 opacity-60"
          >
            Botón de pago BAC (pendiente de integrar)
          </button>
        </div>

        <p className="text-xs text-stone-500 text-center space-y-1">
          <span className="block">
            Si tienes dudas, escríbenos directo a WhatsApp:
          </span>
          <a
            href="https://wa.me/50765217465"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-amber-400 hover:text-amber-300"
          >
            +507 6521-7465
          </a>
        </p>
      </div>
    </div>
  );
}
