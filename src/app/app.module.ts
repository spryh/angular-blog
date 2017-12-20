import { BrowserModule } from '@angular/platform-browser' // check
import { NgModule } from '@angular/core' // check
import { AppComponent } from './app.component' // check
// import { EntryListComponent } from './entries/entry-list/entry-list.component' but let's use a barrel by adding entries/index.ts
import { EntryListComponent, EntryComponent } from './entries'

/* Decorator post processing - maps components in the build
   Declarations registers the component, avoids "custom undefined HTML"
   BrowserModule makes the app available in the browser.
   Bootstrap starts AppComponent at launch
*/

// Always put child components before parents in declarations!

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

} // check
