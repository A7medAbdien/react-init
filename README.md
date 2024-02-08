# Perquisites

1. [node js](https://nodejs.org/en/download), my environment *node: v20.11.0* *npm: 10.2.4*

2. [ionic](https://ionicframework.com/docs/intro/cli), my environment *ionic: 7.1.5*
```sh
npm install -g @ionic/cli
```

# Run on Browser

Clone this repository and in the same directory run the following

for windows
```sh
npm i
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
ionic serve
```

for mac
```sh
npm i
ionic serve
```

# Deploy

All the information here from [Ionic Docs](https://ionicframework.com/docs/react/your-first-app/deploying-mobile)

## For android

1. install [Android Studio](https://developer.android.com/studio)
2. in the code repository 

```sh
ionic build
ionic cap add android
ionic cap copy
ionic cap sync
ionic cap open android
```

## For iOS

1. install [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
2. in the code repository 

```sh
ionic build
ionic cap add ios
ionic cap copy
ionic cap sync
ionic cap open ios
```

>**_NOTE:_**:
> I do not have a mac, but I included all the resources that might need to make the app work for iOS. So do not get devastated, and be open to search for a solution.

# SplashScreen

follow https://capacitorjs.com/docs/apis/splash-screen
