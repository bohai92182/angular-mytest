//var lessonApp = angular.module('lessonApp', []).
//    config(['$routeProvider', function ($routeProvider) {
//        $routeProvider.when(
//            '/lesson',
//            {
//                templateUrl: 'partials/lesson-list.html',
//                controller: lessonListCtrl
//            });
//    }]);

var lessonControllers = angular.module('lessonControllers', []);

lessonControllers.controller('lessonListCtrl', ['$scope', '$http', function ($scope, $http) {

    var PASSPORT = '058AC5E92A7F9265D153225C31CCEBA0461F8E130072E027E66C2573EFC23BC61319F68AC7090636',
        api = new edu.command.Api(edu.config.isDebug(), PASSPORT),
        url = api.createFullUrl(
        {
            project: 'api',
            path: 'UserCourse',
            passport: PASSPORT
        });
    $http.jsonp(url + '&callback=JSON_CALLBACK', { method: 'jsonp' }).success(function (info) {
        for (var i = 0, len = info.Data[0].Discounts.length; i < len; i++) {
            info.Data[0].Discounts[i].img = '../app/img/phones/lg-axis.0.jpg';
        }
        console.info(info);
        $scope.lessons = info.Data[0].Discounts;
        $scope.orderProp = 'Name';
    }
    );
}]);