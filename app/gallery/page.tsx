"use client";
import { useEffect, useState } from "react";
import Link from 'next/link'
import styles from "./gallary.module.css"
import { getSheetData, writeToSheet } from "./../googleConnection";

export default function Page() {
    const [info, setInfo] = useState(null); // State to hold the sheet data
    const [loading, setLoading] = useState(true); // State to handle loading state

    // Fetch the data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSheetData("A1:B5");
                setInfo(response.data); // Set the fetched data to the state
            } catch (error) {
                console.error("Error fetching sheet data:", error);
            } finally {
                setLoading(false); // Stop loading regardless of success or failure
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once on mount

    // Render loading state or fetched data
    if (loading) {
        return <p>Loading...</p>;
    }

    if (!info || !info.length) {
        return <p>No data available.</p>;
    }

    writeToSheet([["HJwbdh", 100, 3, 5, 130, "823"]], "Event1!A1");

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
          <img className={styles.logo} src="jhalak-logo.png"></img>
          <div className={styles.navimg}>
            <img src="jhalak-background-top.png"></img>
          </div>
        </div>
            {info.map((event) => (
                <div>{event[0]}, {event[1]}</div>
            ))}
        </main>
    );
}
