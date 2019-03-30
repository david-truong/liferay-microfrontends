'use strict';

var gulp = require('gulp');
var liferayThemeTasks = require('liferay-theme-tasks');

const runSequence = require('run-sequence').use(gulp);

liferayThemeTasks.registerTasks({
    gulp: gulp,
    hookFn: function(gulp) {

        gulp.task('build:css', function (cb) {
            runSequence(
                'build:clean',
                'build:base',
                'build:src',
                'build:hook',
                'build:rename-css-dir',
                'build:compile-css',
                'build:fix-url-functions',
                'build:move-compiled-css',
                'build:remove-old-css-dir',
                'build:fix-at-directives',
                'build:r2',
                cb
            );
        });
    },
});

