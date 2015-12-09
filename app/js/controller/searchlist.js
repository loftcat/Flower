/**
 * Created by hebin on 2015/11/25.
 */

var app =angular.module('searchlist', ['ui.bootstrap']);
app.controller('TabsDemoCtrl', function ($scope,$http,$location,$log) {
    $scope.storage_url="http://7xoflr.com1.z0.glb.clouddn.com/";
    $scope.linktodetail="http://localhost:3000/flower_detail#?id=";
    $scope.info =$location.search().info;


    $scope.getFlowers= function (name) {
        $http.get("/api/searchlist/count/name="+name)
            .success(function(response) {
                if(response>0){
                    $scope.totalItems = response;
                    $scope.currentPage = 1;
                    $scope.itemsPerPage=20;
                    $scope.maxSize = 10;
                    $http.get("/api/searchlist/name="+name+"/"+($scope.currentPage-1)+"/"+$scope.itemsPerPage)
                        .success(function(response) {

                            //$scope=rows=[]
                            //
                            //var length = response.length;
                            //var _row=length/4;
                            //
                            console.log("length:"+length);
                            $scope.flowers=response;
                        });
                }else{

                }
            });
    }
    $scope.pageChanged = function() {
        $log.log($scope.currentPage);
        $http.get("/api/searchlist/name="+$scope.info+"/"+($scope.currentPage-1)+"/"+$scope.itemsPerPage)
            .success(function(response) {
                $scope.flowers=response;
            });
    };
    if($scope.info!=null){
        $scope.getFlowers($scope.info);
    }
    $scope.searching= function () {
        $scope.getFlowers($scope.info);
    }
});

