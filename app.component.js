System.register(['angular2/core', './courses.component', './authors.component', './favourite.component', './like.component', './voter.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favourite_component_1, like_component_1, voter_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favourite_component_1_1) {
                favourite_component_1 = favourite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        isFavourite: true,
                        voteCount: 10,
                        myVote: 0
                    };
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                }
                AppComponent.prototype.onFavouriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello Angular 2 from AK</h1>\n        <courses></courses>\n        <authors></authors>\n        <favourite [is-favourite]=\"post.isFavourite\" (favouriteChange)=\"onFavouriteChange($event)\"></favourite>\n        <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n        <voter \n        [voteCount]=\"post.voteCount\" [myVote]=\"post.myVote\" \n        (vote)=\"onVote($event)\">\n        </voter>\n        ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favourite_component_1.FavouriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map