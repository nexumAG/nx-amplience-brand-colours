import { Params } from 'dc-extensions-sdk';

interface BrandColorParameters extends Params {
  title?: string;
  contentID: string;
  account?: string;
  useNames?: boolean;
  groups?: string[];
}

export { BrandColorParameters };
