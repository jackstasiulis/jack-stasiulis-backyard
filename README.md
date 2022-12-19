
<h1 align="center">
  <br>
  <a href=''><img src="https://res.cloudinary.com/do5k651qd/image/upload/v1671411050/Backyard-logo-red_h9esoz.png" alt="Backyard logo" width="300"></a>

  Welcome to Backyard

</h1>

<h4 align="center">A local concert and show finder that brings more true fans to your music.</a>.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
</p>

![screenshot](https://res.cloudinary.com/do5k651qd/image/upload/v1671417437/Screen_Shot_2022-12-18_at_5.49.30_PM_zdqvne.png)

## Key Features

* Add your shows, see whats happening
  - The discover page is your home for finding a new artist to see tonight.
* With functional access to Mapbox and positionstack, location data is automatically geocoded and shown on the live map.
* Login allows you to add shows and comments while giving you the ability to remove the posts you've made.
- The responsiveness of the site allows it to be used on multiple platforms/screensizes.

## Download
<a href="https://github.com/jackstasiulis/jack-stasiulis-backyard">Frontend</a> | <a href="https://github.com/jackstasiulis/jack-stasiulis-backyard-server">Backend</a>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jackstasiulis/jack-stasiulis-backyard

# Go into the repository
$ cd jack-stasiulis-backyard

# Install dependencies
$ npm install

# Run the app
$ npm start
```
Open http://localhost:3000 to view it in your browser.

## Tech stack used

<h4 align="left">Frontend</a></h4>

* React JS
  - Axios, hot-toast, uuid
* Cloudinary
  - Cloud storage for the upload and access of show images.
* Mapbox
  - Map API provides used to show locations on each post page.
* positionstack
  - Geocoder API to convert user inputted addresses into readable longitude and latitudes for Mapbox to utilize.
<h4 align="left">Backend</a></h4>

* MySQL
  - Created database that stores show, comment, and user data.
  - Knex JS.
* Node JS, Express JS
  - Backend runs smoothly to retrieve data from the database.
* JWT
  - Used for comparing, and authenticating users.

---

> GitHub [@jackstasiulis](https://github.com/jackstasiulis/)
> LinkedIn [@jackstasiulis](https://www.linkedin.com/in/jackstasiulis/)

