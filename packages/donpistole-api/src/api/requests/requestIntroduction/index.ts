import axios from 'axios';

export interface RequestIntroductionParams {
  host: string;
  email: string;
}

export const requestIntroduction = ({
  host,
  email,
}: RequestIntroductionParams) =>
  axios.post(`${host}/api/contact-me`, { data: { email } });
