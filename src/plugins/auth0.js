import { createAuth0 } from "@auth0/auth0-vue";


export default createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_ID,
    authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URI
    }
});