import { Reservation } from "./types";

// Datos de ejemplo SOLO para que el /admin se vea bonito.
// Cuando conectes tu base de datos, aquí en vez de esto
// harás un fetch al backend / API.

export const sampleReservations: Reservation[] = [
  {
    id: "R-24001",
    vehicleId: "scooter-150-1",
    vehicleName: "Scooter 150cc",
    rentalType: "full-day",
    rentalDate: "2025-11-26",
    pickupTime: "08:30",
    fullName: "Ana López",
    cedula: "8-123-456",
    email: "ana@example.com",
    whatsapp: "+507 6000-0000",
    status: "pending",
    createdAt: "2025-11-25T10:15:00Z"
  },
  {
    id: "R-24002",
    vehicleId: "navi-100-1",
    vehicleName: "Honda Navi 100cc",
    rentalType: "24h",
    rentalDate: "2025-11-27",
    pickupTime: "10:00",
    fullName: "Carlos Pérez",
    cedula: "4-567-890",
    email: "carlos@example.com",
    whatsapp: "+507 6111-1111",
    status: "accepted",
    createdAt: "2025-11-25T15:40:00Z"
  }
];
