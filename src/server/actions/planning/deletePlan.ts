const { Game, Piece } = require("../../classes");
const sendUserFeedback = require("../sendUserFeedback");
import { DELETE_PLAN } from "../../../react-client/src/redux/actions/actionTypes";
import { SOCKET_SERVER_REDIRECT, SOCKET_SERVER_SENDING_ACTION } from "../../../react-client/src/constants/otherConstants";
import { GAME_INACTIVE_TAG } from "../../pages/errorTypes";
import { COMBAT_PHASE_ID, SLICE_PLANNING_ID } from "../../../react-client/src/constants/gameConstants";
import { Socket } from "socket.io";

const deletePlan = async (socket: Socket, payload: any) => {
    const { gameId, gameTeam, gameControllers } = socket.handshake.session.ir3;
    const { pieceId } = payload;
    const thisGame = await new Game({ gameId }).init();

    const { gameActive, gamePhase, gameSlice } = thisGame;

    if (!gameActive) {
        socket.emit(SOCKET_SERVER_REDIRECT, GAME_INACTIVE_TAG);
        return;
    }

    //Can only change/delete plans in combat phase (2) and slice 0
    if (gamePhase != COMBAT_PHASE_ID || gameSlice != SLICE_PLANNING_ID) {
        sendUserFeedback(socket, "Not the right phase/slice...looking for phase 2 slice 0");
        return;
    }

    //Does the piece exist? (And match for this game/team/controller)
    const thisPiece = await new Piece(pieceId).init();
    if (!thisPiece) {
        sendUserFeedback(socket, "Piece did not exists...refresh page?");
        return;
    }

    const { pieceGameId, pieceTeamId } = thisPiece;

    if (pieceGameId != gameId || pieceTeamId != gameTeam) {
        sendUserFeedback(socket, "Piece did not belong to your team...(or this game)");
        return;
    }

    await thisPiece.deletePlans();

    const serverAction = {
        type: DELETE_PLAN,
        payload: {
            pieceId
        }
    };
    socket.emit(SOCKET_SERVER_SENDING_ACTION, serverAction); //TODO: should the other sockets for this team get the update? (in the background?)
    socket.to("game" + gameId + "team" + gameTeam).emit(SOCKET_SERVER_SENDING_ACTION, serverAction);
};

export default deletePlan;
