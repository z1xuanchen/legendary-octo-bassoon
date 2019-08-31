import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Route, Switch, Redirect} from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import {ApolloProvider} from "react-apollo";
import "react-notification-alert/dist/animate.css";
import client from "./client"
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import 'semantic-ui-css/semantic.min.css'
import {Container, Grid, Header, List, Segment} from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
            <HashRouter basename='/' >
                <App/>
            </HashRouter>
        </ApolloHooksProvider>
    </ApolloProvider>,
  document.getElementById('root')
);
