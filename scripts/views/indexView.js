import * as controller from '../controllers/indexController.js';

const introContainer = document.getElementById("introContainer");
const contentContainer = document.getElementById("contentContainer");

console.log("index-view imported");

const contentTypes = ["Story", "Rides", "Features"];
const contentTexts = {
    Story: "Play the story, live the Adventure",
    Rides: "Featuring over 20 epic rides",
    Features: ""
};

contentTypes.forEach(contentType => {
    const button = document.getElementById("button" + contentType);
    button.addEventListener("click", () => controller.toggleContent(contentType, contentTypes, contentTexts));
});
// Initialize the initial view state


/*INFO:
calls the controller to toggle the sidebar menu
and bring it into view.
 */
const sidebarmenu = document.getElementById("sidebarMenu");
const sidebarButton = document.getElementById("buttonToggleSidebar");
function sidebarClickListener(){
    controller.toggleSidebar(sidebarmenu, sidebarButton);
};
sidebarButton.addEventListener("click", sidebarClickListener);

/*INFO:
the listener that calls the controller to clear the intro
content after the intro plays.
*/
contentContainer.addEventListener("animationend", (event) => {
    controller.clearIntroContent(event, introContainer);
    console.log("index-view: controller called to clear content.");
});

/**INFO:
 * handling for the return button and making it appear when the user scrolls.
 */
let returnButton = document.getElementById("returnButton");
returnButton.addEventListener('click', function(){
    console.log("index-view: return button clicked.");
    controller.scroll2top();
 });
window.onscroll = function() {
    onScroll();
};
contentContainer.onscroll = function(){
    onScroll();
};
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
        // Clear any existing animation styles
        returnButton.style.animation = '';
        // Set new animation properties
        returnButton.style.animationName = 'anim-disappear-returnButton';
        returnButton.style.animationDuration = '0.7s';
        returnButton.style.animationTimingFunction = 'ease-in-out';
    }
};