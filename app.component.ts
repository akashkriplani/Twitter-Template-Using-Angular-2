import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular 2 from AK</h1>
        <courses></courses>
        <authors></authors>
        <favourite [is-favourite]="post.isFavourite" (favouriteChange)="onFavouriteChange($event)"></favourite>
        <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
        <voter 
        [voteCount]="post.voteCount" [myVote]="post.myVote" 
        (vote)="onVote($event)">
        </voter>
        `,
    directives:[CoursesComponent, AuthorsComponent, FavouriteComponent, LikeComponent, VoterComponent]
})
export class AppComponent { 

    post = {
        title: "Title",
        isFavourite: true,
        voteCount: 10,
        myVote: 0
    }

    tweet = {
        totalLikes: 10,
        iLike: false
    }

    onFavouriteChange($event){
        
        console.log($event);
    }

    onVote($event){
        console.log($event);
    }
    
}