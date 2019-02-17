const express = require('express')
const router = express.Router()
const { cloudinaryConfig, uploader } = require('../../config/cloudinaryConfig')
const { multerUploads, dataUri } = require('../../config/multer')
const db = require('../../config/dbConfig')

cloudinaryConfig(router)

/**
 * @api {get} /api/images/upload Post an image
 * @apiGroup images
 *
 * @apiSuccess {String} Returns url to image
 */

router.post('/upload', multerUploads, (req, res) => {
  if (req.file) {
    const file = dataUri(req).content
    return uploader.upload(file).then(result => {
      const image = result.url
      return res
        .status(200)
        .json({
          message: 'Your image has been uploaded successfully to cloudinary',
          image: image,
        })
        .catch(err =>
          res.status(400).json({
            message: 'Something went wrong while processing your request',
            err: err,
          })
        )
    })
  }
})

module.exports = router
