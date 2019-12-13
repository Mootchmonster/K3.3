import setUserfeedbackAction from "../setUserfeedbackAction";
import { SOCKET_CLIENT_SENDING_ACTION } from "../../../constants/otherConstants";
import { SERVER_CONFIRM_PLAN } from "../actionTypes";

const confirmPlan = () => {
    return (dispatch: any, getState: any, emit: any) => {
        const { gameboardMeta } = getState();

        if (gameboardMeta.planning.moves.length === 0) {
            dispatch(setUserfeedbackAction("Can't submit an empty plan..."));
        } else {
            const clientAction = {
                type: SERVER_CONFIRM_PLAN,
                payload: {
                    pieceId: gameboardMeta.selectedPiece.pieceId,
                    plan: gameboardMeta.planning.moves
                }
            };

            emit(SOCKET_CLIENT_SENDING_ACTION, clientAction);
        }
    };
};

export default confirmPlan;
