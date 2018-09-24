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
const andy = new Dog({
    name: 'Gore', size: 'large', breed: 'Boxer'
})
const peachtreeCorners = new Park({
    name: 'Jones Bridge Park', city: 'Peachtree Corners', adress: '3444 Cobb Pkwy, GA', zipcode: 30092, popularity: 8, petFriendly: 10, size: 'large',
    dogs: [jordan, gore, andy]
})
const chattahoochee = new Park({
    name: 'Chattahoochee River National Recreation Area', city: 'Atlanta', adress: '4901 E Jones Bridge Rd, GA', zipcode: 30339, popularity: 10, petFriendly: 10, size: 'large',
    dogs: [jordan, gore, andy]
})
const mike = new User({
    name: 'Mike', dogs: 2, favPark: 'Jones Bridge Park', zipcode: 30092, parks: [peachtreeCorners, chattahoochee]
})

const kelly = new User({
    name: 'Kelly', dogs: 1, favPark: 'Jones Bridge Park', zipcode: 30092, parks: [peachtreeCorners, chattahoochee]
})



User.deleteMany()
    .then(() => {
        return User.insertMany([mike, kelly])
    })
    .then(() => {
        console.log('seeds complete')
        mongoose.connection.close()
    })

