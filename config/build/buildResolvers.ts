import path from 'path';
import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@app': path.resolve(options.paths.src, 'app'),
      '@entities': path.resolve(options.paths.src, 'entities'),
      '@features': path.resolve(options.paths.src, 'features'),
      '@pages': path.resolve(options.paths.src, 'pages'),
      '@widgets': path.resolve(options.paths.src, 'widgets'),
      '@shared': path.resolve(options.paths.src, 'shared'),
    },
  };
};
