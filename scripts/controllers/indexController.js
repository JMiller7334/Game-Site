/*Controller:
*/

/**SCROLL TOP:
 * this function scrolls the user to the top of the webpage when they 
 * hit the return button on the webpage.
 */
export function scroll2top() {
    console.log("index-controller: scroll2top")
    // For Safari, Chrome, Firefox, IE, and Opera
    document.body.scrollIntoView({top: 0, behavior: 'smooth'});
    document.documentElement.scrollIntoView({top: 0, behavior: 'smooth'});
};

/**TAB CHANGE:
 * this code handles changing the tab and page content when the user
 * clicks on one of the tab buttons on the webpage.
 */
let current = "Features";
export function toggleContent(request, contentTypes, contentTexts){
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
        is on a mobile device - if so we use the img hero for features.*/
        
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
        scroll2top();
    }
};

/**Info:
 * this toggles the sidebar menu when the user clicks
 * on it.
 */
let menuOpen = false;
export function toggleSidebar(menu, menuButton){
    if (menuOpen === true){
        menuButton.innerHTML = "&#9776; Game Info";
        menuOpen = false;
        menu.style.width = "0px";
    } else {
        menuButton.innerHTML = "&#9776; Close";
        menuOpen = true;
        menu.style.width = "100vw";
   }
};

//NOTE: func below handles clearing the intro screen after animations play.
export function clearIntroContent(event, introContainer){
    if (event.animationName === "anim-appear"){
        if (introContainer !== null){
            console.log("index-controller: removing introContainer");
            introContainer.remove();
        }
    }
 };

