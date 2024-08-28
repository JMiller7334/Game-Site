
//imports:
import * as controller from '../controllers/opensourceController.js';
import * as module_returnButton from '../modules/returnButton.js';

const osContentContainer = document.getElementById('osScrollContainer');
const buttonReturn = document.getElementById('returnButton');


//return button:
buttonReturn.addEventListener('click', function() {
    console.log('view-os: return button clicked');
    module_returnButton.scroll2top(osContentContainer);
})
window.onscroll = function() {
    module_returnButton.onScroll(osContentContainer);
};
osContentContainer.onscroll = function(){
    module_returnButton.onScroll(osContentContainer);
};