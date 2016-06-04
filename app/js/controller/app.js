/**
 * Created by hebin on 2015/11/13.
 */
var app = angular.module('app', []);

app.controller('list', function ($scope, $http) {
    $http.get("http://114.55.29.207:3000/api/flowerlist")
        .success(function (response) {
            $scope.flowers = response;
        });
});