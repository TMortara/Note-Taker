# Note Taker

## Description
The Note Taker application provides users with the ability to eliminate those paper notes that constantly clutter their desk.  Users can add/delete their daily notes as needed.  By using this application, they will always have access to their notes online. 

## Deployed Application
This application was deployed through Heroku.
https://collection-of-notes.herokuapp.com/

## Table of Contents
- [Built With](#built-with)
- [Installation Steps](#installation-steps)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Credits](#credits)
- [Resources Used to Complete Project](#resources-used-to-complete-project)
- [License](#license)
- [Screenshots of Application](#screenshots-of-application)

## Built With:
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## Installation Steps
Users do not need to install anything if they want to add/delete notes through the UI.  

If you decide to fork or clone this repo, you will need to [install Node.js](https://nodejs.org/en/) and Express.js.  

Once Node.js has been installed, open the integrated terminal in VS Code and run <mark>npm install</mark>.  This will install all of the dependencies listed in the package.json file, including Express.js.   

<u>Installation Resources</u>:
 - [Node.js Documentation](https://nodejs.org/en/docs/)
 - [Express.js Documentation]([https://www.npmjs.com/package/inquirer#installation](https://expressjs.com/en/starter/installing.html))

## Usage
1. Click Get Started
2. All previous notes will be listed in the left hand column
3. Enter a note title by clicking on 'Note Title'
4. Enter the note text by clicking on 'Note Text'
5. A save button will appear in the top right of the screen after a note title and note text have been entered 
6. To review a previous note, click on the note title on the left hand side
7. If you do not want to keep the note, you can click on the red trash can to the right of the note title
8. To add a new note, click on the plus sign in the top right of the screen
9. Click 'Note Taker' in the upper left corner to return to the main page

## File Structure
The directory for this application is as follows:
- db/ Contains notes submitted by user
- helpers/ Contains helper functions that are utilized within the notes.js route file
- public/ Contains all public files (HTML, CSS, JS)
- routes/ Contains route files for notes and index

## Credits
- My Tutor, Alex Gonzales, for teaching me more about Classes and SubClasses.

### Resources Used to Complete Project
- [Express.js documentation](https://expressjs.com/)
- [Traversy Media Express Crash Course YouTube Video](https://www.youtube.com/watch?v=L72fhGm1tfE)
- [Node.js file system documentation](https://nodejs.dev/en/api/v19/fs/)
- [Node.js prompt documentation](https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/)
- [Heroku Documentation](https://devcenter.heroku.com/categories/nodejs-support)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshots of Application
![collection-of-notes herokuapp com_](https://user-images.githubusercontent.com/107971753/213335452-8a87a031-680f-4bad-9ae7-63d12135846d.png)

![collection-of-notes herokuapp com_notes](https://user-images.githubusercontent.com/107971753/213335418-9ab10247-f05c-4bab-9060-8dc8e2c4649d.png)



