var app = angular.module('demo', []).controller('nombremascota', function($scope){
    $scope.name = 'mascotas';
    });
    
var mapp = angular.module('myApp', []);
mapp.controller('personCtrl', function($scope) {
    $scope.firstName = "Fito";
    $scope.fullName = function() {
        return $scope.firstName ;
    };
});