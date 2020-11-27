export abstract class ErrorUiHandler {
  abstract showError(error: string): void;
}

type ErrorUiHandlerType = new () => ErrorUiHandler;

export abstract class ErrorUiConfig {
  usePrefix?: string;
  handler: ErrorUiHandlerType;
}
