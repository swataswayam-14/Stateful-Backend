import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    games.push({
        "whitePlayer": "swayam",
        "blackPlayer": "dash",
        moves: []
    })
}, 5000)