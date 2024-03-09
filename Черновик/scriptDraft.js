// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')   //по умолчанию это GET
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let container = document.querySelector('.container')
      data.forEach((item) => {
        // let markup = createPostMarkup(item);
        addPostToDOM(container, createPostMarkup(item))
      })
    })
}

getPosts();
