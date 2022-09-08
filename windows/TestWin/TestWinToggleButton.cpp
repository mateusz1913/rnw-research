#include "pch.h"

#include "JSValueXaml.h"
#include "TestWinToggleButton.h"
#include "TestWinToggleButton.g.cpp"

namespace winrt::TestWin::implementation {
	TestWinToggleButton::TestWinToggleButton(winrt::Microsoft::ReactNative::IReactContext const& react_context) : m_reactContext(react_context) {
		RegisterEvents();
	}

	void TestWinToggleButton::UpdateProperties(winrt::Microsoft::ReactNative::IJSValueReader const& reader) {
		m_updating = true;
		auto const& propertyMap = winrt::Microsoft::ReactNative::JSValueObject::ReadFrom(reader);

		for (auto const& pair : propertyMap) {
			auto const& propertyName = pair.first;
			auto const& propertyValue = pair.second;

			if (propertyName == "title") {
				if (propertyValue.IsNull())
				{
					this->ClearValue(winrt::Windows::UI::Xaml::Controls::ContentControl::ContentProperty());
				}
				else
				{
					winrt::Windows::UI::Xaml::Controls::TextBlock titleTextBlock;
					titleTextBlock.Text(winrt::to_hstring(propertyValue.AsString()));
					this->Content(titleTextBlock);
				}
			}
			else if (propertyName == "disabled") {
				if (propertyValue.IsNull())
				{
					this->ClearValue(winrt::Windows::UI::Xaml::Controls::Control::IsEnabledProperty());
				}
				else
				{
					this->IsEnabled(!propertyValue.AsBoolean());
				}
			}
			else if (propertyName == "isChecked") {
				if (propertyValue.IsNull())
				{
					this->ClearValue(winrt::Windows::UI::Xaml::Controls::Primitives::ToggleButton::IsCheckedProperty());
				}
				else
				{
					this->IsChecked(propertyValue.AsBoolean());
				}
			}
			else if (propertyName == "isThreeState") {
				if (propertyValue.IsNull())
				{
					this->ClearValue(winrt::Windows::UI::Xaml::Controls::Primitives::ToggleButton::IsThreeStateProperty());
				}
				else
				{
					this->IsThreeState(propertyValue.AsBoolean());
				}
			}
		}
		m_updating = false;
	}

	void TestWinToggleButton::RegisterEvents()
	{
		m_clickRevoker = this->Click(winrt::auto_revoke, [ref = get_weak()](auto const& sender, auto const& args) {
			if (auto self = ref.get()) {
				self->OnClick(sender, args);
			}
		});
	}

	void TestWinToggleButton::OnClick(winrt::IInspectable const& /*sender*/, winrt::Windows::UI::Xaml::RoutedEventArgs const& /*args*/)
	{
		if (m_updating) {
			return;
		}
		m_reactContext.DispatchEvent(
			*this,
			L"topPress",
			[&](winrt::Microsoft::ReactNative::IJSValueWriter const& eventDataWriter) noexcept {
				eventDataWriter.WriteObjectBegin();
				{
					// try_as<bool>() will fallback to null when state is indeterminate
					WriteProperty(eventDataWriter, L"isChecked", this->IsChecked().try_as<bool>());
				}
				eventDataWriter.WriteObjectEnd();
			}
		);
	}
}
