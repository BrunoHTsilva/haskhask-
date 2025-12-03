export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export interface ScrollSectionProps {
  data: SectionData;
  isReversed: boolean;
  index: number;
  onVisible: (id: string) => void;
}
