const storageService = (function(){
    //set token to local storage
    function _setTokenLS(token: string) {
        localStorage.setItem('token', token);
    }
    function _getTokenLS() {
        return localStorage.getItem('token');
    }
    //set token to session storage
    function _setTokenSS(token: string) {
        sessionStorage.setItem('token', token);
    }
    function _getTokenSS() {
        return sessionStorage.getItem('token');
    }
    function _getToken() {
        let session: any;
        let local: any;
        session = sessionStorage.getItem('token');
        if (!!session){
            return session;
        }
        local = localStorage.getItem('token');
        if (!!local){
            return local;
        }
        return null

    }
    function _clearToken() {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
    }
    return {
        setTokenLS : _setTokenLS,
        getTokenLS : _getTokenLS,
        setTokenSS : _setTokenSS,
        getTokenSS : _getTokenSS,
        getToken : _getToken,
        clearToken : _clearToken
    }
})();

export default storageService;

