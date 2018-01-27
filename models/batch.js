// models/batch.js
const mongoose = require('../config/database')
const { Schema } = mongoose

const batchSchema = new Schema({
  batchName: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('batches', batchSchema)
