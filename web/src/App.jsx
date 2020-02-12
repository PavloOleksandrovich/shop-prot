import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import config from './utils/config';
import { Home, About, Category, ManageCategory } from './pages';
import { AdminLayout } from './layouts';

const httpLink = createHttpLink({
	uri: `${config.API_HOST}:${config.API_PORT}${config.API_GRAPHQL_ENDPOINT}`
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

// TODO separate
const AdminRoutes = ({match}) => (
	<AdminLayout>
		<Switch>
			<Redirect exact from={match.url} to={`${match.url}/category`} />
			<Route exact path={`${match.url}/category`} component={ManageCategory} />
		</Switch>
	</AdminLayout>
);

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/category/:name" component={Category} />
					<Route path="/category" component={ManageCategory} />
					<Route path="/admin" component={AdminRoutes} />
				</Switch>
			</Router>
		</ApolloProvider>
	);
}

export default App;
