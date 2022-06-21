const Book = require('../models/books.js');

 
const index = (req, res)=> { 
    Book.find({},function(err,books) {
        res.render('books/index',{title:'All Books', books});

    });
 }

  const update = (req, res)=> {
  Book.findByIdAndUpdate(req.params.id, req.body, (err,b)=> {
     if (err) {
      res.find(400).json(err)
      return 
     }
    Book.find({},(err,books)=>{
        res.json(books)
     });
    
  })}

  
  const create = (req, res)=> {
   Book.create(req.body)
   console.log(req.body)
   .then((book)=>{
    console.log(book)
    Book.find({},(e,books)=>{

    })
   })

  }


   const show = (req, res)=> {
   Book.findById(req.params.id, function(err,book) {
    res.render('books/show', {tittle:'Book Reviews',book});


   });

  }

 const deleteCtrl = (req, res)=> {
 Book.findByIdAndDeleteCtrl(req.params.id, req.body, (err,book)=> {
    if (err){
        res.status(400).json(err)
        return
    }
    Book.find({},(e,books)=>{

    })
 })

  }


module.exports = {
    index,
    show,
    create,
    update,
    deleteCtrl,
  }
  