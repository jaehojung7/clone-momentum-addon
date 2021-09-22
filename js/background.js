const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg"];

cityImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `static/${cityImages}`;

document.body.appendChild(bgImage);
