import { Request, Response } from "express";
import md5 from "md5";
import { Game } from "../classes";
import { ACCESS_TAG, BAD_REQUEST_TAG } from "../pages/errorTypes";

/**
 * Add a game 'endpoint'.
 * @param req Express Request Object
 * @param res Express Response Object
 */
const gameAdd = async (req: Request, res: Response) => {
    //Verify Session Exists
    if (!req.session.ir3coursedirector) {
        res.redirect(403, `/index.html?error=${ACCESS_TAG}`); //TODO: this is different from gameDelete.js status.redirect....
        return;
    }

    //Verify Request Information Exists //TODO: force these values into some sort of constraints? (database constraints?)
    if (!req.body.adminSection || !req.body.adminInstructor || !req.body.adminPassword) {
        //TODO: better errors on CD page (better displaying of errors) (could have same as index) (status?)
        res.redirect(`/index.html?error=${BAD_REQUEST_TAG}`);
        return;
    }
    const { adminSection, adminInstructor, adminPassword } = req.body;

    const adminPasswordHashed = md5(adminPassword);

    const thisGame = await Game.add(adminSection, adminInstructor, adminPasswordHashed);
    if (!thisGame) {
        res.redirect("/courseDirector.html?gameAdd=failed"); //TODO: add status for failure?
    } else {
        res.redirect("/courseDirector.html?gameAdd=success");
    }
};

export default gameAdd;
