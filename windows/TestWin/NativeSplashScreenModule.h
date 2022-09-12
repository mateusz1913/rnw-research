#pragma once

#include "pch.h"

#include "NativeModules.h"
#include "TestWinSplashScreenControl.h"

namespace winrt::TestWin::implementation::NativeSplashScreenModule
{
	REACT_MODULE(NativeSplashScreenModule);
	struct NativeSplashScreenModule
	{
	public:
		REACT_INIT(Initialize);
		void Initialize(winrt::Microsoft::ReactNative::ReactContext const& context) noexcept;

		REACT_METHOD(Hide, L"hide");
		void Hide() noexcept;

	private:
		winrt::Microsoft::ReactNative::ReactContext m_reactContext;
		winrt::impl::com_ref<winrt::TestWin::TestWinSplashScreenControl> getSplashScreenControl();
		winrt::impl::com_ref<winrt::TestWin::TestWinSplashScreenControl> getSplashScreenControl(xaml::DependencyObject startNode);
	};
}
