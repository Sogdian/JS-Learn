var pictures = [
  'gallery-tomato/tomato-red-large.jpg',
  'gallery-tomato/tomato-yellow-large.jpg',
  'gallery-tomato/tomato-strange-large.jpg'
];

let galleryPicturePreviews = document.querySelectorAll(".gallery__picture-preview")
let fullPicture = document.querySelector(".full-picture")

let func = function(galleryPicturePreviews, pictures){
  galleryPicturePreviews.onclick = function(){
    fullPicture.src = pictures;
  }
}

for(let i = 0; i < galleryPicturePreviews.length; i++) {
  func(galleryPicturePreviews[i], pictures[i]);
}