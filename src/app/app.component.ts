import { Component, OnInit } from '@angular/core';
import { BrandColorService } from './services/brand-color.service';
import { BrandColors, BrandColor } from './model/brand-colors';

@Component({
  selector: 'amp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;
  colors: BrandColors = { name: '', compact: false, perRow: 0, colors: [] };
  selectedColor: BrandColor;

  constructor(private colorSource: BrandColorService) {
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
