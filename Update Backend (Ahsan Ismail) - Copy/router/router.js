//remove this line and controller file
//const { saveUserExercise, editUserExercise,deleteUserExercise,getAllUserExercise} = require("../controllers/user");
//use this one
const UserController = require("../controllers/_user");

const router = require("express").Router();

router.get("/get-excercise",(req, res, next)=>{ UserController.GetUserExercise(req, res, next)} );
router.post("/save-excercise", (req, res, next)=>{ UserController.SaveUserExercise(req, res, next)} )
router.put("/edit-exercise", (req, res, next)=>{UserController.UpdateUserExercise(req, res, next)});
router.delete("/delete-exercise/:id", (req, res, next)=>{UserController.deleteUserExercise(req, res, next)});
 
module.exports = router;
