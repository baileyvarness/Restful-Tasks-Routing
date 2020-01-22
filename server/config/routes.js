const tasksController = require("../controllers/tasks")
const path = require("path")

module.exports = function(app) {
    app.get("/tasks", tasksController.index)
    app.get("/tasks/:id", tasksController.taskById)
    app.post("/tasks", tasksController.create)
    app.put("/tasks/:id", tasksController.update)
    app.delete("/tasks/:id", tasksController.delete)
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}