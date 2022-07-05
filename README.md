<div id="top"></div>

<div align="center"> <img src="https://i.ibb.co/JmkTqwz/Logo-W.png" alt="Logo" width="75"/> </div>

# <div align="center"> &mdash;&mdash;&mdash;&mdash;&mdash; way2stay Backend &mdash;&mdash;&mdash;&mdash;&mdash; </div>

#### <div align="center">[go to the frontend &rarr;](https://github.com/diskodenso/way2stay_frontend)</div>
#### <div align="center">[go to the website &rarr;](https://www.google.com)</div>

<p align="right">&darr; <a href="#end">go to the bottom</a> &darr;</p>

<details>
<summary style="font-weight:500; font-size:18pt;">Table of Contents</summary>
  <ol>
    <li><a href="#build-status">Build Status</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <ul type="1">
        <li><a href="#users">Users</a></li>
        <li><a href="#flats">Flats</a></li>
        <li><a href="#bookings">Bookings</a></li>
        <li><a href="#comments">Comments</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#extras">Extras</a></li>
        <li><a href="#timesheets">TimeSheets</a></li>
      </ul>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#copyright">Copyright</a></li> -->
    <li><a href="#collaborators">Collaborators</a></li>
  </ol>
</details>

---
<br>

<div href="#build-status"></div>

## Build Status

| Netlify |
| --- |
| [![Build Status](https://ci.joomla.org/api/badges/joomla/joomla-cms/status.svg?branch=4.0-dev)](https://ci.joomla.org/joomla/joomla-cms) |

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---

---
<br>

<div href="#getting-started"></div>

## Getting Started

<br>

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#
<br>

### Clone the repository to your local storage.

```
git clone https://github.com/diskodenso/way2stay_backend.git
```

#
<br>

### Install dependencies (all dependencies are listed in package.json).

```
npm i
```

#
<br>

### Enter your environment details into the .env file.

```
MONGO_URI=<MongoDB-URI>
REACT_APP_URI=http://localhost:3000
JWT_SECRET=<Your-Secret-Key>
PORT=3001
```

#
<br>

### Run the app in the development mode.

- Run it on the port which is defined in the .env file or alternatively on the default port (https://localhost:3000).

```
npm start
``` 
```
nodemon
```

#

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---

---
<br>

<div href="#built-with"></div>

## Built With

- #### [React](https://reactjs.org/)

- #### [NodeJS](https://nodejs.org/)

- #### [Express](https://expressjs.com/)

- #### [MongoDB](https://www.mongodb.com/)

- #### [Mongoose](https://mongoosejs.com/)

- #### [CORS](https://www.npmjs.com/package/cors)

- #### [Dotenv](https://www.npmjs.com/package/dotenv)

- #### [bcrypt](https://www.npmjs.com/package/bcrypt)

- #### [JSON Web Tokens](https://jwt.io/)

- #### [EJS](https://ejs.co/)

<br>

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---

---
<br>

<div href="#api-endpoints"></div>

## API Endpoints

<div href="#users"></div>

### Users
#

#### Create (post)
```./api/users```

#
<br>

#### Read (get)
##### All Users
```./api/users```
##### Single User (by username)
```./api/users/:username```

#
<br>

#### Update (put)
##### Single User (by username)
```./api/users/:username```

#
<br>

#### Delete (delete)
###### command to database wont be a delete more an update of the isActive flag
##### Single User (by username) 
```./api/users/:username```

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---
<br>

<div href="#flats"></div>

### Flats
#

#### Create (post)
```./api/flats```

#
<br>

#### Read (get)
##### All Flats
```./api/flats```

```./api/flats?queryString=[filteredResult]```

##### Single Flat (by id)
```./api/flats/:id```

#
<br>

#### Update (put)
##### Single Flat (by id)
```./api/flats/:id```

#
<br>

#### Delete (delete)
###### command to database won't be a delete more an update of the isActive flag
##### Single Flat (by id) 
```./api/users/:id```

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---
<br>

<div href="#bookings"></div>

### Bookings
#

#### Create (post)
```./api/bookings```

#
<br>

#### Read (get)
##### All Bookings (admin only)
```./api/bookings```

##### All Bookings (by user id)
```./api/bookings/:userId```
##### Single Booking (by booking id)
```./api/bookings/:bookingId```

#
<br>

#### Update (put)
##### Single Booking (by booking id)
```./api/bookings/:bookingId```

#
<br>

#### Delete (delete)
###### command to database wont be a delete more an update of the isActive flag
##### Single Booking (by booking id) 
```./api/bookings/:bookingId```

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---
<br>

<div href="#comments"></div>

### Comments
#

#### Create (post)
```./api/comments```

#
<br>

#### Read (get)
##### All Comments (by user id)
```.api/user/:userId```

##### All Comments (by booking id)
```.api/booking/:bookingId```

#
<br>

#### Update (put)
##### Single Comment (by comment id)
```.api/comments/:commentId```

#
<br>

#### Delete (delete)
##### Single Comment (by comment id)
```.api/comments/:commentId```

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---
<br>

<div href="#categories"></div>

### Categories
#

#### Create (post)
```./api/categories```

#
<br>

#### Read (get)
##### All Categories
```./api/categories```

#
<br>

#### Update (put)
##### Single Category (by category id)
```./api/categories/:categoryId```

#
<br>

#### Delete (delete)
##### Single Category (by category id)
```./api/categories/:categoryId```

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---
<br>

<div href="#extras"></div>

### Extras
#

#### Create (post)
```./api/extras```

#
<br>

#### Read (get)
##### All Extras
```./api/extras```

#
<br>

#### Update (put)
##### Single Extra (by extra id)
```./api/extras/:extraId```

#
<br>

#### Delete (delete)
##### Single Extra (by extra id)
```./api/extras/:extraId```

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---
<br>

<div href="#timesheets"></div>

### Timesheets
#

#### Create (post)
```./api/timeSheets```

#
<br>

#### Read (get)
##### All TimeSheets (by flat id)
```./api/timeSheets/:flatId```

##### Single TimeSheets (by timeSheet id)
```./api/timeSheets/:timeSheetId```

#
<br>

#### Update (put)
##### Single TimeSheet (by timeSheet id)
```./api/timeSheets/:timeSheetId```

#
<br>

#### Delete (delete)
##### Single TimeSheet (by timeSheet id)
```./api/timeSheets/:timeSheetId```

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---

---
<br>

<div href="#contributing"></div>

## Contributing

<!-- - [Report a bug]() -->
- Documentation for the [Frontend](https://github.com/diskodenso/way2stay_frontend)

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---

---
<br>

<div href="#contact"></div>

## Contact

- Denis
- Phone: 01234567890
- E-Mail: qwertzui@gmail.com

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

<!-- ---

---
<br>

<div href="#copyright"></div>

## Copyright

Distributed under the MIT License. See [License.txt](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md) for more information.

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p> -->

---

---
<br>

<div href="#collaborators"></div>

## Collaborators

- [Matthias Wieser](https://github.com/AlpineWeezl)

- [Marcel-BK](https://github.com/Marcel-BK)

<p align="right">&uarr; <a href="#top">back to top</a> &uarr;</p>

---

---

<div id="end"></div>