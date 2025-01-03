import Link from "next/link";
import styles from "./event.module.css"

export default function eventPage({ params } : {params : {eventId: number}}){
    
    var events = [
        {id: 0, name: "Hello", date: "2025/01/20", time: "12:00", location: "HL101", description: "IDEK", image: "Logo.jpg"},
        {id: 1, name: "Presidents Dance Off", date: "2025/02/10", time: "16:30", location: "HW100", description: "Presidencts have a dance off and we vote who danced better.", image: "Logo.jpg"},
        {id: 2, name: "Tiktok Dance Fun", date: "2025-0o3-08", time: "9:00", location: "IC130", description: "Join us while we teach you tiktok dances and make tiktoks for our page in a morning of fun.", image: "Logo.jpg"},
        {id: 3, name: "Birla-Kaushik Dance Off", date: "2025/03/15", time: "7:30", location: "Downton Halls Cools place", description: "Same as before, what are you? Stupid", image: "Logo.jpg"},
        {id: 4, name: "Kshitij-Piyush FIGHT", date: "2026/04/19", time: "12:00", location: "UTSC Valley Field 2", description: "Kshitij and Piyush fight to the death or until Khushi can watch Piyush get beat up bfihb ciheb iebc ehivcbjdcb jnv ej bjeqn cie ihfeb dj bd  adnk dna dqnk bda x bdn ohd dquio qdhu duco scjh wd    jb cwb  sc w     uwh     hs uq sabc cdbs.", image: "Logo.jpg"}
    ]
    
    const ID: number = +params.eventId;

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
            <div>Hello {events[ID].name}</div>
        </main> 
    )
}