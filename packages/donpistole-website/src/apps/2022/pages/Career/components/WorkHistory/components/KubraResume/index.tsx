import React from 'react';

import { ResumeHeader } from '../ResumeHeader';
import { ResumeBody } from '../ResumeBody';
import { ResumeContainer } from '../ResumeContainer';
import { AskMeAbout, AskMeAboutTopic } from '../AskMeAbout';

// TODO fix typing
// @ts-ignore
import KubraLogo from '../../../../../../../../assets/images/kubra-logo.png';
import { Paragraph } from '../../../../../../components';

export const KubraResume = () => (
  <ResumeContainer>
    <ResumeHeader
      employerName="KUBRA"
      employerLogo={KubraLogo}
      tenure="5 Years (and counting...)"
      title="Senior Front End Developer"
    />
    <ResumeBody>
      <Paragraph>
        KUBRA provides communications tools for utility and government entities.
        I work on the team building the web interfaces for those tools.
      </Paragraph>
    </ResumeBody>
    <AskMeAbout>
      <AskMeAboutTopic>
        Rewriting our outage mapping UI in React JS
      </AskMeAboutTopic>
      <AskMeAboutTopic>
        Building a fullstack serverless template editing service on GitHub,
        TravisCI, and AWS
      </AskMeAboutTopic>
      <AskMeAboutTopic>
        Maintaining the shared UI and authentication packages used by multiple
        teams to build micro front end apps
      </AskMeAboutTopic>
    </AskMeAbout>
  </ResumeContainer>
);
