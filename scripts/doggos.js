const DOG_URL = "https://dog.ceo/api/breeds/image/random"; //API link

const frame = document.querySelector('.doggos'); 
const addDogBtns = document.querySelectorAll('.add-doggo');
const clearDogsBtns = document.querySelectorAll('.clear-doggos');


/*---------- Add and Clear Buttons functionality created and used. ---------*/

/**
 * AddDoggo - adds a random dog image returned by the DOG_URL.
 * 
 * Return: Nothing.
 */
function AddDoggo(){
    const promise = fetch(DOG_URL);
    
    promise
    .then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse){
        const img = document.createElement('img');
        img.src = processedResponse.message;
        img.alt = 'Dog Breed';
        img.className = "dog-image";
        frame.appendChild(img);
    })
}

/**
 * ClearDoggos - removes all dog images earlier rendered on the frame.
 * 
 * Return: Nothing.
 */
function ClearDoggos(){
    for (let i = frame.childNodes.length - 1; i >= 0 ; i-- )
        frame.removeChild(frame.childNodes[i]);
}

//Add the AddDoggo and ClearDoggos functionality to their respective buttons.

addDogBtns.forEach((el) => el.addEventListener('click', AddDoggo));
clearDogsBtns.forEach((el) => el.addEventListener('click', ClearDoggos));
