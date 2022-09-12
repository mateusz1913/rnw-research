#include "pch.h"
#include "NativeSplashScreenModule.h"

namespace winrt::TestWin::implementation::NativeSplashScreenModule
{
	void NativeSplashScreenModule::Initialize(winrt::Microsoft::ReactNative::ReactContext const& context) noexcept
	{
		m_reactContext = context;
	}

	void NativeSplashScreenModule::Hide() noexcept
	{
		m_reactContext.UIDispatcher().Post([=]() {
			auto splashScreenControl = getSplashScreenControl();
			if (splashScreenControl != nullptr) {
				splashScreenControl.RunFadeOutAnimation();
			}
		});
	}

	winrt::impl::com_ref<winrt::TestWin::TestWinSplashScreenControl> NativeSplashScreenModule::getSplashScreenControl()
	{
		xaml::FrameworkElement root{ nullptr };
		auto window = xaml::Window::Current();
		if (window != nullptr) {
			root = window.Content().as<xaml::FrameworkElement>();
		}
		else if (auto xamlRoot = React::XamlUIService::GetXamlRoot(m_reactContext.Properties().Handle())) {
			root = xamlRoot.Content().as<xaml::FrameworkElement>();
		}

		if (!root) {
			return nullptr;
		}
		return getSplashScreenControl(root);
	}

	winrt::impl::com_ref<winrt::TestWin::TestWinSplashScreenControl> NativeSplashScreenModule::getSplashScreenControl(xaml::DependencyObject startNode)
	{
		const int count = winrt::Windows::UI::Xaml::Media::VisualTreeHelper::GetChildrenCount(startNode);
		winrt::impl::com_ref<winrt::TestWin::TestWinSplashScreenControl> result = nullptr;
		for (int i = 0; i < count; i++)
		{
			xaml::DependencyObject currentNode = winrt::Windows::UI::Xaml::Media::VisualTreeHelper::GetChild(startNode, i);
			auto temp{ currentNode.try_as<winrt::TestWin::TestWinSplashScreenControl>() };
			if (temp)
			{
				return temp;
			}
			result = getSplashScreenControl(currentNode);
			if (result)
			{
				break;
			}
		}
		return result;
	}
}
