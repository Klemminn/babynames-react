type EnvParams = {
  api: string
}

const production: EnvParams = {
  api: 'https://api.nafnaleit.com/v1'
}
const staging: EnvParams = {
  api: 'https://stagingapi.nafnaleit.com/v1'
}

const local: EnvParams = {
  // api: 'http://127.0.0.1:8000/v1'
  api: 'https://api.nafnaleit.com/v1'
}

let envParams: EnvParams

const env = process.env.REACT_APP_ENV || 'local'

if (env === 'production') {
  envParams = production
} else if (env === 'staging') {
  envParams = staging
} else {
  envParams = local
}

export default envParams
