var app = angular.module('demo', []).controller('nombremascota', function($scope){
$scope.name = 'mascotas';
});

var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "Fito";
    $scope.fullName = function() {
        return $scope.firstName ;
    };
});

