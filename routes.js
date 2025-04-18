const UserRoutes = require("./routes/user.routes");

module.exports = (server) => {
    server.use("/api/v1/users", UserRoutes);
};