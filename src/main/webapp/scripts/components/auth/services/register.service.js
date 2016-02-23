'use strict';

angular.module('testingApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


