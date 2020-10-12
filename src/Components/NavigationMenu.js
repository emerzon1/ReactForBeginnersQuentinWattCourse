import React from "react";
import { Link } from "react-router-dom";
function NavigationMenu(props) {
    return (
        <div>
            <div className="font-bold py-3">Happy Birthday Mom!</div>
            <ul>
                <li>
                    <Link
                        onClick={props.closeMenu}
                        className="text-blue-500 py-3 border-t border-b block"
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={props.closeMenu}
                        className="text-blue-500 py-3 border-b block"
                        to="/card"
                    >
                        Card
                    </Link>
                </li>
            </ul>
        </div>
    );
}
export default NavigationMenu;
