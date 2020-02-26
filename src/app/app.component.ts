import { Component, OnInit } from '@angular/core';
import { BrandColorService } from './services/brand-color.service';
import { BrandColors, BrandColor } from './model/brand-colors';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'amp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;
  colors: BrandColors = { name: '', colors: [] };
  selectedColor: BrandColor;

  constructor(private colorSource: BrandColorService, private icons: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    icons.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/ic-asset-delete.svg'));
  }

  async ngOnInit() {
    await this.colorSource.initialize();
    this.colors = this.colorSource.colors;
    this.selectedColor = this.colorSource.selected;
    this.title = this.colorSource.params.title;
  }

  selectColor(color: BrandColor) {
    this.colorSource.selectColor(color);
    this.selectedColor = this.colorSource.selected;
  }
}
