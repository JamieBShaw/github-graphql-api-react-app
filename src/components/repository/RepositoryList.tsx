import React from "react";
import RepositoryItem from "./RepositoryItem";

import { QueryResponse } from "../profile/Profile";

const RepositoryList: React.FC<QueryResponse> = ({
	repositories,
}: QueryResponse) => {
	const repos = repositories.edges.map(({ node }) => {
		return (
			<div key={node.id} className="RepositoryItem">
				<RepositoryItem {...node} />
			</div>
		);
	});

	return <>{repos}</>;
};

export default RepositoryList;
