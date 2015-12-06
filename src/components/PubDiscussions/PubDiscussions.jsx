import React, {PropTypes} from 'react';
import Radium from 'radium';
// import Markdown from 'react-remarkable';
// import {globalStyles} from '../../utils/styleConstants';
import {rightBarStyles} from '../../containers/PubReader/rightBarStyles';
import {PubDiscussion} from '../../components';
// import dateFormat from 'dateformat';

let styles = {};

const PubDiscussions = React.createClass({
	propTypes: {
		discussionData: PropTypes.object,
	},

	render: function() {
		const pubData = {discussions: []};
		return (
			<div style={styles.container}>
				
				<div className="pub-discussions-wrapper" style={rightBarStyles.sectionWrapper}>
					<div style={rightBarStyles.sectionHeader}>Discussions</div>
					{
						pubData.discussions.map((discussion)=>{
							return <PubDiscussion key={discussion._id} discussionItem={discussion}/>;
						})
					}
				</div>
				
			</div>
		);
	}
});

export default Radium(PubDiscussions);

styles = {
	
};