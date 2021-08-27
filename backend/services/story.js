const BaseService = require("./base-service.js");
const StoryModel = require("../models/story.js");

class StoryService extends BaseService {
  model = StoryModel;
}

module.exports = new StoryService();
