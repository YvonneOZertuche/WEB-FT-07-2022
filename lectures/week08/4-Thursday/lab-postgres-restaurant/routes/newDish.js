
const express = require('express');
const router = express.Router();



//shows our form
router.get('/newdish', async(req, res) => {
    res.render('newdish')
})




module.exports = router;