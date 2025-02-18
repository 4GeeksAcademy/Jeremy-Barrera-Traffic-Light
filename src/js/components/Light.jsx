import React, { useState } from "react";

const Light = () => {
    
    const [color, setColor] = useState("Red");

    const clicked = (lightColor) => {
        setColor(lightColor); 
    };

    return (
        <div className="box">
            <div 
                className={`Red ${color === "Red" ? "glow" : ""}`} 
                onClick={() => clicked("Red")}
            ></div>
            <div 
                className={`Yellow ${color === "Yellow" ? "glow" : ""}`} 
                onClick={() => clicked("Yellow")}
            ></div>
            <div 
                className={`Green ${color === "Green" ? "glow" : ""}`} 
                onClick={() => clicked("Green")}
            ></div>
        </div>
    );
};

export default Light;
