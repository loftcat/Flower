/**
 * Created by hebin on 2015/11/25.
 */

var app =angular.module('flowerlist', ['ui.bootstrap']);
app.controller('TabsDemoCtrl', function ($scope,$http,$location,$log) {
    $scope.storage_url="http://7xoflr.com1.z0.glb.clouddn.com/";
    $scope.linktodetail="http://loftcat.cn:3000/flower_detail#?id=";
    var info =$location.search().info;
    if(info!=null){
        $http.get("/api/searchlist/name="+info)
            .success(function(response) {
                console.log("length:"+length);
                $scope.flowers=response;
            });
    }
});

