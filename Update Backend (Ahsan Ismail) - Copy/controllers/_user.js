const User = require("../models/user_details");

exports.GetUserExercise = (req, res, next) => {
    
 return  User.find()
      .then(data => {
        res.status(200).json({data});
      })
      .catch((err) => {
        res.status(400).json({ error: err.errors });
      });
  };
exports.SaveUserExercise=(req, res, next)=> {
    const { name, description, duration, type_of_excercise } = req.body;
    const user = User({ name, description, duration, type_of_excercise });
     user
      .save()
      .then((data) => {
        res.status(200).json({ data: data });
      })
      .catch((err) => {
        res.status(400).json({ error: err.errors });
      });
  }

  exports.UpdateUserExercise=async (req, res, next)=> {
    const { name, description, duration, type_of_excercise,_id } = req.body;
   
    try{
        
        if (!req.body && !_id) {
            return res.status(400).json({ error: "Data to update is empty" })
          }
        
       const user= await User.findByIdAndUpdate(_id,{
            name, description, duration, type_of_excercise
        },{
            new: true
        })

        return res.status(200).json({ data: user });
    }
    catch(ex)
    {
         return res.status(400).json({ error: ex })
    }


   
  }

  exports.deleteUserExercise=async (req, res, next) =>{
    const {id} = req.params;
     
    try{
        
        if (!id) {
            return res.status(400).json({ error: "Delete Id is missing" });
          }
        
          await User.findByIdAndRemove(id)
          .then(data => {
            if (!data) {
              res.status(404).json({
                error: `Cannot delete data with id=${id}. Maybe data was not found!`
              });
            } else {
              res.status(200).json({
                data: "Data deleted successfully!"
              });
            }
          })
          .catch(err => {
            res.status(500).json({
                error: "Could not delete data with id=" + id
            });
          });
      

      
    }
    catch(ex)
    {   
        console.log(ex)
         return res.status(400).json({ error: ex })
    }
  }