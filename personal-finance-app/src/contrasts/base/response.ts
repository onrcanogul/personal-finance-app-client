interface Response<T> {
  data?: T;
  isSuccessful: boolean;
  errors: string[];
  statusCode: number;
}

export default Response;
