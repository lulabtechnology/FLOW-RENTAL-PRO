import { Vehicle } from "./types";

// IMPORTANTE: imageFileName son SOLO nombres.
// Luego tú subes tus imágenes reales a /public/vehicles/
// y cambias los nombres aquí para que coincidan.

export const inventory: Vehicle[] = [
  {
    id: "scooter-150-1",
    name: "Scooter 150cc",
    category: "moto",
    model: "Scooter urbana 150cc",
    details: "Ideal para moverte suave por Bocas, cómoda y fácil de manejar.",
    imageFileName: "scooter-150cc-1.jpg",
    fullDayPrice: 30,
    fullDayLabel: "Full Day · 8:00am – 6:30pm",
    twentyFourPrice: 40,
    twentyFourLabel: "24 horas · Recógela cuando quieras"
  },
  {
    id: "scooter-150-2",
    name: "Scooter 150cc",
    category: "moto",
    model: "Scooter urbana 150cc",
    details: "Perfecta para dos personas, buena salida y consumo bajo.",
    imageFileName: "scooter-150cc-2.jpg",
    fullDayPrice: 30,
    fullDayLabel: "Full Day · 8:00am – 6:30pm",
    twentyFourPrice: 40,
    twentyFourLabel: "24 horas · Recógela cuando quieras"
  },
  {
    id: "navi-100-1",
    name: "Honda Navi 100cc",
    category: "moto",
    model: "Honda Navi 100cc",
    details: "Compacta, juguetona y súper maniobrable para las calles estrechas.",
    imageFileName: "honda-navi-100cc-1.jpg",
    fullDayPrice: 30,
    fullDayLabel: "Full Day · 8:00am – 6:30pm",
    twentyFourPrice: 40,
    twentyFourLabel: "24 horas · Recógela cuando quieras"
  },
  {
    id: "navi-100-2",
    name: "Honda Navi 100cc",
    category: "moto",
    model: "Honda Navi 100cc",
    details: "Opción económica y divertida, perfecta para un día completo.",
    imageFileName: "honda-navi-100cc-2.jpg",
    fullDayPrice: 30,
    fullDayLabel: "Full Day · 8:00am – 6:30pm",
    twentyFourPrice: 40,
    twentyFourLabel: "24 horas · Recógela cuando quieras"
  },
  {
    id: "ebike-26-1",
    name: 'Ebike grande 26"',
    category: "ebike",
    model: 'Ebike 26"',
    details: "Llanta grande, cómoda para recorrer la isla sin esfuerzo.",
    imageFileName: "ebike-grande-26-1.jpg",
    fullDayPrice: 30,
    fullDayLabel: "Full Day · 8:00am – 6:30pm",
    twentyFourPrice: 40,
    twentyFourLabel: "24 horas · 24h completas"
  },
  {
    id: "ebike-26-2",
    name: 'Ebike grande 26"',
    category: "ebike",
    model: 'Ebike 26"',
    details: "Autonomía pensada para todo el día de paseo.",
    imageFileName: "ebike-grande-26-2.jpg",
    fullDayPrice: 30,
    fullDayLabel: "Full Day · 8:00am – 6:30pm",
    twentyFourPrice: 40,
    twentyFourLabel: "24 horas · 24h completas"
  },
  {
    id: "ebike-20-1",
    name: 'Ebike pequeña 20"',
    category: "ebike",
    model: 'Ebike 20"',
    details: "Compacta, fácil de guardar y manejar, perfecta para trayectos cortos.",
    imageFileName: "ebike-pequena-20-1.jpg",
    fullDayPrice: 30,
    fullDayLabel: "Full Day · 8:00am – 6:30pm",
    twentyFourPrice: 40,
    twentyFourLabel: "24 horas · 24h completas"
  },
  {
    id: "ebike-20-2",
    name: 'Ebike pequeña 20"',
    category: "ebike",
    model: 'Ebike 20"',
    details: "La opción más ligera, ideal si no quieres moto.",
    imageFileName: "ebike-pequena-20-2.jpg",
    fullDayPrice: 30,
    fullDayLabel: "Full Day · 8:00am – 6:30pm",
    twentyFourPrice: 40,
    twentyFourLabel: "24 horas · 24h completas"
  }
];
