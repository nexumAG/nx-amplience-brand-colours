import { Params } from 'dc-extensions-sdk';

interface BrandColorParameters extends Params {
  title?: string;
  contentID: string;
  useNames?: boolean;
  groups?: string[];
}

export { BrandColorParameters };
