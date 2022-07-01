import home from "./pages/home/index.js";

const main = document.querySelector('#root');
window.addEventListener('load', () => {
    console.log(main)
    main.appendChild(home());
})