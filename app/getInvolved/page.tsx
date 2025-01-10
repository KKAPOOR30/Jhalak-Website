"use client";

import React, { useState } from 'react';
import Link from "next/link";
import styles from "./involved.module.css"


export default function eventPage(){

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
                    <li><Link href="\">Home</Link></li>
                    <li><Link href="\AboutUs">About</Link></li>
                    <li><Link href="\GetInvolved">Join</Link></li>
                    <li><Link href="\Gallery">Gallery</Link></li>
                    <li><Link href="\Events">Events</Link></li>
                </ul>
                <img className={styles.logo} src="LogoBGR.png"></img>
                <div className={styles.navvideo}>
                    <img src="dance_banner_top.jpg"></img>
                </div>
            </div>
            <h1 className={styles.titles}>Sign Up</h1>
            <form className={styles.formDiv} onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
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
                    <label>UofT email:</label>
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
                    <label>Student Number:</label>
                    <input
                    id="studentid"
                    name="studentid"
                    value={formData.studentid}
                    onChange={handleChange}
                    required
                    ></input>
                </div>
                <div>
                    <label>What year are you currently in: </label>
                    <input
                    type="radio"
                    id="hear"
                    name="hear"
                    value={formData.hear}
                    onChange={handleChange}
                    required
                    >
                    </input>
                </div>
                <button type="submit">Submit</button>
            </form>

        </main> 
    )
}