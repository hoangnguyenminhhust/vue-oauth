/* 
eslint-disable 
*/
import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';

export function getRedirectUri(uri) {
  try {
    return !isUndefined(uri)
      ? `${$window.location.origin}${uri}`
      : $window.location.origin;
  } catch (e) {}

  return uri || null;
}
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:3000', // Your API domain
  
  providers: {
    oauth2: {
      name: null,
      url: 'https://dev-vag43xpi8t3mahz5.jp.auth0.com/oauth/token',
      clientId: "3ndMfu74Q739Fs8n71tEpf900rh4TlgX",
      redirectUri: "https://kubernetes.docker.internal:8080",
      authorizationEndpoint: "https://dev-vag43xpi8t3mahz5.jp.auth0.com/authorize",
      defaultUrlParams: ['response_type', 'client_id', 'redirect_uri', 'grant_type'],
      requiredUrlParams: null,
      optionalUrlParams: null,
      scope: 'openid email profile',
      scopePrefix: null,
      scopeDelimiter: null,
      state: null,
      oauthType: '2.0',
      popupOptions: null,
      responseType: 'code',
      grantType: 'authorization_code'
      // responseParams: {
      //   code: 'code',
      //   clientId: 'clientId',
      //   redirectUri: 'redirectUri',
      // },
    },
  }
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
