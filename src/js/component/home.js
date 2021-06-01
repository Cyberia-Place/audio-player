import React, { useState, useRef, useEffect } from "react";

let lastSongIndex = 0; // Almaceno el último index para ir alternando de canción con los botones de skip

//create your first component
export function Home() {
	let song = useRef(); // Variable para controlar la etiqueta de audio del html mediante el hook
	const [songList, setSongList] = useState([]);
	const [barStyle, setbarStyle] = useState(""); // Define el style de las barras de canciones
	const [button, setButton] = useState("fas fa-play"); // Define el boton de play/pausa

	// JSON con los nombres de las canciones y sus archivos mp3
	const retrieveSongList = async () => {
		try {
			const res = await fetch(
				"https://assets.breatheco.de/apis/sound/songs"
			);
			const data = await res.json();
			setSongList(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		retrieveSongList();
	}, []);

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
