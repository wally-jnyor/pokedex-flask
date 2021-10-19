//button ON/OFF pokedex
let StartPokedex = document.querySelector('.display_btn1');
//top display colors ON/OFF
let topDisplayColorsBG = document.querySelector('.Top-display');
// left pokedex leds animation colors ON/OFF
let LedsAnimations1 = document.getElementById('led-left1');
let LedsAnimations2 = document.getElementById('led-left2');
let LenteAnimations = document.querySelector('.lente-left');
// go to/come back  habilidades
let showList = document.querySelector('.mostrar-habilidades');
let hideList = document.querySelector('.BackToMain');
// data container
let abiliityList = document.querySelector('.habilidades-list');
let InfosPokemon = document.querySelector('.infos-pokemon');
// navbar ON/OFF pokedex display
let navBarDisplay = document.querySelector('.navbar');
// bottom display and Form Input search pokemon ON/OFF
let displayPokedex = document.querySelector('.display-pokedex');
let pokeFormDisplay = document.querySelector('.pokeform');
visibilidade = false;

StartPokedex.addEventListener('click', () => {
    if(visibilidade) {
        visibilidade = false;
        //top display pokedex
        topDisplayColorsBG.style.animationName = 'topDisplayAnimationsON';
        // navbar ON/OFF pokedex display
        navBarDisplay.style.opacity = '1';
        // data container
        InfosPokemon.style.opacity = '1';
        //left pokedex leds
        LedsAnimations1.style.animationName = 'LedsAnimationON';
        LedsAnimations2.style.animationName = 'LedsAnimationON';
        LenteAnimations.style.animationName = 'LenteAnimationON';
        // bottom display pokedex
        displayPokedex.style.backgroundPosition = 'center';
        pokeFormDisplay.style.opacity = '1';

    }
    else {
        visibilidade = true;
        //top display pokedex
        topDisplayColorsBG.style.animationName = 'topDisplayAnimationsOFF';
        // navbar ON/OFF pokedex display
        navBarDisplay.style.opacity = '0';
        // data container
        InfosPokemon.style.opacity = '0';
        //left pokedex leds
        LedsAnimations1.style.animationName = 'LedsAnimationOff';
        LedsAnimations2.style.animationName = 'LedsAnimationOff';
        LenteAnimations.style.animationName = 'LenteAnimationOff';
        // bottom display pokedex
        displayPokedex.style.backgroundPosition = '-9000px';
        pokeFormDisplay.style.opacity = '0';
    }
})

showList.addEventListener('click', () => {
    // data container
    abiliityList.style.opacity = '1';
    abiliityList.style.display = 'flex';
    InfosPokemon.style.display = 'none';
    InfosPokemon.style.opacity = '0';
})

hideList.addEventListener('click', () => {
    // data container
    abiliityList.style.opacity = '0';
    abiliityList.style.display = 'none';
    InfosPokemon.style.display = 'flex';
    InfosPokemon.style.opacity = '1';
})

// obs: resolver problema que desliga a,
// pokedex ao buscar pokemon.