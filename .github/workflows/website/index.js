


const counter = document.querySelector(".numbercounter");

async function updateCounter() {
    // Provide the correct URL for your API or resource
    let response = await fetch("https://ropax3xzmkj6e7vgmeyvx5cxvq0ytkot.lambda-url.us-east-1.on.aws/"); // Update this URL
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`; // Use backticks for template literals
}

updateCounter();
