document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

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
