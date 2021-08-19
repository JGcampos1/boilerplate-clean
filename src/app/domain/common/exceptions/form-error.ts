export class FormError extends Error {
  constructor(errors: any) {
    super('FormError')
    this.name = 'FormError'
    this.message = JSON.stringify(errors || '')
  }
}
