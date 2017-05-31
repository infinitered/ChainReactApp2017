package com.chainreactapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.microsoft.azure.mobile.react.crashes.RNCrashesPackage;
import com.microsoft.azure.mobile.react.analytics.RNAnalyticsPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.oblador.vectoricons.VectorIconsPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new RCTSplashScreenPackage(),
        new MapsPackage(),
        new RNCrashesPackage(MainApplication.this, getResources().getString(R.string.mobileCenterCrashes_whenToSendCrashes)),
        new RNAnalyticsPackage(MainApplication.this, getResources().getString(R.string.mobileCenterAnalytics_whenToEnableAnalytics)),
        new ReactVideoPackage(),
        new ReactNativePushNotificationPackage(),
        new LinearGradientPackage(),
        new ReactNativeI18n(),
        new VectorIconsPackage(),
        new RNDeviceInfo(),
        new ReactNativeConfigPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
