"use client";

import React, { useState } from 'react';
import Link from "next/link";
import styles from "./event.module.css";
import { getSheetData, writeToSheet } from './../googleConnection';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import { events } from "../../components/constants";
import CheckoutPage  from "@/components/CheckoutPage";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined){
    throw Error("Stripe Public Key Undefined")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function eventPage({ params }){
    
    const unwrapped = React.use(params);
    const { eventId } = unwrapped;
    const [error, setError] = useState("");
    const [showpayment, setShowpayment] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        confemail: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.confemail != formData.email) {
            setError("Emails do not match");
        } else { // email confirmed
            setError("");
            (events[eventId].cost === 0)? setShowpayment(false): setShowpayment(true);
            writeToSheet([[formData.name, formData.email, "false"]], "Event1!A1")
            setSubmitted(true);
        }
    };   

    return (
        <main>
            <img className={styles.logo} src="jhalak-logo.png"></img>
            <div className={styles.navdecoration}>
                <ul className={styles.navbar}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/AboutUs">About</Link></li>
                    <li><Link href="/GetInvolved">Join</Link></li>
                    <li><Link href="/Gallery">Gallery</Link></li>
                    <li><Link href="/Events">Events</Link></li>
                </ul>
                <div className={styles.navimg}>
                    <img src="jhalak-background-top.png"></img>
                </div>
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.eventInfo}>
                    <div className={styles.eventHeader}>
                        <div>
                            <h1><b>{events[eventId].name}</b></h1>
                            <br></br>
                            <h2><b>Location:</b> {events[eventId].location}</h2>
                            <h2><b>Date:</b> {events[eventId].date}, {events[eventId].time}</h2>
                            <h2><b>{events[eventId].cost !== 0? "Cost: $" + events[eventId].cost: ""}</b></h2>
                        </div>
                        <img src={events[eventId].image}></img>
                    </div>
                    <br></br>
                    <p>{events[eventId].description}</p>
                </div>
                <div className={styles.formsContainer}>
                    {!submitted && 
                    <form className={styles.personalForm} onSubmit={handleSubmit}>
                        <h3>Please submit personal information before continuing to payments</h3>

                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" onChange={handleChange} required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={handleChange} required />
                        <small className={styles.helperText}>This is how we will contact you</small>

                        <label htmlFor="confemail">Confirm Email:</label>
                        <input type="email" id="confemail" name="confemail" onChange={handleChange} required />
                        {error && <p>email does not match</p>}

                        <button type="submit">Submit</button>
                    </form>
                    }

                    {showpayment ?
                    (<div className={styles.checkoutOptions}>
                        <Elements 
                            stripe={stripePromise} 
                            options={{
                                mode: "payment",
                                amount: events[eventId].cost * 100,
                                currency: "cad",
                        }}
                        >
                            <CheckoutPage amount={(events[eventId].cost)} name={formData.name} email={formData.email}/>
                        </Elements> 
                    </div>): (<div></div>)}

                    {!showpayment && submitted && <h2>Thank You! We will send you a confirmation email within the next 24 hours</h2>}
                </div>
            </div>
        </main> 
    )
}