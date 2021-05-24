import React from "react";

//create your first component
export function Home() {
	let songs = [];

	for (let i = 0; i < 17; i++) {
		songs.push("Mario Castle");
	}

	const songList = songs.map((element, index) => {
		return (
			<nav key={index} className="navbar navbar-dark songbar">
				{index} - {element}
			</nav>
		);
	});

	return (
		<div>
			<div>{songList}</div>
			<nav className="navbar navbar-dark hud px-3 py-3">
				Hola carambola
			</nav>
		</div>
	);
}
