interface BrandColor {
  name: string;
  color: string;
}

interface BrandColors {
  name: string;
  perRow?: number;
  compact?: boolean;
  colors: BrandColor[];

  failure?: boolean; // Indicates if we failed to load the brand colours content item.
}

export { BrandColor, BrandColors };
