
function fetchComic() {

  document.getElementById('error-message').style.display = 'none';

  
  fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch the comic');
      }
      return response.json();
    })
    .then(data => {
      
      console.log(data);

      const comicImageUrl = data.img;

      
      document.getElementById('comic-image').src = comicImageUrl;
    })
    .catch(error => {
      
      document.getElementById('error-message').textContent = 'Oops! Something went wrong. Try again later.';
      document.getElementById('error-message').style.display = 'block';
      console.error(error);
    });
}


window.onload = fetchComic;
