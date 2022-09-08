#pragma once
#include "NativePage.g.h"
#include <winrt/Microsoft.ReactNative.h>

namespace winrt::TestWin::implementation
{
    struct NativePage : NativePageT<NativePage>
    {
        NativePage();

        void NavigateBackButton_Click(IInspectable const&, winrt::Windows::UI::Xaml::RoutedEventArgs const&);
    };
}

namespace winrt::TestWin::factory_implementation
{
    struct NativePage : NativePageT<NativePage, implementation::NativePage>
    {
    };
}

