function genGround()  {
  const containerElement = document.getElementById('chess');

  for (let row = 0; row < 10; row++) {
    const tr = document.createElement('tr');
    containerElement.appendChild(tr);

    for (let col = 0; col < 10; col++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}

function fillGround() {
  const trElements = document.getElementsByTagName('tr');

  const firstTr = trElements[0].getElementsByTagName('td');

   for (let i = 1; i < 9; i++) {
     firstTr[i].textContent += i;
     firstTr[i].classList.add('alignTxt')
   }

  let dec = 65;
    for (let i = 1; i < 9; i+=2) {

      const tr = trElements[i].getElementsByTagName('td');
      tr[0].textContent += String.fromCharCode(dec);
      tr[0].classList.add('alignTxt')
      for (let j = 1; j < 9; j+=1) {
        tr[j++].classList.add('black')
        tr[j].classList.add('white')
      }
      tr[9].textContent += String.fromCharCode(dec++);
      tr[9].classList.add('alignTxt')

      const tr2 = trElements[i+1].getElementsByTagName('td');
      tr2[0].textContent += String.fromCharCode(dec);
      tr2[0].classList.add('alignTxt')
      for (let k = 1; k < 9; k+=1) {
        tr2[k++].classList.add('white')
        tr2[k].classList.add('black')
      }
      tr2[9].textContent += String.fromCharCode(dec++);
      tr2[9].classList.add('alignTxt')
    }

  const lastTr = trElements[9].getElementsByTagName('td');

  for (let i = 1; i < 9; i++) {
    lastTr[i].textContent += i;
    lastTr[i].classList.add('alignTxt')
  }
}

genGround();
fillGround();

console.log(String.fromCharCode(65));