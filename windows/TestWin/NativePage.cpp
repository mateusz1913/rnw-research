#include "pch.h"
#include "NativePage.h"
#if __has_include("NativePage.g.cpp")
#include "NativePage.g.cpp"
#endif

using namespace winrt;
using namespace xaml;

namespace winrt::TestWin::implementation
{
    NativePage::NativePage()
    {
        InitializeComponent();
    }

    void NativePage::NavigateBackButton_Click(IInspectable const& /*sender*/, RoutedEventArgs const& /*e*/)
    {
        Window::Current().Content().as<winrt::Windows::UI::Xaml::Controls::Frame>().GoBack();
    }
} // namespace winrt::TestWin::implementation
