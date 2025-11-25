// app/admin/page.tsx
"use client";

import { useEffect, useState } from "react";
import type { Reservation, ReservationStatus } from "@/lib/reservations";

const statusLabels: Record<ReservationStatus, string> = {
  pending: "Pendiente",
  approved: "Aprobada",
  declined: "Declinada",
};

const statusColors: Record<ReservationStatus, string> = {
  pending: "bg-amber-500/10 text-amber-300 border-amber-400/40",
  approved: "bg-emerald-500/10 text-emerald-300 border-emerald-400/40",
  declined: "bg-red-500/10 text-red-300 border-red-400/40",
};

type Filter = "today" | "future" | "all";

export default function AdminPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("today");
  const [error, setError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/reservations", { cache: "no-store" });
        const json = await res.json();
        setReservations(json.reservations ?? []);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las reservas.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const todayStr = new Date().toISOString().slice(0, 10);

  const filtered = reservations.filter((r) => {
    if (filter === "all") return true;
    if (filter === "today") return r.pickupDate === todayStr;
    if (filter === "future") return r.pickupDate >= todayStr;
    return true;
  });

  async function changeStatus(id: string, status: ReservationStatus) {
    try {
      setUpdatingId(id);
      const res = await fetch("/api/reservations", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Error al actualizar");
      }

      setReservations((prev) =>
        prev.map((r) => (r.id === id ? json.reservation : r))
      );
    } catch (err) {
      console.error(err);
      alert("No se pudo actualizar la reserva.");
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-black to-stone-900 text-stone-50">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Panel de reservas
            </h1>
            <p className="mt-1 text-sm text-stone-400">
              Revisa solicitudes, valida documentos y aprueba o declina las
              reservas de Flow Rental.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-stone-900/80 p-1 border border-stone-700">
            {(["today", "future", "all"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-2xl px-3 py-1.5 text-xs font-semibold transition ${
                  filter === f
                    ? "bg-amber-500 text-stone-950"
                    : "text-stone-300 hover:bg-stone-800/80"
                }`}
              >
                {f === "today"
                  ? "Hoy"
                  : f === "future"
                  ? "Próximas"
                  : "Todas"}
              </button>
            ))}
          </div>
        </header>

        {loading && (
          <p className="text-sm text-stone-400">Cargando reservas...</p>
        )}

        {error && (
          <p className="text-sm text-red-400 mb-4">
            {error}
          </p>
        )}

        {!loading && filtered.length === 0 && (
          <p className="text-sm text-stone-400">
            No hay reservas con este filtro.
          </p>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((r) => (
            <article
              key={r.id}
              className="rounded-3xl border border-stone-800 bg-stone-900/80 p-4 shadow-xl"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-stone-400">
                    {r.vehicleName}
                  </div>
                  <div className="text-sm font-semibold">
                    {r.firstName} {r.lastName}
                  </div>
                  <div className="text-xs text-stone-400">
                    {r.documentNumber}
                  </div>
                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${statusColors[r.status]}`}
                >
                  {statusLabels[r.status]}
                </span>
              </div>

              <div className="mb-3 grid grid-cols-2 gap-2 text-xs text-stone-300">
                <div>
                  <div className="text-[11px] text-stone-500">Día</div>
                  <div>{r.pickupDate}</div>
                </div>
                <div>
                  <div className="text-[11px] text-stone-500">Hora</div>
                  <div>{r.pickupTime}</div>
                </div>
                <div>
                  <div className="text-[11px] text-stone-500">WhatsApp</div>
                  <div>{r.phone}</div>
                </div>
                <div>
                  <div className="text-[11px] text-stone-500">Correo</div>
                  <div className="truncate">{r.email}</div>
                </div>
              </div>

              {r.notes && (
                <p className="mb-3 rounded-2xl bg-stone-900/90 p-2 text-xs text-stone-300 border border-stone-800">
                  {r.notes}
                </p>
              )}

              <div className="flex items-center justify-between gap-2 text-[11px] text-stone-500 mb-3">
                <div>
                  Tipo:{" "}
                  {r.rentalType === "fullDay"
                    ? "Full Day (8:00–18:30)"
                    : "24 horas"}
                </div>
                <div>Creada: {new Date(r.createdAt).toLocaleString()}</div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => changeStatus(r.id, "approved")}
                  disabled={updatingId === r.id || r.status === "approved"}
                  className="flex-1 rounded-2xl bg-emerald-500 px-3 py-2 text-xs font-semibold text-stone-950 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {updatingId === r.id && r.status !== "approved"
                    ? "Actualizando..."
                    : r.status === "approved"
                    ? "Aprobada"
                    : "Aprobar y enviar link de pago"}
                </button>
                <button
                  onClick={() => changeStatus(r.id, "declined")}
                  disabled={updatingId === r.id || r.status === "declined"}
                  className="rounded-2xl border border-red-500/60 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-200 hover:bg-red-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {r.status === "declined" ? "Declinada" : "Declinar"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
