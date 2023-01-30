const AbstractManager = require("./AbstractManager");

class MealsManager extends AbstractManager {
  constructor() {
    super({ table: "meals" });
  }

  insert(meals) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [meals.title]
    );
  }

  update(meals) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [meals.title, meals.id]
    );
  }
}

module.exports = MealsManager;
