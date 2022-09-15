import React from "react";

export default function Footer(props) {
	return (
		<footer className="">
			<div className="">
				<p className="text-center">
				Copyright © {`${new Date().getFullYear()} `}
				<a href="https://vuetifysolutions.netlify.app" target="_blank" rel="noreferrer" className="text-blue-500 font-medium">
					Designed by Vuetify Solutions
				</a>
				</p>
			</div>
		</footer>
	);
};
