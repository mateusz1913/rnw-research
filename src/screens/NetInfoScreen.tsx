import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import * as React from 'react';
import { Page } from '../components/Page';
import { Row } from '../components/Row';

export const NetInfoScreen: React.FC = () => {
  const netInfo = useNetInfo();
  const [isConnectedValue, setIsConnectedValue] = React.useState<
    boolean | null
  >(null);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(
      ({ details, isConnected, isInternetReachable, type }) => {
        setIsConnectedValue(isConnected);
        console.log({ details, isConnected, isInternetReachable, type });
      },
    );

    return unsubscribe;
  }, []);

  return (
    <Page>
      <Row
        label="Is connected (listener)"
        value={
          isConnectedValue === null
            ? 'Not ready'
            : !isConnectedValue
            ? 'Not connected'
            : 'Connected'
        }
      />
      <Row
        label="Is connected (hook)"
        value={
          netInfo.isConnected === null
            ? 'Not ready'
            : !netInfo.isConnected
            ? 'Not connected'
            : 'Connected'
        }
      />
    </Page>
  );
};
