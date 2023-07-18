const express = require ('express')
const {createWorkout,
       getWorkouts,
       getWorkout,
       deleteWorkout,
       updateWorkout
      } = require ('../controller/workoutcontroller')

const router = express.Router()


//get all routes
router.get ('/', getWorkouts)

//get single route
router.get ('/:id', getWorkout)

//post a new workout
router.post ('/', createWorkout)

//Delete a new workout
router.delete ('/:id', deleteWorkout) 

//Update a new workout
router.patch ('/:id', updateWorkout)

module.exports = router