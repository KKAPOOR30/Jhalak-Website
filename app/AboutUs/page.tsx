'use client';

import { useState } from 'react';
import Link from "next/link";
import styles from "./aboutStyle.module.css";
import { Dict } from 'styled-components/dist/types';

// For the nav bar have the video play here and the home page can just be a static banner

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const presidants = [
    {src:"Logo.jpg", description:"This wedjfjwcjc cihwb cdi wibd cihwe cwihc wiuc wiceuwiicwbvjfviev ief eivu ief iwudc i icubwdichb wi iwc is bicud i wi enhj is bhsiash dbwjc wdjcw jd", id:0},
    {src:"Logo.jpg", description:"Presidant: Lavanya Thakur bhah blah blah blah ", id:1}
  ]

  const directors = [
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:2},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:3},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:4},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:5},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:6},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:7},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:8},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:9},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:10},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:11}
  ]

  const choreographers = [
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:12},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:13},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:14},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:15},
    {src:"Logo.jpg", description:"This is bhsiash dbwjc wdjcw jd", id:16}
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
        <div className={styles.navdecoration}>
            <ul className={styles.navbar}>
                <li><Link href="\">Home Page</Link></li>
                <li><Link href="\AboutUs">About Us</Link></li>
                <li><a>Get Involved</a></li>
                <li><a>Gallery</a></li>
                <li><a>Events</a></li>
            </ul>
        </div>
        <div className={styles.meetTheTeam}>
          <h1 className={styles.titles}>Who we are</h1>
          <p> We are Jhalak blah blah blah. KBwjbdjhwbnab hdfnCAC JKDEWJBDNWKJEFNwlrgnknerlk rfnvke i efi
            h ciejfjrinjd cibc wifjnjec wiefbc weibwejwe wibv djw chc wiebcwjde cwicei wuieb ciwewiebowdn We are Jhalak blah blah blah. KBwjbdjhwbnab hdfnCAC JKDEWJBDNWKJEFNwlrgnknerlk rfnvke i efi
            h ciejfjrinjd cibc wifjnjec wiefbc weibwejwe wibv djw chc wiebcwjde cwicei wuieb ciwewiebowdn
            We are Jhalak blah blah blah. KBwjbdjhwbnab hdfnCAC JKDEWJBDNWKJEFNwlrgnknerlk rfnvke i efi
            h ciejfjrinjd cibc wifjnjec wiefbc weibwejwe wibv djw chc wiebcwjde cwicei wuieb ciwewiebowdn
          </p>
        </div>
        <div>
          <h1 className={styles.titles}>Meet The Team</h1>
          <h2 className={styles.teamTitle}>Presidants</h2>
          <div className={styles.TeamPhotos}>
            {presidants.map((person) => (
              <div
              key={person.id}
              className={`${styles.imageBox} ${activeIndex.includes(person.id) ? styles.showDescription : ''}`}
              onClick={() => toggleImage(person.id)}
              >
              <img src={person.src} alt={`Image ${person.id}`} />
              <div className={styles.description}>{person.description}</div>
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
              <div className={styles.description}>{person.description}</div>
            </div>
            ))}
          </div>
          <h2 className={styles.teamTitle}>Choreographers</h2>
          <div className={styles.TeamPhotos}>
            {choreographers.map((person) => (
              <div
              key={person.id}
              className={`${styles.imageBox} ${activeIndex.includes(person.id) ? styles.showDescription : ''}`}
              onClick={() => toggleImage(person.id)}
              >
              <img src={person.src} alt={`Image ${person.id}`} />
              <div className={styles.description}>{person.description}</div>
            </div>
            ))}
          </div>
        </div>
    </main>
  );
}
