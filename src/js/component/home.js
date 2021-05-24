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
			<div>
				<nav className="navbar navbar-dark hud">
					<div className="text-white">
						<i className="fas fa-caret-square-left"></i>
						<i className="fas fa-pause-circle"></i>
						<i className="fas fa-play"></i>
						<i className="fas fa-caret-square-right"></i>
					</div>
				</nav>
			</div>
		</div>
	);
}
