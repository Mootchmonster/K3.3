/**
 * This function for after selecting position for piece to go to for exiting transport container.
 */

import { Socket } from "socket.io";
import { distanceMatrix } from "../../../react-client/src/constants/distanceMatrix";
import { ALL_GROUND_TYPES } from "../../../react-client/src/constants/gameboardConstants";
import { COMBAT_PHASE_ID, CONTAINER_TYPES, SLICE_PLANNING_ID, TYPE_MAIN } from "../../../react-client/src/constants/gameConstants";
import { SOCKET_SERVER_REDIRECT, SOCKET_SERVER_SENDING_ACTION } from "../../../react-client/src/constants/otherConstants";
import { INNER_PIECE_CLICK_ACTION } from "../../../react-client/src/redux/actions/actionTypes";
import { initialGameboardEmpty } from "../../../react-client/src/redux/reducers/initialGameboardEmpty";
import { Game, Piece } from "../../classes";
import { GAME_INACTIVE_TAG } from "../../pages/errorTypes";
import sendUserFeedback from "../sendUserFeedback";
import { PieceType } from "../../../react-client/src/constants/interfaces";

const exitTransportContainer = async (socket: Socket, payload: any) => {
    const { gameId, gameTeam, gameControllers } = socket.handshake.session.ir3;
    const {
        selectedPiece,
        containerPiece,
        selectedPositionId
    }: { selectedPiece: PieceType; containerPiece: PieceType; selectedPositionId: number } = payload;

    const thisGame = await new Game({ gameId }).init();
    const { gameActive, gamePhase, gameSlice } = thisGame;

    if (!gameActive) {
        socket.emit(SOCKET_SERVER_REDIRECT, GAME_INACTIVE_TAG);
        return;
    }

    if (!gameControllers.includes(TYPE_MAIN)) {
        sendUserFeedback(socket, "Not the right controller type for this action...");
        return;
    }

    if (gamePhase != COMBAT_PHASE_ID || gameSlice != SLICE_PLANNING_ID) {
        sendUserFeedback(socket, "Not the right phase/slice for container entering.");
        return;
    }

    const thisSelectedPiece = await new Piece(selectedPiece.pieceId).init();
    const thisContainerPiece = await new Piece(containerPiece.pieceId).init();

    if (!thisSelectedPiece) {
        sendUserFeedback(socket, "Selected Piece did not exists...refresh page probably");
        return;
    }

    if (!thisContainerPiece) {
        sendUserFeedback(socket, "Selected Container piece did not exist...");
        return;
    }

    if (!CONTAINER_TYPES.includes(thisContainerPiece.pieceTypeId)) {
        sendUserFeedback(socket, "Selected Container piece was not a container type");
        return;
    }

    if (thisSelectedPiece.pieceContainerId !== thisContainerPiece.pieceId) {
        sendUserFeedback(socket, "Tried to move piece outside container, it wasn't in the container to begin with...");
        return;
    }

    if (!ALL_GROUND_TYPES.includes(initialGameboardEmpty[selectedPositionId].type)) {
        sendUserFeedback(socket, "Tried to move piece to non-land position.");
        return;
    }

    if (distanceMatrix[thisContainerPiece.piecePositionId][selectedPositionId] !== 1) {
        sendUserFeedback(socket, "Tried to move piece to position that was not exactly 1 hex away.");
        return;
    }

    await Piece.putOutsideContainer(thisSelectedPiece.pieceId, selectedPositionId);

    const serverAction = {
        type: INNER_PIECE_CLICK_ACTION,
        payload: {
            gameboardPieces: await Piece.getVisiblePieces(gameId, gameTeam),
            selectedPiece,
            containerPiece
        }
    };

    //TODO: could make some sort of helper to send to teams and stuff, this is a little weird...
    socket.to("game" + gameId + "team" + gameTeam).emit(SOCKET_SERVER_SENDING_ACTION, serverAction);
    socket.emit(SOCKET_SERVER_SENDING_ACTION, serverAction);
};

export default exitTransportContainer;
