#include "pch.h"
#include "NativeModules.h"
#include "ToggleButtonViewManager.h"
#include "TestWinToggleButton.h"

namespace winrt::TestWin::implementation
{
	ToggleButtonViewManager::ToggleButtonViewManager() {}

    // IViewManager
    winrt::hstring ToggleButtonViewManager::Name() noexcept {
        return L"TestWinToggleButton";
    }

    xaml::FrameworkElement ToggleButtonViewManager::CreateView() noexcept {
        return winrt::TestWin::TestWinToggleButton(m_reactContext);
    }

    // IViewManagerWithReactContext
    winrt::Microsoft::ReactNative::IReactContext ToggleButtonViewManager::ReactContext() noexcept {
        return m_reactContext;
    }

    void ToggleButtonViewManager::ReactContext(winrt::Microsoft::ReactNative::IReactContext reactContext) noexcept {
        m_reactContext = reactContext;
    }

    // IViewManagerWithNativeProperties
    IMapView<hstring, winrt::Microsoft::ReactNative::ViewManagerPropertyType> ToggleButtonViewManager::NativeProps() noexcept {
        auto nativeProps = winrt::single_threaded_map<hstring, winrt::Microsoft::ReactNative::ViewManagerPropertyType>();

        nativeProps.Insert(L"disabled", winrt::Microsoft::ReactNative::ViewManagerPropertyType::Boolean);
        nativeProps.Insert(L"isChecked", winrt::Microsoft::ReactNative::ViewManagerPropertyType::Boolean);
        nativeProps.Insert(L"isThreeState", winrt::Microsoft::ReactNative::ViewManagerPropertyType::Boolean);
        nativeProps.Insert(L"title", winrt::Microsoft::ReactNative::ViewManagerPropertyType::String);

        return nativeProps.GetView();
    }

    void ToggleButtonViewManager::UpdateProperties(xaml::FrameworkElement const& view,
        winrt::Microsoft::ReactNative::IJSValueReader const& propertyMapReader) noexcept {
        if (auto toggleButton = view.try_as<winrt::TestWin::TestWinToggleButton>()) {
            toggleButton.UpdateProperties(propertyMapReader);
        }
    }

    // IViewManagerWithExportedEventTypeConstants
    winrt::Microsoft::ReactNative::ConstantProviderDelegate ToggleButtonViewManager::ExportedCustomBubblingEventTypeConstants() noexcept {
        return nullptr;
    }

    winrt::Microsoft::ReactNative::ConstantProviderDelegate ToggleButtonViewManager::ExportedCustomDirectEventTypeConstants() noexcept {
        return [](winrt::Microsoft::ReactNative::IJSValueWriter const& constantWriter) {
            WriteCustomDirectEventTypeConstant(constantWriter, "onPress");
        };
    }
}
