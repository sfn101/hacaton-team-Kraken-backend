exports.getAllPosts = (req, res) => {
  res.json({
    posts: [{}],
  });
};
exports.getPostById = (req, res) => {
  /* return post by ID */
};
exports.createPost = (req, res) => {
    console.log(req.body.postsss)
    res.json({
        postsss: [{
            
        }],
      });
};
exports.updatePost = (req, res) => {
  /* update a post */
};
exports.deletePost = (req, res) => {
  /* delete a post */
};
