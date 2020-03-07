import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component'; //and you omit the .ts, you don't add .ts to your import, it's just server.component, so the
//file name without the extension, the extension is added by webpack which bundles our project automatically.
import {FormsModule} from '@angular/forms';

import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [ // let us to add other modules
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
