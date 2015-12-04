/**
 * Created by hebin on 2015/12/2.
 */

var app =angular.module('index', ['ui.bootstrap']);

app.controller('indexController', function ($scope,$location,$http,$uibModal) {

    $scope.searching= function () {
        window.location.href="http://localhost:3000/searchlist#?info="+$scope.info;
    }
    $scope.lineToList= function () {
        window.location.href="http://localhost:3000/flowerlist";
    }
    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                dialogTitle: function () {
                    return $scope.dialogTitle;
                },
                dialogInfo: function () {
                    return $scope.dialogInfo;
                }
            }
        });

        modalInstance.result.then(function () {
        }, function () {
        });
    };


});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
    $scope.dialogTitle="提示";
    $scope.dialogInfo="暂未找到您想到花花，试试别的关键词哈~"
    $scope.selected = {
    };

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});