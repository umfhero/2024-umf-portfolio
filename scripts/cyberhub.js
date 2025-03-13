// Layout will not be affected after remove below javascript code

// Handle Image Gallery
const galleryMask = document.querySelector(".gallery-mask");
const maskImage = document.querySelector(".mask-image");
const galleryImgs = document.querySelectorAll(".image-item");

galleryMask.addEventListener("click", () => {
	galleryMask.classList.add("mask-off");
});

galleryImgs.forEach((item) => {
	item.addEventListener("click", () => {
		let styleValue = item.getAttribute("style");
		maskImage.setAttribute(
			"src",
			styleValue.slice(styleValue.indexOf(": url(") + 7, -3)
		);
		galleryMask.classList.remove("mask-off");
	});
});

// Handle Publish Date
const dateData = document.getElementById("dateData");
const sinceData = document.getElementById("sinceData");
let publishDate = "2023-04-27";

if (dateData) {
    dateData.innerHTML = moment(publishDate).format("LL");
    console.log("Date Data:", dateData.innerHTML); // Debugging line
}

if (sinceData) {
    sinceData.innerHTML = moment(publishDate).fromNow();
    console.log("Since Data:", sinceData.innerHTML); // Debugging line
}