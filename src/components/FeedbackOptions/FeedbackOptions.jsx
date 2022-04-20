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

FeedbackOptions.propTypes = {
	onBtnClick: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
}