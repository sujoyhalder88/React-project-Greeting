import React from "react";

function Challange1() {
    const fName = "Sujoy";
    const lName = "Halder";
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    return (
        <>
            <h1>{`Hello,My Name Is ${fName} ${lName}`}</h1>
            <p>This is currDate:{currDate}</p>
            <p>This is currTime:{currTime}</p>
        </>
    );
}

export default Challange1;
