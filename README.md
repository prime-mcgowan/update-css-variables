## Description

Play with spacing, blur and base-color for an image.

![Screen Shot 2024-04-02 at 9 51 54 AM](https://github.com/prime-mcgowan/update-css-variables/assets/113257735/0241c821-2a0c-4e37-97d8-2908905c4e56)

## Technologies Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Features

- Spacing range slider
- Blur range slider
- Base color picker

## How to Use

1. Open the web application in your preferred web browser.
2. Use your mouse to move the Spacing and Blur sliders
3. Click on the Base Color bar and choose any color you like from the default color picker

## Implementation Details

The app is implemented using HTML, JavaScript, and CSS for styling.

The app consists of an event listener and one main function:

- The event listener is listening for a change on the inputs. When there is a change the handleUpdate() function will run
- handleUpdate: sets the name for the element selected along with the new value and attaches a suffix if appropriate.
