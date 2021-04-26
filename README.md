# frontend

### Installation

After clonning the repository

you need to install `expo` in order to launch the project by using this command `npm install --global expo-cli`

I used expo, because i was planning to also release the iOS and Android version of the test, but i run out of time :(.

Once you installed expo you just need to  run `npm install` then `expo start`

It will launch `expo` portal, you will just need to click on `run in web browser` and it will launch the react app.

### What's left to do but i didn't have enough time :(

- finalize design integration (tab design, check all responsive breakpoint, font size/color/type, doublecheck spacing/padding/size)
- Display teams members info on the game history.
- Search historic (The search historic data are saved but not displayed !)
- I have a date display issue. the library i'm used too is deprecated, didn't have time to fine an alternative.

### API limitation

I don't know if it was on purpose but some data were missing in the API

- League data : - Prefered position + match play with this position
- Average Game data : - We canmot filter the data by type of game 
                      - kill participation data is not given by the API, I might would have been able to calculate it, but i don't have the formula :(
- History Game : - The champion name is not given by the API, only imgurl and level. 

### File structure

- Main.tsx : The app start point with its global structure
- Components/ : You can find in this folder all the UI componnent I made for this app
- redux/ : you can find here my redux reducers, actios and my global store
- redux/type.tsx : All my data model
- tools/: you can find all the function helpers and my env configuration
