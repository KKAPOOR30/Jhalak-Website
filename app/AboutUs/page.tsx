'use client';

import { useState } from 'react';
import React from "react";
import Link from "next/link";
import styles from "./aboutStyle.module.css";

// For the nav bar have the video play here and the home page can just be a static banner

export default function AboutUs() {
    const [activeIndex, setActiveIndex] = useState<number[]>([]);

    const presidants = [
        {src:"teamPhotos/ishaan.jpeg", description:["Ishaan Kaushik","⁠4th year, Neuroscience & Human Biology", "⁠Fav Style: Animation", "Fav Hobby: Cricket", "Fav Song: Dhoom Machale"], id:0},
        {src:"teamPhotos/luqman.jpeg", description:["Luqman Qureshi", "3rd year, Arts and Media Management", "Fav Style: Hip Hop", "Fav Hobby: Studying", "Fav Song: For A Reason"], id:1}
    ]

    const directors = [
        {src:"teamPhotos/shruti.jpeg", description:["Shruti Javekar (Marketing Director)", "⁠2nd year, Management", "⁠Fav Style: Swing", "⁠Fav Hobby: Dancing", "Fav Song: M.I.A"], id:2},
        {src:"teamPhotos/tia.JPG", description:["Tia Pinto (Marketing Director)", "3rd year, Psychology", "Fav Style: Contemporary", "Fav Hobby: Making Fan Edits", "Fav Song: Kudmayi"], id:3},
        {src:"teamPhotos/pari.JPG", description:["Pari Brahmbhatt (Stage Manager)", "⁠2nd year, Human Biology & Psychology", "⁠Fav Style: Bollywood Fusion", "⁠Fav Hobby: Crocheting", "Fav Song: Piya O Re Piya"], id:4},
        {src:"teamPhotos/nayana.jpeg", description:["Nayana Thayan (Secretary)", "2nd year, Neuroscience & Human Biology", "Fav Style: Bharatanatyam, Kuthu", "Fav Hobby: Writing, Crafts, Dancing, Music", "Fav Song: Barso Re, Sirivennela"], id:5},
        {src:"teamPhotos/kshitij.JPG", description:["Kshitij Kapoor (Web Manager)", "3rd year, Computer Science & Statistics", "Fav Style: Video Game Emotes :)", "Fav Hobby: Soccer", "Fav Song: Koi Kahe Kehta Rahe"], id:6},
        {src:"teamPhotos/raghav.jpeg", description:["Raghav Kumar (Outreach Director)", "⁠2nd year, Management", "Fav Style: Urban Hip Hop, Bollywood", "⁠Fav Hobby: Visual Effects", "Fav Song: Arabic Kuthu"], id:7},
        {src:"teamPhotos/ayanika.JPG", description:["Ayanika Bhattacharjee (Events Director)", "3rd year, Mental Health Specialist", "Fav Style: Kathak", "Fav Hobby: Reading, Singing", "Fav Song: Mast Magan"], id:8},
        {src:"teamPhotos/diya.jpeg", description:["Diya Patel (Events Director)", "2nd year, Management & International Business", "Fav Style: Bharatanatyam", "Fav Hobby: Dance", "Fav Song: Dhun"], id:9},
    ]

    const choreographers = [
        {src:"teamPhotos/heer.jpeg", description:["Heer Niraj Shah", "⁠3rd year, I don’t have a major but rather a specialization in Strategy", "⁠Fav Style: Bollywood", "Fav Hobby: Travelling⁠", "Fav Song: C'est La Vie"], id:10},
        {src:"teamPhotos/parnika.jpeg", description:["Parnika Saxena", "4th year, Phychology & Applied Statistics", "Fav Style: Kathak, Semi-classical and Bollywood Fusion", "Fav Hobby: Dancing, Gym, Outdoor Recreational Activities", "Fav Song: Masakali"], id:11},
        {src:"teamPhotos/hritika.jpeg", description:["Hritika Verma","4th year, Management & Finance", "Fav Style: Bollywood Fusion", "Fav Hobby: Pilates", "Fav Song: Brown Rang"], id:12},
        {src:"teamPhotos/shreya.jpeg", description:["Shreya Sen", "⁠2nd year, Human Biology", "⁠Fav Style: Bharatanatyam", "Fav Hobby: Crocheting", "Fav Song: Soch Na Sake"], id:13},
    ]

    const toggleImage = (id: number) => {
        setActiveIndex((prevSelected) =>
            prevSelected.includes(id)
            ? prevSelected.filter((imageId) => imageId !== id) // Remove if already selected
            : [...prevSelected, id] // Add if not selected
        );
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
        <div className={styles.aboutTheTeam}>
            <h1 className={styles.titles}>Who we are</h1>
            <p> The UTSC Jhalak team is a dynamic Fusion Dance Team that brings together a vibrant spectrum of 
                styles. From classical styles of Bharatanatyam and Kathak. To modern styles, such as Bollywood 
                and hip-hop, offering a glimpse into diverse cultures through its innovative projects. 
                Welcoming dancers of all backgrounds and skill levels, Jhalak is built on the belief that 
                passion is the foundation of greatness, channeling that collective energy into precise and 
                powerful performances. The team is excited to pursue a wide array of endeavours, including 
                dance events, workshops, competitions, and collaborations, with a presence showcased through 
                numerous performances such as at Shaadi Night, Depavali 2024, the TPASC Halftime show, and 
                platforms like TEDxUTSC and the Hart House Festival of Dance.
            </p>
        </div>
        <div>
            <h1 className={styles.titles}>Meet The Team</h1>
            <h2 className={styles.teamTitle}>Presidents</h2>
            <div className={styles.TeamPhotos}>
                {presidants.map((person) => (
                <div
                key={person.id}
                className={`${styles.imageBox} ${activeIndex.includes(person.id) ? styles.showDescription : ''}`}
                onClick={() => toggleImage(person.id)}
                >
                    <img src={person.src} alt={`Image ${person.id}`} />
                    <div className={styles.description}>
                    <p>
                    {person.description.map((value, index) => (
                        <React.Fragment key={index}>
                        {value}
                        <br />
                        </React.Fragment>
                    ))}
                    </p>
                </div>
            </div>
            ))}
        </div>
        <h2 className={styles.teamTitle}>Directors</h2>
        <div className={styles.TeamPhotos}>
        {directors.map((person) => (
            <div
            key={person.id}
            className={`${styles.imageBox} ${activeIndex.includes(person.id) ? styles.showDescription : ''}`}
            onClick={() => toggleImage(person.id)}
            >
                <img src={person.src} alt={`Image ${person.id}`} />
                <div className={styles.description}>
                    <p>
                    {person.description.map((value, index) => (
                        <React.Fragment key={index}>
                            {value}
                            <br />
                        </React.Fragment>
                    ))}
                    </p>  
                </div>
            </div>
          ))}
        </div>
        <h2 className={styles.teamTitle}>Choreographers</h2>
        <div className={styles.TeamPhotos}>
            {choreographers.map((person) => (
            <div
            key={person.id}
            className={`${styles.imageBox} ${activeIndex.includes(person.id) ? styles.showDescription : ''}`}
            onClick={() => toggleImage(person.id)}>
                <img src={person.src} alt={`Image ${person.id}`} />
                <div className={styles.description}>
                    <p>
                    {person.description.map((value, index) => (
                        <React.Fragment key={index}>
                            {value}
                            <br />
                        </React.Fragment>
                     ))}
                    </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
