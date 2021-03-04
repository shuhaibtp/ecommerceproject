var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [
    {
      naame:"IPHONE11",
      catagpory:'mobile',
      description:'This is a good mobile',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtOKy2KKKtuH7iVPJzvLWEzf-Wnqvsik_6uYcKp5z430toX5744a_0_wMu1psjT01gGtSmro&usqp=CAc"
    },
    {
      naame:"IPHONE12",
      catagpory:'mobile',
      description:'This is a good mobile',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8q8AKprPZgikPfS5-fDnjiccYE5O3eXWAJ5fDcrZMDtXFqx_91U4NeLooYQR6eAEHVmKLmIU&usqp=CAc"
    },
    {
      naame:"IPHONE13",
      catagpory:'mobile',
      description:'This is a good mobile',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8q8AKprPZgikPfS5-fDnjiccYE5O3eXWAJ5fDcrZMDtXFqx_91U4NeLooYQR6eAEHVmKLmIU&usqp=CAc"
    },
    {
      naame:"IPHONE11",
      catagpory:'mobile',
      description:'This is a good mobile',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtOKy2KKKtuH7iVPJzvLWEzf-Wnqvsik_6uYcKp5z430toX5744a_0_wMu1psjT01gGtSmro&usqp=CAc"
    },
    

  ]
  res.render('admin/view-products',{admin:true,products});
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.file.image);
})

module.exports = router;
