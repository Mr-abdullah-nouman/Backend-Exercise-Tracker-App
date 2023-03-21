// const User = require("../models/user_details");

// function saveUserExercise(req, res, next) {
//   const { name, description, duration, type_of_excercise } = req.body;
//   const user = User({ name, description, duration, type_of_excercise });
//   user
//     .save()
//     .then((data) => {
//       res.status(201).json({ data: data });
//     })
//     .catch((err) => {
//       res.status(400).json({ error: err.errors });
//     });
// }
// module.exports = { saveUserExercise: saveUserExercise };

// function editUserExercise(req, res, next) {
// const user = user.find (user.name === parse(req.params.name)) 
// if (!user) res.status(404).send('User doesnt exist')  

// user
//     .put()
//     .then((data) => {
//       res.status(201).json({ data: data });
//     })
//     .catch((err) => {
//       res.status(400).json({ error: err.errors });
//     });

//     user = req.body
//     res.send(user)
// }
// module.exports = { editUserExercise: editUserExercise };

// function deleteUserExercise(req, res, next) {
//   const user = user.find (user.name === parse(req.params.name)) 
//   if (!user) res.status(404).send('User doesnt exist')  

//   user
//     .delete()
//     .then((data) => {
//       res.status(201).json("Data succesfully deleted" );
//     })
//     .catch((err) => {
//       res.status(400).json({ error: err.errors });
//     });
// }
// module.exports = { deleteUserExercise: deleteUserExercise };
