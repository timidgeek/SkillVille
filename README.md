<p align="center">
  <img src="/Users/jobabyyy/Desktop/SkillVille/images/sv-logoTM.png" alt="SV">
</p>



<p align="justify">

To foster a love for learning in children ages 4-7 by providing an educational gaming experience that teaches valuable life skills through fun, engaging activities in a safe and encouraging environment, empowering them to approach real-world experiences with curiosity and confidence.
</p>


<p align="center">
  <img src="RM_imgs/RM_banner.png" alt="Banner">
</p>


## :book: Table of Contents :book:
* [Environment](#environment)
* [Requirements](#requirements)
* [Installation](#installation)
* [IPS](#IPS)
* [Future Functionalities](#future-functionalities)
* [Bugs](#bugs)
* [Authors](#authors)
* [License](#license)


## :computer: Environment :computer:
 - Ubuntu
 - Unity 2022.3.5
 - Python
 - Computer with Internet access to itch.io


## :white_check_mark: Requirements :white_check_mark:
* pygame
* numpy
* neat-python
* graphviz
* matplotlib


## :cd: Installation :cd:
* Clone the repository: `git clone https://github.com/timidgeek/SkillVille.git`
* Access the SkillVille directory: `cd SkillVille`
* Run SkillVille: ``
  

## :video_game: Controls :video_game:
* `LMB`
    * Starts Game from Main Menu
* `Tab` or `Alt`
    * Starts Game from Game Over Screen
* `Spacebar`
    * Projects Death into the air
        * Fast taps move Death higher into the air at a faster pace
* `Esc`
    * Stops Gameplay & Directs to Game Over Screen
    * Directs to Main Menu from Game Over Screen
* `Enter`
    * Submits User Name to Leader Board


## :bulb: IPS :bulb:
- What do we use for our obstacles?
    - Lantern Staff in three different colors, one for each of our backgrounds.


<p align="center">
  <img src="RM_imgs/3L.png" alt="Three Lanterns" width="55%">
</p>


- How do we implement a seamless side scrolling background?
    - Mirror your image and save it as a separate file.
    - Double the width of your canvas size on your OG image, shift OG image to the left.
    - Place your mirrored image on the right side of the canvas. Voila!


<p align="center">
  <img src="RM_imgs/RM_1.png" alt="RM_1" width="20%">
  <img src="RM_imgs/RM_2.png" alt="RM_2" width="20%">
  <img src="RM_imgs/RM_4.png" alt="RM_4" width="40%">
</p>


- How can we easily make our three backgrounds blend together better?
    - Add clouds to the top of each background image to help create an illusion of seamless blending


<p align="center">
  <img src="RM_imgs/BB_RM_GBG.png" alt="RM_GBG" width="30%">
  <img src="RM_imgs/BB_RM_RSBG.png" alt="RM_RSBG" width="30%">
  <img src="RM_imgs/BB_RM_HBG.png" alt="RM_HBG" width="30%">
</p>

- How do we implement a Leader Board?
    - Use a .txt file for local machine scorekeeping.


<p align="center">
  <img src="RM_imgs/RM_imgLB1.png" alt="LB1" width="30%">
  <img src="RM_imgs/RM_imgLB2.png" alt="LB2" width="30%">
</p>


- How do we delay the obstacles in the beginning so you don't immediately crash?
    - Add a function to the gameplay screen
    - Have to tap once on `Spacebar` for the game to start.


- How do we implement the farts?!
    - Use the same image but in three different colors, one for each background.
    - Use pygame.transform.scale() & pygame.Surface
        - Increases the size of the farts while they fade away


<p align="center">
  <img src="RM_imgs/RM_imgFART.png" alt="RM_imgFART">
</p>


- Why does the game look like everything's moving weird?
    - The base and lanterns need to move at the same speed. No more motion sickness!


- Why does tapping on the Game Over Screen register on the Main Menu Screen?
    - Need to clear the input buffer
    - Use pygame.event.clear()
        - `LMB` no longer registers on the Game Over Screen


- Why does the fart placement look a little off?
    - Needed to lower the placement of the fart
        - Makes the fart flow look much more natural


<p align="center">
  <img src="RM_imgs/RM_imgFD1.png" alt="RM_imgFD1" width="35%">
  <img src="RM_imgs/RM_imgOFDO1.png" alt="RM_imgOFDO1" width="35%">
  <img src="RM_imgs/RM_imgFD2.png" alt="RM_imgFD2" width="35%">
  <img src="RM_imgs/RM_imgOFD2.png" alt="RM_imgOFD2" width="35%">
</p>


<!-- ## :robot: Future Functionalities :robot: -->


## :beetle: Bugs :beetle:
- No known bugs at this time.


## :memo: Authors :memo:
- Julia Bullard - [Github](https://github.com/Julia-5534)
- Mason Counts - [Github](https://github.com/spindouken)
- Johanna Avila - [Github](https://github.com/jobabyyy)
- Lindsey Thomas - [Github](https://github.com/timidgeek)
- Teylor Chapman - [Github](https://github.com/teylorchapman)

## :scroll: License :scroll:
