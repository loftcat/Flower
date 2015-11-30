/**
 * Created by hebin on 2015/11/25.
 */

var app =angular.module('flowerdetail', ['ui.bootstrap']);

app.controller('detailController', function ($scope,$location,$http,$log) {
    $http.get("/api/flowerdetail/id="+$location.search().id)
        .success(function(response) {
            $scope.flower=response;
        });
});
