"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const pagar = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url; // redirige a Stripe
      } else {
        alert("Error iniciando pago");
        console.error(data);
      }
    } catch (e) {
      alert("Error al conectar con el servidor.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Acceso Pau.la — 10€</h1>
        <p className="text-lg mb-6">Pago único • Acceso hasta julio</p>
        <button
          onClick={pagar}
          disabled={loading}
          className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4 text-white"
        >
          {loading ? "Redirigiendo..." : "Pagar 10€"}
        </button>
        <p className="text-sm text-gray-500 mt-3">Pago seguro con Stripe</p>
      </div>
    </div>
  );
}