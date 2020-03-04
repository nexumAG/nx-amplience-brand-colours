import { Injectable } from '@angular/core';
import { init, SDK } from 'dc-extensions-sdk';
import { ContentClient } from 'dc-delivery-sdk-js';
import { BrandColors, BrandColor } from '../model/brand-colors';
import { BrandColorParameters } from '../model/brand-color-parameters';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class BrandColorService {

  private sdk: SDK;
  activeColor: string;
  params: BrandColorParameters;
  colors: BrandColors = {
    name: 'Loading...',
    colors: []
  }
  selected: BrandColor;
  lastHeight: number;

  constructor() {
  }

  async initialize() {
    try {
      const sdk = await init<string, BrandColorParameters>();
      sdk.frame.startAutoResizer();

      const client = new ContentClient({
        account: 'dummy',
        stagingEnvironment: sdk.stagingEnvironment
      });

      this.activeColor = await sdk.field.getValue();
      this.selected = (this.activeColor == null) ? null : { name: this.activeColor, color: this.activeColor };

      this.params = sdk.params.instance as BrandColorParameters;
      this.colors = (await client.getContentItem(this.params.contentID) as any).body as BrandColors;
      this.sdk = sdk;

      this.selected = this.findExistingColor(this.activeColor);

      requestAnimationFrame(this.checkHeight.bind(this));
    } catch {
      this.colors = {
        failure: true,
        name: '(Failed to load colours!)',
        colors: []
      };
    }
  }

  private getColorKey(color: BrandColor): string {
    return this.params.useNames ? color.name : color.color;
  }

  selectColor(color: BrandColor) {
    this.activeColor = color == null ? null : this.getColorKey(color);
    this.sdk.field.setValue(this.activeColor);
    this.selected = color;
  }

  findExistingColor(color: string) {
    let bColor = this.colors.colors.find(c => this.getColorKey(c).toLowerCase() === color.toLowerCase());
    if (bColor == null && color != null) {
      bColor = { color, name: color };
    }
    return bColor;
  }

  checkHeight() {
    if (window.document.body.clientHeight !== this.lastHeight) {
      this.lastHeight = window.document.body.clientHeight;
      this.sdk.frame.setHeight(this.lastHeight);
    }
    requestAnimationFrame(this.checkHeight.bind(this));
  }

}
