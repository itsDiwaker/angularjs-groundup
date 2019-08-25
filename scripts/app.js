angular
    .module('ngClassifieds', [
        'ngMaterial'
    ])
    .config([
        '$mdThemingProvider', 
        function($mdThemingProvider) {
            
            $mdThemingProvider
                .theme('default')
                .primaryPalette('teal')
                .accentPalette('orange');

        }
    ]);