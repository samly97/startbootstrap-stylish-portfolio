///////////////////////
/// MODAL FUNCTIONS ///
///////////////////////

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

// When the user clicks on footer "close", close the modal
let footerButtons = (ids) => {
	for (let i = 0; i < ids.length; i++) {
		modal = document.getElementById("product-modal " + ids[i])
		closeBtn = modal.querySelector(".modal-footer .btn.btn-primary")
		closeBtn.addEventListener("click", () => {
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

///////////////////////////
/// MODAL FUNCTIONS END ///
///////////////////////////


////////////////////////////////
/// OPEN MODAL BY URL PARAMS ///
////////////////////////////////
const queryString = window.location.search
console.log(queryString)
const urlParams = new URLSearchParams(queryString)

// Given a map of the (pets, id) on the given page
// if the pet requested in the URL params matches
// one of the pets on screen, then have the modal open.
let openModalByURLParams = (nameMap) => {
	if(urlParams.has('name')) {
		let toOpen = urlParams.get('name')
		toOpen = toOpen.toLowerCase()
		if (toOpen in nameMap) {
			let id = nameMap[toOpen]
			modal = document.getElementById("product-modal " + id)
			modal.style.display = "block"
			return
		} else {
			return
		}
	} else {
		return
	}
}

// Looks through page for names of pet and returns a hashmap
// of name, id pair
let getNameMap = (ids) => {
	let map = new Object()
	for (let i = 0; i < ids.length; i++) {
		card = document.getElementById("name-btn " + ids[i])
		petName = card.textContent
		petName = petName.toLowerCase()
		map[petName] = ids[i]
	}
	return map
}

///////////////////////////
/// ADD MODAL LISTENERS ///
///////////////////////////
let ids = getIds() // get ids of modals loaded on page
let nameMap = getNameMap(ids) // gets name, id of pets loaded on page

nameButtons(ids)   // listeners for name buttons
imageButtons(ids)  // listeners for image buttons
spanButtons(ids)   // listeners for span close button
footerButtons(ids) // listeners for footer close button

openModalByURLParams(nameMap) // open modal by URL params