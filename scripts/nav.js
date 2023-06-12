/* WHATS THIS:
nav.js handles ensuring the top nav bar is the correct width and doesn't clip over the scroll bar
of CSS class parallax-container(main scroll container). 

This solution is necessary because css only parallax requires a perspective attribute that conflicts 
with css position:fixed. CSS only parallax provides best performance and compatiblity.

This forces the nav to be placed outside of the main scrolling container. My solution was to 
calculate the width through js using an off screen div to calc the width of the scroll bar*/

//ONLY USED FOR PARALLAX 


const mainNav = document.getElementById('mainNav');
const scrollbarMeasure = document.getElementById('scrollbarMeasure');

//NAV BAR WIDTH CORRECTION
const measureScrollbarWidth = () => {
    const scrollbarWidth = scrollbarMeasure.offsetWidth - scrollbarMeasure.clientWidth;
    mainNav.style.width = `calc(100% - ${scrollbarWidth}px)`;
};

//provides good performance in testing.
const mediaQuery = "(min-width: 900px)";
const handleMediaQueryChange = (event) => {
    if (event.matches) {
        // DESKTOP
        console.log("jsNav: correcting nav desktop >900");
        measureScrollbarWidth();
    } else {
        //MOBILE
        console.log("jsNav: correcting nav mobile <900");
        mainNav.style.width = "100%";
    }
};

const addMediaQueryListener = () => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    // Initial call
    handleMediaQueryChange(mediaQueryList);
};

// Call the function to add the media query listener
addMediaQueryListener();
