import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface IProps<DataType> {
  handleRequest(...params: any[]): Promise<AxiosResponse<DataType>>;
  initialReqParams: any[];
}

export const useRequest = <DataType>({
  handleRequest,
  initialReqParams,
}: IProps<DataType>): [
  DataType | null,
  boolean,
  (...params: any[]) => Promise<AxiosResponse<DataType> | null>
] => {
  const [data, setData] = useState<null | DataType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);

        let response;

        if (initialReqParams === null) {
          response = await handleRequest();
        } else {
          response = await handleRequest(...initialReqParams);
        }

        if (response.status === 200) {
          setData(response.data);
        }

        setIsLoading(false);
      } catch (error) {
        setData(null);

        setIsLoading(false);
      }
    };

    load();
    // eslint-disable-next-line
  }, []);

  const handleSearch = useCallback(
    async (...params) => {
      try {
        setIsLoading(true);

        const response = await handleRequest(...params);

        if (response.status === 200) {
          setData(response.data);
        }

        setIsLoading(false);

        return response;
      } catch (error) {
        setData(null);

        setIsLoading(false);

        return null;
      }
    },
    [handleRequest]
  );

  return [data, isLoading, handleSearch];
};
