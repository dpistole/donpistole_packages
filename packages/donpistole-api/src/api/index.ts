import { RequestIntroductionParams } from './requests/requestIntroduction';
import * as requests from './requests';

export interface CreateApiParams {
  host: string;
}

export const createApi = ({ host }: CreateApiParams) => {
  return {
    requestIntroduction: (params: Omit<RequestIntroductionParams, 'host'>) =>
      requests.requestIntroduction({ host, ...params }),
  };
};
