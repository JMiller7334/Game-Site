/**SCROLL TOP:
 * this function scrolls the user to the top of the webpage when they 
 * hit the return button on the webpage.
 */
export function scroll2top(secondaryContainer) {
    console.log('module-return-button: scroll2top')
    // For Safari, Chrome, Firefox, IE, and Opera
    document.body.scrollIntoView({top: 0, behavior: 'smooth'});
    document.documentElement.scrollIntoView({top: 0, behavior: 'smooth'});

    //if a secondary container is supplied scroll that view to top as well.
    if (secondaryContainer){
        console.log('module-retrun-button: scrolling 2nd container')
        secondaryContainer.scroll({top: 0, behavior: 'smooth'});
    }
};

export function onScroll(container) {
    let targetPosition = window.innerHeight/2; // Position to show the button (e.g., 100vh)
    if (container.scrollTop > targetPosition || document.documentElement.scrollTop > targetPosition) {

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