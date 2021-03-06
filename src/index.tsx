import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import { config as dotenv } from "dotenv";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const GITHUB_BASE_URL = "https://api.github.com/graphql";

const httpLink = new HttpLink({
	uri: GITHUB_BASE_URL,
	headers: {
		authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
	},
});

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: httpLink,
	cache,
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ApolloProvider>,
	document.getElementById("root")
);

serviceWorker.register();
