import Link from "next/link";

export default function PaymentSuccess ({
    searchParams: { amount, email, name}, 
  }: {
    searchParams: {amount: string, email: string, name: string};
  }) {

    return (
        <div style={{margin: "10vw", padding: "2vw", backgroundColor: "#f0ad4c"}}>
            <p>Thank you {name}, your payment of ${amount} has been received. We will send you a confirmation email at {email} within the next 24 hours. If we do not get back to you, you can reach out to us at utscjhalak@gmail.com.</p>
            <br></br>
            <center><Link href="/" style={{backgroundColor: "#058789", padding: "1vw 30vw 1vw 30vw"}}>Home</Link></center>
        </div>
    )
}
