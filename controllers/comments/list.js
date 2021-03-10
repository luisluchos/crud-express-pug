// 1.1
const commentsModel = require('../../models/comments');

module.exports = {

  listComments: async function(req, res, next) {
    // 1.2
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    
    page = page > 0 ? parseInt(page) : 0;
    limit = limit ? parseInt(limit) : 10;


    let comments = await commentsModel.find({page,limit})
    console.log("comments ", page);
    
    // 2
    
    res.render('comments/list', {title:"List of comments, esta escrito en models", listComments: comments, paginator: page });
  },

  listOneComment: async function(req, res, next) {
    const id = req.params.id;
    console.log("obtenemos:", id);

    let commentFound = await commentsModel.findOne(id);

    res.render('comments/detail', {comment: commentFound});
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       