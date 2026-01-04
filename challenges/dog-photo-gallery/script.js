const addDogBtn = document.getElementById('addDogBtn');
const clearGalleryBtn = document.getElementById('clearGalleryBtn');
const dogGallery = document.getElementById('dogGallery');

// This is the function to fetch a random dog image
async function fetchRandomDog() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // To create a new list item with the dog image
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = data.message; // This is the Dog image URL
    img.alt = 'Random Dog';
    li.appendChild(img);
    dogGallery.appendChild(li);

  } catch (error) {
    alert('Failed to fetch dog image: ' + error.message);
    console.error('Error fetching dog image:', error);
  }
}

// this is the event listeners
addDogBtn.addEventListener('click', fetchRandomDog);

clearGalleryBtn.addEventListener('click', () => {
  dogGallery.innerHTML = ''; // to clear all images
});
