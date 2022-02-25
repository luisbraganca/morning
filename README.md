![Logo](https://raw.githubusercontent.com/luisbraganca/morning/master/public/favicon.png)

# morning

Powerful and customizable home page with weather, notes and search engines support.
![Preview](https://raw.githubusercontent.com/luisbraganca/morning/master/screenshots/animation.gif)

## Demo

[Check here](https://zealous-hopper-aed1ae.netlify.app)

## Features

### Power search

Quickly switch between search engines by typing the corresponding `bang` value. For example, to switch to `duckduckgo` simply type `!dd` and add a space.

You can also toggle the search engines selector visibility by pressing `Ctrl Alt Up` (or by clicking on the selected engine) and select the engine wih `Tab`. It's not as fast but it allows you to remember which engines are available.

### Menu

Simplified APP selector, toggle its visibility with `Ctrl Alt Down` or by clicking `menu`. You can save your favorite websites here.

> **TIP:** Try using complete `URL`s, for example if you clear all cookies on exiting the browser, it may be useful to put the `URL`to the login pages. Or if you're constantly going to a section on a website, try using the `URL` that leads directly to that section.

### Notes

Simple notes editor. You can open it with `Ctrl Alt Right` or by clicking `n`. The caret position (and also the selection if any) is saved in your browser's storage so if you `refresh`/`close` your browser, the caret position will remain the same.

I didn't put much effort on this editor but its styled with a mono-spaced font allowing you to manually type a table:

```
Shopping list:

Quantity | Item
---------|----------
       2 | Water bottles
      10 | Bubble gum
```

> **WARNING:** Keep in mind that all the text saved here rely on your browser's storage so if you uninstall/clean your browser you may loose your notes.

### Weather

On your upper left corner there's an icon representing the current weather. If you click it (or press `Ctrl Alt Left`) you'll be able to see a forecast with the temperatures and the humidity.

Once you open `morning`, it will try to ask your permission to access your location in order to show you the weather for your location. If for some reason it can't access your location, it will use the fallback coordinates specified on `config.js`, you can also specify here that you want to always use the fallback coordinates not accessing your location (See [Develop](#develop) for more info on how to customize your own `morning` version), you can also remove this feature entirely.

## Develop

1. [Install](#install)
2. [Configure](#configure)
   1. Weather
   2. Background image
   3. Search engines
   4. Menu
3. [Build](#build)

### Install

```
git clone git@github.com:luisbraganca/morning.git
npm i
```

### Configure

#### Weather

If you don't want to use this feature at all, simply change the `weather` value in your `src/config.js` file to the following and skip the rest of this section

```js
(...)
export const weather = null;
```

1. Create an `.env` file, this is where all your personal sensitive info will be stored. You can either rename `.env.example` to `.env`, or copy and empty one and copy the contents from `.env.example`.

2. Firstly you need to go to [OpenWeatherMap](https://openweathermap.org) and get yourself an `API` `token` (the free plan should be enough).

3. Create an account.

4. Go [Here](https://home.openweathermap.org/api_keys), generate a `key` if you have none.

5. Put your `key` on the `.env` file.

6. Put your home's coordinates on the `.env` file.

7. Now, if you wish to try to use your browser's location instead (and only use the `.env`'s coordinates as fallback), then on the `src/config.js` file set `tryNavigation` to `true`. If you don't want to use browser's location at all and always use your home's coordinates, set it to `false`.

8. Set your desired `units` on the `src/config.js`, possible values are `"standard"`, `"metric"`, `"imperial"`.

#### Background image

Simply replace the image `public/img/background.jpg` with the one you want.

#### Search engines

All the search engines are defined on the `src/config.js` file on the `engines` array. The first one is used as `default`, so move the one you want as default to the first place.

To remove a search engine, simply the object from the array.

To add a search engine, you need 2 steps. First, add an object to the array:
```js
export const engines = [
  {
    /**
     * `bang` defines the characters to type after the `!`
     * in order to switch to this engine. It doesn't necessarily
     * need to be 2 characters long.
     */
    bang: "bs",
    /**
     * The `URL`, `{search}` will be replaced with the result
     * of the `parser` function.
     */
    action: "https://search.brave.com/search?q={search}",
    /**
     * The name of this search engine. It will be used for the
     * icon (it assumes there's always an icon at `public/img/icons/«name».png`).
     * This value is also used on the input's placeholder, showing `Search «name»`.
     */
    name: "bravesearch",
    /**
     * This function is optional, if it's not provided, the search entered
     * will only be trimmed and directly replaced on the `action` `URL`.
     * This is useful when you need to change the search entry before
     * moving it to the `URL`.
     * Some engines want the value to ve encoded (`encodeURIComponent`),
     * others simply want white spaces to be replaced with `+`.
     */
    parser: (search) => encodeURIComponent(search).replace(/[ ]/g, "+"),
  },
  (...)
];

(...)
```

The second step is to add the added search engine's image to `public/img/icons/«name».png` (check the folder first, maybe I already made an icon for you).

#### Menu

This one is quite easy to setup. Simply add an entry defining the `name` (once again, used for the image) and the `href`, the `URL` where it leads to.

```js
export const apps = [
  { name: "protonmail", href: "https://account.protonmail.com/login" },
  (...)
];
(...)
```

Once again, you should add an image to the added entry. Put it under `public/img/icons/«name».png` named after the value you put on `name`.

### Build

```
npm run build
```

Host ONLY the contents on the `build` folder (it contains all the necessary files).

> **NOTE:** If you wish to host the website on a subfolder on your directory (for example, instead of `example.com`, you want to put it under `example.com/morning/`), you need o add `PUBLIC_URL='morning'` on your `.env` file.
