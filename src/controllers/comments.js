

const getComments = async (req, res) => {
    try {
        res.send({
            comments: comments,
          });
    } catch (error) {
        return next(error);
    }
};

const Suggestions = async (req, res, next) => {
    try {
        const newComment = { text: req.body.text };
        comments.push(newComment);
        res.send({
            comments
        });
    } catch (error) {
      return next(error);
    }
  };


module.exports = {
    Suggestions,
    getComments,
};


const comments = [];