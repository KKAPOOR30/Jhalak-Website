"use client"

import Link from "next/link";
import styles from "./eventStyle.module.css";
import { useRouter } from "next/navigation";

export default function Events(){

    const router = useRouter();

    const checkEvent = (id : number): void => {
        router.push("/"+events[id].id)
    };

    var events = [
        {id: 0, name: "Hello", date: "2025/01/20", time: "12:00", location: "HL101", description: "IDEK", image: "Logo.jpg", cost: 0},
        {id: 1, name: "Presidents Dance Off", date: "2025/02/10", time: "16:30", location: "HW100", description: "Presidencts have a dance off and we vote who danced better.", image: "Logo.jpg", cost: 20},
        {id: 2, name: "Tiktok Dance Fun", date: "2025-0o3-08", time: "9:00", location: "IC130", description: "Join us while we teach you tiktok dances and make tiktoks for our page in a morning of fun.", image: "Logo.jpg", cost: 15.75},
        {id: 3, name: "Birla-Kaushik Dance Off", date: "2025/03/15", time: "7:30", location: "Downton Halls Cools place", description: "Same as before, what are you? Stupid", image: "Logo.jpg", cost: 0},
        {id: 4, name: "Kshitij-Piyush FIGHT", date: "2026/04/19", time: "12:00", location: "UTSC Valley Field 2", description: "Kshitij and Piyush fight to the death or until Khushi can watch Piyush get beat up bfihb ciheb iebc ehivcbjdcb jnv ej bjeqn cie ihfeb dj bd  adnk dna dqnk bda x bdn ohd dquio qdhu duco scjh wd    jb cwb  sc w     uwh     hs uq sabc cdbs.", image: "Logo.jpg", cost: 100}
    ]


    return (
    <main>
        <div className={styles.navdecoration}>
            <ul className={styles.navbar}>
                <li><Link href="\">Home Page</Link></li>
                <li><Link href="\AboutUs">About Us</Link></li>
                <li><a>Get Involved</a></li>
                <li><a>Gallery</a></li>
                <li><Link href="\Events">Events</Link></li>
            </ul>
        </div>
        <h1 className={styles.titles}>Events</h1>
        <div className={styles.eventsdiv}>
            {events.map((event) => (
                <div onClick={() => checkEvent(event.id)} key={event.id} className={styles.eventBox}>
                    <img src={event.image} alt={`Image ${event.id}`}/>
                    <div className={styles.details}>
                        <h1>{event.name}</h1>
                        <h2>When: {event.date} {event.time}</h2>
                        <h2>Where: {event.location}</h2>
                        <h2>Cost: ${event.cost}</h2>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </main>
    );
}