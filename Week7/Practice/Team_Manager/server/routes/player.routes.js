const PlayerController = require("../controllers/player.controller")

module.exports = (app) => {
    app.get("/api/player", PlayerController.findAllPlayers)
    app.post("/api/player", PlayerController.createNewPlayer)
    app.get("/api/player/:id", PlayerController.findOnePlayer)
    app.put("/api/player/:id", PlayerController.updateOnePlayer)
    app.delete("/api/player/:id", PlayerController.deletePlayer)
}