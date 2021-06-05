//checking storage
const data = async () => {
    if(!navigator.storage) {
       alert('your browser does not support storage checking')
    }
    try {
    const StorageManager = await navigator.storage.estimate()
    console.log(StorageManager)
    } catch(error) {
        console.log(error)
    }

}
data()

// For network checking

 const network = () => {
     if(!navigator.connection) {
         alert("your browser does not allow to check network")
     }
     const connection = navigator.connection
    console.log(connection.downlink)

 }

//for checking languages
const languages = () => {
     
    if(!navigator.languages) {
        alert("your browser does not allow to check languages")
    }
    const languages = navigator.languages
    console.log(languages)

}
languages()

 //for checking if user is online or not
  const online = () => {
  
    const line = navigator.onLine
    if(line) {
        alert("you are connected to the internet")
        console.log(line)
    }
    else {
        alert("your are disconnected from internet")
    }
  }
  online()

//checking vibration

function vibrate ()  {
    if(!window.navigator.vibrate) {
       alert("your device does not support vibration")
    }
    window.navigator.vibrate([200, 100, 200])
}

//for checking battry

const battry = async () => {
    try {
    const now = await navigator.getBattery()
    console.log(now)
    } catch(error) {
        console.log("error")
    }
}

battry()

//checking available media devices

const devices = () => {

    if(!navigator.mediaDevices) {
        alert("your browser does not allow to check media devices")
    }

    const media = navigator.mediaDevices

    console.log(media)
}
devices()

//The operating system (OS) and/or CPU on which the browser is running

const os = () => {

    if(!navigator.appVersion) {
      alert("your browser does not allow to check OS CPU Version")
    }
        
    const lap = navigator.appVersion
    console.log(lap)
}
os()

//Returns the amount of device memory in gigabytes

const memory = () => {
    try {
    const storage = navigator.deviceMemory
    console.log(storage)
    } catch(error) {
        console.log(error)
    }
}

memory()

//your location finder

const locate = () => {
    if(!navigator.geolocation) {
         alert("your browser does not support geolocation")
    }
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
    })
}

locate()

//Returns the system platform on which the browser is running.

const platform = () => {
    try {
    const run = navigator.platform
    console.log(run)
    } catch(error) {
        console.log(error)
    }
}
platform()