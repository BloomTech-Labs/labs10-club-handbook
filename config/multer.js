const multer = require('multer')
const Datauri = require('datauri')
const path = require('path')
const storage = multer.memoryStorage()
const multerUploads = multer({ storage }).single('image')
const duri = new Datauri()

const dataUri = req =>
  duri.format(path.extname(req.file.originalname).toString(), req.file.buffer)

module.exports = { multerUploads, dataUri }
