import React, { useState } from "react";

//create your first component
export function Home() {
	const [barStyle, setbarStyle] = useState("navbar navbar-dark songbar");
	let songs = [];

	for (let i = 0; i < 17; i++) {
		songs.push("Mario Castle");
	}

	const songList = songs.map((element, index) => {
		return (
			<nav
				key={index}
				className={
					barStyle === index
						? "navbar navbar-dark songbar-selected"
						: "navbar navbar-dark songbar"
				}
				onClick={() => setbarStyle(index)}>
				{index} - {element}
			</nav>
		);
	});

	return (
		<div>
			<div className="overflow-auto song-list">{songList}</div>
			<nav className="navbar navbar-dark hud">
				<div className="text-white">
					<i className="fas fa-caret-square-left"></i>
					<i className="fas fa-pause-circle"></i>
					<i className="fas fa-play"></i>
					<i className="fas fa-caret-square-right"></i>
				</div>
			</nav>
		</div>
	);
}
