# [WIP for Expo] Template as a monorepo: Nx, Expo React Native, NextJS, React Vite, Tamagui & Solito

> ⚠️ **Warning:** Nx has not been fully battle-tested in Expo environments. Users have reported ongoing issues with bugs, errors, and path resolving in application-centric monorepos. Consider alternatives if you're working with Expo, like Yarn v4. [Learn more](https://github.com/nrwl/nx/issues/22631#issuecomment-2333513788).

The utopia is to code once and have a native app and a native website.

We can be close to that heaven. If we go deep into Typescript & React ecosystem, there are some libraries to make a scalable cross-platform application:

- Components, app and web in one repository to share dependencies, devOps (like CI/CD processes, publishing...), all thanks to [Nx](https://nx.dev/)
- App: React Native with [Expo](https://expo.dev/)
- Web: React with [NextJS](https://nextjs.org/)
- App and web navigation: [Expo Router](https://docs.expo.dev/routing) and [Solito](https://solito.dev/)
- Cross theme for web (CSS) and mobile with [Tamagui](https://tamagui.dev)

## Known Issues

- Allow setting up Android compileSdkVersion and others <https://github.com/nrwl/nx/issues/26572>
- Nx add more dependencies to the Expo app <https://github.com/nrwl/nx/issues/26571>
- Nx + Expo with Yarn causes problems as pointed at <https://github.com/nrwl/nx/issues/22631>, <https://github.com/nrwl/nx/issues/26257>, <https://github.com/nrwl/nx/issues/21101>. **Solution**: use NPM in Nx, else seperate the monorepo from the Expo app like here <https://github.com/guillempuche/nx-monorepo-with-expo-standalone-app>
- Nx + Expo with NPM is able to run Expo Go app, but not a local build as pointed at <https://github.com/nrwl/nx/issues/26285>. **Solution**: seperate the monorepo from the Expo app like here <https://github.com/guillempuche/nx-monorepo-with-expo-standalone-app> (I didn't finish it)
- Next configuration file uses ESM and throws `ERR_UNSUPPORTED_DIR_IMPORT` error in Tamagui. **Solution**: https://github.com/guillempuche/nx-expo-next-tamagui/issues/4

## To Do

- [WIP] Make sure Nx always build the Android and iOS app.
- Create Storybook.
- Replecate Expo app in Next and Vite app.

## Install and run the app and web

- Test it with NodeJS v18. You can use [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) or [fnm](https://github.com/Schniz/fnm) to manage multiple Node versions.
- Install `yarn` and enable the latest version with running this command `yarn set version berry`. You can use `npm` easily, just delete:
  - The `packageManager` field in `package.json`
  - The `yarn.lock` file
- Replace the monorepo's name for yours. Get tge name found in `package.json` field `name` (e.g. `nx-expo-next-tamagui`), find all of them around the code and replace them for your desired name.

> Don't consider this character `@`, we don't replace or migrate it.

- Install all the dependencies with `yarn install`.
- For mobile
  - Set up Android and iOS environment. Guide at React Native [docs](https://reactnative.dev/docs/getting-started). My current Android setup is for Android API 34.
  - Run Android emulator. Check your local emulators with `emulator -list-avds`, then run it (e.g. `emulator -avd Resizable_API_34`).
  - Run the Expo app found as `expo` (it's the name of the package found in `apps/expo`). You could change the name with Nx console (read the suggestions section below). Run the command `yarn exec nx run expo:start` and open the app according to the terminal commands. You can check what are the commands run by Nx on `apps/expo/project.json` file --> section `targets` --> `start`.
- For web:
  - Run the NextJS web with `yarn exec nx run next:serve`
  - Run the Vite React web with `yarn exec nx run web-react:serve`

## Suggestions

- When adding new libraries to the monorepo, consider referencing the names in `@tamagui/babel-plugin` in `apps/expo/babel.config.js` (and in other apps you create). And if the libraries use Tamagui, then create the `tamagui.config.js` file.
- For Expo app
  - When updating `expo`, `expo-router`, `metro`, `@nx/expo` or related packages that needs configuration (e.g. `metro.config.js`, `babel.config.js`, `app.json`, `package.json`, `project.json`, `tamagui.config.js`...), consider symlinks compatibility with Metro. Keep an eye on Metro's changelog [here](https://github.com/facebook/metro/blob/main/CHANGELOG.md), even if Expo says is better to user other Metro versions, test other versions.
  - If you do some dependency changes and the Expo app doesn't work, check which installed packages need to be updated with: `npx expo-doctor` ([docs]( `npx expo install --check` )) and `npx expo install --check` ([docs](https://docs.expo.dev/more/expo-cli/#version-validation)).
  - If you have errors running the app, you can enable Nx debug mode in `apps/expo/metro.config.js`, set `debug` to `true`.
- To create new libraries or apps, use the Nx extension for VSCode or JetBrains (download it [here](https://nx.dev/core-features/integrate-with-editors)). The other option is using the CLI, however, you can make more errors. After creating the library/app, compared with boilerplate libraries and apps to clean unused settings (test, dependencies... or whatever you don't want) for Nx, React, Metro, Expo, NextJS, Tamagui...
- I couldn't run the Expo app using [pnPm](https://pnpm.io/) (the alternative to NPM and Yarn package managers). I think the problem is with symlinks, even when changing the config like [npmrc-->node-linker](https://pnpm.io/npmrc#node-linker) doesn't work.
- My Android (e.g. [SDKMAN](https://sdkman.io/) to manage Java versions) and iOS environment configuration for macOS with [Zsh](https://ohmyz.sh/), my `~/.zshrc` file:

```shell
#################################
############# NVM (Node Version Manager)

# More info https://github.com/nvm-sh/nvm/blob/master/README.md

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

# Loads nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 

# Loads nvm bash_completion
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

#################################
############# ANDROID STUDIO

export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
# sdkmanager https://developer.android.com/studio/command-line/sdkmanager
export PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin
# adb (Android Debug Bridge) https://developer.android.com/studio/command-line/adb
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
# emulator https://developer.android.com/studio/command-line/adb
# $ emulator -list-avds
# $ emulator -avd <device_name> -port 5555
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator

export PATH=$PATH:/Users/your_profile_name/.sdkman/candidates/java/current

# For React Native, support older tooling
export ANDROID_HOME=$HOME/Library/Android/sdk

# Android Studio would need to create this symlink in Macos in the app's internal files
# ln -sfn ./jbr ./jre

#################################
############# COCOA PODs

# More info https://guides.cocoapods.org/using/getting-started.html#sudo-less-installation
export GEM_HOME=$HOME/.gem
# export PATH=$GEM_HOME/ruby/2.6.0/bin:$PATH
export PATH=$GEM_HOME/bin:$PATH

#################################
############# MAVEN
export PATH=$PATH:/Users/your_profile_name/programacio/programes/apache-maven-3.8.6/bin

#################################
############# SDKMAN

# Enable Gradle
export JAVA_HOME="$HOME/.sdkman/candidates/java/current"


# THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK
export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"
```

## Resources

- Nx packages (AKA, the plugins) at [nx.dev/plugin-registry](https://nx.dev/plugin-registry) where you can find all you need to create, edit and run the monorepo.
- Expo settings and plugins at [docs.expo.dev](https://docs.expo.dev/).
- Tamagui theme at [tamagui.dev](https://tamagui.dev/) and advanced monorepo template [Takeout](https://tamagui.dev/takeout).
- Expo Router v2 at [expo-router/CHANGELOG.md](https://github.com/expo/router/blob/main/packages/expo-router/CHANGELOG.md) and [docs](https://expo.github.io/router/docs/).
