import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const collection = document.querySelector('.gallery');

const listImg = galleryItems.map(({preview, original, description}) =>

`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('')

 collection.insertAdjacentHTML('afterbegin', listImg )


     let gallery = new SimpleLightbox('.gallery a', {
      captionsData: `alt`,
      captionDelay: 250,
   });


console.log(galleryItems);
