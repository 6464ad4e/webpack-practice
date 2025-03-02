import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv } from './config/build/types/config';


export default (env: BuildEnv) => {
  const { port = 3000, mode = 'production' } = env;
  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      build: path.resolve(__dirname, 'build'),
      src: path.resolve(__dirname, 'src'),
    },
    isDev,
    port,
  });
};