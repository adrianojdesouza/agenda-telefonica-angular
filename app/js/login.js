(function(){

    var appLogin = angular.module('login', []);

    appLogin.controller('LoginController', ['$log', function($log){

        this.user = '';
        this.password = '';

        this.doLogin = function(){
            $log.log('fdaf');
        };
    }]);

})();