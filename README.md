# p13177880 - CTEC3905
Public repo for CTEC3905 practical project work

This repo will contain all of the relevant filse and documentation for the project, a scratch-built website using HTML5, CSS, and JavaScript.

# Concept
The idea for the site is a portfolio for my various creative works, currently focussing on original music and photography.
By focussing on these two forms of digital media, I can showcase techniques which apply to either image media, audio, or both.

The subject of a creative portfolio also allows for a wide scope of potential creative designs, as the site does not need to conform to any existing standards; individual portfolios are intended to be just that, individual and engaging.

# Language considerations
Since the general idea for the site is to be as aesthetically pleasing as possible whilst presenting the content in an easy to read and navigate manner, good use of HTML and CSS will be imperitive. JavaScript is likely to be relegated to performing more complex animations and transitions which CSS is not capable of. 
The requirement for any backend such as PHP or an SQL database is pretty much non-existent.

# Content considerations
The large bulk of the content will be made up of entirely original work, so copyright is of minimal concern.
Audio showcases will most likely utilise an API from soundcloud, as the content is already availible there. However, if it is deemed suitable for this project, an HTML5/JS audio player may be built
The photography section will likely consist of a gallery. This could be done from scratch, however the images to be used are already shared on instagram, so it may be possible embed those posts instead. No external sources are needed, so everything can be done with HTML, CSS, and JS.

# Design
![alt Haltaar logo](https://i1.sndcdn.com/avatars-000169502415-kb2a90-t500x500.jpg)

Using an existing logo for my soundcloud project, I can focus the design around a dark, minimalist, monochrome aesthetic. This will create a bold design, but one that does not interfere with the users perceptions of the content on display.
The responsiveness of the site has been largely achieved through use of flexbox containers, rather than @media breakpoints. Further testing may show that breakpoints are required, however for the time being the site works very well across tested devices.

# Splash page
![alt Splash Page](https://i.imgur.com/HAZyKwJ.png)

The first page of the site is centred around the logo, with links to the seperate sections of the site (stylised as .WAV for audio projects, .PNG for photography, and .INFO for a general about page). Although the appearance of the page is rather barren, using a simple :hover CSS effect and a varient of the logo image that was databent using audacity, the image will "glitch" when hovered over, providing an interesting visual surprise for the reader as their mouse moves over the page toward the centred links just below the logo image.

# Music page
![alt Music Page](https://i.imgur.com/H22xljf.jpg)

The stylised .wav links point towards a page showcasing a hand picked selection of my soundcloud posts. The soundcloud player allows visitors to listen to the music posted on the site without having to exit to soundcloud, whilst still providing the option to open the associated soundcloud page in a new tab.
Issues with this page surrounding proper centring and resizing of elements were solved by using a flex box container and appending empty elements to the end of the container to ensure the last row aligned properly to the grid.

# Pictures page
![alt Pictures Page](https://i.imgur.com/6OujwkL.jpg)

The stylised .png links point towards a page that features a feed of my instagram posts. This was achieved using a script by Steven Schobert called intafeed.js. Using this in combination with the flexbox container methods developed for the music page allow a nice grid display of images, which link to their associated instagram posts in a new tab. The feed only shows square images and ommits non-square ones in order to maintain the grid layout of the page.
because the contaner element is heavily managed by instafeed.js, additional scripting was required to append the hidden elements in order to maintain the last row's alignment.
