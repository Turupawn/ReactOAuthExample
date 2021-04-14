import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import OAuth2Login from 'react-simple-oauth2-login';

const CLIENT_ID = "Tyo7Qqc2W-HtGIlIq3jYV_ett31HydEmJgfVQneSaGI";
const SECRET = "tlgWzL757mwEXkSbR4ZGTopxH3JsfHMNnsEvc641f6w";
const CALLBACK = "http://localhost:3000/oauth/callback";
const HOST = "https://test.todolegal.app/oauth/token/"

const onSuccess = response => {
  axios.post(HOST, {
    client_id: CLIENT_ID,
    client_secret: SECRET,
    redirect_uri: CALLBACK,
    code: response.code,
    grant_type: "authorization_code"
  })
  .then((response) => {
    console.log("Token: " + response.data.access_token);
  }, (error) => {
    console.log(error);
  });
}
const onFailure = response => console.error(response);

function App() {
  return (
    <div className="App">
      <OAuth2Login
        authorizationUrl="https://test.todolegal.app/oauth/authorize/"
        responseType="code"
        scope="login"
        clientId={CLIENT_ID}
        redirectUri={CALLBACK}
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="Inicia sesión"
        className="my-login-button-class"
        />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
