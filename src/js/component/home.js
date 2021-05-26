import React, { useState } from "react";

//create your first component
export function Home() {
	const [barStyle, setbarStyle] = useState("navbar navbar-dark songbar"); // Define el style de las barras de canciones
	const [song, setSong] = useState("");
	const [button, setButton] = useState("fas fa-play");

	const selectSong = index => {
		setbarStyle(index);
		setSong(songList[index]);
		if (button == "fas fa-play") {
			setButton("fas fa-pause-circle");
		}
	};

	const buttonChanger = () => {
		if (button == "fas fa-play") {
			setButton("fas fa-pause-circle");
		} else {
			setButton("fas fa-play");
		}
	};

	let songList = [];
	for (let div = 0; div < 17; div++) {
		songList.push("Mario Castle");
	}

	const songInterface = songList.map((element, index) => {
		return (
			<nav
				key={index}
				className={
					barStyle === index
						? "navbar navbar-dark songbar-selected"
						: "navbar navbar-dark songbar"
				}
				onClick={() => selectSong(index)}>
				{index} - {element}
			</nav>
		);
	});

	return (
		<div>
			<div className="overflow-auto song-list">{songInterface}</div>
			<nav className="navbar navbar-dark hud d-flex justify-content-center">
				<div className="fas fa-caret-square-left mx-5"></div>
				<div
					className={button + " " + "mx-5"}
					onClick={() => buttonChanger()}></div>
				<div className="fas fa-caret-square-right mx-5"></div>
			</nav>
		</div>
	);
}
