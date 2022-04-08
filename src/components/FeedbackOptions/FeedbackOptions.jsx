import PropTypes from "prop-types";
import { BtnsBox, Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onBtnClick, options }) => {
	return (
		<BtnsBox>
			{options.map((option) => (
				<Btn key={option} name={option} type="button" onClick={onBtnClick}>{option}</Btn>
			)
			)}
		</BtnsBox>)
}

/* 
<Btn name="good" onClick={onBtnClick}>Good</Btn>
<Btn name="neutral" onClick={onBtnClick}>Neutral</Btn>
<Btn name="bad" onClick={onBtnClick}>Bad</Btn>
*/

FeedbackOptions.propTypes = {
	onBtnClick: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
}