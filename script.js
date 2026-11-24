console.log("Welcome to My Image Gallery!");

alert("Welcome to My Image Gallery!");

function filterImages(category) {
  let images = document.querySelectorAll(".image-card");

  images.forEach(function (image) {
    if (category === "all" || image.classList.contains(category)) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

console.log("Welcome to My Image Gallery!");

alert("Welcome to My Image Gallery!");

function filterImages(category) {
  let images = document.querySelectorAll(".image-card");

  images.forEach(function (image) {
    if (category === "all" || image.classList.contains(category)) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

// Lightbox JavaScript

let galleryImages = document.querySelectorAll(".image-card img");

let lightbox = document.getElementById("lightbox");
let lightboxImage = document.getElementById("lightboxImage");
let closeButton = document.getElementById("closeLightbox");

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    lightbox.style.display = "flex";
    lightboxImage.src = image.src;
  });
});

closeButton.addEventListener("click", function () {
  lightbox.style.display = "none";
});
// Next and Previous Image

let currentImageIndex = 0;

function showImage(index) {
  currentImageIndex = index;
  lightboxImage.src = galleryImages[currentImageIndex].src;
}

galleryImages.forEach(function (image, index) {
  image.addEventListener("click", function () {
    showImage(index);
  });
});

// Next button
document.getElementById("nextImage").addEventListener("click", function () {
  let nextIndex = (currentImageIndex + 1) % galleryImages.length;
  showImage(nextIndex);
});

// Previous button
document.getElementById("prevImage").addEventListener("click", function () {
  let prevIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(prevIndex);
});
// Keyboard Controls
document.addEventListener("keydown", function (event) {
  if (lightbox.style.display === "flex") {
    if (event.key === "ArrowRight") {
      let nextIndex = (currentImageIndex + 1) % galleryImages.length;
      showImage(nextIndex);
    }

    if (event.key === "ArrowLeft") {
      let prevIndex =
        (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(prevIndex);
    }

    if (event.key === "Escape") {
      lightbox.style.display = "none";
    }
  }
});
