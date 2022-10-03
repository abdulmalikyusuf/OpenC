import React from 'react'
import ReactPlayer from "react-player/file"
import { PlayIcon } from '@heroicons/react/24/outline'

import BOSG from "../assets/img/BOSG.jpeg"
import Animation from "../assets/videos/animation.mp4"


function MoV() {
	const PlayButton = <button type="button" className="px-6 py-2 rounded-md bg-primary dark:bg-gray-900">
		<PlayIcon className="w-6 h-6 text-white dark:text-white"/>
	</button>
	return (
		<div className="pb-10 mt-4 space-y-5 lg:space-y-10">
			<h2 className="text-center h2">MoV</h2>
			<div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 md:gap-4 xl:gap-8">
				<div className="p-2 bg-white rounded-lg dark:bg-gray-700 md:p-4">
					<div className="">
						<img src={BOSG} alt="MoV" className="object-cover w-full"/>
					</div>
					<div className="pt-2 border-t-2">
						<h6 className="leading-4 text-center h6">Increasing acess to edcuation for Adolescent girls in Borno State</h6>
					</div>
				</div>
				<div className="p-4 bg-white rounded-lg dark:bg-gray-700">
					<div className="">
						<img src={BOSG} alt="MoV" className="object-cover w-full"/>
					</div>
					<div className="pt-2 border-t-2">
						<h6 className="leading-4 text-center h6">Increasing acess to edcuation for Adolescent girls in Borno State</h6>
					</div>
				</div>
				<div className="p-4 bg-white rounded-lg dark:bg-gray-700">
					<div className="">
						<img src={BOSG} alt="MoV" className="object-cover w-full"/>
					</div>
					<div className="pt-2 border-t-2">
						<h6 className="leading-4 text-center h6">Increasing acess to edcuation for Adolescent girls in Borno State</h6>
					</div>
				</div>
            </div>
			<div className="grid gap-2 md:grid-cols-2 md:gap-4 xl:gap-8">
				<div className="bg-white dark:bg-gray-700 rounded-lg p-2 pt-0 md:p-4 md:pt-0 h-[25rem]">
					<ReactPlayer url={Animation} light={BOSG} playIcon={PlayButton} controls={true} playing={true} config={{ file: { forceVideo: true}}} height="87%" width="100%" className=""/>
					<div className="pt-2 mt-1 border-t-2">
						<h6 className="leading-4 text-center h6"><span className="mr-2 font-bold uppercase">Video:</span>Increasing acess to edcuation for Adolescent girls in Borno State</h6>
					</div>
				</div>
				<div className="bg-white dark:bg-gray-700 rounded-lg pt-0 md:p-4 md:pt-0 h-[25rem]">
					<ReactPlayer url={Animation} light={BOSG} playIcon={PlayButton} controls={true} playing={true} config={{ file: { forceVideo: true}}} height="87%" width="100%" className=""/>
					<div className="pt-2 mt-1 border-t-2">
						<h6 className="leading-4 text-center h6"><span className="mr-2 font-bold uppercase">Video:</span>Increasing acess to edcuation for Adolescent girls in Borno State</h6>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MoV