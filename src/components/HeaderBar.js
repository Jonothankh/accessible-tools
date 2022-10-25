import { useEffect, useRef, useState } from "react";
import './HeaderBar.css'

const HeaderBar = (props) =>
{

    return (
        <header className="header">
            <h1 className="name">Accessible things</h1>
            {/* <nav>
                <ul className="header-links">
                    <li className="header-link-list-item" ><a href="mailto:hello@jonothankh.com" className="header-link header-link-text">Email</a></li>
                    <li className="header-link-list-item" ><a href="https://www.linkedin.com/in/jonothankh/" className="header-link header-link-text">LinkedIn</a></li>
                    <li className="header-link header-link-icon"><a href="mailto:hello@jonothankh.com"><img className="header-icon" src={require('../icons/email.svg').default} alt="" /></a></li>
                    <li className="header-link header-link-icon"><a href="https://www.linkedin.com/in/jonothankh/"><img className="header-icon" src={require('../icons/linkedin.svg').default} alt="" /></a></li>
                </ul>
            </nav> */}
            <ul className="filter-checkbox-wrapper">
                <li className="filter-checkbox-list-item">
                    <label>
                        <input type="checkbox" name="fc" value="red" />
                        <span>Vision</span>
                    </label>
                </li>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input type="checkbox" name="fc" value="orange" />
                        <span>Hearing</span>
                    </label>
                </li>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input type="checkbox" name="fc" value="yellow" />
                        <span>Neurodiversity</span>
                    </label>
                </li>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input type="checkbox" name="fc" value="green" />
                        <span>Mobility</span>
                    </label>
                </li>
            </ul>
        </header>
    )
}

export default HeaderBar;