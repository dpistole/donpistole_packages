import { useState } from 'react';
import { createApi, RequestIntroductionParams } from '@cranburi/donpistole-api';
import * as statuses from '../../constants/status';

export const useDonPistoleApi = () => {
  const [requestIntroductionStatus, setRequestIntroductionStatus] = useState(
    statuses.EMPTY,
  );

  const DonPistoleApi = createApi({ host: `${process.env.APP_API_HOST}` });

  const requestIntroduction = async (
    params: Omit<RequestIntroductionParams, 'host'>,
  ) => {
    setRequestIntroductionStatus(statuses.IN_PROGRESS);

    try {
      await DonPistoleApi.requestIntroduction(params);
      setRequestIntroductionStatus(statuses.DONE);
    } catch (error) {
      setRequestIntroductionStatus(statuses.ERROR);
    }
  };

  return {
    requestIntroduction,
    requestIntroductionStatus,
  };
};
