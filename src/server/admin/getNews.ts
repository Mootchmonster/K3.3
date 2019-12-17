import { Request, Response } from "express";
import { Game } from "../classes";
import { ACCESS_TAG } from "../pages/errorTypes";

const getNews = async (req: Request, res: Response) => {
    if (!req.session.ir3teacher) {
        res.redirect(`/index.html?error=${ACCESS_TAG}`);
        return;
    }

    const { gameId } = req.session.ir3;

    try {
        const results = await Game.getAllNews(gameId);
        res.send(results);
    } catch (error) {
        console.error(error);
        //TODO: this wouldn't happen, need database to get to teacher page anyways
        res.status(500).send([
            {
                newsId: 69,
                newsTitle: "DATABASE FAILED"
            }
        ]);
    }
};

export default getNews;
