function start() {
    gapi.client.init({
        'apiKey': 'YOUR_API_KEY',
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
        'scope': 'profile',
    }).then(function() {
        return gapi.client.people.people.get({
            'resourceName': 'people/me',
            'requestMask.includeField': 'person.names'
        });
    }).then(function(response) {
        console.log(response.result);
    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
    });
};
gapi.load('client', start);