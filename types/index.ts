export type Attraction = {
  name: string;
  location: string;
  description: string;
  distance: string;
  operationHours: string;
  images: string[];
};

export type AttractionCategory = {
  category: string;
  items: Attraction[];
};

export type Locale = "en" | "ms";