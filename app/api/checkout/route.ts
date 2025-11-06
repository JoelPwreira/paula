// app/api/checkout/route.ts
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // evita caché de rutas

const stripeSecret = process.env.STRIPE_SECRET_KEY;
if (!stripeSecret) {
  // Lanzamos en import-time para verlo en logs si falta la ENV
  throw new Error("STRIPE_SECRET_KEY no está definida en el entorno");
}

const stripe = new Stripe(stripeSecret, { apiVersion: "2024-06-20" });

function getBaseUrl(req: Request) {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  const origin = req.headers.get("origin");
  if (origin && /^https?:\/\//i.test(origin)) return origin;
  return "http://localhost:3000";
}

export async function POST(req: Request) {
  const baseUrl = getBaseUrl(req);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: 1000, // 10€ en céntimos
            product_data: { name: "Acceso Pau.la — Pago único" },
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout?canceled=1`,
    });

    return Response.json({ url: session.url });
  } catch (err: any) {
    // Log detallado para Vercel
    console.error("Stripe checkout error:", {
      message: err?.message,
      type: err?.type,
      code: err?.code,
      status: err?.statusCode,
      raw: err?.raw,
    });
    return new Response(
      JSON.stringify({ error: "checkout_failed", message: err?.message ?? "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}