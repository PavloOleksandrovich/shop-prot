import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import config from './utils/config';
import { Home, About, Category } from './pages';
import { AdminLayout } from './layouts';

const httpLink = createHttpLink({
	uri: `${config.API_HOST}:${config.API_PORT}${config.API_GRAPHQL_ENDPOINT}`
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/category/:name" component={Category} />
					<Route exact path="/admin" component={AdminLayout} />
				</Switch>
			</Router>
		</ApolloProvider>
	);
}

export default App;
