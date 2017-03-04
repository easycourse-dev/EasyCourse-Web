import React, { Component, PropTypes as PT } from 'react';
import Img from 'react-image-load';

export default class CircleImageView extends Component {
	static propTypes = {
		className: PT.string,
		size: PT.string, // lg, md, sm
		url: PT.string // source url for image
	}

	getImageSize() {
		const size = this.props.size;
		if (size === 'lg') {
			return '100px';
		} else if (size === 'md') {
			return '50px';
		} else if (size === 'sm') {
			return '25px';
		} else {
			// original
			return 'original';
		}
	}

	getIconSize() {
		const size = this.props.size;
		if (size === 'lg') {
			return 'fa-5x';
		} else if (size === 'md') {
			return 'fa-2x';
		} else if (size === 'sm') {
			return 'fa-1x';
		} else {
			// original
			return 'fa-3x';
		}
	}

	getImage() {
		if (!this.props.url) {

		}
		return this.props.url;
	}

	render() {
		return (
			<div className={this.props.className? this.props.className + ' CircleImageView' : 'CircleImageView'}>
				{
					this.props.url ?
						<Img
							headers={{'Access-Control-Allow-Origin': '*'}}
							width={this.getImageSize()}
							height={this.getImageSize()}
							src={this.props.url} />
						:
						<i
							className={'fa fa-user ' + this.getIconSize()}
							aria-hidden="true"></i>
				}
			</div>
		)
	}
}
