import { BrowserModule } from '@angular/platform-browser'; // check
import { NgModule } from '@angular/core'; // check
import { AppComponent } from './app.component'; // check

/* Decorator post processing - maps components in the build
   Declarations registers the component, avoids "custom undefined HTML"
   BrowserModule makes the app available in the browser.
   Bootstrap starts AppComponent at launch
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

} // check
