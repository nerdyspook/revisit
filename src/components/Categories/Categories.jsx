import React from "react";
import "./Categories.scss";

const keywords = [
    "All",
    "Mountains",
    "Deserts",
    "Beaches",
    "Tropical",
    "Urban",
    "Rural",
    "America",
    "Asia",
    "Europe",
    "Africa",
];

const Categories = ({ filter, category }) => {
    const handleClick = (value) => {
        filter(value);
    };

    return (
        <div className="categoriesBar">
            {keywords.map((value, i) => (
                <span
                    key={i}
                    className={category === value ? "active" : ""}
                    onClick={() => handleClick(value)}
                >
                    {value}
                </span>
            ))}
        </div>
    );
};

export default Categories;
