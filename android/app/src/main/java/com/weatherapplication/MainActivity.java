package com.weatherapplication;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;



import android.os.Bundle;
import android.util.Log;

import static com.blitzapp.animatedsplash.animation.Constants.FADE;
import static com.blitzapp.animatedsplash.animation.Constants.SCALE;
import static com.blitzapp.animatedsplash.animation.Constants.SPLASH_SLIDE_RIGHT;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundImage;


import com.blitzapp.animatedsplash.animation.AnimatedObject;
import com.blitzapp.animatedsplash.animation.GroupAnimation;
import com.blitzapp.animatedsplash.animation.ObjectAnimation;
import com.blitzapp.animatedsplash.animation.SingleAnimation;
import com.blitzapp.animatedsplash.animation.Splash;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

public void onCreate(Bundle saved) {
           super.onCreate(saved);
           try {
               initiateSplash();
           } catch (Exception e) {
               Log.e("ANIMATED_SPLASH", e.getMessage());
           }
       }

              public void initiateSplash() throws Exception {

           // Create Splash
           Splash splash = new Splash(this);
           //Set Background Color To View
  setBackgroundImage(R.drawable.background);
           //Set Hiding Animation for Splash
           splash.setSplashHideAnimation(SPLASH_SLIDE_RIGHT);
           //Set Delay for Splash to hide
           splash.setSplashHideDelay(1500);
    AnimatedObject logoimage = new AnimatedObject(R.drawable.logo, screenHeight * 0.24, screenWidth * 0.4);
    splash.addAnimatedImage(logoimage);


    ObjectAnimation logoimageAnimation1 = new ObjectAnimation(logoimage, FADE, 1000, 0f, 1f, false);
    ObjectAnimation logoimageAnimation2 = new ObjectAnimation(logoimage, SCALE, 1000, 0f, 1f, 0f, 1f, false);


    GroupAnimation group1 = new GroupAnimation(1);
    group1.addAnimation(logoimageAnimation1);
    group1.addAnimation(logoimageAnimation2);
           //Creating Image and adding its properties and animation

 

           splash.ShowSplash();

       }
  @Override
  protected String getMainComponentName() {
    return "WeatherApplication";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }


}
