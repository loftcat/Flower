/**
 * Created by loftcat on 2015/11/22.
 */

var app =angular.module('login', ['ui.bootstrap']);
app.controller('submitLogin', function ($scope, $http) {
    $scope.login = function () {
        $http.get("/api/login/name=" + $scope.name + "/" + $scope.password)
            .success(function (response) {
                if (response)
                    window.location.href = "http://114.55.29.207:3000/flowerlist";
            });
    }
});