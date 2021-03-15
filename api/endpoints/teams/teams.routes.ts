import express, { Request, Response } from "express";
import * as TeamService from "../../../services/teams/team.service";
import { TeamBase, Team } from "../../../models/team/team.interface"

export const teamsRouter = express.Router();

teamsRouter.get("/", async(req: Request, res: Response) => {
    try {
        const teams: Team[] = await TeamService.findAll();

        res.status(200).send(teams);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

teamsRouter.get("/:id", async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const team: Team = await TeamService.find(parseInt(id));

        res.status(200).send(team);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

teamsRouter.post("/create", async(req: Request, res: Response) => {
    try {
        const team: TeamBase = req.body;
        const newTeam: Team = await TeamService.create(team);

        res.send(201).json(team);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

teamsRouter.put("/manage/:id", async(req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const team: Team = await TeamService.find(parseInt(id));

        if (!team) {
            return res.status(404).json({"message": "Not found"});
        }

        res.send(200).json(team);
    } catch (e) {
        res.status(500).send(e.message);
    }
});