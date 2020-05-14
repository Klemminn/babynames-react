import connector from './connector'

class NamesService {
  static async getNames (params: {
    type: string,
    code: string,
    isMale: string,
    startsWith?: string
  }) {
    const { data } = await connector.get('/names/', { params })
    return data
  }

  static async getNameCount (params: {
    code: string, isSender: number
  }) {
    const { data } = await connector.get('/nameCount/', { params })
    return data
  }

  static async getUnfinished (code: string) {
    const { data } = await connector.get(`/unfinished/${code}`)
    return data
  }

  static async getResults (code: string) {
    const { data } = await connector.get(`/results/${code}`)
    return data
  }
}

export default NamesService
