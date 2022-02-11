<div id="top"></div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!--
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

<h3 align="center">Welcome to TID</h3>

  <p align="center">
    Today I did / Today Ive Done / Tomorrow Ill do / Things I did 
    <br />
    <br />
    <a href="https://github.com/Batlearm/TID/issues">Report Bug</a>
    ·
    <a href="https://github.com/Batleram/TID/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This project is a tracker I built so I can see what things i do during the day,
The goal is for me to be more productive and motivated to get stuff done.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nocejs.org/)
* [Typescript](https://typescriptlang.org)
* [React.js](https://reactjs.org/)
* [Webpack.js](https://webpack.js.org)
* [Express.js](https://expressjs.com/)
* [Docker](https://docker.com/)
* [Nginx](https://nginx.com)
* [Mariadb](https://mariadb.org)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these steps to deploy my app onto your server

### Prerequisites

The only two prerequisites are as follows:
* [Docker](https://docs.docker.com/get-docker/)
* [Docker-compose](https://docs.docker.com/compose/install/)

### Installation
1. Clone the repo
```sh
   git clone https://github.com/Batleram/TID.git
   cd TID
```
2. Create a `.env` file with the following content
```env
ROOTPASS=<sustitute for a db root password>
DBUSER=<sustitute for a db username>
DBPASS=<sustitute for a db user password>
```
3. Run the command to start the containers
```
docker-compose up --env-file .env up -d
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can now access the app in any web browser on port `7676`

**If the app seams empty, that is because core features are not implemented yet**

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Batleram/TID.svg?style=for-the-badge
[contributors-url]: https://github.com/Batleram/TID/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Batleram/TID.svg?style=for-the-badge
[forks-url]: https://github.com/Batleram/TID/network/members
[stars-shield]: https://img.shields.io/github/stars/Batleram/TID.svg?style=for-the-badge
[stars-url]: https://github.com/Batleram/TID/stargazers
[issues-shield]: https://img.shields.io/github/issues/Batleram/TID.svg?style=for-the-badge
[issues-url]: https://github.com/Batleram/TID/issues
[license-shield]: https://img.shields.io/github/license/Batleram/TID.svg?style=for-the-badge
[license-url]: https://github.com/Batleram/TID/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png

