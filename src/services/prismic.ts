import * as Prismic from '@prismicio/client';

import { Client } from '@prismicio/client';

function getPrismicClient(): Client {
  const prismic = Prismic.createClient(process.env.PRISMIC_API_ENDPOINT);

  return prismic;
}

export default getPrismicClient;
