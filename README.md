# DOGGOS AJAX PROJECT

## ABOUT
An hello world AJAX project inspired by the introduction to Web Development course by [Brian Holt](https://github.com/btholt).

The webpage sends API requests to the [dog.ceo](https://dog.ceo/api/breeds/image/random) API. An API that returns random pictures of dogs.

## PAGES
The project provides 3 services, each having its own page on the application. I have broken down their functionalities below.

1. [Home page (Dogs)](./index.html) -  Helps generate a random dog.

1. [Dog Frames](./dogframes.html) - Helps generate the desired number of frames, subsequently allowing you to render and remove random dog images on each of the generated frames.

1. [Dog Breeds](./dogbreeds.html) - Here is where I actually did the tasks from the Course, Allows a user to select a dog breed from a dropdown, and then it renders a picture of a dog of the selected breed on the frame. 
## TASKS

The task represents the specifications and requirements of the project from the course.

1. Add this to your GitHub in its own repo (we'll learn how to do that later)
    
1. Style it nice using CSS.
    
1. Show a loading gif (just use an `<img />`) that shows when you're loading a new doggo and then hide it when you're done.
     <i class="fas fa-spinner fa-pulse"></i>
    
1. The dog.ceo API allows you to request a list of breeds. Use this list to populate a `<select></select>`. Then when a user select a dog breed, show a picture of that dog using the random image by breed API.
 