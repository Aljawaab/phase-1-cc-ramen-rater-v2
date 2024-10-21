// index.js

// Callbacks
const handleClick = (ramen) => {
  //creating the elements
  const ramenDetailDiv = document.getElementById("ramen-detail");
  const ramenImageElement = ramenDetailDiv.querySelector(".detail-image");
  const ramenNameElement = ramenDetailDiv.querySelector(".name");
  const ramenRestaurantElement = ramenDetailDiv.querySelector(".restaurant");
  const ratingDisplay = document.getElementById("rating-display");
  const commentDisplay = document.getElementById("comment-display");

 
  // Update the elements with the ramen data
  ramenImageElement.src = ramen.image;
  ramenImageElement.alt = ramen.name;
  ramenNameElement.textContent = ramen.name;
  ramenRestaurantElement.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
 };
const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');// Add code
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    // Get the form data
    const name = document.getElementById('new-name').value;
    const restaurant = document.getElementById('new-restaurant').value;
    const image = document.getElementById('new-image').value;
    const rating = document.getElementById('new-rating').value;
    const comment = document.getElementById('new-comment').value;

    // Create a new ramen object
    const newRamen = {name, restaurant, image, rating, comment};

    // Add the new ramen to the #ramen-menu div
    const ramenMenuDiv = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => {
      handleClick(newRamen);
  });
    ramenMenuDiv.appendChild(img);

    // Reset the form fields
    form.reset();
  });

}
  const displayRamens = () => {
    const ramenMenuDiv = document.getElementById('ramen-menu')
        fetch("http://localhost:3000/ramens")
        .then((resp) => resp.json())
        .then((ramens) => ramens.forEach((ramen, index) => {
          const img = document.createElement('img');
          img.src = ramen.image;
          img.alt = ramen.name;
          img.addEventListener('click', () => {       
              handleClick(ramen);
    
          });
          ramenMenuDiv.appendChild(img)
    }) )
};

const main = () => {
 document.addEventListener('DOMContentLoaded', () => {
    displayRamens();
    addSubmitListener();// Invoke addSubmitListener here
  });
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
