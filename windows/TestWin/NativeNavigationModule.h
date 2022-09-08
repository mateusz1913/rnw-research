#pragma once

#include "pch.h"

#include "NativeModules.h"
#include "NativePage.h"

namespace winrt::TestWin::implementation::NativeNavigationModule
{
	REACT_MODULE(NativeNavigationModule);
	struct NativeNavigationModule
	{
	public:
		REACT_INIT(Initialize);
		void NativeNavigationModule::Initialize(winrt::Microsoft::ReactNative::ReactContext const& reactContext) noexcept;

		REACT_METHOD(NavigateToNativePage, L"navigateToNativePage");
		void NavigateToNativePage() noexcept;
	private:
		winrt::Microsoft::ReactNative::ReactContext m_reactContext;
	};
}
