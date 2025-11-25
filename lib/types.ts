export type RentalType = "full-day" | "24h";

export interface Vehicle {
  id: string;
  name: string;
  category: "moto" | "ebike";
  model: string;
  details: string;
  imageFileName: string; // SOLO nombre del archivo, tú luego lo pones en /public/img
  fullDayPrice: number;
  fullDayLabel: string;
  twentyFourPrice: number;
  twentyFourLabel: string;
}

export type ReservationStatus = "pending" | "accepted" | "declined" | "paid";

export interface Reservation {
  id: string;
  vehicleId: string;
  vehicleName: string;
  rentalType: RentalType;
  rentalDate: string; // YYYY-MM-DD
  pickupTime: string; // HH:mm
  fullName: string;
  cedula: string;
  email: string;
  whatsapp: string;
  status: ReservationStatus;
  createdAt: string;
}
