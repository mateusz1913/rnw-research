#include "pch.h"

#include <CppWinRTIncludes.h>

#include "NativeNavigationModule.h"

using namespace winrt;
using namespace xaml;
using namespace xaml::Interop;
using namespace xaml::Controls;
using namespace xaml::Navigation;

namespace winrt::TestWin::implementation::NativeNavigationModule
{
	void NativeNavigationModule::Initialize(winrt::Microsoft::ReactNative::ReactContext const& reactContext) noexcept
	{
		m_reactContext = reactContext;
	}

	void NativeNavigationModule::NavigateToNativePage() noexcept
	{
		// Accessing Window.Current().Content() can be done only on UI thread;
		m_reactContext.UIDispatcher().Post([]() mutable {
			auto currentWindow = winrt::Windows::UI::Xaml::Window::Current();
			if (currentWindow.Content()) {
				auto rootFrame = currentWindow.Content().as<winrt::Windows::UI::Xaml::Controls::Frame>();
				rootFrame.Navigate(xaml_typename<winrt::TestWin::NativePage>(), nullptr);
			}
		});
	}
}
