import path from 'path';
import webpack, { RuleSetRule } from 'webpack';

import { buildSassLoader } from '../build/loaders/buildSassLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
  };

  // @ts-ignore
  config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules.push(buildSvgLoader());
  config.module?.rules?.push(buildSassLoader(true));

  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
