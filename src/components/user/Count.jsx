import React from "react";
import Icon from "../Icon";

function Count({name, value, unit, icon, color}) {
    
    return (
        <div className="count card">
            <Icon icon={icon} color={color} lightenBackground />
            <div className="name-value-wrapper">
                <div className="value">{value}{unit}</div>
                <div className="name">{name}</div>
            </div>
        </div>
    );
}

export default Count;