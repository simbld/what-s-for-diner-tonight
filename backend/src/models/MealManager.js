const AbstractManager = require("./AbstractManager");

class MealManager extends AbstractManager {
  constructor() {
    super({ table: "meal" });
  }

  insert(meal) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [meal.title]
    );
  }

  update(meal) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [meal.title, meal.id]
    );
  }
}

module.exports = MealManager;
