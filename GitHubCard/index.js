import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/RealSadLemon')
  .then((res) =>{
    document.querySelector('.cards').appendChild(cardCreator(res.data));
  })
  .catch((res) =>{
    alert(`User: ${res.data.username} did not return anything`);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['Arkoma', 'jzkime', 'gretchyn-hickman', 'Abargallo19'];
for(let i = 0; i < followersArray.length; i++){
  axios.get(`https://api.github.com/users/${followersArray[i]}`)
  .then((res) =>{
    document.querySelector('.cards').appendChild(cardCreator(res.data));
  })
  .catch((res) =>{
    alert(`User: ${followersArray[i]} did not return anything`);
  });
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardCreator = ({avatar_url, html_url, name, username, location, followers, following, bio})=>{
  //to make each tag
  const container = document.createElement('div');
  const img = document.createElement('img');
  const infoContainer = document.createElement('div');
  const nameHeading = document.createElement('h3');
  const userName = document.createElement('p');
  const local = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followersPara = document.createElement('p');
  const followingPara = document.createElement('p');
  const bioPara = document.createElement('p');
  container.classList.add('card');
  infoContainer.classList.add('card-info');
  nameHeading.classList.add('name');
  userName.classList.add('username');
  img.src = avatar_url;
  link.href = html_url;
  nameHeading.textContent = name;
  userName.textContent = username;
  local.textContent = `Location: ${location}`;
  profile.textContent = 'Profile:';
  link.textContent = html_url;
  followersPara.textContent = `Followers: ${followers}`;
  followingPara.textContent = `Following: ${following}`;
  bioPara.textContent = `Bio: ${bio}`;
  container.appendChild(img);
  container.appendChild(infoContainer);
  infoContainer.appendChild(nameHeading);
  infoContainer.appendChild(userName);
  infoContainer.appendChild(local);
  infoContainer.appendChild(profile);
  infoContainer.appendChild(followersPara);
  infoContainer.appendChild(followingPara);
  infoContainer.appendChild(bioPara);
  profile.appendChild(link);
  return container;
};
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
