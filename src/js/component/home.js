import React, { useState, useRef } from "react";

let lastSongIndex = 0; // Almaceno el último index para ir alternando de canción con los botones de skip

//create your first component
export function Home() {
	// JSON con los nombres de las canciones y sus archivos mp3
	let songList = [
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		},
		{
			id: 4,
			category: "game",
			name: "Mario Stage 1",
			url: "files/mario/songs/stage1.mp3"
		},
		{
			id: 5,
			category: "game",
			name: "Mario Stage 2",
			url: "files/mario/songs/stage2.mp3"
		},
		{
			id: 6,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/starman.mp3"
		},
		{
			id: 7,
			category: "game",
			name: "Mario Underworld",
			url: "files/mario/songs/underworld.mp3"
		},
		{
			id: 8,
			category: "game",
			name: "Mario Underwater",
			url: "files/mario/songs/underwater.mp3"
		},
		{
			id: 9,
			category: "game",
			name: "Zelda Castle",
			url: "files/videogame/songs/zelda_castle.mp3"
		},
		{
			id: 10,
			category: "game",
			name: "Zelda Outworld",
			url: "files/videogame/songs/zelda_outworld.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Titles",
			url: "files/videogame/songs/zelda_title.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Sonic Brain Zone",
			url: "files/videogame/songs/sonic_brain-zone.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Link To Past",
			url: "files/videogame/songs/zelda_link-to-past.mp3"
		},
		{
			id: 12,
			category: "game",
			name: "Dong KinKong Main",
			url: "files/other/songs/dkng-main.mp3"
		},
		{
			id: 13,
			category: "game",
			name: "Dong KinKong Other",
			url: "files/other/songs/dkng-other.mp3"
		},
		{
			id: 14,
			category: "game",
			name: "mega-man",
			url: "files/other/songs/mega-man.mp3"
		},
		{
			id: 15,
			game: "cartoon",
			name: "Flintstones",
			url: "files/cartoons/songs/flintstones.mp3"
		},
		{
			id: 16,
			game: "cartoon",
			name: "power-rangers",
			url: "files/cartoons/songs/power-rangers.mp3"
		},
		{
			id: 17,
			game: "cartoon",
			name: "simpsons",
			url: "files/cartoons/songs/simpsons.mp3"
		},
		{
			id: 18,
			game: "cartoon",
			name: "south-park",
			url: "files/cartoons/songs/south-park.mp3"
		},
		{
			id: 19,
			game: "cartoon",
			name: "thundercats",
			url: "files/cartoons/songs/thundercats.mp3"
		},
		{
			id: 20,
			game: "cartoon",
			name: "x-men",
			url: "files/cartoons/songs/x-men.mp3"
		}
	];
	let song = useRef(); // Variable para controlar la etiqueta de audio del html mediante el hook

	const [barStyle, setbarStyle] = useState(""); // Define el style de las barras de canciones
	const [button, setButton] = useState("fas fa-play"); // Define el boton de play/pausa

	// Selecciona la canción que es clickeada, edita el bootstrap de su barra y cambia el botón
	const selectSong = index => {
		lastSongIndex = index;
		song.current.src =
			"https://assets.breatheco.de/apis/sound/" + songList[index].url;
		setbarStyle(index);
		if (button == "fas fa-play") {
			setButton("fas fa-pause-circle");
		}
		song.current.play();
	};

	// Selecciona la canción dependiendo del botón clickeado usando el valor del último index en lastSongIndex
	const skipButtons = order => {
		if (order == "go back") {
			selectSong(lastSongIndex - 1);
		} else {
			selectSong(lastSongIndex + 1);
		}
	};

	// Permite pausar o reanudar la canción con el botón del hud
	const buttonChanger = () => {
		if (button == "fas fa-play") {
			setButton("fas fa-pause-circle");
			song.current.play();
		} else {
			setButton("fas fa-play");
			song.current.pause();
		}
	};

	// Crea la interfaz con la lista de canciones
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
				{index} - {songList[index].name}
			</nav>
		);
	});

	return (
		<div>
			<audio ref={song} src="" />
			<div className="overflow-auto song-list">{songInterface}</div>
			<nav className="navbar navbar-dark hud d-flex justify-content-center">
				<div
					className="fas fa-caret-square-left mx-5"
					onClick={() => skipButtons("go back")}></div>
				<div
					className={button + " " + "mx-5"}
					onClick={() => buttonChanger()}></div>
				<div
					className="fas fa-caret-square-right mx-5"
					onClick={() => skipButtons("advance")}></div>
			</nav>
		</div>
	);
}
