/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
let container = document.querySelector('.cards');
axios.get('https://api.github.com/users/coleahjoan')
.then(res => {
  console.log(res);
  const githubInfo = cardCreator(res.data);
  container.appendChild(githubInfo)
})
.catch(err => {
  console.log(err);
});
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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
  followersArray.forEach ( follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(res => {
    console.log(res.data);
      const eachFollower = cardCreator(res.data)
      container.appendChild(eachFollower)
  })
  .catch(err => {
    console.log(err)
  })
})

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
function cardCreator(singleObject) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  const cardImage = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
  cardDiv.classList.add('.card-info')
  const headerh3 = document.createElement('h3');
  cardDiv.classList.add('name');
  const pUserName = document.createElement('p');
  cardDiv.classList.add('username');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');
  const aProfile = document.createElement('a');
  const pBio = document.createElement('p');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');

  headerh3.textContent = singleObject.name;
  cardImage.src = singleObject.avatar_url;
  pUserName.textContent = singleObject.login;
  pLocation.textContent = `Location: ${singleObject.location}`;
  pProfile.textContent = "Profile: ";
  aProfile.setAttribute = ('href', singleObject.html_url);
  aProfile.textContent = singleObject.html_url;
  pFollowers.textContent = `Followers: ${singleObject.followers}`;
  pFollowing.textContent = `Following: ${singleObject.following}`;
  pBio.textContent = `Bio: ${singleObject.bio}`;

  cardDiv.appendChild(cardImage);
  cardDiv.appendChild(cardInfoDiv)

  cardInfoDiv.appendChild(headerh3);
  cardInfoDiv.appendChild(pUserName);
  cardInfoDiv.appendChild(pLocation);
  cardInfoDiv.appendChild(pProfile);
    pProfile.appendChild(aProfile);
  cardInfoDiv.appendChild(pFollowers);
  cardInfoDiv.appendChild(pFollowing);
  cardInfoDiv.appendChild(pBio);

  return cardDiv;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
