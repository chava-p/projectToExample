const mongoose=require('mongoose')

const userSchema=mongoose.Schema(
    {
        name:{
            type:String
        },
        password:{
            type:String
        },
        mail:{
            type:String
        }
    }
)

module.exports= mongoose.model('Users',userSchema)