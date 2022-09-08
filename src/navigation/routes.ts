export const ROUTES = Object.freeze({
  HOME: 'HOME',
  LOCALIZE: 'LOCALIZE',
  WEBVIEW: 'WEBVIEW',
  CHECKBOX: 'CHECKBOX',
  VIDEO: 'VIDEO',
  VIDEO_PLAYER: 'VIDEO_PLAYER',
  FLYOUT: 'FLYOUT',
  POPUP: 'POPUP',
  PLATFORM_COLOR: 'PLATFORM_COLOR',
  VIDEO_AUDIO: 'VIDEO_AUDIO',
  ASYNC_STORAGE: 'ASYNC_STORAGE',
  SENSITIVE_INFO: 'SENSITIVE_INFO',
  PERMISSIONS: 'PERMISSIONS',
  CAMERA: 'CAMERA',
  LINEAR_GRADIENT: 'LINEAR_GRADIENT',
  DEVICE_INFO: 'DEVICE_INFO',
  BLOB_UTIL: 'BLOB_UTIL',
  SLIDER: 'SLIDER',
  PROGRESS_VIEW: 'PROGRESS_VIEW',
  NETINFO: 'NETINFO',
  DATETIMEPICKER: 'DATETIMEPICKER',
  EXPANDER: 'EXPANDER',
  CONFIG: 'CONFIG',
  FS: 'FS', // CPP impl is not merged
  TEXT_TO_SPEECH: 'TEXT_TO_SPEECH', // CPP, but package is old
  SKETCH_CANVAS: 'SKETCH_CANVAS',
  XAML: 'XAML', // Needs (probably) experimental version of WinUI; There were some issues with mismatched CppWinRT nuget versions
  PDF: 'PDF', // https://github.com/wonday/react-native-pdf/issues/683
  WINRT: 'WINRT',
  // DO NOT WORK
  CLIPBOARD: 'CLIPBOARD',
  TRACK_PLAYER_AUDIO: 'TRACK_PLAYER_AUDIO', // NPM package has not exported windows code + windows code is not actively maintained
  PRINT: 'PRINT',
  // DOCUMENT_PICKER: 'DOCUMENT_PICKER', // CSharp
  // SQLITE_STORAGE: 'SQLITE_STORAGE', // CPP, but package is old
  // FILE_VIEWER: 'FILE_VIEWER', // CSharp
  // GESTURE_HANDLER: 'GESTURE_HANDLER', // CPP impl is not merged; Does not work (compilation error)
});
