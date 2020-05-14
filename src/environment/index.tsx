type envParams = {
  api: string
}

const production: envParams = {
  api: 'http://api.nafnaleit.com/v1'
}
const staging: envParams = {
  api: 'https://stagingapi.nafnaleit.com/v1'
}

const local: envParams = {
  // api: 'http://api.nafnaleit.com/v1'
  api: 'http://127.0.0.1:8000/v1'
}

let envParams: envParams

const env = process.env.REACT_APP_ENV || 'local'

if (env === 'production') {
  envParams = production
} else if (env === 'staging') {
  envParams = staging
} else {
  envParams = local
}

export default envParams
