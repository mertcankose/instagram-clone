class Service {
  async findAll() {
    return this.model.find(); //get all the records
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
}

module.exports = Service;
