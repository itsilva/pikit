/**
 * Required Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { storesRouter } from "./api/endpoints/stores/stores.routes";
import { teamsRouter } from "./api/endpoints/teams/teams.routes";

dotenv.config();

/**
 * Application Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  Application Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/stores", storesRouter);
app.use("/api/teams", teamsRouter);

/**
 * Server Activation
 * 
 * -> Note that the index and the server should be separated 
 */

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
