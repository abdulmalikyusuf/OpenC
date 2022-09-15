import React from 'react'
import ReactPlayer from "react-player/file"
import { PlayIcon } from '@heroicons/react/24/outline'

import BOSG from "../assets/img/BOSG.jpeg"
import Animation from "../assets/videos/animation.mp4"


function MoV() {
	const PlayButton = <button type="button" className="bg-primary rounded-md px-6 py-2">
		<PlayIcon className="h-6 w-6 text-white"/>
	</button>
	return (
		<div className="space-y-5 lg:space-y-10 mt-4 pb-10">
			<h2 className="h2 text-center">MoV</h2>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-8">
				<div className="bg-white rounded-lg p-2 md:p-4">
					<div className="">
						<img src={BOSG} alt="MoV" className="object-cover w-full"/>
					</div>
					<div className="border-t-2 pt-2">
						<h6 className="h6 leading-4 text-center">Increasing acess to edcuation for Adolescent girls in Borno State</h6>
					</div>
				</div>
				<div className="bg-white rounded-lg p-4">
					<div className="">
						<img src={BOSG} alt="MoV" className="object-cover w-full"/>
					</div>
					<div className="border-t-2 pt-2">
						<h6 className="h6 leading-4 text-center">Increasing acess to edcuation for Adolescent girls in Borno State</h6>
					</div>
				</div>
				<div className="bg-white rounded-lg p-4">
					<div className="">
						<img src={BOSG} alt="MoV" className="object-cover w-full"/>
					</div>
					<div className="border-t-2 pt-2">
						<h6 className="h6 leading-4 text-center">Increasing acess to edcuation for Adolescent girls in Borno State</h6>
					</div>
				</div>
            </div>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-8">
				<div className="bg-white rounded-lg p-2 md:p-4 h-80">
					<ReactPlayer url={Animation} light={BOSG} playIcon={PlayButton} controls={true} playing={true} config={{ file: { forceVideo: true}}} height="90%" width="100%" className=""/>
					<div className="border-t-2 mt-1 pt-2">
						<h6 className="h6 leading-4 text-center">Increasing acess to edcuation for Adolescent girls in Borno State</h6>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MoV