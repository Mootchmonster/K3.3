import React from "react";
import PropTypes from "prop-types";
import { TYPE_NAMES, TYPE_MOVES, TYPE_FUEL } from "../../constants/gameConstants";
import { TYPE_IMAGES } from "../styleConstants";

const invItemStyle: any = {
    position: "relative",
    backgroundColor: "blue",
    width: "20%",
    paddingTop: "20%",
    margin: "1%",
    float: "left",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat"
};

const InvItem = ({ invItem, invItemClick }: { invItem: any; invItemClick: any }) => {
    const { invItemTypeId } = invItem;

    const name = TYPE_NAMES[invItemTypeId];
    const moves = TYPE_MOVES[invItemTypeId];
    const fuel = TYPE_FUEL[invItemTypeId];

    const style = {
        ...invItemStyle,
        ...TYPE_IMAGES[invItemTypeId]
    };

    const title = `${name}\nMoves: ${moves !== undefined ? moves : "N/A"}\nFuel: ${fuel !== undefined && fuel !== -1 ? fuel : "N/A"}`;

    const onClick = event => {
        event.preventDefault();
        invItemClick(invItem);
        event.stopPropagation();
    };

    return <div style={style} title={title} onClick={onClick} />;
};

InvItem.propTypes = {
    invItem: PropTypes.object.isRequired,
    invItemClick: PropTypes.func.isRequired
};

export default InvItem;
