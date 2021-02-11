export type ApiResp<SuccessData = any, ErrorData = any> =
  | {
      isError: false;
      data: SuccessData;
    }
  | {
      isError: true;
      data: ErrorData;
    };
