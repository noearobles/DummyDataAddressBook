const apiUrl = "https://randomuser.me/api/?results=50";

let arrayOfUsers = [];

window.onload = function () {
 getUsers();
  displayUsers();
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfUsers
const getUsers = () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((users) => (arrayOfUsers = users.results));
 
};

// This function logs the results in your browser's console
const consoleUsers = () => {
  console.log(arrayOfUsers);
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayUsers = () => {
  const allUsers = document.getElementById("all-Users");
  arrayOfUsers.map((user, index) => {
    const li = document.createElement("li");
    const photo = document.createElement("img");
    photo.src = user.picture.medium;
    const text = document.createTextNode(
      `#${index}, Username: ${user.name.first} ${user.name.last}: Email: ${user.email}`
    );

    li.appendChild(text);
    allUsers.append(li);
    allUsers.append(photo);
  });
};
const displayDOB = () => {
  const allUsers = document.getElementById("dob");
  arrayOfUsers.map((user, index) => {
    const li = document.createElement("p");
    const text = document.createTextNode(
      `#${index}, Birthdate: ${user.dob.date} Address: ${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.country} ${user.location.postcode}`
    );

    li.appendChild(text);
    allUsers.append(li);
  });
};
const reload = () => {
  window.location.reload;
};
