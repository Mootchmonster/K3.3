import { Request, Response } from "express";
import fs from "fs";
import pool from "../database";
import { BAD_SESSION } from "../pages/errorTypes";

/**
 * Inserts tables into the database that are needed for all game/admin functionality.
 *
 * This is meant as a one-time function to help developers.
 */
const insertDatabaseTables = async (req: Request, res: Response) => {
    //Verify Session
    if (!req.session.ir3coursedirector) {
        res.redirect(`/index.html?error=${BAD_SESSION}`);
        return;
    }

    const queryString = fs.readFileSync("./src/server/sql/tableInsert.sql").toString();

    await pool.query(queryString);

    res.redirect("/courseDirector.html?initializeDatabase=success");
};

export default insertDatabaseTables;
