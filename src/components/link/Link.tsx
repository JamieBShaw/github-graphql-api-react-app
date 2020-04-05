import React, { DetailedHTMLProps } from "react";

type anchorType = DetailedHTMLProps<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;

const Link: React.FC<anchorType> = ({ children, ...props }) => {
	return (
		<div>
			<a {...props} target="_blank" rel="nooopener noreferrer">
				{children}
			</a>
		</div>
	);
};

export default Link;
