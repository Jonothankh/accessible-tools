import { BsPersonPlus } from 'react-icons/bs';
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
                        <input
                            type="checkbox"
                            name="vision"

                            onChange={event => { props.onChangeCategory("vision", event.target.checked) }}
                        />
                        <span>Vision</span>
                    </label>
                </li>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input
                            type="checkbox"
                            name="hearing"

                            onChange={event => { props.onChangeCategory("hearing", event.target.checked) }}
                        />
                        <span>Hearing</span>
                    </label>
                </li>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input
                            type="checkbox"
                            name="neurodiveristy"

                            onChange={event => { props.onChangeCategory("neurodiversity", event.target.checked) }}
                        />
                        <span>Neurodiversity</span>
                    </label>
                </li>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input
                            type="checkbox"
                            name="mobility"

                            onChange={event => { props.onChangeCategory("mobility", event.target.checked) }}
                        />
                        <span>Mobility</span>
                    </label>
                </li>
                <li className="filter-dropdown-list-item">
                    <select
                        name="platforms"
                        defaultValue="select-platform"

                        onChange={event => { props.onChangePlatform(event.target.value) }}
                    >

                        <option value="select-platform" disabled="disabled">Select platform</option>
                        <option value="any">Any</option>
                        <option value="browser">Browser</option>
                        <option value="windows">Windows</option>
                        <option value="macos">MacOS</option>
                        <option value="android">Android</option>
                        <option value="ios">iOS</option>
                    </select>
                </li>
            </ul>
        </header>
    )
}

export default HeaderBar;