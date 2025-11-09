import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/ubuntu/the-poop-build/tina/__generated__/.cache/1762708220203', url: 'http://localhost:4001/graphql', token: 'undefined', queries,  });
export default client;
  