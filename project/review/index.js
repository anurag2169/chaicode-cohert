const input = document.getElementById("reviewInput");

const submitButton = document.getElementById("submit");

const titleInput = document.getElementById("title");

const reviewBox = document.getElementById("reviewBox");

const ratingStars = Array.from(document.querySelectorAll(".star-icon"));

submitButton.addEventListener("click", () => {
  let inputVal = input.value;
  let titleVal = titleInput.value;

  const noOfStars = getNumberOfStar();
  const newReviewHtml = `<div>
                <h2 class="text-lg font-semibold">${titleVal}</h2>
                <div class="text-wrap">
                  ${inputVal}
                </div>
                 <ul class="stars flex gap-1 py-1">
                ${getPaintedStars(noOfStars).join("")}
              </ul>
                 <span class="font-semibold text-gray-500">${getCurrentDateTime()}</span>
              </div>`;

  if (!inputVal || !titleVal) {
    alert("Please fill all the fields");
  } else {
    reviewBox.insertAdjacentHTML("afterbegin", newReviewHtml);
  }
  input.value = "";
  titleInput.value = "";
  resetPaint();
});

function getCurrentDateTime() {
  const timeStamp = new Date();
  const date = new Date(timeStamp);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return formattedDate;
}

//reset paint on star
const resetPaint = () => {
  ratingStars.forEach((star) => {
    star.style.stroke = "black";
    star.style.fill = "none";
    star.classList.remove("star-painted");
  });
};

//star rating
ratingStars.forEach((star) => {
  star.addEventListener("click", () => {
    resetPaint();
    let starNumber = 0;
    for (let i = 0; i < ratingStars.length; i++) {
      if (star.classList.contains(`star-${i + 1}`)) {
        starNumber = i + 1;
      }
    }
    paintStars(starNumber);
  });
});

//paint star on click
const paintStars = (starNumber) => {
  for (let i = 0; i < starNumber; i++) {
    ratingStars[i].style.fill = "orange";
    ratingStars[i].style.stroke = "orange";
    ratingStars[i].classList.add("star-painted");
  }
};

//get number of star painted
const getNumberOfStar = () => {
  let noOfStars = 0;
  ratingStars.forEach((star) => {
    if (star.classList.contains("star-painted")) {
      noOfStars++;
    }
  });
  return noOfStars;
};

//geting painted star-icons
const getPaintedStars = (noOfStars) => {
  const starHtmls = [];

  for (let i = 0; i < noOfStars; i++) {
    starHtmls.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" class="size-5">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
                  </svg>`);
  }

  return starHtmls;
};
