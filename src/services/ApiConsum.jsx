import React from 'react'
import SongBox from '../components/atoms/atom-songBox/atom-SongBox'

const urlCreateSong = ''
const urlGetSong = ''
const urlEditSong = ''
const urlDeleteSong = ''

let songsList = []

const songBox = {
    "songID":"",
    "songName": "",
    "artistName": "",
    "songGender": "",
    "coderName": "",
    "youtubeUrl": "",
    "imgUrl": "",
    "listened": '',
    "users_id": '',
};

let editing = false;

const form = document.querySelector('#form');

const songNameInput = document.querySelector('#songs');
const artistNameInput = document.querySelector('#artist');
const songGenderInput = document.querySelector('#gender');
const coderNameInput = document.querySelector('#name');
const imgUrlInput = document.querySelector('#img');
const youtubeUrlInput = document.querySelector('#youtube');

form.addEventListener('submit', validateForm)

function validateForm(e) {
    e.preventDefault()

    if([songNameInput.value, artistNameInput.value, songGenderInput.value, coderNameInput.value, imgUrlInput.value, youtubeUrlInput.value].includes('')) {
        alert('Fields cannot be empty, lazy you!')
        return
    }
}

async function getSongs() {
    songsList = await fetch(urlGetSong)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))

    showSong()
}
getSongs();

function showSong() {
    const showSongBox = document.querySelector({SongBox}) //Aquí va el componente canciones, el contenedor donde almacenamos la info que recibimos.

    songsList.forEach(song => { //hay que darle una vuelta a esto para que el componente pille los props del input
        const {songID, songName, artistName, songGender, coderName, youtubeUrl, imgUrl} = song;

    })
}




