import React from "react";

const FeedbackOptions = ({ onBtnClick }) => {
	return (<div className="btns-box">
		<button className="btn" name="good" onClick={onBtnClick}>Good</button>
		<button className="btn" name="neutral" onClick={onBtnClick}>Neutral</button>
		<button className="btn" name="bad" onClick={onBtnClick}>Bad</button>
	</div>)
}

export default FeedbackOptions;