"use strict";
const form = document.getElementById("apiRequestForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const searchTerm = document.getElementById("searchTerm").value;
  const mediaType = document.getElementById("mediaType").value;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // API request
  const apiUrl =
    "https://images-api.nasa.gov/search?q=" +
    encodeURIComponent(searchTerm) +
    "&media_type=" +
    mediaType;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const items = data.collection.items;
      let html = "";

      if (items.length === 0) {
        html = "No results found.";
      } else {
        items.forEach((item) => {
          const title = item.data[0].title;
          const description = item.data[0].description;
          const mediaUrl = item.links[0].href;

          html += "<div>";
          html += "<h3>" + title + "</h3>";
          html += "<p>" + description + "</p>";
          html += '<a href="' + mediaUrl + '" target="_blank">';
          if (mediaType === "image") {
            html += '<img src="' + mediaUrl + '" alt="' + title + '">';
          } else {
            html += "Watch Video";
          }
          html += "</a>";
          html += "</div>";
        });
      }
      resultDiv.innerHTML = html;
      resultDiv.style.display = "block";
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});
