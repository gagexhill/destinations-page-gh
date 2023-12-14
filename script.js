user_input_form.addEventListener("submit", (e) => {

e.preventDefault()

const PLACEHOLDER_PHOTO_URL = "C:\StudentWork\SDE_JavaScript\week3\day4\destinations-page-gh\resources\destination_image.jpg"

const destinationName = destination_name.value
const locationName = location_name.value
const photoURL = photo_url.value || PLACEHOLDER_PHOTO_URL
const descr = description.value 

user_input_form.reset

console.log(destinationName, locationName, photoURL, descr);
});