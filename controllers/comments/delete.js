// 1.1
const commentsModel = require('../../models/comments');


module.exports = {

  deleteCommentGet: function (req, res) {
    console.log("obtenemos:", req.params.id)
        res.render('comments/delete')
      },
  
  deleteCommentDelete: async function (req, res) {
    const id2 = parseInt(req.params.id);
    console.log("borrar: ",id2);
    await commentsModel.delete(id2);
      res.redirect('/comments');
  } 
}