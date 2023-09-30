import * as controller from '../controllers/indexController.js';
import * as module_returnButton from '../modules/returnButton.js';

const introContainer = document.getElementById("introContainer");
const contentContainer = document.getElementById("contentContainer");

console.log("index-view imported");

const contentTypes = ["Story", "Rides", "Features"];
const contentTexts = {
    Story: "Play the story, live the Adventure",
    Rides: "Featuring over 20 epic rides",
    Features: ""
};

// generate listens for each 'tab' button.
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
    module_returnButton.scroll2top();
 });
window.onscroll = function() {
    module_returnButton.onScroll(contentContainer);
};
contentContainer.onscroll = function(){
    module_returnButton.onScroll(contentContainer);
};