const user = require("./user");

class Service {
  async findAll() {
    //return this.model.find(); //get all the records
    return this.model.find();
  }

  async add(item) {
    return this.model.create(item);
  }

  async del(itemId) {
    return this.model.deleteOne({ _id: itemId });
  }

  async find(itemId) {
    return this.model.findById(itemId);
  }

  async updateOne(itemId, body) {
    return this.model.updateOne({ _id: itemId }, { $set: body });
  }
}

module.exports = Service;
