

// append the list item to the unordered list
  const appendItemToList = function(list_item) {
    // grab the unordered list
    const unorderedList = document.querySelector('#french-ul')
    // attach the list item to it
    unorderedList.appendChild(list_item)
  }

/////////////////////////////////////////
  const createNewListItems = function (french, translation, friend_faux) {

// create two new list items that I can plug my form inputs into
    const newItem = document.createElement('li');
    newItem.textContent = `${french} - ${translation} (${friend_faux})`;

// run another function to append, taking in these new list items
  appendItemToList(newItem)
  }

/////////////////////////////////////////
  const handleForm = function (event) {
    event.preventDefault();

// grab the info from the form and store in a variable
    const french_phrase = event.target.french.value
    const translation = event.target.translation.value
    const friend_faux = event.target.friendfaux.value

// fire off another function that takes in these variables
    createNewListItems(french_phrase, translation, friend_faux)

// reset the form
    const form = event.target;
    form.reset()
  }
////////////////////////////////////////
  const handleDeleteBtnClicked = function(event) {
    console.log('delete');

  const frenchList = document.querySelector('#french-ul');
  // while there is a child element for that ul, delete the child
  while (frenchList.firstChild) {
    frenchList.removeChild(frenchList.firstChild);
  }
}



// START HERE
  document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#french-form');
  // ^^ step 1: grab the information from the form
  form.addEventListener('submit', handleForm);

  const deleteBtn = document.querySelector('#deleteAll')
  deleteBtn.addEventListener("click", handleDeleteBtnClicked);

  })
