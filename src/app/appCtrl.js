APP.angular.controller('appCtrl', 
    ['$rootScope', '$scope','hello', appCtrl]);

function appCtrl($rootScope, $scope, hello){

    $scope.login = function () {
        hello('google').login(
            {
                scope:"email",
                response_type:"code"
            }
        ).then(function(){
            alert("Connected");
        },function (e) {
            alert('Signin error: ' + e.error.message);
        });
    };
};