const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const BREEDLIST_URL = "https://dog.ceo/api/breeds/list/all";


const frame = document.querySelector('.doggos');
const select = document.getElementById('dog-breeds');

document.addEventListener('focus', populateDropdown );

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

function AddDoggos(){
    
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

function ClearDoggos(){
    for (let i = frame.childNodes.length - 1; i >= 0 ; i-- )
        frame.removeChild(frame.childNodes[i]);
}

const addDogBtns = document.querySelectorAll('.add-doggo');
addDogBtns.forEach((el) => el.addEventListener('click', AddDoggos));

const clearDogsBtns = document.querySelectorAll('.clear-doggos');
clearDogsBtns.forEach((el) => el.addEventListener('click', ClearDoggos));
