export default class UberError extends Error {
  constructor(message, error) {
    super(message);
    this.message = message;
    this.error = error;
    this.name = 'Uber Error';
  }
}
