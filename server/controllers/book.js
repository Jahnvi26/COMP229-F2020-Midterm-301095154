// create a reference to the model
let Book = require("../models/book");

module.exports.displayBookList = (req, res, next) => {
  Book.find((err, bookList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(bookList);

      res.render("book/list", { title: "Books", BookList: bookList });
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("book/add", { title: "Add Book" });
};

module.exports.processAddPage = (req, res, next) => {
  let newBook = Book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    description: req.body.description,
    price: req.body.price,
  });

  Book.create(newBook, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.status(201).json(Book);
    }
  });
};
/*
Add your code here to display EDIT
*/

module.exports.displayEditPage = (req, res, next) => {
  res.render("book/edit", { title: "Edit Book" });
};
/*
Add your code here to process EDIT
*/
module.exports.editBook = (req, res) => {
  Book.updateOne({ _id: req.body._id }, req.body)
    .then((data) =>
      // refresh the book list
      res.status(201).json(data)
    )
    .catch((err) => {
      console.log(err);
      res.end(err);
    });
};

/***
 * Get book by id
 */
module.exports.getBookById = (req, res) => {
  Book.findById(req.params.id).then((data) => res.status(200).json(data));
};

/*
Add your code here to perform DELETE operation
*/

module.exports.deleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((data) => {
      // refresh the book list
      res.redirect("/book-list");
    })
    .catch((err) => {
      console.log(err);
      res.end(err);
    });
};
