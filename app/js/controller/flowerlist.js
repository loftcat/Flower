/**
 * Created by hebin on 2015/11/25.
 */

var app =angular.module('flowerlist', ['ui.bootstrap']);
app.controller('TabsDemoCtrl', function ($scope,$http,$log) {
    $scope.tabs = [
        { title:'多肉植物', content:'Dynamic content 1' },
        { title:'观花植物', content:'Dynamic content 2' },
        { title:'观叶植物', content:'Dynamic content 1' },
        { title:'草本植物', content:'Dynamic content 2' },
        { title:'木本植物', content:'Dynamic content 1' },
        { title:'水生植物', content:'Dynamic content 2' },
        { title:'室内植物', content:'Dynamic content 2' },
        { title:'水培植物', content:'Dynamic content 2' },
        { title:'食肉植物', content:'Dynamic content 2' }
    ];

    $scope.getFlowers= function (type) {
        $scope.thetype= type;
        $http.get("/api/flowerlist/count/type="+type)
            .success(function(response) {
                $scope.totalItems = response;
                $scope.currentPage = 1;
                $scope.itemsPerPage=20;
                $scope.maxSize = 10;
                $http.get("/api/flowerlist/type="+type+"/"+($scope.currentPage-1)+"/"+$scope.itemsPerPage)
                    .success(function(response) {
                        //$scope=rows=[]
                        //
                        //var length = response.length;
                        //var _row=length/4;
                        //
                        console.log("length:"+length);
                        $scope.flowers=response;



                });
            });
    }
    $scope.pageChanged = function() {
        $log.log($scope.currentPage);
        $http.get("/api/flowerlist/type="+$scope.thetype+"/"+($scope.currentPage-1)+"/"+$scope.itemsPerPage)
            .success(function(response) {
                $scope.flowers=response;
            });
    };
});


app.controller('grid', function ($scope, $window) {
    $scope.pics = [
        { url:'http://7xoflr.com1.z0.glb.clouddn.com/1448244974093.jpg', content:'Dynamic content 1' },
        { url:'http://7xoflr.com1.z0.glb.clouddn.com/1448244974093.jpg', content:'Dynamic content 1' }
    ];
});
