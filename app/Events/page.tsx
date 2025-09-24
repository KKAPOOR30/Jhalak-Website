"use client"

import Link from "next/link";
import styles from "./eventStyle.module.css";
import { useRouter } from "next/navigation";
import { events } from "../../components/constants"

export default function Events(){

    const router = useRouter();

    const checkEvent = (id : number): void => {
        router.push("/"+events[id].id)
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
        <h1 className={styles.titles}>Events</h1>
        <div className={styles.eventsdiv}>
            {events.map((event) => (
                <div onClick={() => checkEvent(event.id)} key={event.id} className={styles.eventBox}>
                    <img src={event.image} alt={`Image ${event.id}`}/>
                    <div className={styles.details}>
                        <h1>{event.name}</h1>
                        <h2>When: {`${event.date},  ${event.time}`}</h2>
                        <h2>Where: {event.location}</h2>
                        <h2>{(event.cost !== 0)? "Entry Fee: ${event.cost}": <br></br>}</h2>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </main>
    );
}