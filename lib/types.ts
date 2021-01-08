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
  url?: string;
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
  metrics?: ScreenshotMetric;
}

export interface ScreenshotMetric {
  launch: number;
  browser: number;
  page: number;
  screenshot: number;
  target: number;
  upload: number;
  total: number;
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
