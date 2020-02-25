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
  colors: BrandColors;
  selected: BrandColor;

  constructor() {
  }

  async initialize() {
    const sdk = await init<string, BrandColorParameters>();
    sdk.frame.startAutoResizer();

    const client = new ContentClient({
      account: (sdk.params.installation as BrandColorParameters).account,
      stagingEnvironment: sdk.stagingEnvironment
    });

    this.activeColor = await sdk.field.getValue();

    this.params = sdk.params.instance as BrandColorParameters;
    this.colors = (await client.getContentItem(this.params.contentID) as any).body as BrandColors;
    this.sdk = sdk;

    this.selected = this.findExistingColor(this.activeColor);
  }

  selectColor(color: BrandColor) {
    this.activeColor = color == null ? null : color.color;
    this.sdk.field.setValue(this.activeColor);
    this.selected = color;
  }

  findExistingColor(color: string) {
    let bColor = this.colors.colors.find(c => c.color === color);
    if (bColor == null && color != null) {
      bColor = { color, name: 'Missing Colour'};
    }
    return bColor;
  }

}
