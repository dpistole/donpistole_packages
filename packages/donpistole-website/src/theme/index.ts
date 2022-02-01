export interface BoxShadowParams {
  color?: string;
}

const defaultBoxShadowParams = {
  color: '#000000',
};

export interface DonPistoleTheme {
  pageBackground: string;
  contentBackground: string;
  textColor: string;
  infoColor: string;
  accentColor1: string;
  accentColor1Text: string;
  accentColor2: string;
  accentColor2Text: string;
  accentColor3: string;
  accentColor4: string;
  dangerColor: string;
  boxShadow: (params?: BoxShadowParams) => string;
}

export const donpistoleTheme: DonPistoleTheme = {
  pageBackground: '#2C2B2B',
  contentBackground: '#f0f0f0',
  textColor: '#303030',
  infoColor: '#3535cc',
  accentColor1: '#de8d00',
  accentColor1Text: '#FFFFFF',
  accentColor2: '#DE0BAA',
  accentColor2Text: '#FFFFFF',
  accentColor3: '#1677DE',
  accentColor4: '#199100',
  dangerColor: '#bf3f3f',
  boxShadow: (params: BoxShadowParams = defaultBoxShadowParams) =>
    `-2px 7px 15px -1px ${params.color}`,
};
