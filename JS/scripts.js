const mainContainer = () =>{
    const container = document.querySelector('#main-container');
    const div = document.createElement('div');
    div.classList = 'mx-auto my-24 w-90 h-90 gap-3 grid grid-cols-3 '
    div.innerHTML = `
        
        <button class='btn h-28 text-6xl'>O</button>
        <button class='btn h-28 text-6xl'>X</button>
        <button class='btn h-28 text-6xl'></button>
        <button class='btn h-28 text-6xl'></button>
        <button class='btn h-28 text-6xl'></button>
        <button class='btn h-28 text-6xl'></button>
        <button class='btn h-28 text-6xl'></button>
        <button class='btn h-28 text-6xl'></button>
        <button class='btn h-28 text-6xl'></button>
    `;
    container.appendChild(div);
};

mainContainer();