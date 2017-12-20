import {Component} from '@angular/core'

@Component ({
    selector: 'app-entry', // kabobcase is html specfication
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {

title: 'My First Photo'
photo = 'http://placehold.it/800x500?text=Angular Basics'
description: 'A decription of my first photo'
comments = [
    {name: 'John', text: 'A comment'},
    {name: 'Jim', text: 'A comment'},
    {name: 'Jen', text: 'A comment'}    
]


}