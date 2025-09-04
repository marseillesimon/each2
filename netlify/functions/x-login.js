const fetch = require('node-fetch');

// Fill in with your X.com (Twitter) dev credentials
const CLIENT_ID = process.env.X_CLIENT_ID;
const CLIENT_SECRET = process.env.X_CLIENT_SECRET;
const REDIRECT_URI = process.env.URL + '/.netlify/functions/x-login';

exports.handler = async function(event) {
  const urlParams = new URLSearchParams(event.queryStringParameters);
  const code = urlParams.get('code');

  if (!code) {
    const authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`;
    return {
      statusCode: 302,
      headers: {
        Location: authUrl,
      },
    };
  }

  const tokenRes = await fetch('https://api.twitter.com/2/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code: code,
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code_verifier: 'challenge',
    }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.access_token) {
    return {
      statusCode: 302,
      headers: {
        Location: '/?login=success',
      },
    };
  } else {
    return {
      statusCode: 401,
      body: "Twitter/X.com login failed.",
    };
  }
};