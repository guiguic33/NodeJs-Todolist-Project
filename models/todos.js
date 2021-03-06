const db = require('sqlite')
const _ = require('lodash')

module.exports = {
  getAll() {
    return db.all("SELECT rowid AS id, * FROM todos")
  },
  findOne(id) {
    return db.get("SELECT rowid AS id, * FROM todos WHERE rowid = ?", id)
  },
  postOne(myargs) {
    return db.run('INSERT INTO todos (message, completion, updatedAt, createdAt, UserId) VALUES (?, ?, ?, ?, ?)', [myargs.message, myargs.completion, myargs.update, myargs.update, myargs.userId])
  },
  updateOne(myargs){
    return db.run('UPDATE todos SET message = ?, completion = ?, updatedAt = ? WHERE rowid = ?', [myargs.newmessage, myargs.newcompletion, myargs.update, myargs.id])
  },
  deleteRow(id){
    return db.run('DELETE FROM todos WHERE rowid = ?', id)
  },
  getUserTodos(userId){
    return db.all("SELECT rowid AS id, * FROM todos WHERE userId = ?", userId)
  }
} 