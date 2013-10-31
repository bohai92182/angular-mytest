var lessonApp = angular.module('lessonApp', [
    'ngRoute',
    'lessonControllers'
]);

lessonApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when(
            '/lesson',
            {
                templateUrl: 'partials/lesson-list.html',
                controller: 'lessonListCtrl'
            }).otherwise(
            {
                redirectTo: '/lesson'
            });
    }
]);
