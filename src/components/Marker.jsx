import React from 'react'
import { FaMapPin } from 'react-icons/fa';
import { MapPinIcon } from "@heroicons/react/20/solid";


function Marker(props) {
    const { place="Point 1", lat=11, lng=13 } = props
    const [tooltip, setToggleTooltip] = React.useState(false)
    
    return (
        <>
            <MapPinIcon className="h-10" onMouseOver={()=>setToggleTooltip(true)} onMouseOut={()=>setToggleTooltip(false)}/>
            {tooltip &&
                <div className="w-72">
                    <h4 className="h5">{place}</h4>
                    <p className="text-sm">Latitude: <span className="italic">{lat}</span></p>
                    <p className="text-sm">Longitude: <span className="italic">{lng}</span></p>
                </div>
            }
        </>
    )
}

export default Marker;