let arrayOfUsers;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getUsers();
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfUsers
const getUsers = () => {
  fetch("https://randomuser.me/api/?results=1000")
    .then((res) => res.json())
    .then((users) => (arrayOfUsers = users));
};

const post = {
  title: "New Post for practice",
  body: "Fetch is gonna be big",
  userID: 1994,
};


// This function logs the results in your browser's console
const consoleUsers = () => {
  console.log(arrayOfUsers);
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayUsers = () => {

};