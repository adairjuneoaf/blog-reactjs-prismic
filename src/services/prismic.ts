import * as Prismic from '@prismicio/client';

import { Client } from '@prismicio/client';

function getPrismicClient(): Client {
  const prismic = Prismic.createClient(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}

export default getPrismicClient;
