require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });



const Schema = require('./schema')



const { User, Park, Dog } = Schema


const jordan = new Dog({ name: 'Jordan', size: 'large', breed: 'Pit-Bull' 
})
const peachtreeCorners = new Park({
    name: 'Jones Bridge Park', city: 'Peachtree Corners', adress: '4901 E Jones Bridge Rd, GA', zipcode: 30092, popularity: 10, petFriendly: 10, size: 'large',
    dogs: [jordan]
})
const mike = new User({ name: 'Mike', dogs: 2, favPark: 'Jones Bridge Park', zipcode: 30092, parks: [peachtreeCorners]
})

const kelly = new User({ name: 'Kelly', dogs: 1, favPark: 'Jones Bridge Park', zipcode: 30092, parks: [peachtreeCorners]
})



User.deleteMany()
    .then(() => {
        return User.insertMany([mike, kelly])
    })
    .then(() => {
    console.log('seeds complete')
        mongoose.connection.close()
    })

