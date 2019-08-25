(function() {

    'use strict';

    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', [
            '$scope', 
            //this is the constructor function for controller component 
            function($scope) {
                
                //$scope is the data model that connects
                //DOM element on which ng-controller
                //directive has been invoked with controller instance
                //so basically in controllers $scope properties can be 
                //manipulated and that refreshes the view on front-end
                //using DIGEST CYCLE
                $scope.name = 'Ryan';    
            }
        ]);

})();