export const EMPTY = 'EMPTY';
export const IN_PROGRESS = 'IN_PROGRESS';
export const DONE = 'DONE';
export const ERROR = 'ERROR';

export const isNotLoaded = (status: string) => status === EMPTY;
export const isLoading = (status: string) => status === IN_PROGRESS;
export const didSucceed = (status: string) => status === DONE;
export const didFail = (status: string) => status === ERROR;
