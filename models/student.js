const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  studentName: { type: String, required: false },
  photo: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
  green: { type: Boolean, default: false },
  yellow: { type: Boolean, default: false },
  red: { type: Boolean, default: false },
  remark: { type: String, required: false },
  evaluationDate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('students', studentSchema)
