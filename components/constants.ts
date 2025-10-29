/*
Contains all the active events for the club  

id: id of the event
name: title of the event
date: date of the event 
time: time of the event
location: location of the event
description: description of the event
image: image of the event
cost: cost of the event in cad, if free write 0
page: page on the google sheet the signup form should write to
*/
export const events: {
    id: number;
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    cost: number;
    page: string;
    needPay: boolean;
    formLink: string;
}[] = [

]

export const pastEvents: {
    id: number;
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    cost: number;
    page: string;
    needPay: boolean;
    formLink: string;
}[] = [
        {
        id: 0, 
        name: "Jhalak Dance Auditions", 
        date: "September 24 & 25", 
        time: "5:00 - 7:00 PM", 
        location: "Student Center, TV Lounge", 
        description: `Want to be part of the best dance team at UTSC? Well this is your chance!!! 
        Join us at auditions on September 24th for Classical Bharatanatyam auditions, 
        and September 25th for Bollywood Fusion auditions. Come showcase your skills and get 
        a chance to meet new people. Please fill out the form to sign up and register. This 
        is how we keep track of dancers so it is important to fill it out. SEE YOU SOON!`, 
        image: "audition.jpg",
        cost: 0, 
        page:"Auditions",
        needPay: false,
        formLink: ""
    }, 
]
