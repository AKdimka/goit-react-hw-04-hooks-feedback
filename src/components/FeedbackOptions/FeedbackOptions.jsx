import React from "react";
import { BtnsBox, Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onBtnClick }) => {
	return (<BtnsBox>
		<Btn name="good" onClick={onBtnClick}>Good</Btn>
		<Btn name="neutral" onClick={onBtnClick}>Neutral</Btn>
		<Btn name="bad" onClick={onBtnClick}>Bad</Btn>
	</BtnsBox>)
}