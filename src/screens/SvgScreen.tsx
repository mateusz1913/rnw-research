import * as React from 'react';
import { Text } from 'react-native';
// import Svg, { Circle, Rect, SvgUri, SvgXml } from 'react-native-svg';

import { Page } from '../components/Page';
// import { Row } from '../components/Row';

// const xml = `
//   <svg width="32" height="32" viewBox="0 0 32 32">
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       fill="url(#gradient)"
//       d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM17 6C17 5.44772 17.4477 5 18 5H20C20.5523 5 21 5.44772 21 6V25C21 25.5523 20.5523 26 20 26H18C17.4477 26 17 25.5523 17 25V6ZM12 11C11.4477 11 11 11.4477 11 12V25C11 25.5523 11.4477 26 12 26H14C14.5523 26 15 25.5523 15 25V12C15 11.4477 14.5523 11 14 11H12ZM6 18C5.44772 18 5 18.4477 5 19V25C5 25.5523 5.44772 26 6 26H8C8.55228 26 9 25.5523 9 25V19C9 18.4477 8.55228 18 8 18H6ZM24 14C23.4477 14 23 14.4477 23 15V25C23 25.5523 23.4477 26 24 26H26C26.5523 26 27 25.5523 27 25V15C27 14.4477 26.5523 14 26 14H24Z"
//     />
//     <defs>
//       <linearGradient
//         id="gradient"
//         x1="0"
//         y1="0"
//         x2="8.46631"
//         y2="37.3364"
//         gradient-units="userSpaceOnUse">
//         <stop offset="0" stop-color="#FEA267" />
//         <stop offset="1" stop-color="#E75A4C" />
//       </linearGradient>
//     </defs>
//   </svg>
// `;

export const SvgScreen: React.FC = () => {
  return (
    <Page>
      <Text>react-native-svg has some compilation error</Text>
      <Text>
        Severity Code Description Project File Line Suppression State Error
        MSB3073 The command
        ""C:\Users\test\.nuget\packages\microsoft.windows.cppwinrt\2.0.211028.7\build\native\..\..\bin\"cppwinrt
        @"x64\Debug\TestWin.vcxproj.cppwinrt_ref.rsp"" exited with code 1.
        TestWin
        C:\Users\test\.nuget\packages\microsoft.windows.cppwinrt\2.0.211028.7\build\native\Microsoft.Windows.CppWinRT.targets
        741
      </Text>
      {/* <Row label="Svg component">
        <Svg height="200" width="200">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </Row>
      <Row label="SvgUri">
        <SvgUri
          width="200"
          height="200"
          uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
        />
      </Row>
      <Row label="SvgXml">
        <SvgXml width="200" height="200" xml={xml} />
      </Row> */}
    </Page>
  );
};
