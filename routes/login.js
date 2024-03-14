import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/', (req, res)=>{
  const{ email, password} =req.body;
  console.log(email);
  console.log(password);
})

export default router;
