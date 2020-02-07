import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import Categories from '../Categories/Categories';

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
			<Categories />
		</ApolloProvider>
	);
}

export default App;
