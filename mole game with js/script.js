const moleElements = document.querySelectorAll('.hole img');
let fedCount = 0; 
 

function getRandomMoleIndices(count) {
  const indices = [];
  while (indices.length < count) {
    const randomIndex = Math.floor(Math.random() * moleElements.length);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
    }
  }
  return indices;
}

function showRandomMoles() {
  moleElements.forEach(mole => {
    mole.src = './hungry.png';
  });

  const randomIndices = getRandomMoleIndices(Math.floor(Math.random() * 2) + 2);
  randomIndices.forEach(index => {
    moleElements[index].style.display = 'block';
  });

  setTimeout(() => {
    randomIndices.forEach(index => {
      const mole = moleElements[index];
      if (mole.src.includes('fed.png')) {
        setTimeout(() => {
          mole.src = './leaving.png'; 
          setTimeout(() => {
            mole.style.display = 'none';  
          }, 2000);
        }, 2000);
      } else if (mole.src.includes('hungry.png')) {
        mole.src = './sad.png';
        setTimeout(() => {
          mole.src = './leaving.png';  
          setTimeout(() => {
            mole.style.display = 'none';  
          }, 2000);
        }, 2000);
      }
    });
  }, 2000);
}

function handleMoleClick(event) {
  const moleImage = event.target;
  if (moleImage.src.includes('hungry.png')) {
    moleImage.src = './fed.png';
    fedCount++;  
    var worm = document.querySelector("#worm");
var currentWidth = parseFloat(worm.style.width);
currentWidth += 25;
worm.style.width = currentWidth + "%";

    
    if (fedCount === 4) {
      window.location.href = 'fed.html';  
    }

    setTimeout(() => {
      moleImage.src = './leaving.png';  
      setTimeout(() => {
        moleImage.style.display = 'none';  
      }, 2000);
    }, 2000);
  }
}

moleElements.forEach(mole => {
  if (mole.src.includes('hungry.png')) {
    mole.addEventListener('click', handleMoleClick);
  }
});


showRandomMoles();
setInterval(showRandomMoles, 4000); 
