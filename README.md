# Game-Site

Website to promote a game that I designed.

Adaptive/responsive design; usable on tablet, mobile, and pc.
Utilizes CSS only parallax to create a more immersive user experience.
Javascript handles the sidebar and the changing of content on the main page (3 categories; on 1 webpage)
Animated intro is handled by CSS animations; Javascript removes the intro content after it has been played.

Navbar sizing is handled by Javascript, this solution is necessary due to css position property of fixed not working within
a div that uses the perspective property. This created the need for the navbar to be placed outside the div responsible
for page scrolling(which is the parallax container/wrapper) This was a conflict of using css only parallax which caused the navbar 
to clip overtop of the parallax container scrollbar.

Animated intro is loaded in at a low z-index and page the content is brought in over top to create a smooth transition
the underlying content is removed from the page through javascript.

I reserve all rights to the content of this site; all content was created by me.
(Copyright Jacob Miller 2023. All rights reserved.)
