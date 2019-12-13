import { SOCKET_CLIENT_SENDING_ACTION } from "../../constants/otherConstants";
import { SERVER_MAIN_BUTTON_CLICK } from "./actionTypes";

const mainButtonClick = () => {
    return (dispatch: any, getState: any, emit: any) => {
        //check the local state before sending to the server
        const clientAction = {
            type: SERVER_MAIN_BUTTON_CLICK,
            payload: {}
        };
        emit(SOCKET_CLIENT_SENDING_ACTION, clientAction);
    };
};

export default mainButtonClick;
