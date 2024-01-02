const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id: {
        oid:{
            type: mongoose.Schema.Types.ObjectId,
        required: true,
        }
       
       
      },
    pickedup:{
        type:Boolean,
        default:false
    },
    assigned_to_batch:{
        type:Boolean,
        default:false
    },
    products:[
        {
           gstAmount:{
            type:Number,
           
            },
            name:{
                type:String
            },
            cashback:{
                type:Number
            },
            quantity:{
                type:Number
            }

        },

    ]
})

module.exports = mongoose.model("user", userSchema)
