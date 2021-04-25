export type VimeoItem = { vimeo: string }
export type ImageItem = { image: string; width: number; height: number };
export type GalleryItem = VimeoItem | ImageItem;

export function isVimeo(item: GalleryItem): item is VimeoItem {
  return !!(item as VimeoItem).vimeo;
}

export function isImage(item: GalleryItem): item is ImageItem {
  return !!(item as ImageItem).image;
}

export interface ProjectContent {
  title: string;
  link?: {
    text: string;
    url: string;
  };
  gallery?: GalleryItem[];
  description: string;
}
