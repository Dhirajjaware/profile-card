"use strict";
const labelUnivercity = document.querySelector(".university");
const labelOccupation = document.querySelector(".label__occupation");

const imageProfile = document.querySelector(".profile__image");

const inputProfileImage = document.querySelector(".input__profile-image");

const profileName = document.querySelector(".profile__name");

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
