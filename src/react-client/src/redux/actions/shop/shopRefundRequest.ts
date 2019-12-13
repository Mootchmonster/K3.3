import { SOCKET_CLIENT_SENDING_ACTION } from "../../../constants/otherConstants";
import { SERVER_SHOP_REFUND_REQUEST } from "../actionTypes";

const shopRefundRequest = (shopItem: any) => {
    return (dispatch: any, getState: any, emit: any) => {
        const clientAction = {
            type: SERVER_SHOP_REFUND_REQUEST,
            payload: {
                shopItem
            }
        };
        emit(SOCKET_CLIENT_SENDING_ACTION, clientAction);
    };
};

export default shopRefundRequest;
