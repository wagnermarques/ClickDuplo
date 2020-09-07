import _ from 'lodash';
import './style.css';
import gameIconUrl from './icon.png';

const gameIconImgTag = new Image();
gameIconImgTag.src = gameIconUrl;


export default function fixedHeaderComponent() {
    const divContainer = document.createElement('div');
    const btnLogin = document.createElement('button');
    const btnJogar = document.createElement('button');

    btnLogin.id="btnLogin";
    btnLogin.type="button";
    btnLogin.innerHTML = "Login";

    btnJogar.id="btnogar";
    btnJogar.type="button";
    btnJogar.innerHTML = "Jogar";


    divContainer.classList.add('fixedHeader');    
    divContainer.id = "fixedHeader";
    divContainer.innerHTML = _.join(['Jogador:', 'anonimo'], ' ');
    divContainer.appendChild(btnLogin);
    divContainer.appendChild(btnJogar);
    
    return divContainer;
}


