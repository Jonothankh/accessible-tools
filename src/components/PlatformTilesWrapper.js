import { useState } from 'react'
import './PlatformTilesWrapper.css'

const PlatformTileWrapper = (props) =>
{
    const [platformsScroll, setPlatformsScroll] = useState("start")
    const handlePlatformScroll = event =>
    {
        const fromLeft = event.target.scrollLeft;
        const fromRight = (event.target.scrollWidth - event.target.clientWidth) - event.target.scrollLeft

        if (fromLeft < 5)
        {
            setPlatformsScroll("start")
        }
        else if (fromRight < 5)
        {
            setPlatformsScroll("end")
        } else
        {
            setPlatformsScroll("middle")
        }

        console.log("scrolled")
    }

    return (
        <section className={"platform-tiles-wrapper " + platformsScroll} onScroll={handlePlatformScroll}>
            {props.children}
        </section>
    )
}

export default PlatformTileWrapper;