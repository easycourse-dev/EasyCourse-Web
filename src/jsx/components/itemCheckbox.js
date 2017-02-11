import React, { Component, PropTypes as PT } from 'react'

export default class ItemCheckbox extends Component {

	static propTypes = {
		className: PT.string
	}

	render() {
		return (
			<div className={this.props.className ? this.props.className + ' itemCheckWrapper' : 'itemCheckWrapper'}>
				<i className="itemCheck fa fa-check" aria-hidden="true"></i>
			</div>
		);
	}
}
