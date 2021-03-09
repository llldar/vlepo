import RelaySSR from 'react-relay-network-modern-ssr/node8/client';
import { SSRCache } from 'react-relay-network-modern-ssr/node8/server';
import {
  cacheMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
} from 'react-relay-network-modern/node8';
import { Environment, RecordSource, Store } from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);

let storeEnvironment: Environment | null = null;

export function createEnvironment(relayData: SSRCache): Environment {
  if (storeEnvironment) return storeEnvironment;

  storeEnvironment = new Environment({
    store,
    network: new RelayNetworkLayer([
      cacheMiddleware({
        size: 100,
        ttl: 60 * 1000,
      }),
      new RelaySSR(relayData).getMiddleware({
        lookup: false,
      }),
      urlMiddleware({
        url: () => {
          if (!process.env.NEXT_PUBLIC_RELAY_ENDPOINT) {
            throw new Error('please add NEXT_PUBLIC_RELAY_ENDPOINT in your .env file');
          }
          return process.env.NEXT_PUBLIC_RELAY_ENDPOINT;
        },
      }),
    ]),
  });

  return storeEnvironment;
}