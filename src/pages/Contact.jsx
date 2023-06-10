import React from 'react'

import {ReactComponent as BusinessAnalytics} from '../assets/svg/undraw_questions_re_1fy7.svg'
import { josLGA } from "../data/demography"


function Contact() {
    
    const [lga, setLGA] = React.useState()

  return (
    <main className="container px-4 py-5 mx-auto md:px-0">
        <p className="font-bold">Do you have any emerging issue or complain that requires stackeholders/government intervention? Kindly fill out this form.</p>
        <div className="grid grid-flow-row gap-10 md:grid-cols-12">
            
            <div className="order-2 md:order-1 md:col-span-8 md:max-w-xl">
                <div className="">
                    <label htmlFor="" className="font-medium">LGA</label>
                    <select name="lga" value={lga} onChange={(e)=> setLGA(e.target.value)} className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
                        <option value="">Select LGA</option>
                            {josLGA.map(lga => (
                            <option key={lga} value={lga}>{lga}</option>
                            ))}
                    </select>
                </div>
                <div className="">
                    <label htmlFor="" className="font-medium">Ward</label>
                    <input required type="text" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
                </div>
                <div className="">
                    <label htmlFor="" className="font-medium">Complain Area</label>
                    <textarea rows={5} required type="text" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
                </div>
                <div className="">
                    <label htmlFor="" className="font-medium">Phone Number</label>
                    <input required type="text" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
                </div>
                
                <div className="">
                    <label htmlFor="" className="font-medium">Email Address</label>
                    <input required type="email" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm"/>
                </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-4 max-w-fit">
                <BusinessAnalytics className="w-full h-full"/>
            </div>
        </div>
    </main>
  )
}

export default Contact