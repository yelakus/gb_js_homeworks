document.body.insertAdjacentHTML('afterbegin', '<table></table>');
const tableTag = document.querySelector('table');
for (let i = 0; i < 10; i++){
  tableTag.insertAdjacentHTML('afterbegin', '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
};

document.querySelector('.test-class:last-child');
