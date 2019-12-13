import { SOCKET_CLIENT_SENDING_ACTION } from "../../../constants/otherConstants";
import { SERVER_SHOP_CONFIRM_PURCHASE } from "../actionTypes";

//TODO: more checks on if they can purchase before sending to backend (don't waste network)
const shopConfirmPurchase = () => {
    return (dispatch: any, getState: any, emit: any) => {
        const clientAction = {
            type: SERVER_SHOP_CONFIRM_PURCHASE,
            payload: {}
        };
        emit(SOCKET_CLIENT_SENDING_ACTION, clientAction);
    };
};

export default shopConfirmPurchase;
