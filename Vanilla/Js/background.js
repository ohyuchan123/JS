const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bdImage = document.createElement("img");

bdImage.src = `/Vanilla/img/${chosenImage}`;

document.body.appendChild(bdImage);