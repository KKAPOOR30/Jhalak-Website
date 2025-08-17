'use server'

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure the env var exists and is passed properly
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) {
    throw new Error("STRIPE_SECRET_KEY is not defined in the environment");
}

const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2025-05-28.basil"
});


export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const amount = body.amount;

        if (!amount || typeof amount !== "number") {
            return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "cad",
            automatic_payment_methods: {enabled: true},
        });
        
        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Stripe Error:", error);
            return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 }
        );
    }
}