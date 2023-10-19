import React from "react";

const NavBar = () => {
    return (
        <>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Main
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users">
                            Users
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
