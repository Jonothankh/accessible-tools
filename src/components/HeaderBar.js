import { useState } from 'react'
import './HeaderBar.css'

const HeaderBar = (props) =>
{
    const [filterScroll, setFilterScroll] = useState("start")
    const handleScroll = event =>
    {
        const fromLeft = event.target.scrollLeft;
        const fromRight = (event.target.scrollWidth - event.target.clientWidth) - event.target.scrollLeft

        if (fromLeft < 5)
        {
            setFilterScroll("start")
        }
        else if (fromRight < 5)
        {
            setFilterScroll("end")
        } else
        {
            setFilterScroll("middle")
        }
    }

    return (
        <header className="header">
            <h1 className="name">Accessible things</h1>

            <ul className={"filter-wrapper " + filterScroll} role="search" onScroll={handleScroll}>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input
                            // aria-hidden="true"
                            aria-labelledby='vision_checkbox'
                            type="checkbox"
                            name="vision"

                            onChange={event => { props.onChangeCategory("vision", event.target.checked) }}
                        />
                        <span id="vision_checkbox" aria-hidden="true">Vision</span>
                    </label>
                </li>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input
                            // aria-hidden="true"
                            aria-labelledby='hearing_checkbox'
                            type="checkbox"
                            name="hearing"

                            onChange={event => { props.onChangeCategory("hearing", event.target.checked) }}
                        />
                        <span id="hearing_checkbox" aria-hidden="true">Hearing</span>
                    </label>
                </li>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input
                            // aria-hidden="true"
                            aria-labelledby='neurodiversity_checkbox'
                            type="checkbox"
                            name="neurodiveristy"

                            onChange={event => { props.onChangeCategory("neurodiversity", event.target.checked) }}
                        />
                        <span id="neurodiversity_checkbox" aria-hidden="true">Neurodiversity</span>
                    </label>
                </li>
                <li className="filter-checkbox-list-item">
                    <label>
                        <input
                            // aria-hidden="true"
                            aria-labelledby='mobility_checkbox'
                            type="checkbox"
                            name="mobility"

                            onChange={event => { props.onChangeCategory("mobility", event.target.checked) }}
                        />
                        <span id="mobility_checkbox" aria-hidden="true">Mobility</span>
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