angular.module('myApp',['ui.router'] )

    .config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvide){
        $urlRouterProvider.otherwise('/');
        $stateProvide
            .state('home', {
            url:'/',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
         .state('about', {
            url:'/about',
            templateUrl: 'templates/about.html',
            controller: 'aboutCtrl'
        })
        .state('login', {
            url:'/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        })
        .state('signup', {
            url:'/signup',
            templateUrl: 'templates/signup.html',
            controller: 'signupCtrl'
        })
       
        .state('contactus', {
            url:'/contact',
            templateUrl: 'templates/contactus.html',
            controller: 'contactusCtrl'
        })
        .state('cards', {
            url:'/cards',
            templateUrl: 'templates/cards.html',
            controller: 'cardsCtrl'
        })
        .state('contactslist', {
            url:'/contactslist',
            templateUrl: 'templates/contactslist.html',
            controller: 'contactlistCtrl'
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