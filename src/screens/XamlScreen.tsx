import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  ComboBox,
  ComboBoxItem,
  ContentDialog,
  ContentDialogButton,
  ContentDialogState,
  FontIcon,
  Grid,
  Hyperlink,
  Italic,
  LineBreak,
  MenuFlyout,
  MenuFlyoutItem,
  NavigationView,
  NavigationViewItem,
  Orientation,
  Run,
  StackPanel,
  SplitView,
  SplitViewPanePlacement,
  SplitViewPriority,
  TextBlock,
  TextBox,
  ToggleSwitch,
  Visibility,
} from 'react-native-xaml';

import { Page } from '../components/Page';

export const XamlScreen: React.FC = () => {
  const [menuFlyout, setMenuFlyout] = React.useState(false);
  const [menuFlyoutOption, setMenuFlyoutOption] = React.useState(
    'MenuFlyout Option 1',
  );
  const [isSplitViewOpen, setIsSplitViewOpen] = React.useState(false);
  const [contentDialogState, setContentDialogState] = React.useState(
    ContentDialogState.Hidden,
  );

  return (
    <Page>
      <TextBlock>
        <Run text="Here is a hyperlink to the " />
        <Hyperlink navigateUri="https://reactnative.dev">
          <Run text="React Native docs" />
        </Hyperlink>
        <LineBreak />
        <Italic>
          <Run text="hi there" />
        </Italic>
      </TextBlock>
      <NavigationView
        visibility={Visibility.Visible}
        isPaneOpen={true}
        isPaneVisible={true}
        isSettingsVisible={false}
        style={styles.navigationView}>
        <NavigationViewItem content="Navigation Item 1">
          <FontIcon glyph="&#xE790;" />
        </NavigationViewItem>
        <NavigationViewItem content="Navigation Item 2">
          <FontIcon glyph="&#xE790;" />
        </NavigationViewItem>
      </NavigationView>
      <ComboBox text="ComboBox">
        <ComboBoxItem content="ComboBoxItem 1" />
        <ComboBoxItem content="ComboBoxItem 2" />
        <ComboBoxItem content="ComboBoxItem 3" />
      </ComboBox>
      <Button
        content="Open Menu Flyout"
        onClick={() => {
          setMenuFlyout(true);
        }}>
        <MenuFlyout
          isOpen={menuFlyout}
          onClosed={() => {
            setMenuFlyout(false);
          }}>
          <MenuFlyoutItem
            text="MenuFlyout Option 1"
            onClick={() => {
              setMenuFlyoutOption('MenuFlyout Option 1');
            }}
          />
          <MenuFlyoutItem
            text="MenuFlyout Option 2"
            onClick={() => {
              setMenuFlyoutOption('MenuFlyout Option 2');
            }}
          />
        </MenuFlyout>
      </Button>
      <View style={styles.spacer} />
      <TextBlock text={`${menuFlyoutOption} is selected.`} />
      <ToggleSwitch />
      <Button
        foreground="#992222"
        onTapped={_ => {
          setIsSplitViewOpen(!isSplitViewOpen);
        }}
        content="toggle split view"
      />
      <SplitView
        isPaneOpen={isSplitViewOpen}
        onPaneClosed={() => {
          setIsSplitViewOpen(false);
        }}
        width={800}
        height={300}
        paneBackground="blue"
        panePlacement={SplitViewPanePlacement.Left}>
        <TextBlock
          text="this is in the pane"
          priority={SplitViewPriority.Pane}
          foreground="white"
        />
        <Grid
          background="green"
          priority={SplitViewPriority.Content}
          gridLayout={{ rows: [200], columns: [200] }}>
          <TextBlock text="this is in the content" foreground="white" />
        </Grid>
      </SplitView>
      <Button
        foreground="#44AA66"
        onTapped={_ => {
          setContentDialogState(ContentDialogState.Popup);
        }}
        content="toggle content dialog"
      />
      <ContentDialog
        showState={contentDialogState}
        defaultButton={ContentDialogButton.Primary}
        // @ts-ignore
        title="Dialog title"
        primaryButtonText="OK"
        secondaryButtonText="Cancel"
        closeButtonText="Close"
        onPrimaryButtonClick={() => {
          console.log('Primary clicked');
        }}
        onSecondaryButtonClick={() => {
          console.log('Secondary clicked');
        }}
        onCloseButtonClick={() => {
          console.log('Close clicked');
        }}
        onClosed={() => {
          setContentDialogState(ContentDialogState.Hidden);
        }}>
        <StackPanel
          orientation={Orientation.Vertical}
          xamlMargin={20}
          padding={30}>
          <TextBlock text="Dialog message" />
          <Grid gridLayout={{ columns: [300, 600], rows: [300, '*'] }}>
            <TextBlock text="Another message" />
            <TextBox
              isEnabled={true}
              placeholderText="Type sth"
              onTextChanged={e => {
                // @ts-ignore
                console.log(e.nativeEvent?.sender?.text);
              }}
            />
          </Grid>
        </StackPanel>
      </ContentDialog>
    </Page>
  );
};

const styles = StyleSheet.create({
  navigationView: {
    height: 200,
    width: 200,
  },
  spacer: {
    height: 10,
  },
});
