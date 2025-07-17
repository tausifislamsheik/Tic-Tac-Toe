const mainContainer = () => {
    const container = document.querySelector('#main-container');
    const div = document.createElement('div');
    div.classList = 'relative mx-auto w-90 h-90 gap-3 grid grid-cols-3 text-white';
    div.innerHTML = `
        <button class='box h-28 text-6xl font-bold rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <button class='box h-28 text-6xl font-bold rounded-xl border-none bg-[#fefae0] cursor-pointer'></button>
        <div id="win-line" class="absolute h-2 bg-yellow-400 rounded-full transition-all duration-500 ease-in-out origin-left scale-x-0"></div>
    `;
    container.appendChild(div);
};

mainContainer();

const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-btn');
const newGameBtn = document.querySelector('#game-btn');
const winningMsg = document.querySelector('#winning-msg');
const winningMsgSec = document.querySelector('#winning-msg-sec');

let turnO = true; // Player starts
let gameOver = false;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Handle player clicks
boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    if (gameOver || box.innerText !== '') return;

    makeMove(index, 'O');
    turnO = false;

    setTimeout(() => {
      if (!gameOver) computerMove();
    }, 500);
  });
});

const makeMove = (index, symbol) => {
  const box = boxes[index];
  if (box.innerText !== '') return;

  box.innerText = symbol;
  box.disabled = true;

  if (symbol === 'O') {
    box.classList.add('text-red-800');
  } else {
    box.classList.add('text-green-800');
  }

  checkWinner();
};

const computerMove = () => {
  const emptyIndexes = [];

  boxes.forEach((box, idx) => {
    if (box.innerText === '') emptyIndexes.push(idx);
  });

  if (emptyIndexes.length === 0) return;

  const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
  makeMove(randomIndex, 'X');
  turnO = true;
};

const highlightBoxes = (indexes, winner) => {
  const bgColor = winner === 'O' ? 'bg-red-200' : 'bg-green-200';
  indexes.forEach(i => {
    boxes[i].classList.add(bgColor, 'scale-110');
  });
};

const drawWinningLine = (indexes) => {
  const line = document.querySelector('#win-line');

  const positions = {
    '0,1,2': { top: '25%', left: '0', width: '100%', rotate: '0' },
    '3,4,5': { top: '50%', left: '0', width: '100%', rotate: '0' },
    '6,7,8': { top: '75%', left: '0', width: '100%', rotate: '0' },
    '0,3,6': { top: '0', left: '16.66%', height: '100%', width: '2px', rotate: '90' },
    '1,4,7': { top: '0', left: '50%', height: '100%', width: '2px', rotate: '90' },
    '2,5,8': { top: '0', left: '83.33%', height: '100%', width: '2px', rotate: '90' },
    '0,4,8': { top: '50%', left: '0', width: '100%', rotate: '45' },
    '2,4,6': { top: '50%', left: '0', width: '100%', rotate: '-45' },
  };

  const key = indexes.sort().join(',');
  const style = positions[key];

  if (style) {
    line.style.top = style.top || '50%';
    line.style.left = style.left || '0';
    line.style.width = style.width || '100%';
    line.style.height = style.height || '4px';
    line.style.transform = `rotate(${style.rotate || 0}deg) scaleX(1)`;
  }
};

const showWinner = (winner, indexes) => {
  const winnerColor = winner === 'O' ? 'text-red-800' : 'text-green-800';
  const winnerName = winner === 'O' ? 'You win!' : 'Computer win';
  const congras = winner === 'O' ? 'Congratulations' : '';

  winningMsg.innerHTML = `
       🎉
    <p class='text-5xl lg:text-7xl font-bold mb-7'>${congras}</p>
    <p class='text-5xl font-semibold'>
      ${winnerName} 
      <span class='text-6xl font-bold ${winnerColor} bg-white px-3 rounded-2xl'>
        ${winner}
      </span>
    </p>
  `;

  highlightBoxes(indexes, winner);
  drawWinningLine(indexes);
  winningMsgSec.classList.remove('hidden');
  disabledBoxes();
  gameOver = true;
};

const showDraw = () => {
  winningMsg.innerHTML = `
    <p class='text-5xl lg:text-6xl font-bold mb-4'>Match was Draw!</p>
    <p class='text-3xl font-medium text-yellow-300'>Try again 🔁</p>
  `;
  winningMsgSec.classList.remove('hidden');
  gameOver = true;
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    const val1 = boxes[a].innerText;
    const val2 = boxes[b].innerText;
    const val3 = boxes[c].innerText;

    if (val1 !== '' && val1 === val2 && val2 === val3) {
      showWinner(val1, [a, b, c]);
      return;
    }
  }

  // Check draw
  const isDraw = [...boxes].every(box => box.innerText !== '');
  if (isDraw) showDraw();
};

const disabledBoxes = () => {
  boxes.forEach(box => box.disabled = true);
};

const enabledBoxes = () => {
  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = '';
    box.classList.remove(
      'bg-red-200',
      'bg-green-200',
      'scale-110',
      'text-white',
      'text-red-800',
      'text-green-800'
    );
  });

  const line = document.querySelector('#win-line');
  if (line) {
    line.style.transform = 'scaleX(0)';
  }
};

const resetGame = () => {
  turnO = true;
  gameOver = false;
  enabledBoxes();
  winningMsgSec.classList.add('hidden');
};

resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);
