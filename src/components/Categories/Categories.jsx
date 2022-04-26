import React, { useState } from "react";
import "./Categories.scss";

const keywords = [
    "All",
    "React js",
    "Redux",
    "Music",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gatsby",
];

const Categories = () => {
    const [activeElement, setActiveElement] = useState("All");

    const handleClick = (value) => {
        setActiveElement(value);
    };

    return (
        <div className="categoriesBar">
            {keywords.map((value, i) => (
                <span
                    key={i}
                    className={activeElement === value ? "active" : ""}
                    onClick={() => handleClick(value)}
                >
                    {value}
                </span>
            ))}
        </div>
    );
};

export default Categories;
