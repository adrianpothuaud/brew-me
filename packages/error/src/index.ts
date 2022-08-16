export class ApplicationError extends Error {
  statusCode: number
  errorCode: string
  errorDetails: string

  constructor(statusCode: number, errorCode: string, errorDetails: string) {
    super(errorDetails)
    Object.setPrototypeOf(this, ApplicationError.prototype)
    this.errorCode = errorCode
    this.statusCode = statusCode
    this.errorDetails = errorDetails
  }
}
