const router = require('express').Router()
const { Student } = require('../../models')


//  const Student

router.get('/batches/:id/students', (req, res, next) => {
  Student.find()
    // Newest students first
    .sort({ createdAt: 1 })
    // Send the data in JSON format
    .then((students) => res.json(students))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })
  .get('/batches/:id/students/', (req, res, next) => {
    const id = req.params.id
    Student.findById(id)
      .then((student) => {
        if (!student) { return next() }
        res.json(student)
      })
      .catch((error) => next(error))
  })
  .post('/batches/:id/students', (req, res, next) => {
    let newStudent = req.body

    Student.create(newStudent)
      .then((student) => res.json(student))
      .catch((error) => next(error))
  })

  .put('/bacthes/students/:id', (req, res, next) => {
    const studentId = req.params.id
    let update = req.body

    Student.findOneAndUpdate(studentId,update)
      .then((student) => {
        if (!student) { return next() }
        res.json(student)
      })
      .catch((error) => next(error))
  })

  .patch('/bacthes/:id/students/:id', (req, res, next) => {
    const studentId = req.params.id
    let update = req.body

    Student.findOneAndUpdate(studentId,update)
      .then((student) => {
        if (!student) { return next() }
        res.json(student)
      })
      .catch((error) => next(error))
  })

  .delete('/batches/:id/students/:id', (req, res, next) => {
    const studentId = req.params.id

    Student.findOneAndRemove(studentId)
      .then((student) => {
        if (!student) { return next() }
        res.json(student)
      })
      .catch((error) => next(error))
  })

module.exports = router
