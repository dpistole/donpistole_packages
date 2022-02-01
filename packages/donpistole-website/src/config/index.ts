import defaultConfig from './default';
import localConfig from './local';
import productionConfig from './production';

let useConfig: any;

switch (process.env.APP_ENV) {
  case 'production':
    useConfig = productionConfig;
    break;
  case 'local':
    useConfig = localConfig;
    break;
  default:
    useConfig = defaultConfig;
}

export const config = useConfig;
