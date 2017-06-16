import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favourite',
    templateUrl: 'app/favourite.template.html',
    styles:[`
        .glyphicon-star {
            color: orange;
        }
    `]
})

export class FavouriteComponent {

    @Input('is-favourite') isFavourite = false;

    @Output('favouriteChange') change = new EventEmitter(); // Event emitter is a class we use to publish events
    onClick() {

        this.isFavourite = !this.isFavourite;
        // Below code snippet publishes a change event 
        this.change.emit({ newValue : this.isFavourite });
    }
}