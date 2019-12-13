import React from "react";
import { NEWS_POPUP_IMAGES } from "../styleConstants";
import PropTypes from "prop-types";

const newsPopupStyle = {
	backgroundColor: "white",
	width: "50%",
	height: "50%",
	top: "25%",
	right: "25%",
	position: "absolute"
};

const newsPopupMinimizeStyle = {
	position: "absolute",
	display: "block",
	width: "7%",
	height: "12%",
	top: "0%",
	left: "-8%",
	backgroundColor: "white",
	border: "2px solid black",
	backgroundSize: "100% 100%",
	backgroundRepeat: "no-repeat"
};

const isMinimizedStyle = {
	border: "2px solid red",
	top: "45%",
	margin: "2%"
};

const invisibleStyle = {
	display: "none"
};

const popupTitleStyle = {
	textAlign: "center",
	fontSize: "200%"
};

const newsTitleStyle = {
	textAlign: "center",
	fontSize: "150%"
};

const newsInfoStyle = {
	textAlign: "left",
	fontSize: "100%",
	margin: "1%",
	padding: "2%"
};

const NewsAlertPopup = ({ news, newsPopupMinimizeToggle }) => {
	const minimizeClick = event => {
		event.preventDefault();
		newsPopupMinimizeToggle();
		event.stopPropagation();
	};

	return (
		<div style={news.active ? null : invisibleStyle}>
			<div style={!news.isMinimized ? newsPopupStyle : invisibleStyle}>
				<div style={popupTitleStyle}>NEWS ALERT!</div>
				<br />
				<h1 style={newsTitleStyle}>{news.newsTitle}</h1>
				<br />
				<div style={newsInfoStyle}>{news.newsInfo}</div>
				<div onClick={minimizeClick} style={{ ...newsPopupMinimizeStyle, ...NEWS_POPUP_IMAGES.minIcon }} />
			</div>
			<div style={{ ...(news.isMinimized ? newsPopupMinimizeStyle : invisibleStyle), ...NEWS_POPUP_IMAGES.minIcon, ...isMinimizedStyle }} onClick={minimizeClick} />
		</div>
	);
};

NewsAlertPopup.propTypes = {
	news: PropTypes.object.isRequired,
	newsPopupMinimizeToggle: PropTypes.func.isRequired
};

export default NewsAlertPopup;
