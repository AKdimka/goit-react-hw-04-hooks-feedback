import React, { Component } from "react";
import Section from "../Section/Section";
import Notification from "../Notification/Notification"
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"

export class Feedback extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	onBtnClick = (e) => {
		const name = e.currentTarget.name;

		this.setState((prev) => {
			return {
				[name]: prev[name] + 1
			}
		})
	}

	countTotalFeedback() {
		return Object.values(this.state).reduce((a, b) => a + b, 0);
	}

	countPositiveFeedbackPercentage() {
		return this.state.good / Object.values(this.state).reduce((a, b) => a + b, 0) * 100;
	}

	render() {
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions
						onBtnClick={this.onBtnClick} />
				</Section>

				<Section title="Statistics">
					{this.countTotalFeedback() ?
						<Statistics
							good={this.state.good}
							neutral={this.state.neutral}
							bad={this.state.bad}
							total={this.countTotalFeedback()}
							positive={this.countTotalFeedback() ? this.countPositiveFeedbackPercentage() : 0}
						/> :
						<Notification message="Not feedback given" />
					}
				</Section>
			</>
		)
	}
}