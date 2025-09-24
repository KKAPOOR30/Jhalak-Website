'use client'

import React, { useEffect, useState } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"

const CheckoutPage = ( {amount, name, email} : { amount:number, name:string, email:string}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState<string>();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/paymentIntentApi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({amount: amount*100})
        })
        .then((res) => res.json())
        .then((data) => {
            setClientSecret(data.clientSecret)
        })
    }, [amount]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        
        if (!stripe || !elements) {
            return;
        }

        const { error: submitError } = await elements.submit();

        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `http://www.localhost:3000/payment-success/${encodeURIComponent(amount)}/${encodeURIComponent(email)}/${encodeURIComponent(name)}`,
            },
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            // Automatically handled and redirected
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
            {clientSecret && <PaymentElement />}

            {errorMessage && <div style={{color: "red"}}>{errorMessage}</div>}
            <br></br>
            <button style={{backgroundColor: "#058789", width: "80%", marginLeft: "10%", borderRadius: "8px"}} disabled={!stripe || loading}>{!loading ? `Pay $${amount}` : "Processing..."}</button>
        </form>
    )
}

export default CheckoutPage;