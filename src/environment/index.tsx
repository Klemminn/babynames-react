type envParams = {
  api: string
}

const production = {
  api: 'http://api.nafnaleit.com/v1'
}
const staging = {
  api: 'https://stagingapi.nafnaleit.com/v1'
}

const local = {
  // api: 'http://api.nafnaleit.com/v1'
  api: 'http://127.0.0.1:8000/v1'
}

let envParams: envParams

const env = String(process.env)

if (env === 'production') {
  envParams = production
} else if (env === 'staging') {
  envParams = staging
} else {
  envParams = local
}

export default envParams
