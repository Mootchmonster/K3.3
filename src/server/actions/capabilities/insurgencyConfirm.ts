// prettier-ignore
import { ALL_LAND_POSITIONS, COMBAT_PHASE_ID, GAME_DOES_NOT_EXIST, GAME_INACTIVE_TAG, INSURGENCY_TYPE_ID, LIST_ALL_POSITIONS, NOT_WAITING_STATUS, SLICE_PLANNING_ID, TYPE_MAIN } from '../../../constants';
import { InsurgencyAction, InsurgencyRequestAction, INSURGENCY_SELECTED, SocketSession } from '../../../types';
import { Capability, Game, InvItem } from '../../classes';
import { redirectClient, sendToTeam, sendUserFeedback } from '../../helpers';

/**
 * User Request to use Insurgency Capability
 */
export const insurgencyConfirm = async (session: SocketSession, action: InsurgencyRequestAction) => {
    // Grab the Session
    const { ir3, socketId } = session;
    const { gameId, gameTeam, gameControllers } = ir3;

    if (action.payload == null || action.payload.selectedPositionId == null) {
        sendUserFeedback(socketId, 'Server Error: Malformed Payload (missing selectedPositionId)');
        return;
    }

    const { selectedPositionId, invItem } = action.payload;

    // Grab the Game
    const thisGame = await new Game(gameId).init();
    if (!thisGame) {
        redirectClient(socketId, GAME_DOES_NOT_EXIST);
        return;
    }

    const { gameActive, gamePhase, gameSlice } = thisGame;

    if (!gameActive) {
        redirectClient(socketId, GAME_INACTIVE_TAG);
        return;
    }

    // gamePhase 2 is only phase for insurgency
    if (gamePhase !== COMBAT_PHASE_ID) {
        sendUserFeedback(socketId, 'Not the right phase...');
        return;
    }

    // gameSlice 0 is only slice for insurgency
    if (gameSlice !== SLICE_PLANNING_ID) {
        sendUserFeedback(socketId, 'Not the right slice (must be planning)...');
        return;
    }

    // already confirmed done
    if (thisGame.getStatus(gameTeam) !== NOT_WAITING_STATUS) {
        sendUserFeedback(socketId, 'You already confirmed you were done. Stop sending plans and stuff.');
        return;
    }

    // Only the main controller (0) can use insurgency
    if (!gameControllers.includes(TYPE_MAIN)) {
        sendUserFeedback(socketId, 'Not the main controller (0)...');
        return;
    }

    const { invItemId } = invItem;

    // Does the invItem exist for it?
    const thisInvItem = await new InvItem(invItemId).init();
    if (!thisInvItem) {
        sendUserFeedback(socketId, 'Did not have the invItem to complete this request.');
        return;
    }

    // verify correct type of inv item
    const { invItemTypeId } = thisInvItem;
    if (invItemTypeId !== INSURGENCY_TYPE_ID) {
        sendUserFeedback(socketId, 'Inv Item was not a insurgency type.');
        return;
    }

    // does the position make sense?
    if (!LIST_ALL_POSITIONS.includes(selectedPositionId)) {
        sendUserFeedback(socketId, 'got a bad position for insurgency.');
        return;
    }

    if (!ALL_LAND_POSITIONS.includes(selectedPositionId)) {
        sendUserFeedback(socketId, 'doesnt make much sense to cause uprising in the middle of da ocean');
        return;
    }

    // insert the 'plan' for insurgency into the db for later use
    // let the client(team) know that this plan was accepted
    if (!(await Capability.insurgencyInsert(gameId, gameTeam, selectedPositionId))) {
        sendUserFeedback(socketId, 'db failed to insert insurgency, likely already an entry for that position.');
        return;
    }

    await thisInvItem.delete();

    const serverAction: InsurgencyAction = {
        type: INSURGENCY_SELECTED,
        payload: {
            invItem: thisInvItem,
            selectedPositionId
        }
    };

    // Send the update to the client(s)
    sendToTeam(gameId, gameTeam, serverAction);
};
