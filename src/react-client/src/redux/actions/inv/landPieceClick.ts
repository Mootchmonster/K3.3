import setUserfeedbackAction from "../setUserfeedbackAction";
import { SOCKET_CLIENT_SENDING_ACTION } from "../../../constants/otherConstants";
import { SERVER_PIECE_PLACE } from "../actionTypes";
import { PLACE_PHASE_ID } from "../../../constants/gameConstants";

const landPieceClick = (invItem: any) => {
    return (dispatch: any, getState: any, emit: any) => {
        const { gameboardMeta, gameInfo } = getState();

        const { gamePhase } = gameInfo;

        if (gamePhase !== PLACE_PHASE_ID) {
            dispatch(setUserfeedbackAction("wrong phase to place land inv item."));
            return;
        }

        const { selectedPosition } = gameboardMeta;

        if (selectedPosition === -1) {
            dispatch(setUserfeedbackAction("Must select a position before using an inv item..."));
            return;
        }

        //TODO: Is this position a land position or island we own?
        //other game effects that might prevent placing it...

        const { invItemId } = invItem; //TODO: send the whole item anyway? (even though the server only uses the id, consistent...)

        const clientAction = {
            type: SERVER_PIECE_PLACE,
            payload: {
                invItemId,
                selectedPosition
            }
        };

        emit(SOCKET_CLIENT_SENDING_ACTION, clientAction);
    };
};

export default landPieceClick;
