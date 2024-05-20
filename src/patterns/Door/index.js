import React, { useState, useEffect } from "react";
import "./Door.css";

const DECEMBER = 11;
const TOTAL_DOORS = 24;

function Door() {
    const [adventBoxes, setAdventBoxes] = useState([]);

    useEffect(() => {
        const boxes = generateAdventBoxes();
        setAdventBoxes(boxes);
    }, []);

    return (
        <div className="advent-door__wrapper">
            <h1>Advent Calendar</h1>
            <div id="adventBoxes">
                {adventBoxes.map((box, index) => (
                    <a key={index} href={`/advent/2016/${index + 1}`}>
                        {box}
                    </a>
                ))}
            </div>
        </div>
    );
}

function generateAdventBoxes() {
    const dateObj = new Date();
    const currentMonth = dateObj.getMonth();
    let currentDay = dateObj.getDate();

    if (currentMonth !== DECEMBER) {
        currentDay = TOTAL_DOORS; // so that the rest of the year the doors are always open
    }

    let boxes = [];
    for (let day = 1; day <= TOTAL_DOORS; day++) {
        const isOpen = isDoorOpen(day, currentDay);
        boxes.push(createDoor(day, isOpen));
    }

    return boxes;
}

function isDoorOpen(day, currentDay) {
    return day <= currentDay;
}

function createDoor(day, isOpen) {
    return (
        <div
            className={`advent-door ${
                isOpen ? "advent-door__open-door" : "advent-door__closed-door"
            }`}
            key={day}
        >
            <div className="advent-door__box">
                <h2>{day}</h2>
            </div>
            <div className="advent-door__present">
                <div className="advent-door__bauble">{isOpen && ""}</div>
            </div>
        </div>
    );
}

export default Door;
