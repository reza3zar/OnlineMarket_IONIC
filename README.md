# OnlineMarket_IONIC
This is a Ionic Project that provides online shopping feature and it use Signalr to notify offers


# Step 1 - Run a Production Build

First, we need to bundle our web code and prepare the assets as a native package.

ionic cordova build android --prod --release

# Step 2 - Generate a Keystore

A keystore is just a binary file that holds the private keys needed to sign the app. Make sure to keep it safe because you need it to update your future releases of your app. Its purpose is to keep your app safe from malicious updates.
you should go to the jdk folder (e.g C:\Program Files\Java\jdk1.8.0_211\bin) run admin cmd and paste this command:

keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias

You should see my-release-key.jks in the root of your project

# Step 3 - Sign the APK

You should have a an unsigned APK located in platforms/android/app/build/outputs/apk/release/ in your Ionic project. Let’s use the keystore from step 2 to sign the APK.

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk my-alias

# Step 4 - Figure out your build tools path

We need to use the Android CLI build tools to finish packaging the app. What is the value of the ANDROID_HOME env variable?

printenv ANDROID_HOME

That should give you something like ~/Library/Android/sdk/. Now we need to find out the version of build tools on our system.

ls ~/Library/Android/sdk/build-tools

That should give you a version number like 28.0.3.

So replace {build-tools-path} with the path to build tools on your machine for the following commands, i.e. ~/Library/Android/sdk/build-tools/28.0.3
# Step 5 - Run zipalign

Next we need to run zipalign on the APK.

{build-tools-path}/zipalign -v 4 android-release-unsigned.apk YourAppName-Release.apk

# Step 6 - Verify the Signature

The final step is to verify the signature on the APK with apksigner.

{build-tools-path}/apksigner verify YourAppName-Release.apk

The final result should look like the image below (focus on the green files), giving you an APK ready for release on Google Play
![](https://angularfirebase.com/images/android-ionic-apk-build.png)

