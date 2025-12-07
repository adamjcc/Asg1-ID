# Asg1-ID

Name: Adam Clark, 10270989G

Here is my [Github Project link](https://github.com/adamjcc/Asg1-ID) and my 
[Github Pages link](https://adamjcc.github.io/Asg1-ID/).

# One Direction Band Website

This project is an informational website themed around the band, *One Direction*, for my Interactive Development module. The idea came about after researching numerous bands, and ultimately, I decided to follow through with One Direction, as their existing website could use retouching. Through this project, I aim to create an easier, responsive and aesthetically pleasing experience for users.

Thus, the website is designed for fans and potential event organisers to explore the band’s background, view member profiles, watch videos, browse upcoming events, and submit booking enquiries - all in a clean, modern and mobile-friendly interface.
 
## Design Process
 
This website was developed using a user-centred design approach. I first identified the primary audiences and their goals, then designed the site’s structure to help them achieve these goals efficiently. Together, the combination of clear layout, strong hierarchy, simple navigation, and mobile responsiveness will ensure that the website directly supports the user's goals and provides a smooth, enjoyable experience.

### Target Users
1. **Fans / Visitors**: People who want to learn more about One Direction, view band members, watch videos, and explore media content.
2. **Event Organisers / Bookers**: Users who want quick access to tour dates and a simple, structured way to make booking enquiries.

### User Stories
- As a **fan**, I want to quickly view information about the band, so that I can learn about their history and achievements.
- As a **visitor**, I want to browse the band member profiles, so that I can get to know each member better.
- As an **event organiser**, I want to see upcoming tour dates, so that I can check availability for performances.
- As a **booker**, I want to submit an enquiry through a clear contact form, so that I can request a performance easily.

### Wireframes / Mockups
I created low-fidelity wireframes for both desktop and mobile layouts. These helped me visualise the page structure before starting development.

Here is a [link to Figma Wireframe](https://www.figma.com/design/0ABFo3mGF5f313Ly1NcB4T/ID-ASG1-Wireframe---Adam-Clark?node-id=0-1&t=qu8TDR6NNborDCFr-1).

<!-- Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included as a pdf file in the project itself (in an separate directory)
Include the Adobe XD wireframe as a folder. You can include the XD share url. -->


## Features

### Pages
The website currently has four separate pages:

#### 1. Home (index.html)
This is the landing page designed to give a high-impact first impression.

- **Hero Section**: Features a full-height background image of the band with a large "One Direction" logo and the tagline "Music, Memories, and Moments". It includes two call-to-action buttons: "Listen Now" (linking to Spotify) and "Book an Event".
- **About & Stats**: A brief introduction to the band followed by a "Stats" section displayed in a grid of cards (e.g., "50M+ Albums Sold", "200+ Awards Won").
- **Interactive Video Slider**: A key feature powered by JavaScript (script.js). It lets users cycle through a curated list of YouTube lyric videos using "Next" and "Previous" arrow buttons or clickable dot indicators at the bottom.
- **Upcoming Events Preview**: A sneak peek of the tour schedule. It displays a short table of upcoming dates with a "View More" button that directs users to the full Tour page.

#### 2. Band (band.html)
This page is an informational hub about the group's history and members.

- **Member Profiles**: Lists the five members (Harry, Niall, Liam, Louis, Zayn). The layout uses an alternating design pattern (image-left/text-right, then text-left/image-right) created with CSS Flexbox to make the reading experience more engaging.
- **Filterable Gallery**: A photo gallery that includes a JavaScript-powered dropdown filter. Users can select "All", "Live", or "Photoshoot" to dynamically show or hide images without reloading the page.

#### 3. Tour Dates (tour.html)
This page focuses on the band's schedule and live performances.

- **Schedule Table**: A comprehensive table listing dates, venues, and locations for upcoming concerts. Each row ends with a "Book" button that links directly to the booking page.
- **In-Page Booking**: At the bottom of this page, there is also an embedded version of the booking form for quick access.

#### 4. Booking Form (booking.html)
A dedicated page for event organizers to hire the band (or a tribute act).

- Booking Form: A structured HTML form designed to capture essential details from potential clients. It includes fields for name, email, event type, event date and a message.


### Existing Features
- **Modern Clean Design** - Uses simple navigation, and sleek elements and animations to make users experience browsing the site more convenient and intuitive, encouraging them to learn more about the band.
- **Responsive Layout** - Ensures the website adapts seamlessly to different screen sizes (mobile, tablet, desktop) using CSS Flexbox and Grid, making it accessible for all users.
- **Tour Dates Schedule** - Displays a clear, organized table of upcoming events and concerts, allowing fans to quickly find dates and locations.
- **Dedicated Booking Page** - Allows fans to book concerts more conveniently, or event organizers to submit detailed booking enquiries via a structured form that captures necessary details like event type and date.
- **Interactive Video Slider** - Allows fans to browse and watch a curated list of One Direction lyric videos directly on the homepage using custom "Next" and "Previous" navigation buttons.
- **Dynamic Gallery Filter** - Allows users to interactively filter band photos by category (e.g., "Live" performances or "Studio" photoshoots) using a dropdown menu, implemented with JavaScript.
- **Sticky Navigation Bar** - Ensures the navigation menu remains accessible at the top of the screen or appears dynamically when scrolling, providing a smooth user experience across all pages.
- **Linked Social Icons** - Enables users to quickly view the band's social media accounts, or send an email on separate queries they may have.

### Features Left to Implement
- **Form Backend Integration** - Currently, the booking form is static. Future updates will connect it to a service like EmailJS or a backend server to process and send actual emails.
- **Band Shop** - Allow fans to purchase exclusive One Direction merch and material from the website.
- **Detailed Discography Page** - Include a dedicated discography page for users to explore the band's history, achievements and journey easily.

## Technologies Used

**HTML5**
- The project uses HTML5 to create the semantic structure and content of the pages.

**CSS3**
- The project uses CSS3 for styling, responsive design (Flexbox & Grid), and hover animations.

**JavaScript**
- The project uses Vanilla JavaScript to create the interactive video slider, filter the gallery images, and handle scroll events for the navigation bar.

**[Normalize.css](https://necolas.github.io/normalize.css/)**
- The project uses Normalise.css to ensure the website looks consistent across all different browsers.

**[Figma](https://www.figma.com/)**
- The project uses Figma to design the low-fidelity wireframes and plan the user interface before coding.

**[GitHub](https://www.github.com/)**
- The project uses GitHub for version control and hosting the source code.

## Testing

<!-- For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here. -->

## Credits

### Content
<!-- - The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)-->

### Media
#### Main Page Images
- The main photo used on the **Home Page** was from a Medium article ([One Direction: The Incredible Journey of a Boy Band Phenomenon and their Unforgettable Music Legacy](https://medium.com/@jhalakchhapola1/one-direction-the-incredible-journey-of-a-boy-band-phenomenon-and-their-unforgettable-music-legacy-f0dd507af59a))
- The main photo used on the **Band Page** was from a Wallpapers.com gallery ([One Direction Pictures](https://wallpapers.com/one-direction-pictures))
- The main photo used on the **Tour Page** was from a Billboard article ([One Direction Solo Magazine Covers: See the Pics](https://www.billboard.com/music/pop/one-direction-solo-magazine-covers-pics-7809577/))
- The main photo used on the **Booking/Contact Page** was from a Populous article ([Live from Populous: Designing for Music](https://populous.com/article/live-from-populous-designing-for-music))

#### Video Player (Home Page)
- Three videos were taken from the official One Direction YouTube account: [What Makes You Beautiful](https://www.youtube.com/embed/QJO3ROT-A4E), [Story of My Life](https://www.youtube.com/embed/W-TE_Ys4iwM), and [Night Changes](https://www.youtube.com/embed/syFZfO_wfMQ).
  - Due to copyright reasons, the videos may be unable to be played. However, the feature still works on copyright-free videos.

#### Live Gallery (Band Page)
- **Picture 1** was from a Variety movie review ([Film Review: 'One Direction: This Is Us'](https://variety.com/2013/film/reviews/one-direction-this-is-us-review-1200582527/))
- **Picture 2** was from a Rolling Stone article ([One Direction’s 10th Anniversary: Collaborators Look Back](https://www.rollingstone.com/music/music-news/one-direction-10th-anniversary-collaborators-1032313/))
- **Picture 3** was from a Hollywood Reporter article ([Best Live Concerts of 2013](https://www.hollywoodreporter.com/news/general-news/best-2013-live-concerts-one-668014/))
- **Picture 4** was from a Hollywood Reporter gallery ([One Direction Wows at Midnight Memories Record Release Party](https://www.hollywoodreporter.com/gallery/one-direction-wows-midnight-memories-659887/))
- **Picture 5** was from a Rolling Stone tour review ([One Direction's Stadium Tour 2015](https://www.rollingstone.com/music/music-live-reviews/one-direction-stadium-tour-2015-51986/))
- **Picture 6** was from a Hollywood Reporter news piece ([One Direction's Liam Payne Films Music Video](https://www.hollywoodreporter.com/music/music-news/one-directions-liam-payne-films-773446/))
- **Picture 7** was from a PopCrush review ([One Direction Live: A Review From a Longtime, Grown-Up Fan](https://popcrush.com/one-direction-on-the-road-again-review/))

#### Photoshoot Gallery (Band Page)
- **Picture 1** was from a Teen Vogue gallery ([Best Zayn Malik One Direction Photos](https://www.teenvogue.com/gallery/best-zayn-malik-one-direction-photos))
- **Picture 2** was from a Vox culture article ([One Direction, Harry Styles, solo album, Niall Horan, Liam Payne, Louis Tomlinson](https://www.vox.com/culture/2020/1/31/21115802/one-direction-harry-styles-solo-album-niall))
- **Picture 3** was from a Vogue slideshow ([Harry Styles' Fashion Evolution Over the Years](https://www.vogue.com/slideshow/harry-styles-fashion-evolution-over-the-years))
- **Picture 4** was from a Music and Gigs article ([15 Years of One Direction: The Boyband That Changed Everything](https://musicandgigs.com/15-years-of-one-direction-the-boyband-that-changed-everything/))
- **Picture 5** was from an Entertainment Weekly article ([One Direction Made in the AM: Behind the scenes](https://ew.com/article/2015/11/14/one-direction-made-in-the-am-behind-the-scenes/?srsltid=AfmBOorarJYZDwS5SrqJujlHOEMwkOceJ_TjdByIX9R1iJPYyfq4w83t))
- **Picture 6** was from a Flickr photostream ([Flickr Photo 16939035311](https://www.flickr.com/photos/130738664@N02/16939035311))
- **Picture 7** was from a Yopriceville gallery ([One Direction Wallpaper](https://gallery.yopriceville.com/Superstars/One_Direction_Wallpaper))
- **Picture 8** was from a People Magazine article ([One Direction's Most Iconic Throwback Photos](https://people.com/music/one-direction-most-iconic-throwback-photos/))

### Acknowledgements
- Inspiration was taken from a band's website, [The Cure](https://www.thecure.com/) as well as another band's website, [XG](https://xgalx.com/en/xg/).
- Layout inspiration was taken from a [concept Nirvana band page](https://dribbble.com/shots/21853412-Nirvana-Music), posted on Dribble.