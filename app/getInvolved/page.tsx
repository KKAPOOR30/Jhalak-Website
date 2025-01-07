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
                    <li><Link href="\">Home Page</Link></li>
                    <li><Link href="\AboutUs">About Us</Link></li>
                    <li><a>Get Involved</a></li>
                    <li><a>Gallery</a></li>
                    <li><Link href="\Events">Events</Link></li>
                </ul>
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