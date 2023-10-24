let theme_button_dark = document.querySelector('.theme-button-dark');
theme_button_dark.onclick = function(){

  document.body.classList.add('dark');
  document.querySelector('.theme-button-dark').classList.add('active');
  document.querySelector('.theme-button-light').classList.remove('active');
  console.log('dark');
}

let theme_button_light = document.querySelector('.theme-button-light');
theme_button_light.onclick = function(){

  document.body.classList.remove('dark');
  document.querySelector('.theme-button-light').classList.add('active');
  document.querySelector('.theme-button-dark').classList.remove('active');
  console.log('light');
}

let button_sans_serif = document.querySelector('.font-button-sans-serif');
button_sans_serif.onclick = function(){

  document.body.classList.remove('serif');
  document.querySelector('.font-button-sans-serif').classList.add('active');
  document.querySelector('.font-button-serif').classList.remove('active');
  console.log('sans_serif');
}

let theme_button_serif = document.querySelector('.font-button-serif');
theme_button_serif.onclick = function(){

  document.body.classList.add('serif');
  document.querySelector('.font-button-serif').classList.add('active');
  document.querySelector('.font-button-sans-serif').classList.remove('active');
  console.log('serif');
}