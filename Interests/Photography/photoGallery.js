
function pullPhotos(photos, target) {

	for (photo in photos) {
		var imageContainer = document.createElement("img");
		imageContainer.src = domain + photos[photo].path;
		imageContainer.setAttribute("loading", "lazy");
		imageContainer.setAttribute("alt", "Rails");
		var linkContainer = document.createElement("a");
		linkContainer.href = domain + photos[photo].path;
		linkContainer.className = "block lightbox priority" + photos[photo].priority + " " + photos[photo].orientation;
		linkContainer.appendChild(imageContainer);

		document.getElementById(target).appendChild(linkContainer);
	}
}
