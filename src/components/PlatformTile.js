import './PlatformTile.css'
import { IconContext } from "react-icons";
import { FaMicrosoft, FaApple, FaGoogle, FaChrome, FaEdge, FaFirefoxBrowser, FaSafari } from 'react-icons/fa'

const PlatformTile = (props) =>
{
    return (
        <div className='platform-card'>
            <IconContext.Provider value={{ color: '#d1e4ff', size: '2rem', className: "card-platform-icon" }}>
                {(() =>
                {
                    switch (props.title) 
                    {
                        case "Windows": return <div className='platform-icon-item'><FaMicrosoft /></div>
                        case "iOS and MacOS": return <div className='platform-icon-item'><FaApple /></div>
                        case "Android and ChromeOS": return <div className='platform-icon-item'><FaGoogle /></div>
                        case "Chrome": return <div className='platform-icon-item'><FaChrome /></div>
                        case "Edge": return <div className='platform-icon-item'><FaEdge /></div>
                        case "Firefox": return <div className='platform-icon-item'><FaFirefoxBrowser /></div>
                        case "Safari": return <div className='platform-icon-item'><FaSafari /></div>

                        default: return <></>
                    }
                })()}

                <h2 className='platform-card-title'>{props.title}</h2>
            </IconContext.Provider>


            <div className="platform-card-links-wrapper">
                {Object.keys(props.links).length > 0 && Object.keys(props.links).map((link, index) => (
                    <a key={"platform_link_" + index} className={index === 0 ? "platform-card-link whole-card-clickable" : "platform-card-link individual-clickable"} href={props.links[link]}>{link}</a>
                ))}
            </div>
        </div>
    )
}

export default PlatformTile;