const BREEDLIST_URL = "https://dog.ceo/api/breeds/list/all"; //Breeds API

const frame = document.querySelector('.doggos');
const select = document.getElementById('dog-breeds'); //breeds dropdown

const addDogBtns = document.querySelectorAll('.add-doggo');
const clearDogsBtns = document.querySelectorAll('.clear-doggos');

/*---------- Add and Clear Buttons functionality created and used. ---------*/

/**
 * populateDropdown - adds a random list of available breeds from the Breeds API to 'select'
 * 
 * Return: Nothing.
 */
function populateDropdown() {
    const promise = fetch(BREEDLIST_URL);

    promise.then((resp) => {
        const process = resp.json();
        return process;
    })
    .then((processed) => {
        const breedlist = processed.message;
        for(let breed in breedlist)
        {
            const option = document.createElement('option');
            option.value = breed;
            option.innerText = breed;
            select.appendChild(option);
        }
    })
};

/**
 * AddDoggo - adds a random breed image returned by the Breed API.
 * 
 * Return: Nothing.
 */
function AddDoggo(){
    
    const img = document.createElement('img');
    const promise = fetch(`https://dog.ceo/api/breed/${select.value}/images/random`);
        
    img.src = "../images/loading.gif";
    img.alt = 'Loading';
    img.className = "dog-image";
    frame.appendChild(img);


    promise
    .then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse){
        setTimeout( renderImage, 500);

        function renderImage() {
            img.src = processedResponse.message;
            img.alt = 'Dog Breed';
        } 
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

document.addEventListener('focus', populateDropdown ); //Add the breeds returned by API to <select></select>

//Add the AddDoggo and ClearDoggos functionality to their respective buttons.

addDogBtns.forEach((el) => el.addEventListener('click', AddDoggo));
clearDogsBtns.forEach((el) => el.addEventListener('click', ClearDoggos));
