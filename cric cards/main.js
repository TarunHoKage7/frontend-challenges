

const dict = {
    squarecut: "/cric cards/assets/squarecut.jpeg",
    straightdrive: "/cric cards/assets/straightdrive.jpeg",
    ondrive: "/cric cards/assets/ondrive.jpeg",
    pull: "/cric cards/assets/pull.jpeg",
    legglance: "/cric cards/assets/legglance.jpeg",
    latecut: "/cric cards/assets/latecut.jpeg",
    flick: "/cric cards/assets/flick.jpeg",
    sweep: "/cric cards/assets/sweep.jpeg",
    uppercut: "/cric cards/assets/uppercut.jpeg",
    switchhit: "/cric cards/assets/switchhit.jpeg",
    hook: "/cric cards/assets/hook.jpeg",
    slog: "/cric cards/assets/slog.jpeg",
    coverdrive: "/cric cards/assets/coverdrive.jpeg",
    offdrive: "/cric cards/assets/offdrive.jpeg",
    reversesweep: "/cric cards/assets/reversesweep.jpeg",
    slogsweep: "/cric cards/assets/slogsweep.jpeg",
    cut: "/cric cards/assets/cut.jpeg",
    scoop: "/cric cards/assets/scoop.jpeg",
    squaredrive: "/cric cards/assets/squaredrive.jpeg",
 
    bouncer: "/cric cards/assets/bouncer.jpeg",
    inswinger: "/cric cards/assets/inswinger.jpeg",
    outswinger: "/cric cards/assets/outswinger.jpeg",
    legcutter: "/cric cards/assets/legcutter.jpeg",
    offcutter: "/cric cards/assets/offcutter.jpeg",
    reverseswing: "/cric cards/assets/reverseswing.jpeg",
    yorker: "/cric cards/assets/yorker.jpeg",
    pace: "/cric cards/assets/pace.jpeg"
 }
 
 const strategies  = {
     squarecut :{
        image : "/cric cards/assets/offcutter.jpeg",
        bestagainst :{ 
            pace : "/cric cards/assets/offcutter.jpeg",
            outswinger: "/cric cards/assets/offcutter.jpeg",
            legcutter : "/cric cards/assets/offcutter.jpeg"
     },
        badagainst:{
            bouncer : "/cric cards/assets/offcutter.jpeg",
            inswinger :"/cric cards/assets/offcutter.jpeg",
            yorker :"/cric cards/assets/offcutter.jpeg"
 
    }
     },
     pull: {
        image : "/cric cards/assets/offcutter.jpeg",
        bestagainst :{ 
            offcutter:"/cric cards/assets/offcutter.jpeg",
            bouncer:"/cric cards/assets/offcutter.jpeg"
     },
     badagainst:{
        reverseswing:"/cric cards/assets/offcutter.jpeg",
        yorker:"/cric cards/assets/offcutter.jpeg"
         
   }
    } ,
    latecut: {
      image :"/cric cards/assets/offcutter.jpeg",
      bestagainst :{ 
         legcutter :"/cric cards/assets/offcutter.jpeg",
         reversestring :"/cric cards/assets/offcutter.jpeg"
  },
  badagainst:{
    inswinger:"/cric cards/assets/offcutter.jpeg",
   yorker:"/cric cards/assets/offcutter.jpeg"
    }
    },
    flick : {
      image: "/cric cards/assets/offcutter.jpeg",
      bestagainst :{ 
         inswinger :"/cric cards/assets/offcutter.jpeg",
         offcutter :"/cric cards/assets/offcutter.jpeg"
  },
  badagainst:{
    bouncer:"/cric cards/assets/offcutter.jpeg",
   yorker:"/cric cards/assets/offcutter.jpeg"
    }
    }
   }
 
 
 
 
 function displayStratagies(){
    //console.log("function accessed");
 
    //This loop iterates over strategies by shot names
   for(const shot in strategies){
    //creating a container element i.e., Row container. 
    //This container would contain three parts: left, middle, and right.
    let item = document.createElement("li");
    const itemClass = item.classList;
    itemClass.add("container");
    //document.querySelector("ul").appendChild(item)
    //creating the left div
    let leftSec = document.createElement("div");
    const leftSecClass = leftSec.classList;
    leftSecClass.add("left");
    //This loop iterates over the bestagainst object which has atmost three key-value pairs in it.
    //we will then append individual images onto the left div.
    //console.log(strategies[`${shot}`].image)
    for(const ball in strategies[`${shot}`].bestagainst){
       //console.log(ball);
       let image = document.createElement("img")
       let imgClass = image.classList;
       imgClass.add("playImg");
       image.src = strategies[`${shot}`].bestagainst[`${ball}`];
       image.alt = ball;
       leftSec.appendChild(image);
    }
 
    //appending the left div onto the item (container).
    item.appendChild(leftSec);
    //creating the middle div
    let middleSec = document.createElement("div");
    const middleSecClass = middleSec.classList;
    middleSecClass.add("middle");
 
    //Creating and appending the shot image onto the middle div
    let image = document.createElement("img")
    let imgClass = image.classList;
    imgClass.add("playImg");
    image.src = strategies[`${shot}`].image;
    image.alt = shot;
    middleSec.appendChild(image);
 
    //appending the middle div onto the item (container)
    item.appendChild(middleSec);
 
    //creating the right div
    let rightSec = document.createElement("div");
    const rightSecClass = rightSec.classList;
    rightSecClass.add("right");
 
    //This loop iterates over the badagainst object which has atmost three key-value pairs in it.
    //we will then append individual images onto the right div.
    for(const ball in strategies[`${shot}`].badagainst){
       let image = document.createElement("img")
       let imgClass = image.classList;
       imgClass.add("playImg");
       image.src = strategies[`${shot}`].badagainst[`${ball}`];
       image.alt = ball;
       rightSec.appendChild(image);
    }
 
    //appending the right div onto the item (container)
    item.appendChild(rightSec);
    document.querySelector("ul").appendChild(item)
   }
 
 
 }
 
 
 (() => displayStratagies())();