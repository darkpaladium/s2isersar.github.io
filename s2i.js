const images = [
  'tweet1.png',
  'tweet2.png',
  'tweet3.png',
  'tweet4.png',
  'tweet5.png'



 ];
 let currentIndex = 0;
 function showImage() {
  const imageElement = document.getElementById('gallery-image');
  imageElement.src = images[currentIndex];
 }
 function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
  currentIndex = images.length - 1;
  }
  showImage();
 }
 function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
  currentIndex = 0;
  }
  showImage();
 }
 showImage();