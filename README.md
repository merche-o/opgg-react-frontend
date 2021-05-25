# frontend

### Installation

After clonning the repository

you need to install `expo` in order to launch the project by using this command `npm install --global expo-cli`

I used expo, because i was planning to also release the iOS and Android version of the test, but i run out of time :(.

Once you installed expo you just need to  run `npm install` then `expo start`

It will launch `expo` portal, you will just need to click on `run in web browser` and it will launch the react app.

#### Step by step

- `npm install --global expo-cli`
- `npm install`
- `expo start`
- on the `expo` portal click on `run in web browser`

### File structure

- Main.tsx : The app start point with its global structure
- Components/ : You can find in this folder all the UI componnent I made for this app
- redux/ : you can find here my redux reducers, actios and my global store
- redux/type.tsx : All my data model
- tools/: you can find all the function helpers and my env configuration
