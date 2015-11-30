/**
 * Created by hebin on 2015/11/26.
 */

var app =angular.module('flowerlist', ['ui.bootstrap']);

app.controller('PaginationDemoCtrl', function ($scope, $log) {

    $scope.maxSize = 10;//显示多少页

    $scope.totalItems =175 ;

    $scope.itemsPerPage= 5;

    $scope.currentPage = 1;//当前页

    $scope.pageChanged = function() {
        console.dir($scope);
    };
});