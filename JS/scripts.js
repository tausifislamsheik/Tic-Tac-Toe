const mainContainer = () =>{
    const container = document.querySelector('#main-container');
    const div = document.createElement('div');
    div.classList = 'mx-auto w-90 h-90 gap-3 grid grid-cols-3 text-white'
    div.innerHTML = `
        
        <button class='btn h-28 text-6xl rounded-xl border-none bg-[#fcecae]'>O</button>
        <button class='btn h-28 text-6xl rounded-xl border-none bg-[#fcecae]'>X</button>
        <button class='btn h-28 text-6xl rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn h-28 text-6xl rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn h-28 text-6xl rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn h-28 text-6xl rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn h-28 text-6xl rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn h-28 text-6xl rounded-xl border-none bg-[#fcecae]'></button>
        <button class='btn h-28 text-6xl rounded-xl border-none bg-[#fcecae]'></button>
    `;
    container.appendChild(div);
};

mainContainer();