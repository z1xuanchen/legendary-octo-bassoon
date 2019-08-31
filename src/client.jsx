import {createHttpLink} from "apollo-link-http/lib/index";
import {setContext} from "apollo-link-context/lib/index";
import {ApolloClient} from "apollo-client/index";
import {InMemoryCache} from "apollo-cache-inmemory/lib/index";

const AUTH_TOKEN = 'auth-token';


const httpLink = createHttpLink({
    uri: 'http://127.0.0.1:8000/graphql/',
});

const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem(AUTH_TOKEN);
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : null,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;
