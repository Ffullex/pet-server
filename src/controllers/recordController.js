const workoutService = require('../services/workoutService')

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req
  if ( !workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error:
          'Parameter \':workoutId\' can not be empty',
      },
    })
  }
  try {
    const workout = workoutService.getOneWorkout(
      workoutId,
    )
    res.send({ status: 'OK', data: workout.records })
  } catch (error) {
    res.status(error?.status || 500).send({
      status: 'FAILED',
      data: { error: error?.message || error },
    })
  }
}

module.exports = {
  getRecordForWorkout,
}