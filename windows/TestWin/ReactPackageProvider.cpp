#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"

#include "NativeNavigationModule.h"
#include "ToggleButtonViewManager.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::TestWin::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    // Local native modules are linked automatically by making #include with module's header file,
    // but local viewmanagers need to be linked manually;
    packageBuilder.AddViewManager(L"ToggleButtonViewManager", []() { return winrt::make<ToggleButtonViewManager>(); });
    AddAttributedModules(packageBuilder);
}

} // namespace winrt::TestWin::implementation
