import React from 'react';

import { ResumeHeader } from '../ResumeHeader';
import { ResumeBody } from '../ResumeBody';
import { ResumeContainer } from '../ResumeContainer';
import { AskMeAbout, AskMeAboutTopic } from '../AskMeAbout';
import { Paragraph } from '../../../../../../components';

import NMALogo from '../../../../../../../../assets/images/nma-logo.png';

export const NMAResume = () => (
  <ResumeContainer>
    <ResumeHeader
      employerName="National Merchants Association"
      employerLogo={NMALogo}
      tenure="2 years, 6 months"
      title="IT Director"
      showEmployerName
    />
    <ResumeBody>
      <Paragraph>
        At National Merchants Associations we specialized in providing merchant
        processing to &quot;high risk&quot; businesses. I helped build the IT
        infrastructure that made it possible.
      </Paragraph>
    </ResumeBody>
    <AskMeAbout>
      <AskMeAboutTopic>
        Building a web sales portal that integrated with our legacy CRM server
      </AskMeAboutTopic>
      <AskMeAboutTopic>
        Integrating multiple industry APIs to provide a unique solution to
        mitigate some of the risk associated with accepting online transactions
      </AskMeAboutTopic>
      <AskMeAboutTopic>
        Managing a team of front end web developers
      </AskMeAboutTopic>
    </AskMeAbout>
  </ResumeContainer>
);
