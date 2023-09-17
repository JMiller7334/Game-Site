/*Notes:
main.js handles toggling the sidebar, and toggling the page's main content.
It ensures the page scrolls to the top when content has been changed too.
It also handles clearing the pages intro content after it has been played.
 

let menuOpen = false;
let introPlayed = false;
//SIDEBAR STUFF//
//This code drags/moves the sidebar out onto the page. //
function toggleSidebar() {
    let menu = document.getElementById("sidebarMenu");
    let menuButton = document.getElementById("buttonToggleSidebar");

    if (menuOpen == true){
        menuButton.innerHTML = "&#9776; Game Info";
        menuOpen = false;
        menu.style.width = "0px";
    } else {
        menuButton.innerHTML = "&#9776; Close";
        menuOpen = true;
        menu.style.width = "100vw";
    }
  }

  //ToggleContent//
  let current = "Features";
  const contentTypes = ["Story", "Rides", "Features"];
  const contentTexts = {
    Story:"Play the story, live the Adventure", 
    Rides:"Featuring over 20 epic rides", 
    Features: ""};

function scroll2TopContainer(container){
    container.scrollTop = 0; // For Safari
    container.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  
function toggleContent(request){
    if (request !== current){
        // hides all content //
        for (let i = 0; i < contentTypes.length; i++) {
            let pageContent = document.getElementById("category"+contentTypes[i]);
            pageContent.style.display = "none";
            document.getElementById("button"+contentTypes[i]).classList = "notSelected";
            document.getElementById("hero"+contentTypes[i]).style.display = "none";
        }
        /* brings in new content 
        NOTE: a bit of a hack but this uses the state of the heroFeaturesMobile ID to determine if the user
        is on a mobile device - if so we use the img hero for features.
        
        if (request == "Features"){
            document.getElementById("heroGradient").style.display = "none"
            //if (window.getComputedStyle(document.getElementById("heroFeaturesMobile")).display === "block"){
            if (window.matchMedia("(max-width: 900px)").matches) {
                console.log("jsMain: request - " + request + " using mobile hero.");
                document.getElementById("heroFeatures").style.display = "block";

            } else {
                console.log("jsMain: request - " + request + " using hero.");
                document.getElementById("heroFeatures").style.display = "block";
            }
        } else {
            console.log("jsMain: request - " + request + " using non-feature hero.");
            document.getElementById('hero'+ request).style.display = "block";
            document.getElementById("heroGradient").style.display = "block"
        }
        document.getElementById("category" + request).style.display = "block";
        document.getElementById("button"+ request).classList = ("isSelected");
        document.getElementById("heroText").innerHTML = contentTexts[request];
        //------------------------------------------------------------//
        current = request;
        scroll2TopContainer(document.getElementById("contentContainer"));
    }
}

//CORRECT HERO ON WINDOW RESIZE
/*const mediaQuery = "(min-width: 900px)";
const mediaQueryList = window.matchMedia(mediaQuery);
mediaQueryList.addEventListener('change', event => {
    console.log(window.innerWidth);
    if (current === "Features" ){
        if (event.matches) {
            //DESKTOP
            console.log("jsMain: correcting features hero >900");
            document.getElementById("heroFeatures").style.display = "block";
        }else {
            console.log("jsMain: correcting features hero <900");
            document.getElementById("heroFeatures").style.display = "block";
        }
    }
})

//CORRECT HERO ON ORIENTATION CHANGE
function onOrientationChanged(change){
    if (current === "Features"){
        if (change.matches) {
            // portrait
            console.log("jsMain: correcting features hero - display none/portrait");
            document.getElementById("heroFeatures").style.display = "none"
        } else {
            // landscape
            console.log("jsMain: correcting features hero - display none/landscape");
            document.getElementById("heroFeatures").style.display = "block"
        }
    }
};
window.matchMedia("orientation: portrait").addEventListener("change", onOrientationChanged);
 //VIDEO RUN ON BOTH NOT USED


//NOTE: func below handles clearing the intro screen after animations play.
const contentContainer = document.getElementById("contentContainer");
contentContainer.addEventListener("animationend", (event) => {
    if (event.animationName === "anim-appear"){
        if (document.getElementById("introContainer")){
            console.log("jsMain: removing introContainer");
            document.getElementById("introContainer").remove();
        }
    }
 });

 //RETURN BUTTON
 let returnButton = document.getElementById("returnButton");
 window.onscroll = function() {
   onScroll();
 };
 contentContainer.onscroll = function(){
    onScroll();
 }
 
function onScroll() {
    let targetPosition = window.innerHeight/2; // Position to show the button (e.g., 100vh)
    if (contentContainer.scrollTop > targetPosition || document.documentElement.scrollTop > targetPosition) {
        // Clear any existing animation styles
        returnButton.style.animation = '';
        // Set new animation properties
        returnButton.style.animationName = 'intro-animFade';
        returnButton.style.animationDuration = '0.7s';
        returnButton.style.animationTimingFunction = 'ease-in-out';
        
        
        returnButton.style.display = "block";
    } else {
        //returnButton.style.display = "none";
        // Clear any existing animation styles
        returnButton.style.animation = '';
        
        // Set new animation properties
        returnButton.style.animationName = 'anim-disappear-returnButton';
        returnButton.style.animationDuration = '0.7s';
        returnButton.style.animationTimingFunction = 'ease-in-out';
    }
}
 
function scroll2top() {
    console.log("jsMain: scroll2top")
    // For Safari, Chrome, Firefox, IE, and Opera
    document.body.scrollIntoView({top: 0, behavior: 'smooth'});
    document.documentElement.scrollIntoView({top: 0, behavior: 'smooth'});
}*/
