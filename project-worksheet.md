# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Complete


## Project Description

A portfolio website that will first have a navigation bar that will have my name on the left, and on the right it will have "My Work", "About Me", and "Contact Me". These three will disappear on mobile and instead it will be a hamburger icon. Below the navigation, it will have a header, "My Work", and I will display my work in cards. Below "My Work" section, it will be my "About Me" section. It will have a picture and a couple of sentences about myself. Below the "About Me" section, it will be the "Contact Me section where I will put my email, my phone number, Linkedin profile, github, and a contact form. Lastly I will have a footer. 
Ideas were from these three people.
http://helloaileen.com/
http://andrewhollingworth.com/
https://jessicalandzberg.github.io/Unit_1_Project/#intro
## Google Sheet

https://docs.google.com/spreadsheets/d/1ixqFlM630A-B5PjTOZnzpYaLlByty8JerBWjGrzChvU/edit#gid=0

## Wireframes

https://res.cloudinary.com/drxoihdbb/image/upload/v1583705359/Pictures/IMG_1285_wdlpfl.heic - mobile view and desktop view

[https://www.figma.com/](https://www.figma.com/)
[https://mockflow.com/app/#Wireframe](https://mockflow.com/app/#Wireframe)

## Time/Priority Matrix 

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 
https://res.cloudinary.com/drxoihdbb/image/upload/v1583708018/Pictures/IMG_1286_pybq0w.heic

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to fill in contact form
- Ability to click on sections on the navigation bar
- Have projects display in a card and the ability to click on them

#### PostMVP 



## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3hrs | 3hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Working on navigation | H | 3hrs| 4hrs | 4hrs |
| Responsiveness| H | 2hrs | 4hrs | 4hrs |
| Projects displayed properly| H | 3hrs| 4hrs | 4hrs |
| Links/icons | H | 2hrs | 3hrs | 3hrs |
| Styling | H | 2hrs | 4hrs | 4hrs |
| Total | H | 16hrs| 24.5hrs | 24.5hrs |

## Additional Libraries
 Watched youtube videos to create a hamburger icon and a working contact form.
 * Hamburger Icon - https://www.youtube.com/watch?v=xMTs8tAapnQ
 * Contact Form - https://www.youtube.com/watch?v=GMH3rNTN4IQ 
 * Working Contact Form - https://www.youtube.com/watch?v=ZAkESLyXO74
 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function app(projects) {
    console.log('app-projects', projects)
    const myProjects = () => {
        for (let i = 0; i < projects.length; i ++) {
            let $a = $('<a>').attr('href', projects[i].url).text('Link');
            let $img = $('<img>').attr('class', 'projects').attr('src', projects[i].image);
            let $h4 = $('<h4>').attr('class', 'title').text(projects[i].title);
            let $div = $('<div>').attr('class', 'ItemContainer').append($h4).append($img).append($a)
            $('.MyWork').append($div);
        }
    }
    myProjects();
 
 This is what I did to render the data onto my portfolio site. I thought I was going spend more time on this part of my project.
```

## Issues and Resolutions

**ERROR**: I was only appending my images from my google sheet. Realized there was a syntax error.
```
            let $a = $('</a>').attr('href', projects[i].url).text('Link');
            let $img = $('<img>').attr('class', 'projects').attr('src', projects[i].image);
            let $h4 = $('</h4>').attr('class', 'title').text(projects[i].title);
            let $div = $('<div>').attr('class', 'ItemContainer').append($h4).append($img).append($a)
            $('.MyWork').append($div)
```
**RESOLUTION**: There was a forward slash on $a and $h4.

**ERROR**: The hamburger menu was going behind "My Work" section so it couldn't be seen.

**RESOLUTION**: Used position and z-index properties to fix.

