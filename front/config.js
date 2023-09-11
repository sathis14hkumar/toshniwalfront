const config = {
  development: {
    baseUrl: '',
    api: {
      baseUrl: '',
    },
  },
  staging: {
    baseUrl: '',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
  production: {
    baseUrl: '',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
};

let configBasedOnEnv = {};

const env = process.env.NEXT_PUBLIC_ENV_VARIABLE;

configBasedOnEnv = config[env] ? config[env] : config.development;

export default configBasedOnEnv;
