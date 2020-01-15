import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const Schema = mongoose .Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type:String
    },
    photo: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    user_name: {
        type: String,
        unique: true,
        required: true
    }
})
UserSchema.plugin(uniqueValidator,{
    message: '{PATH} must be unique'
});

export const User = mongoose.model('User', UserSchema)