import middy from '@middy/core';
import cors from '@middy/http-cors';

import * as handlers from './handlers';

export const getStatus = middy(handlers.getStatus).use(cors());
export const contactMe = middy(handlers.contactMe).use(cors());
