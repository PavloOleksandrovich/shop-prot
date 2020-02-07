import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import routes from './routes';

// TODO uri from config
const httpLink = createHttpLink({
	uri: 'http://localhost:3004'
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
					{Object.values(routes).map( (route, index) => (
						<Route {...route} key={index} />
					) )}
				</Switch>
			</Router>
		</ApolloProvider>
	);
}

export default App;
