#pragma once

#include "winrt/Windows.UI.Xaml.h"
#include "winrt/Windows.UI.Xaml.Controls.Primitives.h"
#include "winrt/Windows.UI.Xaml.Interop.h"
#include "winrt/Windows.UI.Xaml.Markup.h"

#include "TestWinSplashScreenControl.g.h"

namespace winrt::TestWin::implementation
{
	struct TestWinSplashScreenControl : TestWinSplashScreenControlT<TestWinSplashScreenControl>
	{
	public:
		TestWinSplashScreenControl();

		void RunFadeOutAnimation();

	private:
		Windows::Foundation::IAsyncAction LoadSplashScreenInformation();

		void UpdateSplashScreenVisuals(std::string backgroundColor, Windows::Foundation::Uri splashImageUri);
		static std::optional<Windows::UI::Color> ParseColor(std::string color);
	};
}

namespace winrt::TestWin::factory_implementation
{
	struct TestWinSplashScreenControl : TestWinSplashScreenControlT<TestWinSplashScreenControl, implementation::TestWinSplashScreenControl>
	{
	};
}
