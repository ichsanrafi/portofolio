ICHSAN RAFISYAH — PROFESSIONAL PORTFOLIO WEBSITE
================================================

HOW TO OPEN
1. Extract the ZIP file.
2. Double-click index.html.
3. The portfolio works offline in modern Chrome, Edge, Firefox, and Safari.
4. Links in the "Verified public coverage" section require an internet connection.

MAIN FILES
- index.html   : content / structure
- styles.css   : premium dark design, layout, responsive behavior, animations
- script.js    : gallery filters, scroll reveal, counters, lightbox, role rotator, interactions
- assets/      : photos and updated CV PDF

UPDATED CONTACT
- Phone: +62 831-4347-8693
- Email: ichsan.piliang57@gmail.com
- The PDF in assets/CV-Ichsan-Rafisyah.pdf has also been updated with the new phone number.

FEATURED CASE STUDIES
1. PON XXI Aceh–Sumatera Utara 2024
   - Information Technology Officer
   - 43 sports disciplines
   - 5,600+ organizing committee records
   - Readiness reporting, operational data, systems, budgeting support, documentation
   - 5 project photos
   - Official public coverage links from Sumut Provincial Government / Diskominfo

2. Piala Kemerdekaan 2025 / Indonesia U-17 Independence Cup
   - PSSI coordination
   - Indonesia, Mali, Uzbekistan, Tajikistan
   - Photo documentation including Coach Nova Arianto
   - Official public coverage link from Sumut Provincial Government

3. 17th SEA Youth U18 & U20 Athletics Championships
   - Advanced timing systems
   - Theodolite / distance measurement
   - Technical competition support
   - Official Kemenpora and World Athletics links

PUBLIC COVERAGE / REFERENCES
The website includes a dedicated "Public coverage & official references" section for:
- J&T Cargo
- PON XXI Aceh–Sumatera Utara
- Piala Kemerdekaan 2025
- SEA Youth U18/U20 Athletics Championships
- PSMS Medan
- FORNAS VI South Sumatra 2022

Important: these external links provide independent context for the organizations/events.
They do not imply that Ichsan is personally named in every linked article.

PHOTO FOLDERS
- assets/ichsan-profile.jpeg
- assets/experience/stadium-event.jpg
- assets/experience/pon-xxi-2024/
- assets/experience/piala-kemerdekaan-2025/
- assets/experience/sea-youth-athletics-2025/

ADDING EXPERIENCE PHOTOS LATER
1. Copy the photo into assets/experience/ or create a new project subfolder.
2. Open script.js.
3. Add a new item to the experiencePhotos array:

{
  group: "other",
  image: "assets/experience/my-project/photo.jpg",
  title: "Project / Event Name",
  meta: "Role • Year",
  alt: "Short accessible description"
}

Available gallery groups:
- pon
- u17
- athletics
- other

To create a new gallery filter category, add the button in index.html and use the same group name in script.js.

ADDING A NEW FEATURED CASE STUDY
1. Open index.html.
2. Duplicate a full <section class="case-study-section"> block.
3. Give it a unique id.
4. Replace title, description, facts, tags, photos, and verified coverage links.
5. Add a "View visual case study" link to the matching project card.

MODERN INTERACTIONS INCLUDED
- Animated loading intro
- Animated hero role rotator
- Scroll progress indicator
- Scroll reveal with blur / depth effect
- Animated number counters
- Infinite marquee
- Cursor-follow ambient glow
- Interactive card spotlight
- 3D tilt interaction on desktop
- Magnetic buttons
- Multi-project filterable experience gallery
- Full-screen image lightbox
- Case-study image hover effects
- Scroll parallax on selected elements
- Responsive mobile navigation
- Reduced-motion accessibility support

IMPORTANT
Keep the folder structure intact. Do not move index.html away from styles.css,
script.js, and assets/ because the portfolio uses relative file paths.


SOFT PROFESSIONAL THEME
-----------------------
The current visual theme uses a softer charcoal/slate base with muted teal and warm sand accents.
The goal is strong readability, professional contrast, and a relaxed modern feel without harsh neon colors.
The Public Coverage section now keeps only the most relevant professional references; the Kemenag Digital Education coverage card has been removed.

LATEST VISUAL UPDATE — LIGHT LUXURY THEME
-----------------------------------------
The portfolio now uses a light luxury palette instead of a dark background:
- warm ivory / soft stone background
- muted sage accent
- subtle champagne-gold accent
- softer shadows and lower contrast for comfortable reading
- light cards for Experience, Projects, Case Studies, Gallery, Coverage, Skills, Education, and Contact

NEW EDUCATION ENTRY
-------------------
SMA Negeri 11 Medan has been added to the Education section.
The displayed graduation year is "c. 2017" because the exact year has not yet been confirmed.
This approximation is based only on the 2018 university start and the one-year gap before university that was provided.
Replace it with the exact year once confirmed.

ADDITIONAL MOTION
-----------------
- animated luxury hero gradient
- soft floating portrait
- staggered card entrances
- floating education cards
- refined hover lift and spotlight effects
- existing loader, counters, gallery filters, lightbox, parallax, 3D tilt, magnetic controls, and scroll reveal remain active
