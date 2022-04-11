import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { applyPolyfills, defineCustomElements } from '@aonunited/web-components/loader';

import { AppComponent } from './app.component';
import { UuiFormDirective } from './uui-utils/uui-form-accessor';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

@NgModule({
  declarations: [AppComponent, UuiFormDirective],
  imports: [BrowserModule, FormsModule],
  exports: [UuiFormDirective],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
