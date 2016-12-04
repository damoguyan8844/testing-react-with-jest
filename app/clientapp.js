import React from 'react';
import { Provider } from 'react-redux';
import { Router,IndexRoute,applyRouterMiddleware,useRouterHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll';
import {createHistory} from 'history';

import Todos from './todos';
import Layout from './clientlayout';
import createStore from './clientstore';

export default (props, location) => {

    let prefix = '';
    const store = createStore(props);

    var childRoutes =  [
        {
            path: '/',
            component: Layout,
            indexRoute: {
                component: Todos
            },
            childRoutes: [
                {
                    path: '/hello',
                    getComponent(location, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./hello').default)
                        }, 'Hello')
                    }
                },
            ]
        }
    ];

    let routerHistory = useRouterHistory(createHistory)({
        basename: prefix
    });

    const trackPageView = function(){
        console.log('new page view change:', this.state.location.pathname);
    };

    let history = syncHistoryWithStore(
        routerHistory,
        store
    );

    return (
        <Provider store={store}>
            <Router history={history} children={childRoutes} render={applyRouterMiddleware(useScroll())} onUpdate={trackPageView}/>
        </Provider>
    );

}