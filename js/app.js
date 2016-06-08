angular.module('myApp',['ui.router'] )

    .config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvide){
        $urlRouterProvider.otherwise('/');
        $stateProvide
            .state('home', {
            url:'/',
            templateUrl: 'templates/home.html',
            controller: function($scope){
                $scope.title="Home Page";
            }
        })
         .state('about', {
            url:'/about',
            templateUrl: 'templates/about.html'
        })
        .state('login', {
            url:'/login',
            templateUrl: 'templates/login.html'
        })
        .state('signup', {
            url:'/signup',
            templateUrl: 'templates/signup.html'
        })
       
        .state('contactus', {
            url:'/contact',
            templateUrl: 'templates/contactus.html'
        })
        .state('cards', {
            url:'/cards',
            templateUrl: 'templates/cards.html'
        })
        .state('contactslist', {
            url:'/contactslist',
            templateUrl: 'templates/contactslist.html'
        })
        
    }])
    
//    
//    {
//            
//            $stateProvider.state("aboutus"{
//                url:"/aboutus",
//                controller:"aboutUsController as aboutus",
//                templateUrl:  "templates/aboutus.html"
//            })
//            $stateProvider.state("contactus"{
//                url:"/contactus",
//                controller:"contactusController as contactus",
//                templateUrl:  "templates/contactus.html"
//            })
//            $stateProvider.state("cards"{
//                url:"/cards",
//                controller:"cardsController as cards",
//                templateUrl:  "templates/cards.html"
//            })
//            $stateProvider.state("contactslist"{
//                url:"/contactslist",
//                controller:"contactslistController as contactslist",
//                templateUrl:  "templates/contactslist.html"
//            })
//    })
//    .controller("homeController", function homeCtrl(){
//        var home = this;
//        home.message="Home";
//    })
//    .controller("aboutUsController", function aboutUsCtrl(){
//        var aboutus = this;
//        aboutus.message="AboutUs";
//    })
//    .controller("contactusController", function contactUsCtrl(){
//        var contactus = this;
//        contactus.message="ContactUs";
//    })
//    .controller("cardsController", function cardsCtrl(){
//        var cards = this;
//        cards.message="Cards";
//    })
//    .controller("contactslistController", function contactslistCtrl(){
//        var home = this;
//        contactslist.message="Contactslist";
//    })