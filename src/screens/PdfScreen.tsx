import * as React from 'react';
import {
  // Button,
  // StyleSheet,
  Text,
  // View
} from 'react-native';
// import Pdf from 'react-native-pdf';

import { Page } from '../components/Page';

export const PdfScreen: React.FC = () => {
  // const pdfRef = React.useRef<Pdf>(null);
  // const [currentPage, setCurrentPage] = React.useState(0);
  // const [pageCount, setPageCount] = React.useState(0);

  return (
    <Page>
      <Text>React Native Pdf has some c2039 compilation errors</Text>
      {/* <View style={styles.container}>
        <Pdf
          ref={pdfRef}
          source={{
            uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
          }}
          horizontal={true}
          onLoadComplete={numberOfPages => {
            setPageCount(numberOfPages);
          }}
          onPageChanged={page => {
            setCurrentPage(page);
          }}
          style={styles.container}
        />
      </View>
      <View style={styles.controls}>
        <Button
          onPress={() => {
            if (currentPage > 0) {
              pdfRef.current?.setPage(currentPage - 1);
            }
          }}
          title="Prev page"
        />
        <Text style={styles.controlLabel}>
          {currentPage}/{pageCount}
        </Text>
        <Button
          onPress={() => {
            if (currentPage < pageCount - 1) {
              pdfRef.current?.setPage(currentPage + 1);
            }
          }}
          title="Next page"
        />
      </View> */}
    </Page>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     alignSelf: 'stretch',
//     flex: 1,
//   },
//   controls: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     padding: 20,
//   },
//   controlLabel: {
//     fontSize: 24,
//   },
// });
