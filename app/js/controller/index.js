/**
 * Created by hebin on 2015/12/2.
 */

var app =angular.module('index', ['ui.bootstrap']);

app.controller('indexController', function ($scope,$location,$http,$uibModal) {

    $scope.searching= function () {
        console.log($scope.info);
        $http.get("/api/flowerdetail/name=" + $scope.info)
            .success(function (response) {
                if(response!=null){
                    window.location.href="http://localhost:3000/flower_detail#?id="+response._id;
                }else{
                    $scope.open($scope.lg);
                }
            });
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
            $log.info('Modal dismissed at: ' + new Date());
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