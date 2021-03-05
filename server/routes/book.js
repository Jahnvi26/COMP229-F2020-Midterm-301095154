let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// connect to our Book Model
let Book = require("../models/book");

let bookController = require("../controllers/book");

/* GET Route for the Book List page - READ Operation */
router.get("/", bookController.displayBookList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", bookController.displayAddPage);

router.get("/id/:id", bookController.getBookById);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", bookController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/edit/:id", bookController.displayEditPage);

/*
 * add your code to
 * POST Route for processing the Edit page - UPDATE Operation
 */
router.put("/edit", bookController.editBook);

/* add your code to
 *  GET to perform  Deletion - DELETE Operation
 */
router.get("/delete/:id", bookController.deleteBook);

module.exports = router;
