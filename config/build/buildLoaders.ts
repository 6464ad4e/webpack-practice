import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'removeAttrs',
                params: { attrs: '(fill|stroke)' },
              },
            ],
          },
        },
      },
    ],
  };

  const typeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  // const babelLoader: RuleSetRule = {
  //   test: /\.(?:js|ts|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       targets: 'defaults',
  //       presets: [['@babel/preset-env']],
  //       plugins: [
  //         [
  //           '18next-extract',
  //           {
  //             locales: ['en', 'ru'],
  //             keyAsDefaultValue: true,
  //           },
  //         ],
  //       ],
  //     },
  //   },
  // };

  return [
    fileLoader,
    svgLoader,
    // babelLoader,
    typeScriptLoader,
    cssLoader,
  ];
};
