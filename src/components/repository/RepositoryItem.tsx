import React from "react";

import { Node } from "../profile/Profile";
import Link from "../link/Link";

const RepositoryItem: React.FC<Node> = ({
	name,
	descriptionHTML,
	owner,
	primaryLanguage,
	stargazers,
	url,
}: Node) => {
	return (
		<div>
			<div className="RepositoryItem-title">
				<h2>
					<Link href={url}>{name}</Link>
				</h2>
				<div className="RepositoryItem-title-action">
					{stargazers!.totalCount} Stars
				</div>
			</div>
			<div className="RepositoryItem-description">
				<div
					className="RepositoryItem-description-info"
					dangerouslySetInnerHTML={{ __html: descriptionHTML }}
				/>
				<div className="RepositoryItem-description-details">
					<div>
						{primaryLanguage && <span>Language: {primaryLanguage.name}</span>}
					</div>
					<div>
						{owner && (
							<span>
								Owner: <a href={owner.url}>{owner.login}</a>
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RepositoryItem;
