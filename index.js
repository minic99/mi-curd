const Datastore = require('nedb-promises');

class AbstractRepository {
  constructor(dbName) {
    if (this.constructor === AbstractRepository) {
      throw new Error('Cannot instantiate abstract class');
    }
    // Initialize the NeDB datastore
    this.db = Datastore.create({ filename: dbName, autoload: true });
  }

  async create(item) {
    return this.db.insert(item);
  }

  async getAll() {
    return this.db.find({});
  }

  async getById(id) {
    return this.db.findOne({ _id: id });
  }

  async update(id, updatedItem) {
    return this.db.update({ _id: id }, { $set: updatedItem }, { returnUpdatedDocs: true });
  }

  async delete(id) {
    return this.db.remove({ _id: id }, { multi: false });
  }

  async import(items) {
    return this.db.insert(items);
  }

  async export() {
    return this.db.find({});
  }

  async deleteMany(query) {
    return this.db.remove(query, { multi: true });
  }
}

module.exports = AbstractRepository;
