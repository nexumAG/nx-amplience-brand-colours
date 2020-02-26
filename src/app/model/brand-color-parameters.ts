import { Params } from 'dc-extensions-sdk';

interface BrandColorParameters extends Params {
  title: string;
  account: string;
  contentID: string;
  compact: boolean;
}

export { BrandColorParameters };
