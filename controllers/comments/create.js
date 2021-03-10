// 1.1
const commentsModel = require('../../models/comments');


module.exports = {
  createCommentGet: function (req, res) {
    console.log("get comment");
    res.render('comments/create')
  },
  createCommentPost: async function (req, res) {
    
    console.log("ejecuta createcoment  :");
     let created = await commentsModel.create(req.body);
    
    if (!created) {
      res.send('There was an error');
    }
    res.redirect(301, '/comments');
  }
}
