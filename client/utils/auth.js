module.exports = {
    login: function(username, password, callback) {

        if (localStorage.token) {
            if (callback) {
                callback(true)
            }
            return
        }
        this.getToken(username, password, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (callback) {
                    callback(true)
                }
            } else {
                if (callback) {
                    callback(false)
                }
            }
        })
    },

    logout: function(callback) {
        delete localStorage.token
        this.onChange(false)
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    getToken: function(username, password, callback) {
        return fetch(
            '/obtain-auth-token/',
            {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    username: username,
                    password: password
                })
            }
        ).then(response => response.json())
        .then(json => { callback({authenticated: true, token: json.token}) })
        .catch((error) => { console.error(error); });
    },
}
