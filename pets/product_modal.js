// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks the pet's name, open the modal 
let nameButtons = (ids) => {
	let nameBtnPrefix = "name-btn "
	for (let i = 0; i < ids.length; i++) {
		nameBtn = document.getElementById(nameBtnPrefix + ids[i])
		nameBtn.addEventListener("click", () => {
			modal = document.getElementById("product-modal " + ids[i]);
			modal.style.display = "block";
		});
	}
}

// When the user clicks the pet's image, open the modal 
let imageButtons = (ids) => {
	let imageBtnPrefix = "img-btn "
	for (let i = 0; i < ids.length; i++) {
		imageBtn = document.getElementById(imageBtnPrefix + ids[i])
		imageBtn.addEventListener("click", () => {
			modal = document.getElementById("product-modal " + ids[i]);
			modal.style.display = "block";
		});
	}
}

// When the user clicks on <span> (x), close the modal
let spanButtons = (ids) => {
	for (let i = 0; i < ids.length; i++) {
		modal = document.getElementById("product-modal " + ids[i])
		span = modal.getElementsByClassName("close")
		span[0].addEventListener("click", () => {
			modal.style.display = "none";
		});
	}
}

// Helper function to get IDs from each modal on the page
function getIds() {
	let ids = []
	let mdls = document.getElementsByClassName('modal')
	let idPrefix = "product-modal "
	for (i = 0; i < mdls.length; i++) {
		let id = mdls[i].id
		id = id.slice(idPrefix.length, id.length)
		ids.push(id)
	}
	return ids
}

let ids = getIds() // get ids of modals loaded on page
nameButtons(ids)   // listeners for name buttons
imageButtons(ids)  // listeners for image buttons
spanButtons(ids)   // listeners for span