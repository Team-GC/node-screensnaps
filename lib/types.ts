export interface Configuration {
  baseUrl: string;
  apiVersion?: string;
}

export interface AuthParams {
  userId: string;
  apiKey: string;
  config?: Configuration;
}
export interface SnapParams {
  // The URL of the page you want screenshot
  url?: string;

  // The HTML if you would rather have HTML parsed to an image than URL
  html?: string;

  height?: number;
  width?: number;
  pageTarget?: string;
  fullPage?: number;
  deviceScaleFactor?: number;
  apiKey?: string;
}

export interface SnapResponse {
  status: string;
  image_url: string;
}

export interface SnapsParams {
  offset?: number;
  limit?: number;
}

export interface SnapsResponse {
  status: string;
  items: Screenshot[];
}

export interface Screenshot {
  id: string;
  mode: string;
  image_url: string;
}

export interface SnapStatusResponse {
  status: string;
}
