"use client"

import { useState } from "react"
import styles from "./involved.module.css"
import Link from 'next/link'
import { writeToSheet } from "../googleConnection";

interface FormData {
    name: string
    email: string
    studentNumber: string
    heardFrom: string
    reason: string
}

export default function GetInvolved(){

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        studentNumber: "",
        heardFrom: "",
        reason: "",
      })
   
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        writeToSheet([[formData.name,formData.email,formData.studentNumber,formData.heardFrom,formData.reason, "N"]], "GeneralTeam!A1");
        setFormData({
          name: "",
          email: "",
          studentNumber: "",
          heardFrom: "",
          reason: "",
        })
      }

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
            <div className={styles.formDiv}>
                <h2>General Team Membership</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name">
                    Name
                    </label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email">
                    Email
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="studentNumber">
                    Student Number
                    </label>
                    <input
                    id="studentNumber"
                    name="studentNumber"
                    type="text"
                    value={formData.studentNumber}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="heardFrom">
                    How did you hear about us?
                    </label>
                    <select
                    id="heardFrom"
                    name="heardFrom"
                    value={formData.heardFrom}
                    onChange={handleInputChange}
                    required
                    >
                    <option value="">Select an option</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Website">Website</option>
                    <option value="Friend">Friend</option>
                    <option value="Club Fair">Club Fair</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="reason">
                    Why do you want to join the team?
                    </label>
                    <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <button
                    type="submit"
                >
                    Submit Application
                </button>
                </form>
            </div>
        </main> 
    )
}