const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const frameContainer = document.querySelector('.frame-container');

const frameAmountSelect = document.querySelector('.amt-to-generate'); // Input for number of frames

const addFramesBtn = document.querySelector('.add-frames-btn');
const clearFramesBtn = document.querySelector('.remove-frames-btn');

var totalFrames = 0; // Holds number of frames created in 0 based (used to generate frame ID).

/** 
 * addFrames - adds Frames of a given amount to the frame container.
 * 
 * Description: Adds frames of a given amount alongside add and 
 *              remove image buttons for each. 
 * 
 * Return: Nothing;
 */
function addFrames(){
    const frameAmount = parseInt(frameAmountSelect.value);
    
    for(let i = totalFrames; i < (totalFrames + frameAmount); i++)
    {
        //Create frame and img
        const imgDiv =  document.createElement('div');
        const img = document.createElement('div');

        //Create add and remove image buttons
        const addImgBtn = document.createElement('button');
        const removeImgBtn = document.createElement('button');

        addImgBtn.innerText = "Add Image";
        removeImgBtn.innerText = "Remove Image";
        
        //Assign class names to be used in styles
        imgDiv.className = "frame";
        img.className = "frame-img"
        img.id = `img-${i}`;
        addImgBtn.className = "add frame-btn btn"
        addImgBtn.id = `${i}`;
        removeImgBtn.className = "remove frame-btn btn"
        removeImgBtn.id = `${i}`;

        //Append the frame elements like image and buttons to a frame
        imgDiv.appendChild(img);
        imgDiv.appendChild(addImgBtn);
        imgDiv.appendChild(removeImgBtn);

        frameContainer.appendChild(imgDiv);
    }
    totalFrames += frameAmount;
    setupAddRemoveImage();
}

/** 
 * clearFrames - Clears all Frames in the frame container.
 * 
 * Return: Nothing;
 */
function clearFrames(){
    const frames = document.querySelectorAll(".frame");

    for (let i = 0; i < frames.length; i++)
        frameContainer.removeChild(frames[i]);  
        
    totalFrames = 0;
}
    
/** 
 * setupAddRemoveImage - Prepares the add and remove image functionality when a frameset is added.
 * 
 * Return: Nothing.
 */
function setupAddRemoveImage(){
    frameContainer.addEventListener('click', function(event){
        
        const ID = event.target.id;
        const img = document.getElementById(`img-${ID}`);
        
        img.style.backgroundImage = `url("../images/loading.gif")`;
        
        const promise = fetch(DOG_URL);
                    
        if (event.target.innerText  == "Add Image")
        {
            promise
            .then(function(response){
                const processing = response.json();
                return processing;
            })
            .then(function(processed){
                img.style.backgroundImage = `url(${processed.message})`
            });
        }
        else{
            img.style.backgroundImage = `url("")`;            
        }
    });
}
        
//On click of the add frames btn, add frames. 
addFramesBtn.addEventListener('click', addFrames);
//On click of the clear frames btn, clear all frames. 
clearFramesBtn.addEventListener('click', clearFrames);
