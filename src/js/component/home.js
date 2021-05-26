import React, { useState } from "react";

//create your first component
export function Home() {
	const [barStyle, setbarStyle] = useState("navbar navbar-dark songbar"); // Define el style de las barras de canciones
	const [song, setSong] = useState("");
	const [button, setButton] = useState("fas fa-play");

	const Click = index => {
		setbarStyle(index);
		console.log("barStyle: ", barStyle, "Index: ", index, "Song: ", song);
		setSong(songList[index]);
		if (button == "fas fa-play") {
			setButton("fas fa-pause-circle");
			console.log(button);
		} else {
			setButton("fas fa-play");
			console.log(button);
		}
	};

	let songList = [];
	for (let i = 0; i < 17; i++) {
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
				onClick={() => Click(index)}>
				{index} - {element}
			</nav>
		);
	});

	return (
		<div>
			<div className="overflow-auto song-list">{songInterface}</div>
			<nav className="navbar navbar-dark hud">
				<div className="text-white">
					<i className="fas fa-caret-square-left"></i>
					<i className={button}></i>
					<i className="fas fa-caret-square-right"></i>
				</div>
			</nav>
		</div>
	);
}
