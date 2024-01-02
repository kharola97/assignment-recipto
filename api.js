const userModel = require("./model")



const userDetails = async (req, res)=>{
   
   const {id} = req.body
   if(data.products.length===0) return res.status(400).send({status:false, message:"Add some products"})
    // Check for duplicate records based on _id
  const existingData = await userModel.findOne({ id });
  if (existingData) {
    return res.status(400).json({ message: 'Duplicate record found' });
  }


    const newData = await userModel.create(req.body)
    return res.status(201).send({status:true, message:"Document created successfully", data:newData})
}






module.exports.userDetails = userDetails