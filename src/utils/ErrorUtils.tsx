import ToastUtils from './ToastUtils'

class ErrorUtils {
  static displayError (error: string) {
    ToastUtils.info(error)
  }

  static displayErrors (errors: string[]) {
    errors.forEach((error) => ErrorUtils.displayError(error))
  }
}

export default ErrorUtils
