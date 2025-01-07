"use client";

import React, { useState } from 'react';
import Link from "next/link";
import styles from "./event.module.css"


export default function eventPage({ params }){
    
    var events = [
        {id: 0, name: "Hello", date: "2025/01/20", time: "12:00", location: "HL101", description: "IDEK", image: "Logo.jpg"},
        {id: 1, name: "Presidents Dance Off", date: "2025/02/10", time: "16:30", location: "HW100", description: "Presidencts have a dance off and we vote who danced better.", image: "Logo.jpg"},
        {id: 2, name: "Tiktok Dance Fun", date: "2025-0o3-08", time: "9:00", location: "IC130", description: "Join us while we teach you tiktok dances and make tiktoks for our page in a morning of fun.", image: "Logo.jpg"},
        {id: 3, name: "Birla-Kaushik Dance Off", date: "2025/03/15", time: "7:30", location: "Downton Halls Cools place", description: "Same as before, what are you? Stupid", image: "Logo.jpg"},
        {id: 4, name: "Kshitij-Piyush FIGHT", date: "2026/04/19", time: "12:00", location: "UTSC Valley Field 2", description: "Kshitij and Piyush fight to the death or until Khushi can watch Piyush get beat up bfihb ciheb iebc ehivcbjdcb jnv ej bjeqn cie ihfeb dj bd  adnk dna dqnk bda x bdn ohd dquio qdhu duco scjh wd    jb cwb  sc w     uwh     hs uq sabc cdbs.", image: "Logo.jpg"}
    ]

    const unwrapped = React.use(params);
    const { eventId } = unwrapped;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        studentid: '',
        hear: '',
      });
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    };


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
            <div>
                <h1>{events[eventId].name}</h1>
                <h2>{events[eventId].location}</h2>
                <h2>{events[eventId].date}, {events[eventId].time}</h2>
                <p>{events[eventId].description}</p>
            </div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div>
                    <label>Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label>Student ID:</label>
                    <textarea
                    id="studentid"
                    name="studentid"
                    value={formData.studentid}
                    onChange={handleChange}
                    required
                    ></textarea>
                </div>
                <div>
                    <label>How did you hear about us:</label>
                    <textarea
                    id="hear"
                    name="hear"
                    value={formData.hear}
                    onChange={handleChange}
                    required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

        </main> 
    )
}