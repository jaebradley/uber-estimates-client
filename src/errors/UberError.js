export default class UberError extends Error {
  constructor(message, code, error) {
    super(message);
    this.message = message;
    this.code = code;
    this.error = error;
    this.name = 'Uber Error';
  }
}
