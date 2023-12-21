// MAUREEN NYAGA SCT 211-0052/2022
// script.js
function renderInfo() {
    const form = document.getElementById('contactForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;

    const infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
}
