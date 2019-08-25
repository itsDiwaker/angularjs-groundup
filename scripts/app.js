angular
    .module('ngClassifieds', [
        'ngMaterial'
    ])
    .config([
        '$mdThemingProvider', 
        function($mdThemingProvider) {
            
            //configure ngMaterial library options
            //configure 3rd oparty module configuration
            $mdThemingProvider
                .theme('default')
                .primaryPalette('teal')
                .accentPalette('orange');

        }
    ])
    .run(function() {
        console.log('App initialization complete!');
    });