import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { PAYMENTS_ENABLED } from "@/config/plan";

export async function POST() {
  if (!PAYMENTS_ENABLED) {
    return NextResponse.json({ message: "Payments are disabled" }, { status: 503 });
  }

  // Created per request: Razorpay throws at construction when keys are missing
  const instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_ID!
  });

  // Create a subscription authorization transaction
  const subscription = await instance.subscriptions.create({
    plan_id: process.env.NEXT_PUBLIC_RAZORPAY_PLAN_ID!,
    total_count: 12,           // Number of billing cycles
    quantity: 1,               // Charge quantity per cycle
    customer_notify: 1,        // Razorpay sends notifications
    // Optional: trial start, addons, notes, offer_id, etc.
  });
  // Return subscription_id for checkout
  return NextResponse.json({ 
    subscription_id: subscription.id,
  });
}
