import React, { Component } from 'react';
import { COMBAT_PHASE_ID, NEWS_PHASE_ID, PLACE_PHASE_ID, PURCHASE_PHASE_ID, SLICE_PLANNING_ID, WAITING_STATUS } from '../../../../constants';

const mainButtonStyle: any = {
    backgroundColor: 'grey',
    height: '80%',
    width: '20%',
    margin: '.5%',
    float: 'left'
};

interface Props {
    mainButtonClick: any;
    gameInfo: any;
}

class MainButton extends Component<Props> {
    render() {
        const { mainButtonClick, gameInfo } = this.props;
        const { gameStatus, gamePhase, gameSlice } = gameInfo;

        //TODO: clean this mess up
        let buttonText;
        if (gameStatus === WAITING_STATUS) {
            buttonText = 'Waiting on other Team...';
        } else {
            if (gamePhase === NEWS_PHASE_ID) {
                buttonText = 'Click to go to Purchase';
            } else if (gamePhase === PURCHASE_PHASE_ID) {
                buttonText = 'Click to go to Combat';
            } else if (gamePhase === COMBAT_PHASE_ID) {
                if (gameSlice === SLICE_PLANNING_ID) {
                    buttonText = 'Click to end Planning';
                } else {
                    buttonText = 'Click to execute step.';
                }
            } else if (gamePhase === PLACE_PHASE_ID) {
                buttonText = 'Click to go to News';
            } else {
                buttonText = 'Loading...';
            }
        }

        return (
            <div
                style={mainButtonStyle}
                onClick={event => {
                    // normally confirms are obtrusive UI, and should use something else TODO: confirm dialog box...
                    // eslint-disable-next-line no-restricted-globals
                    // if (confirm("Are you sure you want to move on?")) {
                    // 	this.props.mainButtonClick();
                    // }
                    event.preventDefault();
                    mainButtonClick();
                    event.stopPropagation();
                }}
            >
                {buttonText}
            </div>
        );
    }
}

export default MainButton;
