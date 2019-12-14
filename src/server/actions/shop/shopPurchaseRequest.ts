import { Game, ShopItem } from "../../classes";
import { SHOP_PURCHASE } from "../../../react-client/src/redux/actions/actionTypes";
import { SOCKET_SERVER_REDIRECT, SOCKET_SERVER_SENDING_ACTION } from "../../../react-client/src/constants/otherConstants";
import { GAME_INACTIVE_TAG } from "../../pages/errorTypes";
import { TYPE_COSTS, PURCHASE_PHASE_ID, TYPE_MAIN, BLUE_TEAM_ID } from "../../../react-client/src/constants/gameConstants";
import { Socket } from "socket.io";
import sendUserFeedback from "../sendUserFeedback";

const shopPurchaseRequest = async (socket: Socket, payload: any) => {
    const { gameId, gameTeam, gameControllers } = socket.handshake.session.ir3;

    if (payload == null || payload.shopItemTypeId == null) {
        sendUserFeedback(socket, "Server Error: Malformed Payload (missing shopItemTypeId)");
        return;
    }

    const { shopItemTypeId } = payload;

    const thisGame = await new Game({ gameId }).init();
    const { gameActive, gamePhase, game0Points, game1Points } = thisGame;

    if (!gameActive) {
        socket.emit(SOCKET_SERVER_REDIRECT, GAME_INACTIVE_TAG);
        return;
    }

    if (gamePhase != PURCHASE_PHASE_ID) {
        sendUserFeedback(socket, "Not the right phase...");
        return;
    }

    //Only the main controller (0) can buy things
    if (!gameControllers.includes(TYPE_MAIN)) {
        sendUserFeedback(socket, "Not the main controller (0)...");
        return;
    }

    const shopItemCost = TYPE_COSTS[shopItemTypeId];
    const teamPoints = gameTeam == BLUE_TEAM_ID ? game0Points : game1Points;

    if (teamPoints < shopItemCost) {
        sendUserFeedback(socket, "Not enough points to purchase");
        return;
    }

    const newPoints = teamPoints - shopItemCost;
    await thisGame.setPoints(gameTeam, newPoints);

    const shopItem = await ShopItem.insert(gameId, gameTeam, shopItemTypeId);

    //TODO: standardize payloads for similar actions (points vs newpoints vs etc...)
    const serverAction = {
        type: SHOP_PURCHASE,
        payload: {
            shopItem,
            points: newPoints
        }
    };
    socket.emit(SOCKET_SERVER_SENDING_ACTION, serverAction);
    socket.to("game" + gameId + "team" + gameTeam).emit(SOCKET_SERVER_SENDING_ACTION, serverAction);
};

export default shopPurchaseRequest;
