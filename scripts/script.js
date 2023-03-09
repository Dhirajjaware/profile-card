"use strict";

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
