const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route')
const bannerImgRoute = require('./bannerImg.route')


const { uploadFile, uploadThumbnail } = require('../../utils/fileUpload');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/bannerImg',
    route: bannerImgRoute,
  },
  
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

router.route('/upload-file').post(uploadFile);
router.route('/upload-thumbnail').post(uploadThumbnail);




/* istanbul ignore next */


module.exports = router;
