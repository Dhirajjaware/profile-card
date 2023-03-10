"use strict";

const imageProfile = document.querySelector(".profile__image");
const inputProfileImage = document.querySelector(".input__profile-image");
const profileName = document.querySelector(".profile__name");
const labelUnivercity = document.querySelector(".university");
const labelOccupation = document.querySelector(".label__occupation");
const linkLinkedin = document.querySelector(".link__linkedin");
const linkInstagram = document.querySelector(".link__instagram");
const linkFacebook = document.querySelector(".link__facebook");
const linkTwitter = document.querySelector(".link__twitter");

const iconLinkedin = document.querySelector(".icon__linkedin");
const iconInstagram = document.querySelector(".icon__instagram");
const iconFacebook = document.querySelector(".icon__facebook");
const iconTwitter = document.querySelector(".icon__twitter");

inputProfileImage.addEventListener("change", function (e) {
  const files = e.target.files;

  for (const file of files) {
    const imageUrl = URL.createObjectURL(file);
    imageProfile.src = imageUrl;
  }
});

profileName.addEventListener("click", function () {
  const inputProfleName = prompt("Enter Your Name:");

  if (inputProfleName) {
    profileName.textContent = inputProfleName;
  }
});

// btnUploadProfileImage.addEventListener("click", function () {
//   console.log(inputProfileImage.value);
// });

labelOccupation.addEventListener("click", function () {
  const inputOccupation = prompt("Enter Your Occupation.");
  labelOccupation.textContent = inputOccupation;
  labelOccupation.classList.toggle("p2");
});

labelUnivercity.addEventListener("click", function () {
  const inputUniversityName = prompt("Enter Your University name.");
  labelUnivercity.textContent = inputUniversityName;
});

// l i f t

document.addEventListener("keypress", function (e) {
  if (e.key === "l") {
    const userLinkedinLink = prompt("Paste Your Linkedin Link.");
    iconLinkedin.href = userLinkedinLink;
  } else if (e.key === "i") {
    const userInstaLink = prompt("Paste Your Instagram Link.");
    iconInstagram.href = userInstaLink;
  } else if (e.key === "f") {
    const userFacebookLink = prompt("Paste Your Facebook Link.");
    iconFacebook.href = userFacebookLink;
  } else if (e.key === "t") {
    const userTwitterLink = prompt("Paste Your Twitter Link.");
    iconTwitter.href = userTwitterLink;
  }
});
