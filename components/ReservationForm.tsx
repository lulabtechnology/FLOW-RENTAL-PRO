"use client";

import React, { useState } from "react";
import type { RentalType } from "@/lib/types";

interface ReservationFormProps {
  vehicleId: string;
  vehicleName: string;
  fullDayPrice: number;
  fullDayLabel: string;
  twentyFourPrice: number;
  twentyFourLabel: string;
}

export default function ReservationForm({
  vehicleId,
  vehicleName,
  fullDayPrice,
  fullDayLabel,
  twentyFourPrice,
  twentyFourLabel
}: ReservationFormProps) {
  const [rentalType, setRentalType] = useState<RentalType>("full-day");
  const [date, setDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const selectedPrice =
    rentalType === "full-day" ? fullDayPrice : twentyFourPrice;
  const selectedLabel =
    rentalType === "full-day" ? fullDayLabel : twentyFourLabel;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSending(true);

    // Aquí luego conectarás con tu API / base de datos
    // para guardar la reserva y disparar el correo al admin.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSending(false);
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-5 rounded-3xl bg-flow-cream/70 p-5 shadow-soft"
    >
      <div className="flex flex-wrap items-center justify
