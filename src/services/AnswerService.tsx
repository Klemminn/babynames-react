import connector from './connector'

class AnswerService {
  static async createNewGroup () {
    const { data } = await connector.get('/newGroup/')
    return data
  }

  static async newAnswer (body: {
    code: string,
    isApproved: boolean,
    name: string
  }) {
    const { data } = await connector.post('/newAnswer/', body)
    return data
  }

  static async finishAnswer (body: {
    code: string,
    isApproved: boolean,
    name: string
  }) {
    const { data } = await connector.post('/finishAnswer/', body)
    return data
  }

  static async registerEmail (body: {
    code: string,
    email: string
  }) {
    const { data } = await connector.post('/registerEmail/', body)
    return data
  }
}

export default AnswerService
