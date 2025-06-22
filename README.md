Housearch Real Estate Landing Page (UAE Focus)
This repository contains the front-end code for a real estate landing page, designed to showcase properties, new developments, and investment opportunities primarily in the UAE, with sections for other countries as well. Built with React and styled using Bootstrap 5, this project aims to provide a clean, modern, and responsive user experience for potential property buyers and renters.

Table of Contents
Features
Technologies Used
Project Structure
Getting Started
Prerequisites
Installation
Running the Project
Customization
Contributing
License
Features
Responsive Navigation Bar: A dynamic header with country and language selection, business links, and detailed settings for currency and units.
Interactive Hero Section: Prominent "Buy or Rent" call to action, large typography, and a sophisticated search bar with filters for region, bedrooms, and price.
City & Property Showcases: Dedicated sections to highlight popular cities, new buildings within specific price ranges, and popular overall buildings with their starting prices.
Property Advantages: A visually engaging section illustrating key benefits of property investment in the UAE (e.g., down payment, installments).
Informative Guides: Downloadable PDF guides for investors and those considering relocation, presented in an appealing card format.
Developer Showcase: A horizontal scrollable list of prominent real estate developers with their logos and new building counts.
Amenity-Specific Sections: Filtered listings for new buildings featuring specific amenities like pools and fitness centers.
Global Property Overview: Sections highlighting real estate opportunities in other countries like Turkey, Indonesia, and Thailand.
Integrated Blog: A blog section featuring articles on relocation, market trends, and lifestyle in the UAE, with a prominent featured post.
Newsletter Subscription: A clear call-to-action for users to subscribe to a newsletter for investment tips.
Popular Search Queries: Curated lists of common search terms for apartments and houses, helping users navigate to relevant listings.
Comprehensive Footer: Detailed sitemap, copyright information, contact details, and links to legal policies.
Technologies Used
React.js: For building the user interface with a component-based architecture.
Bootstrap 5: A popular CSS framework for responsive design and pre-built components.
Bootstrap Icons: A rich icon library for visual enhancements.
Google Fonts: Specifically "Anton" and "League Spartan" for distinct typographic styles.
Project Structure
The project is structured into individual React components, each responsible for a specific section or reusable UI element of the landing page.

HouseInDubai.jsx: The main navigation bar.
Breadcrumb.jsx: Displays navigation hierarchy.
HeroSection.jsx: The primary landing area with a search filter.
CityCard.jsx: Reusable component for displaying city information.
CitiesSection.jsx: Displays a collection of CityCard components.
PropertyAdvantagesSection.jsx: Highlights key property investment advantages.
GuideCard.jsx: Reusable component for displaying downloadable guides.
GuidesSection.jsx: Displays a collection of GuideCard components.
BuildingCard.jsx: Reusable component for displaying building information.
PopularBuildingsSection.jsx: Displays popular building listings.
NewBuildingsSection.jsx: Displays new building listings under a certain price.
FreePropertiesCTA.jsx: Call to action for free property finding services.
DeveloperCard.jsx: Reusable component for displaying developer information.
DevelopersSection.jsx: Displays a horizontal list of developers.
NewBuildingsWithPoolSection.jsx: Displays buildings with pools.
NewBuildingsWithFitnessCenterSection.jsx: Displays buildings with fitness centers.
CountryPropertyCard.jsx: Reusable component for displaying property details in other countries.
OtherCountriesSection.jsx: Displays property opportunities in various countries.
BlogCategoryButton.jsx: Reusable button for blog categories.
BlogPostCard.jsx: Reusable component for displaying individual blog posts.
BlogSection.jsx: Integrates blog categories and posts.
NewsletterSection.jsx: Newsletter subscription form.
PopularQueryCard.jsx: Reusable component for popular search queries.
PopularQueriesSection.jsx: Displays popular search queries categorized by property type.
SitemapColumn.jsx: Reusable component for a column in the footer sitemap.
Footer.jsx: The website's footer with sitemap and legal links.
App.js: The main application component, orchestrating all other components.
