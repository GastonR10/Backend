const db = require('../../db/index');

const getComments = async (req, res, next) => {
    try {
        const comments = await db.query("select * from comments");
        res.send({
            comments: comments.rows,
          });
    } catch (error) {
        return next(error);
    }
};

const Suggestions = async (req, res, next) => {
    try {
        const newComment = req.body;
        
        const comments = await db.query(
            "Insert into comments(comment) values ($1)",
            [newComment.comment]
          );
        
        res.send({
            comment: comments.rows
        });
    } catch (error) {
      return next(error);
    }
  };


module.exports = {
    Suggestions,
    getComments,
};


