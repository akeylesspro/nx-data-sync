import main_router from "./main_router";
import { get_version, start_server } from "akeyless-server-commons/helpers";
import { join } from "path";

const version = get_version(join(__dirname, "../package.json"));
start_server(main_router, "data-sync", version);

// import main_router from "./main_router";
// import express from "express";
// import { io as ClientIO, Socket } from "socket.io-client";

// const app = express();
// const PORT = 9010;

// const socket: Socket = ClientIO("https://nx-api.info", {
//     path: "/api/data-socket/connect",
//     transports: ["websocket"],
// });

// socket.on("connect", () => {
//     console.log(`Connected to server with socket id: ${socket.id}`);

//     const user_id = "nx-data-sync-client-test";
//     socket.emit("register", user_id);
//     console.log(`Registered as user ${user_id}`);

//     socket.emit("publish", {
//         channel: `user:${user_id}`,
//         message: "Hello from client",
//     });
// });

// socket.on("user_event", (data) => {
//     console.log("Received user_event:", data);
// });

// socket.on("disconnect", () => {
//     console.log("Disconnected from server");
// });

// main_router(app);

// app.listen(PORT, () => {
//     console.log(`Express client server running on http://localhost:${PORT}`);
// });
