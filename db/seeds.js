require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });



const Schema = require('./schema')



const { User, Park, Dog } = Schema


const jordan = new Dog({
    name: 'Jordan', size: 'large', breed: 'Pit-Bull'
})
const gore = new Dog({
    name: 'Gore', size: 'large', breed: 'Pit-Bull'
})
const sam = new Dog({
    name: 'Sam', size: 'large', breed: 'Boxer'
})
const andy = new Dog({
    name: 'Andy', size: 'small', breed: 'Schnauzer'
})
const astro = new Dog({
    name: 'Astro', size: 'med', breed: 'lab-mix'
})
const peachtreeCorners = new Park({ 
    name: 'Jones Bridge Park', city: 'Peachtree Corners', adress: '3444 Cobb Pkwy, GA', zipcode: 30092, popularity: 8, petFriendly: 10, size: 'large',
    dogs: [jordan, gore, andy]
})
const chattahoochee = new Park({
    name: 'Chattahoochee River National Recreation Area', city: 'Atlanta', adress: '4901 E Jones Bridge Rd, GA', zipcode: 30339, popularity: 10, petFriendly: 10, size: 'large',
    dogs: [jordan, gore, andy]
})
const piedmont = new Park({
    name: 'Piedmont Park', city: 'Atlanta', adress: '400 Park Dr NE, GA', zipcode: 30306, popularity: 10, petFriendly: 10, size: 'large',
    dogs: [jordan, gore, astro]
})
const mike = new User({
    name: 'Mike', dogs: 2, favPark: 'Jones Bridge Park', zipcode: 30092, parks: [peachtreeCorners, chattahoochee, piedmont]
})

const kelly = new User({
    name: 'Kelly', dogs: 1, favPark: 'Chattahoochee River National Recreation Area', zipcode: 30080, parks: [peachtreeCorners, chattahoochee]
})

const gary = new User({
    name: 'Gary', dogs: 1, favPark: 'Jones Bridge Park', zipcode: 30092, parks: [peachtreeCorners, chattahoochee]
})
const erik = new User({
    name: 'Erik', dogs: 1, favPark: 'Piedmont Park', zipcode: 30339, parks: [peachtreeCorners]
})
const amber = new User({
    name: 'Amber', dogs: 1, favPark: 'Jones Bridge Park', zipcode: 30092, parks: [peachtreeCorners, chattahoochee]
})

User.deleteMany()
    .then(() => {
        return User.insertMany([mike, kelly])
    })
    .then(() => {
        console.log('seeds complete')
        mongoose.connection.close()
    })

