var treeSourceFiles = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-loading-bar/build/loading-bar.min.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/ngstorage/ngStorage.min.js',
    'assets/scripts/dropzone.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'app/app.module.js',
    "treasurer/model/treasurer.factory.js",
    "treasurer/model/treasurer.directive.js",
    'app/app.config.js',
    'app/app.interceptor.js',
    'guest/model/guest.factory.js',
    'guest/guest.routes.js',
    "guest/controller/guest.welcome.controller.js",
    "guest/controller/guest.about.controller.js",
    "guest/controller/guest.contact.controller.js",
    "guest/controller/guest.postHolders.controller.js",
    "guest/controller/guest.testimonials.controller.js",
    "guest/controller/guest.events.controller.js",
    "guest/controller/guest.eventsDetails.controller.js",
    "admin/admin.routes.js",
    "admin/model/admin.factory.js",
    "admin/controller/admin.welcome.controller.js",
    "admin/controller/admin.login.controller.js",
    "president/president.routes.js",
    "president/model/president.factory.js",
    "president/controller/president.welcome.controller.js",
    "president/controller/president.login.controller.js",
    "president/controller/president.editAbout.controller.js",
    "president/controller/president.editTestimonial.controller.js",
    "president/controller/president.listTestimonials.controller.js",
    "president/controller/president.addTestimonial.controller.js",
    "president/controller/president.compareAccounts.controller.js",
    "president/controller/president.addUpcomingEvent.controller.js",
    "president/controller/president.listUpcomingEvents.controller.js",
    "president/controller/president.editUpcomingEvent.controller.js",
    "treasurer/treasurer.route.js",
    "treasurer/controller/treasurer.login.controller.js",
    "treasurer/controller/treasurer.welcome.controller.js",
    "treasurer/controller/treasurer.addEvent.controller.js",
    "treasurer/controller/treasurer.addEventPhoto.controller.js",
    "treasurer/controller/treasurer.eventList.controller.js",
    "treasurer/controller/treasurer.editEvent.controller.js",
    "treasurer/controller/treasurer.editEventPhotos.controller.js",
    "treasurer/controller/treasurer.addPostholder.controller.js",
    "treasurer/controller/treasurer.editPostholder.controller.js",
    "treasurer/controller/treasurer.listPostholders.controller.js",
    "treasurer/controller/treasurer.addMessage.controller.js",
    "treasurer/controller/treasurer.addExpense.controller.js",
    "treasurer/controller/treasurer.addIncome.controller.js",
    "treasurer/controller/treasurer.viewAccount.controller.js",
    "treasurer/controller/treasurer.addIncome.controller.js",
    "treasurer/controller/treasurer.viewAccount.controller.js",
    "treasurer/controller/treasurer.manageAccounts.controller.js",
    "treasurer/controller/treasurer.listContactQueries.controller.js",


];

var treeCSSFiles = [
    "bower_components/bootstrap/dist/css/bootstrap.min.css",
    "bower_components/components-font-awesome/css/font-awesome.min.css",
    "bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
    "bower_components/angular-loading-bar/build/loading-bar.min.css",
    "style/style.css",
    "style/w3.css",
    "assets/scripts/dropzone.css"
];

// Gruntfile.js
module.exports = function (grunt) {
   
   	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	concat: {
            tree: {
                src: treeSourceFiles,
                dest: 'release/js/app.min.js'
            }
        },
        uglify: {
            tree: {
                files: {
                    'release/js/app.min.js': ['release/js/app.min.js']
                }
            }
        },
        cssmin: {
            tree: {
                files:{
                    'release/css/app.min.css':treeCSSFiles
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.registerTask('default', ['concat:tree','uglify:tree','cssmin:tree']);    
}