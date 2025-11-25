"use client";

import { useState } from "react";

type RentalType = "fullDay" | "24hours";

interface ReservationFormProps {
  vehicleId: string;
  vehicleName: string;
}

const rentalTypeLabels: Record<RentalType, string> = {
  fullDay: "Full Day (8:00 am – 6:30 pm) – $30.00",
  "24hours": "24 horas – $40.00",
};

export default function ReservationForm({
  vehicleId,
  vehicleName,
}: ReservationFormProps) {
  const [rentalType, setRentalType] = useState<RentalType>("fullDay");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      // Incluimos info del vehículo y tipo de renta
      formData.set("vehicleId", vehicleId);
      formData.set("vehicleName", vehicleName);
      formData.set("rentalType", rentalType);

      const res = await fetch("/api/reservations", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Error al enviar la reserva");
      }

      setMessage({
        type: "success",
        text:
          "Tu solicitud de reserva fue enviada. Te contactaremos por WhatsApp o correo para confirmar.",
      });
      form.reset();
      // restauramos el tipo por defecto
      setRentalType("fullDay");
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text:
          "Hubo un problema al enviar la reserva. Intenta de nuevo en unos minutos.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl rounded-3xl bg-stone-900/95 p-6 sm:p-8 text-stone-50 shadow-2xl border border-stone-800">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1">
        Reservar {vehicleName}
      </h2>
      <p className="text-sm text-stone-300 mb-5">
        Completa tus datos y la fecha. El equipo de Flow Rental revisará tu
        licencia y te confirmará por WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Tipo de alquiler */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-200">
            Tipo de alquiler
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setRentalType("fullDay")}
              className={`rounded-2xl border px-3 py-3 text-left text-sm transition ${
                rentalType === "fullDay"
                  ? "border-amber-400 bg-amber-500/10"
                  : "border-stone-700 bg-stone-900 hover:border-stone-500"
              }`}
            >
              <div className="font-semibold">Full Day</div>
              <div className="text-xs text-stone-300">
                8:00 am – 6:30 pm · $30.00
              </div>
            </button>

            <button
              type="button"
              onClick={() => setRentalType("24hours")}
              className={`rounded-2xl border px-3 py-3 text-left text-sm transition ${
                rentalType === "24hours"
                  ? "border-amber-400 bg-amber-500/10"
                  : "border-stone-700 bg-stone-900 hover:border-stone-500"
              }`}
            >
              <div className="font-semibold">24 horas</div>
              <div className="text-xs text-stone-300">$40.00</div>
            </button>
          </div>
          <p className="text-[11px] text-stone-400">
            El precio final puede variar por extras o daños. Se confirmará al
            momento de la entrega.
          </p>
        </div>

        {/* Nombre y apellido */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm outline-none focus:border-amber-400"
              placeholder="Nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              required
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm outline-none focus:border-amber-400"
              placeholder="Apellido"
            />
          </div>
        </div>

        {/* Cédula y licencia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              Cédula / Pasaporte
            </label>
            <input
              type="text"
              name="documentNumber"
              required
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm outline-none focus:border-amber-400"
              placeholder="8-000-000 o pasaporte"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              País de emisión
            </label>
            <input
              type="text"
              name="documentCountry"
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm outline-none focus:border-amber-400"
              placeholder="Panamá, Colombia, etc."
            />
          </div>
        </div>

        {/* Contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm outline-none focus:border-amber-400"
              placeholder="+507 6000-0000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm outline-none focus:border-amber-400"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        {/* Fecha y hora */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              Día de la reserva
            </label>
            <input
              type="date"
              name="pickupDate"
              required
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              Hora de recogida
            </label>
            <input
              type="time"
              name="pickupTime"
              required
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Fotos: cédula y licencia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              Foto de la cédula (frontal)
            </label>
            <input
              type="file"
              name="idPhoto"
              accept="image/*"
              required
              className="block w-full text-xs text-stone-300 file:mr-3 file:rounded-lg file:border-0 file:bg-amber-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-stone-900 hover:file:bg-amber-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-200 mb-1">
              Foto de la licencia
            </label>
            <input
              type="file"
              name="licensePhoto"
              accept="image/*"
              required
              className="block w-full text-xs text-stone-300 file:mr-3 file:rounded-lg file:border-0 file:bg-amber-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-stone-900 hover:file:bg-amber-400"
            />
          </div>
        </div>

        {/* Comentarios */}
        <div>
          <label className="block text-sm font-medium text-stone-200 mb-1">
            Comentarios o requisitos especiales
          </label>
          <textarea
            name="notes"
            rows={3}
            className="w-full rounded-xl border border-stone-700 bg-stone-900 px-3 py-2 text-sm outline-none focus:border-amber-400"
            placeholder="Ej. Necesito dos cascos, silla para niño, etc."
          />
        </div>

        {/* Mensaje de estado */}
        {message && (
          <div
            className={`text-sm rounded-xl px-3 py-2 ${
              message.type === "success"
                ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                : "bg-red-500/10 text-red-300 border border-red-500/40"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Botón */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud de reserva"}
        </button>

        <p className="text-[11px] text-stone-400 text-center">
          Al enviar este formulario aceptas que Flow Rental revise tu licencia
          y documentos antes de confirmar la reserva.
        </p>
      </form>
    </div>
  );
}
