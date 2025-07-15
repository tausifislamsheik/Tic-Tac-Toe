const mainContainer = () =>{
    const container = document.querySelector('#main-container');
    const div = document.createElement('div');
    div.classList = 'mx-auto w-90 h-90 gap-3 grid grid-cols-3 text-white'
    div.innerHTML = `
        
        <button class='btn box h-28 text-6xl text-red-800 rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn box h-28 text-6xl text-red-800 rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn box h-28 text-6xl text-red-800 rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn box h-28 text-6xl text-red-800 rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn box h-28 text-6xl text-red-800 rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn box h-28 text-6xl text-red-800 rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn box h-28 text-6xl text-red-800 rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn box h-28 text-6xl text-red-800 rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn box h-28 text-6xl text-red-800 rounded-xl border-none bg-[#fcecae]'></button>
    `;
    container.appendChild(div);
};

mainContainer();