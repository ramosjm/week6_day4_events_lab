document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const deleteButton = document.createElement('input');
  deleteButton.type = 'button';
  deleteButton.value = 'Delete';
  const h1Prepend = document.querySelector('#new-item-form');
  h1Prepend.appendChild(deleteButton);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit',()=>{
    console.dir(event.target);
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    const newReadingItem = document.createElement('p');
    newReadingItem.textContent = `Title : ${title} Author: ${author} Category: ${category}`;
    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(newReadingItem);

  });

});
