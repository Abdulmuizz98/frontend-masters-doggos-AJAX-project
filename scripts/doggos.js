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

        // appendImage(processedResponse);
    })
}

const addDogBtn = document.querySelector('.add-doggo');
addDogBtn.addEventListener('click', AddDoggos);

console.log('This would log first!');

// function appendImage(imageResponse)
// {
//     const img = document.createElement('img');
//     img.src = imageResponse.message;
//     img.alt = 'Dog Breed';
//     img.className = "dog-image";
//     frame.appendChild(img);
// }