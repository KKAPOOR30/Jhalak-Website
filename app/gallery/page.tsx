"use client";
import { useEffect, useState } from "react";
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

    writeToSheet([["HJwbdh", 100]], "A1:A5");

    return (
        <main>
        {info.map((event) => (
            <div>{event[0]}, {event[1]}</div>
        ))}
        </main>
    );
}
