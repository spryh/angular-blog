import {Component} from '@angular/core'

@Component ({
    selector: 'app-entry', // kabobcase is html specfication
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {

title: string ='My First Photo'
photo: string ='http://placehold.it/800x500?text=Angular Basics'
description: string = 'A decription of my first photo'

}