// lib/reservations.ts

export type RentalType = "fullDay" | "24hours";
export type ReservationStatus = "pending" | "approved" | "declined";

export interface Reservation {
  id: string;
  createdAt: string;

  vehicleId: string;
  vehicleName: string;
  rentalType: RentalType;

  firstName: string;
  lastName: string;
  documentNumber: string;
  documentCountry?: string;

  phone: string;
  email: string;

  pickupDate: string; // YYYY-MM-DD
  pickupTime: string; // HH:MM

  notes?: string;

  // Cuando conectes storage (S3, Cloudinary, etc.)
  idPhotoUrl?: string | null;
  licensePhotoUrl?: string | null;

  status: ReservationStatus;
}

// ⚠️ Por ahora es memoria en el servidor.
// Cuando tengas DB, reemplazas todo esto por consultas reales.
let reservations: Reservation[] = [];

function generateId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2);
}

export function createReservation(
  data: Omit<Reservation, "id" | "createdAt" | "status">
): Reservation {
  const reservation: Reservation = {
    ...data,
    id: generateId(),
    createdAt: new Date().toISOString(),
    status: "pending",
  };

  reservations.unshift(reservation);
  return reservation;
}

export function getReservations(): Reservation[] {
  // Podrías ordenar aquí por fecha si quieres
  return reservations;
}

export function getReservationById(id: string): Reservation | undefined {
  return reservations.find((r) => r.id === id);
}

export function updateReservationStatus(
  id: string,
  status: ReservationStatus
): Reservation | null {
  const index = reservations.findIndex((r) => r.id === id);
  if (index === -1) return null;

  reservations[index] = {
    ...reservations[index],
    status,
  };

  return reservations[index];
}
