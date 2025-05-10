'use client';

import { useState } from 'react';
import React from "react";
import Link from "next/link";
import styles from "./aboutStyle.module.css";

// For the nav bar have the video play here and the home page can just be a static banner

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const presidants = [
    {src:"shreya_photo.png", description:["Shreya Sarma","⁠4th year Environmental Chemestry Specialist", "⁠Fav Style: semi classical", "⁠Fun Fact: I was a background dancer for Priyanka Chopra"], id:0},
    {src:"Logo.jpg", description:["Lavanya Thakur", "4th year, Double major in Human biology and health studies", "Fav Style: Hip Hop"], id:1}
  ]

  const directors = [
    {src:"luqman_photo.jpg", description:["Luqman Qureshi (Marketing Director)", "⁠2nd year, Arts Management", "⁠Fav Style: Bhangra", "⁠Fun Fact: I went through High school without taking one exam"], id:2},
    {src:"diya_photo.jpg", description:["Diya Annu Jina (Marketing Director)", "3rd year, Double Major in Molecular Biology, Immunology, and Disease, and Health studies", "Favorite Style: Kuthu"], id:3},
    {src:"Logo.jpg", description:["Marketing 2"], id:4},
    {src:"greshel_photo.jpg", description:["Greshel Wadhawan (Finance Director)", "⁠4th year, Double Degree (BBA & HBSc) with a specialization in Finance and Statistics", "⁠Fav Style: Bollywood", "⁠Fun Fact: I’ve changed my hair colour 6 times so far!"], id:5},
    {src:"Logo.jpg", description:["Events 2"], id:6},
    {src:"parnika_photo.jpg", description:["Parnika Saxena (Events Director)", "3rd year, Psychology Specialist + Minor in Applied Stats", "Fav Style: Kathak", "Fun fact: I've lived in Zimbabwe for 4 years and it was one of my favorite parts of my childhood."], id:7},
    {src:"rishi_photo.jpg", description:["Rishi Shah (Outreach Director)", "⁠4th year, Specialist in Strategic Management", "Fav style: Ajay Devgan Dance", "⁠Fun Fact: I did a world tour, went to 50+ cities across 18 countries and did the SRK pose in every single location"], id:8},
    {src:"Logo.jpg", description:["Kshitij Kapoor (Tech Director)"], id:9},
    {src:"anami_photo.jpeg", description:["Anami Patel (First Year Rep)", "1st year, Double major in Human Bio & Psychology", "Fav Style: Bollywood", "Fun fact: I have photographic memory"], id:10},
  ]

  const choreographers = [
    {src:"ishaan_photo.jpeg", description:["Ishaan Kaushik", "⁠3rd Year Neuroscience and Human Biology", "⁠Fav Style: Animation", "⁠Fun Fact: I've played almost all sports known to mankind"], id:12},
    {src:"reva_photo.jpeg", description:["Reva Birla", "2nd year Neuroscience Specialist, Biology and Psychology Minor", "Favourite Dance Style: Bollywood", "⁠Fun Fact: I was a teenage model"], id:13},
    {src:"Logo.jpg", description:["Piyush Upadhyay","3rd year Double Major in Molecular biology, Immunology, and Disease, & Human Biology + Minor in Psychology", "Fav Style: Hip Hop", "Fun Fact: I enjoy wood carving"], id:14},
    {src:"heer_photo.jpg", description:["Heer Niraj Shah", "⁠2nd year Business Administration with a specialization in Strategic Management", "⁠Favourite dance style: Afro", " ⁠Fun Fact: I have played squash at a state level"], id:15},
    {src:"jyotshana_photo.png", description:["Jyotshana Chaileyndrachankar", "3rd year, Double Major in Molecular Biology, Immunology and Disease & Human Biology + Minor in History", "Fav Style: South Indian Folk Dance", "Fun Fact: I’ve had the incredible opportunity to showcase my talents in Bharatanatyam, singing, and Veena across more than 200 stages!"], id:16}
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
      <div className={styles.aboutTheTeam}>
        <h1 className={styles.titles}>Who we are</h1>
        <p> We are Jhalak blah blah blah. KBwjbdjhwbnab hdfnCAC JKDEWJBDNWKJEFNwlrgnknerlk rfnvke i efi
          h ciejfjrinjd cibc wifjnjec wiefbc weibwejwe wibv djw chc wiebcwjde cwicei wuieb ciwewiebowdn We are Jhalak blah blah blah. KBwjbdjhwbnab hdfnCAC JKDEWJBDNWKJEFNwlrgnknerlk rfnvke i efi
          h ciejfjrinjd cibc wifjnjec wiefbc weibwejwe wibv djw chc wiebcwjde cwicei wuieb ciwewiebowdn
          We are Jhalak blah blah blah. KBwjbdjhwbnab hdfnCAC JKDEWJBDNWKJEFNwlrgnknerlk rfnvke i efi
          h ciejfjrinjd cibc wifjnjec wiefbc weibwejwe wibv djw chc wiebcwjde cwicei wuieb ciwewiebowdn lwdknmndlwknnmdjlmj jdc l k klwed fk 
          kdnlcw dwd oldkm nc k j dj kakl ksndasm ksdn k lmnsmd kjdhajs xkjasbdja jnsajak 
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
