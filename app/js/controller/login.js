/**
 * Created by loftcat on 2015/11/22.
 */

var app =angular.module('login', ['ui.bootstrap']);
app.controller('submitLogin', function ($scope) {


    $scope.name="18806535352";
    $scope.password="123456";

    $scope.test= function () {
        return "登录"
    }

});