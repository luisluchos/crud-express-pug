const commentsModel = require('../../models/comments');


module.exports = {

  editCommentGet: async function (req, res) {

    const id = req.params.id;
    console.log("obtenemos:", id);

    let commentFound = await commentsModel.findOne(id);
    console.log(commentFound);
    res.render('comments/edit', {commentFound:commentFound})
  },

   editCommentPatch: async function (req, res) {
    
    console.log("ejecuta createcoment  :");
    const id =  req.params.id;
    await commentsModel.update(id, req.body);
    res.redirect(301, '/comments');
  } 
}