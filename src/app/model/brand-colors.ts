interface BrandColor {
  name: string;
  color: string;
}

interface BrandColors {
  name: string;
  colors: BrandColor[];
}

export { BrandColor, BrandColors };
