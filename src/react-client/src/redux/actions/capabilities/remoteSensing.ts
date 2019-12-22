import { Dispatch } from 'redux';
import { COMBAT_PHASE_ID, SLICE_PLANNING_ID } from '../../../constants/gameConstants';
import { EmitType, InvItemType } from '../../../constants/interfaces';
import { REMOTE_SENSING_SELECTING } from '../actionTypes';
import setUserfeedbackAction from '../setUserfeedbackAction';

const remoteSensing = (invItem: InvItemType) => {
    return (dispatch: Dispatch, getState: any, emit: EmitType) => {
        const { gameInfo } = getState();
        const { gamePhase, gameSlice } = gameInfo;

        if (gamePhase !== COMBAT_PHASE_ID) {
            dispatch(setUserfeedbackAction('wrong phase for remote sensing dude.'));
            return;
        }

        if (gameSlice !== SLICE_PLANNING_ID) {
            dispatch(setUserfeedbackAction('must be in planning to use remote sensing.'));
            return;
        }

        //other checks that the player is allowed to select remote sensing (do they have it? / game effects...)

        //dispatch that the player is currently selecting which position to select
        dispatch({
            type: REMOTE_SENSING_SELECTING,
            payload: {
                invItem
            }
        });
    };
};

export default remoteSensing;
