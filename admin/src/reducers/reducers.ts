import { PLUGIN_ID } from "../pluginId";

import { configReducer } from "./configReducer";

export const reducers = {
  [`${PLUGIN_ID}_config`]: configReducer,
};
