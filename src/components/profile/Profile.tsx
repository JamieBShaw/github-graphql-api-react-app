import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import RepositoryList from "../repository/RepositoryList";
import Loading from "../loading/Loading";

interface Watchers {
	totalCount: number;
}
interface Stargazers {
	totalCount: number;
}

interface Owner {
	login: string;
	url: string;
}

interface PrimaryLanguage {
	name: string;
}

export interface Node {
	id: any;
	name: string;
	url: string;
	descriptionHTML: string;
	primaryLanguage: PrimaryLanguage;
	owner: Owner;
	stargazers: Stargazers;
	viewerHasStarred: number;
	watchers: Watchers;
	viewerSubsription: number;
}

interface Edges {
	node: Node;
}

export interface QueryResponse {
	repositories: {
		edges: Edges[];
	};
}

const Profile: React.FC = () => {
	const { loading, error, data } = useQuery<QueryResponse>(GET_CURRENT_USER);

	if (loading || !data) {
		return <Loading />;
	}

	if (error) {
		console.log(error);
		return <h3> error</h3>;
	}

	return <RepositoryList repositories={data.repositories} />;
};

const GET_CURRENT_USER = gql`
	{
		viewer {
			repositories(first: 5, orderBy: { direction: DESC, field: STARGAZERS }) {
				edges {
					node {
						id
						name
						url
						descriptionHTML
						primaryLanguage {
							name
						}
						owner {
							login
							url
						}
						stargazers {
							totalCount
						}
						viewerHasStarred
						watchers {
							totalCount
						}
						viewerSubscription
					}
				}
			}
		}
	}
`;

export default Profile;
