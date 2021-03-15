import express, { Request, Response } from "express";
import * as TeamService from "../../../services/teams/team.service";
import { TeamBase, Team } from "../../../models/team/team.interface";

export const teamsRouter = express.Router();

teamsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const teams: Team[] = await TeamService.findAll();

        res.status(200).send(teams);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

teamsRouter.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const team: Team = await TeamService.find(parseInt(id));

        res.status(200).send(team);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

teamsRouter.post("/create", async (req: Request, res: Response) => {
    try {
        const team: TeamBase = req.body;
        const newTeam: Team = await TeamService.create(team);

        res.status(201).json(newTeam);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

teamsRouter.put("/manage/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

  try {
    const teamDataUpdate: Team = req.body;
    const team: Team = await TeamService.find(parseInt(id));

    if (team) {
      const updatedTeam = await TeamService.update(parseInt(id), teamDataUpdate);
      res.status(200).json(updatedTeam)
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

teamsRouter.delete("/delete/:id", async(req:Request, res: Response) => {
    const { id } = req.params;

    try {
        const team = await TeamService.remove(parseInt(id));

        res.status(200).json({"message": "The teams was removed from the list."}); 
    } catch (e) {
        res.status(500).send(e.message);
    }
});
