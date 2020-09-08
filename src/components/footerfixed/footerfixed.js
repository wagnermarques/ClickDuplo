import _ from 'lodash';
import './style.css';
console.log("export default function footerFixedComponent() {...");
export default function footerFixedComponent() {
    const divFooterContainer = document.createElement('div');

    divFooterContainer.classList.add('footerfixed');
    const spanTempo = document.createElement('span');
    spanTempo.id="tempo";
    spanTempo.innerHTML="?";

    divFooterContainer.id = "footer";
    divFooterContainer.innerHTML = "Tempo:";
    divFooterContainer.appendChild(spanTempo);
    
    return divFooterContainer;
}


