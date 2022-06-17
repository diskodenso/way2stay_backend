### way2stay Backend

# API Endpoints

## Users
### CRUD

#### Create (post)
```./api/users```

#### Read (get)
##### All Users
```./api/users```
##### Single User (by username)
```./api/users/:username```

#### Update (put)
#### Single User (by username)
```./api/users/:username```

#### Delete (delete)
###### command to database wont be a delete more an update of the isActive flag
#### Single User (by username) 
```./api/users/:username```



## Flats
### CRUD

#### Create (post)
./api/flats

#### Read (get)
##### All Flats
./api/flats
./api/flats?queryString=[filteredResult]

#### Read (get)
##### Single Flat (by id)
./api/flats/:id

#### Update (put)
#### Single Flat (by id)
./api/flats/:id

#### Delete (delete)
###### command to database wont be a delete more an update of the isActive flag
#### Single Flat (by id) 
./api/users/:id

## Bookings
### CRUD

#### Create (post)
./api/bookings

#### Read (get)
##### All Bookings (admin only)
./api/bookings

##### All Bookings (by user id)
./api/bookings/:userID
#### Single Booking (by booking id)
./api/bookings/:bookingId

#### Update (put)
#### Single Booking (by booking id)
./api/bookings/:bookingId

#### Delete (delete)
###### command to database wont be a delete more an update of the isActive flag
#### Single Booking (by booking id) 
./api/bookings/:bookingId
## Comments

## Categories

## Extras

## Timesheets

