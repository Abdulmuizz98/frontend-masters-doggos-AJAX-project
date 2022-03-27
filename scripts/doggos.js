const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const frame = document.querySelector('.doggos');


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