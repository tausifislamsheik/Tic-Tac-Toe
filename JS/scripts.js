const mainContainer = () =>{
    const container = document.querySelector('#main-container');
    const div = document.createElement('div');
    div.classList = 'mx-auto w-90 h-90 gap-3 grid grid-cols-3 text-white'
    div.innerHTML = `
        
        <button class='box h-28 text-6xl font-bold text-red-800 rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold text-red-800 rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold text-red-800 rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold text-red-800 rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold text-red-800 rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold text-red-800 rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold text-red-800 rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold text-red-800 rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold text-red-800 rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
    `;
    container.appendChild(div);
};

mainContainer();

const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-btn');

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
    
];

boxes.forEach(box =>{
    box.addEventListener('click', () =>{
        if(turnO){
            box.innerText ='O'
            turnO = false;
        }else{
            box.innerText = 'X'
            turnO = true
        }
        box.disabled = true; 

        checkWinner();
    });
});






const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                alert('winner')
            }
        }
    }
}



