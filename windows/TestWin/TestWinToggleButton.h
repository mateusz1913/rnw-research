#pragma once

#include "TestWinToggleButton.g.h"
#include "winrt/Microsoft.ReactNative.h"
#include "NativeModules.h"

namespace winrt::TestWin::implementation {

    class TestWinToggleButton : public TestWinToggleButtonT<TestWinToggleButton> {
    public:
        TestWinToggleButton(winrt::Microsoft::ReactNative::IReactContext const& reactContext);
        void UpdateProperties(winrt::Microsoft::ReactNative::IJSValueReader const& reader);

    private:
        winrt::Microsoft::ReactNative::IReactContext m_reactContext{ nullptr };
        bool m_updating{ false };
        winrt::Windows::UI::Xaml::Controls::Primitives::ButtonBase::Click_revoker m_clickRevoker{};
        void RegisterEvents();
        void OnClick(winrt::IInspectable const& sender, winrt::Windows::UI::Xaml::RoutedEventArgs const& args);
    };
}

namespace winrt::TestWin::factory_implementation {
    struct TestWinToggleButton : TestWinToggleButtonT<TestWinToggleButton, implementation::TestWinToggleButton> {};
}
