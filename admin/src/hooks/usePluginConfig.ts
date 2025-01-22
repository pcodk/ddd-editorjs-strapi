import { useEffect } from 'react';
// import { useNotification } from "@strapi/helper-plugin";
import { useNotification } from '@strapi/strapi/admin';
import { useDispatch, useSelector } from 'react-redux';

import { RESOLVE_CONFIG } from '../constants';
import { PLUGIN_ID } from '../pluginId';

import { useFetchClient } from '@strapi/strapi/admin';

export const usePluginConfig = () => {
  const dispatch = useDispatch();
  const fetchClient = useFetchClient();

  const { toggleNotification } = useNotification();

  const { config, isLoading } = useSelector((state: any) => state[`${PLUGIN_ID}_config`]);

  useEffect(() => {
    if (!isLoading && !!config) {
      return;
    }

    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const endpoint = `/${PLUGIN_ID}/config`;
        const { data } = await fetchClient.get(endpoint, {
          signal: abortController.signal,
        });
        return data ?? {};
      } catch (err) {
        if (!abortController.signal.aborted) {
          toggleNotification({
            type: 'danger',
            message: 'notification.error', //review
          });
          return err;
        }
      }
    };

    fetchData().then((data) => dispatch({ type: RESOLVE_CONFIG, data }));

    return () => abortController.abort();
  }, [dispatch, fetchClient, toggleNotification]);

  return { config, isLoading };
};
