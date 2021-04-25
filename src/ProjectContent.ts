export type GalleryItem = { vimeo: string };

export interface ProjectContent {
  title: string;
  link?: {
    text: string;
    url: string;
  };
  gallery?: GalleryItem[];
  description: string;
}
