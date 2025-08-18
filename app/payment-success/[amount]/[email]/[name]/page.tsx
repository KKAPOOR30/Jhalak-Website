import Link from 'next/link';
import React from 'react';

// @ts-expect-error amount comes from searchParams and is always a string
export default function PaymentSuccess({ params }) {

    return (
        <div style={{margin: "10vw", padding: "2vw", backgroundColor: "#f0ad4c"}}>
            <p>Thank you {params.name}, your payment of ${params.amount} has been received. We will send you a confirmation email at {params.email} within the next 24 hours. If we do not get back to you, you can reach out to us at utscjhalak@gmail.com.</p>
            <br></br>
            <center><Link href="/" style={{backgroundColor: "#058789", padding: "1vw 30vw 1vw 30vw"}}>Click to go Home</Link></center>
        </div>
    )
}
