import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
})
export class IconsModule {
  constructor(private icons: MatIconRegistry, private sanitizer: DomSanitizer) {
    icons.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/ic-asset-delete.svg'));
  }
}
