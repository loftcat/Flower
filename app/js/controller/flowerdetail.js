/**
 * Created by hebin on 2015/11/25.
 */

var app =angular.module('flowerdetail', ['ui.bootstrap']);

app.controller('detailController', function ($scope,$location,$http,$log) {
    $http.get("/api/flowerdetail/id="+$location.search().id)
        .success(function(response) {
            $scope.flower=response;
            $scope.infos=getAllInfos(response.basic_info);
            console.dir(getAllInfos(response.basic_info));
        });
    $scope.searching= function () {
        window.location.href="http://localhost:3000/searchlist#?info="+$scope.info;
    }
});

var getAllInfos =function(obj ) {
    var infos=[];
    // 开始遍历
    for ( var p in obj ){ // 方法
        if ( typeof ( obj [ p ]) != " function " ){
            infos.push(obj [ p ]);
        }
    }
    return infos;
}
