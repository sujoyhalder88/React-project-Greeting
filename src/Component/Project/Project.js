import React from "react";
import "./Project.css";

function Project() {
    let currDate = new Date();
    currDate = currDate.getHours();
    let Greeting = "";
    // inline css use
    let cssstyle = {};
    if (currDate >= 1 && currDate < 12) {
        Greeting = "Good Morning";
        cssstyle.color = "Green";
    } else if (currDate >= 12 && currDate < 17) {
        Greeting = "Good AfterNoon";
        cssstyle.color = "Blue";
    } else if (currDate >= 17 && currDate < 20) {
        Greeting = "Good Evening";
        cssstyle.color = "Red";
    } else {
        Greeting = "Good Night";
        cssstyle.color = "Gray";
    }

    return (
        <>
            <div>
                <h1>
                    Hello Sir, <span style={cssstyle}>{Greeting}</span>
                </h1>
            </div>
        </>
    );
}

export default Project;
