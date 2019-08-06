const router = require('express').Router()

router.use('/api/laptops' , require('./laptops'))
router.use('/api/desktops' , require('./desktops'))
router.use('/api/dashboard' , require('./dashboards'))
router.use('/api/users' , require('./users'))
console.log('all apis ready')

module.exports = router ;