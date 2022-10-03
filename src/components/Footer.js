import React from "react";

export default function Footer(props) {
	return (
		<footer className="text-primary text-white dark:text-white text-xs md:text-sm lg:text-base font-medium">
			<p className="text-center">
			Copyright © {`${new Date().getFullYear()} `}
			<a href="https://vuetifysolutions.netlify.app" target="_blank" rel="noreferrer" className="">
				Designed by Vuetify Solutions
			</a>
			</p>
		</footer>
	);
};
