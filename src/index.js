import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from "aws-amplify";
import config from "./config-prod";


Amplify.configure({
    Auth: {
        region: config.cognito.REGION,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
    },
    API: {
        endpoints: [
            {
                name: "contactus",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION
            },
        ]
    }
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
