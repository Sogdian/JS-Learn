let theme_button_dark = document.querySelector('.theme-button-dark');
theme_button_dark.onclick = function(){
  document.body.classList.add('dark');
  document.querySelector('.theme-button-dark').classList.add('active');
  document.querySelector('.theme-button-light').classList.remove('active');
}

let theme_button_light = document.querySelector('.theme-button-light');
theme_button_light.onclick = function(){
  document.body.classList.remove('dark');
  document.querySelector('.theme-button-light').classList.add('active');
  document.querySelector('.theme-button-dark').classList.remove('active');
}

let button_sans_serif = document.querySelector('.font-button-sans-serif');
button_sans_serif.onclick = function(){
  document.body.classList.remove('serif');
  document.querySelector('.font-button-sans-serif').classList.add('active');
  document.querySelector('.font-button-serif').classList.remove('active');
}

let theme_button_serif = document.querySelector('.font-button-serif');
theme_button_serif.onclick = function(){
  document.body.classList.add('serif');
  document.querySelector('.font-button-serif').classList.add('active');
  document.querySelector('.font-button-sans-serif').classList.remove('active');
}

let blog_articles = document.querySelectorAll('.blog-article');

for(let blog_article of blog_articles) {
  let blog_article_button_more = blog_article.querySelector('.more');
  blog_article_button_more.onclick = function () {
    blog_article.classList.remove('short');
  }
}

let card_view_button_grid = document.querySelector('.card-view-button-grid');
let card_view_button_list = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

card_view_button_grid.onclick = function () {
  cards.classList.remove('list');
  card_view_button_grid.classList.add('active');
  card_view_button_list.classList.remove('active');
}

card_view_button_list.onclick = function () {
  cards.classList.add('list');
  card_view_button_list.classList.add('active');
  card_view_button_grid.classList.remove('active');
}

let active_photo = document.querySelector('.active-photo');
let preview_lists = document.querySelectorAll('.preview-list li a');

for (let preview_list of preview_lists) {
  preview_list.onclick = function (evt) {
    evt.preventDefault();
    active_photo.src = preview_list.href;


    let current_image = document.querySelector('.preview-list a.active-item');
    current_image.classList.remove('active-item');

    preview_list.classList.add('active-item');
  }
}