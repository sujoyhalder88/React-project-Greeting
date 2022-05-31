import React from "react";
import "./Test.css";

function Test() {
    const fName = "Sujoy";
    const lName = "Halder";
    const result = parseInt(Math.random() * 10);
    const img = "https://picsum.photos/200/300";
    const img1 = "https://picsum.photos/150/250";
    const img2 = "https://picsum.photos/300/150";
    const img3 = "https://picsum.photos/400/400";
    const link = "https://relevel.com/dashboard/home";
    return (
        <div>
            {/* <h1 contentEditable="true">{`My Name is ${fName} ${lName}`}</h1> */}
            <h1 className="H1_style">{`My Name is ${fName} ${lName}`}</h1>
            <p className="P_style"> My lucky Number {6 + 1}</p>
            <p> My lucky Number {result}</p>
            <div className="img_div">
                <img src={img} alt="lorem imges" />
                <img src={img1} alt="lorem imges" />
                <a href={link} target="_relevel">
                    <img src={img2} alt="lorem imges" />
                </a>
                <img src={img3} alt="lorem imges" />
            </div>
        </div>
    );
}

export default Test;
