import React from "react";
import lighten from "../helper/lighten";

function Icon({ icon, color, lightenBackground }) {

    const backgroundColor = lightenBackground ? lighten(color, 80) : "white";

    const style = {
        color: color,
        backgroundColor: backgroundColor
    };

    return (
        <div>
            <i className={`icon fa-solid fa-${icon}`} style={style}></i>
        </div>
    );
}

export default Icon;
