import React from "react";
import Icon from "../Icon";


function SideNav() {

    const icons = ["person-walking", "person-swimming", "person-biking", "dumbbell"];
    const color = "#FF0101";

    return (
        <nav>
            <ul className="side-nav">
                {icons && icons.map((icon, index) => {
                    return (
                        <li key={index}>
                            <Icon icon={icon} color={color} />
                        </li>
                    )

                })}

            </ul>       
        </nav>

    )
}

export default SideNav;