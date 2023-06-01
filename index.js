// Fetch user data from the Random User API
async function fetchUser() {
  try {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const user = data.results[0];
    const fullName = `${user.name.first} ${user.name.last}`;
    const phone = user.phone;
    const email = user.email;
    const address = `${user.location.street.number} ${user.location.street.name}`;

    document.getElementById('user-image').src = user.picture.large;
    document.getElementById('user-name').textContent = fullName;
    document.getElementById('user-phone').textContent = phone;
    document.getElementById('user-email').textContent = email;
    document.getElementById('user-address').textContent = address;
  } catch (error) {
    console.log(error);
  }
}

// Event listener for the "Generate User Profile" button
document.getElementById('generate-btn').addEventListener('click', fetchUser);

// Call fetchUser() when the page loads
window.addEventListener('DOMContentLoaded', fetchUser);
