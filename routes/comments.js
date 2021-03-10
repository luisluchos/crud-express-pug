var express = require('express');
var router = express.Router();
const listController = require('../controllers/comments/list')
const createController = require('../controllers/comments/create')
const deleteController = require('../controllers/comments/delete')
const editController = require('../controllers/comments/edit')

/* GET comments listing. */
router.get('/', listController.listComments);


// GET create comment => renders the view
router.get('/create', createController.createCommentGet);
// POST create comment => processes the data of a form
router.post('/create', createController.createCommentPost);


/* delete one comment detail. */
router.get('/delete/:id', deleteController.deleteCommentGet);
router.post('/delete/:id', deleteController.deleteCommentDelete);

/* GET one comment detail. */
router.get('/:id', listController.listOneComment);

/* EDIT comments. */
router.get('/:id/edit' , editController.editCommentGet );
router.post('/:id/edit', editController.editCommentPatch );






module.exports = router;
