import React from "react";
import { Link } from "react-router-dom";
function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">AppName</div>
            <ul>
                <li>
                    <Link
                        onClick={props.closeMenu}
                        className="text-blue-500 py-3 border-t border-b block"
                        to=".netlify.app/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={props.closeMenu}
                        className="text-blue-500 py-3 border-b block"
                        to=".netlify.app/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={props.closeMenu}
                        className="text-blue-500 py-3 border-b block"
                        to=".netlify.app/contact"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}
export default NavigationMenu;
