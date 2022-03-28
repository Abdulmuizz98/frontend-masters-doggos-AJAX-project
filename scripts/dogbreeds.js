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

        // breedlist.forEach(function (item){
        //     const breed = item;

        // })
    })
};

function AddDoggos(){
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

function ClearDoggos(){
    for (let i = frame.childNodes.length - 1; i >= 0 ; i-- )
        frame.removeChild(frame.childNodes[i]);
}

const addDogBtns = document.querySelectorAll('.add-doggo');
addDogBtns.forEach((el) => el.addEventListener('click', AddDoggos));

const clearDogsBtns = document.querySelectorAll('.clear-doggos');
clearDogsBtns.forEach((el) => el.addEventListener('click', ClearDoggos));
// function appendImage(imageResponse)
// {
//     const img = document.createElement('img');
//     img.src = imageResponse.message;
//     img.alt = 'Dog Breed';
//     img.className = "dog-image";
//     frame.appendChild(img);
// }