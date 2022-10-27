import './Thing.css'
import { IconContext } from "react-icons";

import { BsFillPhoneFill, BsLaptopFill } from 'react-icons/bs'
import { IoIosBrowsers } from 'react-icons/io'
import { RiSmartphoneFill, RiMacbookFill } from 'react-icons/ri'

const Thing = (props) =>
{
    return (
        <div className="card">
            <div className="card-categories-wrapper" aria-hidden="true">
                {props.categories.length > 0 && props.categories.map((tag, index) => (
                    <div key={"category_" + index} className="card-category">{tag}</div>
                ))}
            </div>

            <div className="card-image-container">
                {props.image.length > 0 && <img alt={""} className="card-image" src={require('../images/' + props.image)} />}
            </div>

            <div className="platform-support-wrapper" aria-hidden="true">
                <IconContext.Provider value={{ color: '#d1e4ff', size: '1.5rem', className: "card-platform-icon" }}>
                    {props.platformSupport.length > 0 && props.platformSupport.map((platform, index) =>
                    {
                        switch (platform) 
                        {
                            case "browser": return <div key={"platform_" + index} className='card-platform-item'><IoIosBrowsers /><p className='card-platform-label'>Browser</p></div>
                            case "android": return <div key={"platform_" + index} className='card-platform-item'><BsFillPhoneFill /><p className='card-platform-label'>Android</p></div>
                            case "ios": return <div key={"platform_" + index} className='card-platform-item'><RiSmartphoneFill /><p className='card-platform-label'>iOS</p></div>
                            case "windows": return <div key={"platform_" + index} className='card-platform-item'><BsLaptopFill /><p className='card-platform-label'>Windows</p></div>
                            case "macos": return <div key={"platform_" + index} className='card-platform-item'><RiMacbookFill /><p className='card-platform-label'>MacOS</p></div>
                            default: return <></>
                        }
                    })}
                </IconContext.Provider>
            </div>

            <h2 className="card-title">{props.title}</h2>

            <p className="card-description">{props.description}</p>
            <div className='screen-reader-only'>{"Supported on: " + props.platformSupport.join(', ')}</div>

            <div className="card-links-wrapper">
                {Object.keys(props.links).length > 0 && Object.keys(props.links).map((link, index) => (
                    <a key={"link_" + index} className={index === 0 ? "card-link whole-card-clickable" : "card-link individual-clickable"} href={props.links[link]}>{link}</a>
                ))}
            </div>

        </div>
    )
}

export default Thing;