import {
  createSuccessResponse,
  createErrorResponse,
  HTTP_INTERNAL_SERVER_ERROR,
} from '@cranburi/http';

export const getStatus = async () => {
  let response;
  try {
    response = createSuccessResponse();
  } catch (error) {
    response = createErrorResponse(null, HTTP_INTERNAL_SERVER_ERROR);
  }

  return response;
};
