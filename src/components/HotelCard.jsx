import React from 'react'

import { ChevronRightIcon, WifiIcon, BuildingOfficeIcon, MapIcon } from '@heroicons/react/24/outline';
function HotelCard() {
  return (
    <div id="app" className="bg-white dark:bg-gray-700 h-60 rounded shadow-md flex text-grey-darkest">
        <img className="w-1/2 h-full rounded-l-sm" src={process.env.PUBLIC_URL+"logo512.png"} alt="Room"/>
        <div className="w-full flex flex-col">
            <div className="p-4 pb-0 flex-1">
                <h3 className="font-light mb-1 text-grey-darkest">Tower Hotel</h3>
                <div className="text-xs flex items-center mb-4">
                <MapIcon className="mr-1 text-gray-900 w-6 inline-flex"/>
                    Soho, London
                </div>
                <span className="text-5xl text-grey-darkest">£63.00<span className="text-lg">/PPPN</span></span>
                <div className="flex items-center mt-4">
                    <div className="pr-2 text-xs">
                        <WifiIcon className="text-green-500 w-6 inline-flex"/> Free WiFi
                    </div>
                    <div className="px-2 text-xs">
                        <BuildingOfficeIcon className="text-gray-900 w-6 inline-flex"/> 2mins to center
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 p-3 flex items-center justify-between transition hover:bg-grey-light">
                Book Now
                <ChevronRightIcon className="w-6"/>
            </div>
        </div>
    </div>
  )
}

export default HotelCard