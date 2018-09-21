const mongoose = require('mongoose');
const Schema = mongoose.Schema


const DogSchema = new Schema ({
    name: String,
    size: String,
    breed: String,    
})

const ParkSchema = new Schema ({
    name: String,
    city: String,
    adress: String,
    zipcode: Number,
    popularity: Number,
    petFriendly: Number,
    size: String,
    dogs: [DogSchema]

})

const UserSchema = new Schema ({
    name: String,
    dogs: Number,
    favPark: String,
    zipcode: Number,
    parks: [ParkSchema]

})


const DogModel = mongoose.model('Dog', DogSchema)
const ParkModel = mongoose.model('Park', ParkSchema)
const UserModel = mongoose.model('User', UserSchema)


module.exports = {
Dog: DogModel,
Park: ParkModel,
User: UserModel

}