// import { BAD_REQUEST_TAG, GAME_DOES_NOT_EXIST, LOGIN_TAG } from "../pages/errorTypes";
import { Request, Response } from "express";
// const { Game } = require("../classes");
import md5 from "md5";

const adminLogin = async (req: Request, res: Response) => {
    // const CourseDirectorSection = "CourseDirector";
    // const CourseDirectorLastName = process.env.CD_LASTNAME || "Smith";
    // const CourseDirectorPasswordHash = process.env.CD_PASSWORD || "912ec803b2ce49e4a541068d495ab570"; //"asdf"
    // const { adminSection, adminInstructor, adminPassword } = req.body;
    // if (!adminSection || !adminInstructor || !adminPassword) {
    //     res.redirect(`/index.html?error=${BAD_REQUEST_TAG}`);
    //     return;
    // }
    // const inputPasswordHash = md5(adminPassword);
    // if (adminSection == CourseDirectorSection && adminInstructor == CourseDirectorLastName && inputPasswordHash == CourseDirectorPasswordHash) {
    //     req.session.ir3 = { courseDirector: true };
    //     res.redirect("/courseDirector.html");
    //     return;
    // }
    // const thisGame = await new Game({ gameSection: adminSection, gameInstructor: adminInstructor }).init();
    // if (!thisGame) {
    //     res.redirect(`/index.html?error=${GAME_DOES_NOT_EXIST}`);
    //     return;
    // }
    // const { gameAdminPassword, gameId } = thisGame;
    // if (gameAdminPassword != inputPasswordHash) {
    //     res.redirect(`/index.html?error=${LOGIN_TAG}`);
    //     return;
    // }
    // req.session.ir3 = {
    //     gameId,
    //     teacher: true,
    //     adminSection, //same name = don't need : inside the object...
    //     adminInstructor
    // };
    // res.redirect(`/teacher.html`);
};

export default adminLogin;
