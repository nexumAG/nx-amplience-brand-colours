interface BrandColor {
  name: string;
  color: string;
}

interface BrandColors {
  name: string;
  perRow: number;
  compact: boolean;
  colors: BrandColor[];
}

export { BrandColor, BrandColors };
