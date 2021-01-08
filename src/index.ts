import axios from "axios";

import {
  Configuration,
  AuthParams,
  SnapParams,
  SnapResponse,
  SnapsParams,
  SnapsResponse,
  SnapStatusResponse,
} from "../lib/types";

const config = {
  baseUrl: "https://api.screensnaps.io/",
  apiVersion: "v1",
} as Configuration;

function buildUrl(method: string, config: Configuration) {
  return `${config.baseUrl}${config.apiVersion}${method}`;
}

export function screenshot(
  auth: AuthParams,
  params: SnapParams
): Promise<SnapResponse> {
  if (params.url && params.html) {
    return Promise.reject("You cannot pass both url and html.");
  }

  const url = buildUrl(`/screenshot`, auth.config ? auth.config : config);

  return axios
    .post(url, params, {
      params: { api_key: auth.apiKey },
      headers: {
        Authorization: auth.userId,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function screenshots(
  auth: AuthParams,
  params?: SnapsParams
): Promise<SnapsResponse> {
  const url = buildUrl(`/screenshots`, auth.config ? auth.config : config);

  return axios
    .get(url, {
      params: { ...params, api_key: auth.apiKey },
      headers: {
        Authorization: auth.userId,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function status(auth: AuthParams): Promise<SnapStatusResponse> {
  const url = buildUrl("/status", auth.config ? auth.config : config);

  return axios
    .get(url, {
      params: { api_key: auth.apiKey },
      headers: {
        Authorization: auth.userId,
      },
    })
    .then((response) => {
      return response.data;
    });
}
