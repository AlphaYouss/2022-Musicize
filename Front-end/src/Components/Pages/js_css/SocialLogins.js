import $ from 'jquery';
const { createHash } = require('crypto');

var YOUR_CLIENT_ID = '372379963544-2e7pihp67kljgpopgg11604v0fh4lu0e.apps.googleusercontent.com';
var YOUR_REDIRECT_URI = 'http://localhost:3000/google-sign-in';

var id;
var fullName;
var loginMethod;

document.addEventListener('DOMContentLoaded', function() {
  var fragmentString = window.location.hash.substring(1);

  // Parse query string to see if page request is coming from OAuth 2.0 server.
  var params = {};
  var regex = /([^&=]+)=([^&]*)/g, m;
  while (m = regex.exec(fragmentString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  if (Object.keys(params).length > 0) {
    localStorage.setItem('oauth2-test-params', JSON.stringify(params) );
    if (params['state'] && params['state'] == 'try_sample_request') {
      trySampleRequest();
    }
  }
  trySampleRequest();

  // If there's an access token, try an API request.
  // Otherwise, start OAuth 2.0 flow.
  function trySampleRequest() {
    var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
    if (params && params['access_token']) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET',
          'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&' +
          'access_token=' + params['access_token']);
      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const res = JSON.parse(xhr.response);
          console.log(res);

          if(!document.cookie)
          {
            var hashedID = createHash('sha256').update(res.id).digest('hex');
            var hashedName = createHash('sha256').update(res.name).digest('hex');
            var hashedLoginMethod = createHash('sha256').update("Google").digest('hex');

            CheckUser(hashedID, hashedName, hashedLoginMethod);           
          }
          else{
            console.log(document.cookie);

            var hashedID = createHash('sha256').update(res.id).digest('hex');
            var hashedName = createHash('sha256').update(res.name).digest('hex');
            var hashedLoginMethod = createHash('sha256').update("Google").digest('hex');

            CheckUser(hashedID, hashedName, hashedLoginMethod);

            if(window.location.pathname === "/google-sign-in")
            window.location.replace("http://localhost:3000");
          }
        } else if (xhr.readyState === 4 && xhr.status === 401) {
          // Token invalid, so prompt for user permission.
          oauth2SignIn();
        }
      };
      xhr.send(null);
    } else {
      oauth2SignIn();
    }
  }

  /*
   * Create form to request access token from Google's OAuth 2.0 server.
   */
  function oauth2SignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create element to open OAuth 2.0 endpoint in new window.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': YOUR_CLIENT_ID,
                  'redirect_uri': YOUR_REDIRECT_URI,
                  'scope': 'https://www.googleapis.com/auth/userinfo.profile',
                  'state': 'try_sample_request',
                  'include_granted_scopes': 'true',
                  'response_type': 'token'};

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

  async function CheckUser(hashedID, hashedName, hashedLoginMethod){
    $.ajax({
      type: 'GET',
      crossDomain: true,
      contentType: "application/json",
      url: 'http://localhost:7063/user/' + hashedID,
      headers: {
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Headers':'application/json',
      },
      complete: function (data) {
        // if(data.responseText.includes("404"))
        // {
        //   CreateUser(hashedID, hashedName, hashedLoginMethod);
        // }
        // else if (data.responseText.includes("200")){
        //   document.cookie = "id=" + hashedID +";";
        //   document.cookie = "fullName=" + hashedName + ";";
        //   document.cookie = "loginMethod=" + hashedLoginMethod + ";";

        //   var date = new Date();
        //   date.setTime(date.getTime()+(60*60*1000));
        //   document.cookie = "expires="+date.toGMTString();

        //   console.log(document.cookie);
        // }
      },
    });
  }

  async function CreateUser(hashedID, hashedName, hashedLoginMethod){
    console.log("HUJNIFGDHKFGDHKJFDGKHJFDKJFGDJKFGDJKFGDJKFG");
    var user = {
      "id": hashedID,
      "fullName":hashedName,
      "loginMethod": hashedLoginMethod
    };
  
    // $.ajax({
    //   type: 'POST',
    //   crossDomain: true,
    //   contentType: "application/json",
    //   url: 'http://localhost:7063/user',
    //   headers: {
    //     'Access-Control-Allow-Credentials' : true,
    //     'Access-Control-Allow-Origin':'*',
    //     'Access-Control-Allow-Methods':'GET',
    //     'Access-Control-Allow-Headers':'application/json',
    //   },
    //   data: JSON.stringify(user),
    //   complete: function (data) {
    //     console.log('Created user: ', data.response);
    //   },
    // });
  }
});