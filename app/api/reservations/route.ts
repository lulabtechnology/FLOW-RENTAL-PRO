// app/api/reservations/route.ts
import { NextResponse } from "next/server";
import {
  createReservation,
  getReservations,
  updateReservationStatus,
  type ReservationStatus,
} from "@/lib/reservations";

// GET -> Lista todas las reservas (para el panel admin)
export async function GET() {
  const reservations = getReservations();
  return NextResponse.json({ reservations });
}

// POST -> Crear reserva (desde el formulario del cliente)
export async function POST(req: Request) {
  const formData = await req.formData();

  const rentalType = (formData.get("rentalType") as "fullDay" | "24hours") || "fullDay";

  const reservation = createReservation({
    vehicleId: String(formData.get("vehicleId") ?? ""),
    vehicleName: String(formData.get("vehicleName") ?? ""),
    rentalType,

    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    documentNumber: String(formData.get("documentNumber") ?? ""),
    documentCountry: (formData.get("documentCountry") as string) || "",

    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),

    pickupDate: String(formData.get("pickupDate") ?? ""),
    pickupTime: String(formData.get("pickupTime") ?? ""),

    notes: (formData.get("notes") as string) || "",

    // TODO: aquí luego subes los archivos a tu storage y guardas las URLs
    idPhotoUrl: null,
    licensePhotoUrl: null,
  });

  // Si quieres revisar qué está llegando:
  console.log("Nueva reserva creada:", reservation);

  return NextResponse.json({ ok: true, reservation }, { status: 201 });
}

// PATCH -> Cambiar status (aceptar / declinar) desde el panel admin
export async function PATCH(req: Request) {
  const body = await req.json();
  const { id, status } = body as {
    id?: string;
    status?: ReservationStatus;
  };

  if (!id || !status) {
    return NextResponse.json(
      { error: "id y status son requeridos" },
      { status: 400 }
    );
  }

  const updated = updateReservationStatus(id, status);
  if (!updated) {
    return NextResponse.json(
      { error: "Reserva no encontrada" },
      { status: 404 }
    );
  }

  if (status === "approved") {
    await sendApprovalEmail(updated);
  }

  return NextResponse.json({ ok: true, reservation: updated });
}

// Placeholder para el correo de aprobación.
// Aquí conectarás tu proveedor de correo (Resend, SendGrid, etc.)
async function sendApprovalEmail(reservation: {
  id: string;
  email: string;
  firstName: string;
}) {
  const payLink = `https://TU-DOMINIO.com/pay/${reservation.id}`;

  console.log(
    `>> Aquí enviarías un correo a ${reservation.email} con el link de pago: ${payLink}`
  );
}
