const BaseService = require("./base.js");
const PostModel = require("../models/post.js");

class PostService extends BaseService {
  model = PostModel;

  /*
  async add(user, item) {
    let post = { user, ...item };
    return this.model.create(post);
  }
  */

  //async findByUserName(user) {}
}

module.exports = new PostService();

/*
  constructor() {
    super(PostModel, `${__dirname}/../post-database.json`);
  }
  // üstteki kullanım yerine alttaki kullanım node 12+ için daha kullanışlı
*/
