# Adding Icons to Sencha and Cordova App

It doesn't seem to be documented anywhere but after sore
googling fingers and a ton of trial and error I bring you...

### ...How to reliably copy icons from Sencha Touch to Cordova apps

**DISCLAIMER:**

This might not be the 100% correct way. Maybe there's a better way. 
(There probably is) But this way consistently works on builds for iOS.*

Another thing: I didn't include Pre iOS 7 Load Screens 
because dammit, that's a lot of images to try and keep track of for a stupid 20/40px to shave off on every single load screen for an old version of iOS. I made this to help others.

For those who don't know I Apple has really relaxed on image naming. Thankfully. I half named the images the way they do but not exactly. I added the dimensions to the end of each file name and didn't use tilde? this thing `~`.

ALSO: we could have gotten away with a lot less images or a few more. but you can specify Portrait/Landscape/UpsideDown/Left/Right etc. I don't have time to mess with that right now so go ahead and read up. 

https://developer.apple.com/library/ios/qa/qa1686/_index.html

## So now on to the show!

Look for thes files in your sencha project.

```
MyApp/
	|_app.js
	|_app.json
	|_cordova/
		|_config.xml
```
Open up the resources folder

```
MyApp/
	|_resources/
		|_css/
		|_icons/
		|_loading/
		|_startup/
```

## app.js startupImage/Load Screen/Splashscreen

Open up your `app.js` file. There's two important sections here.

```javascript

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    
```
That's how it looks if you didn't screw with it and you used
Sencha Cmd to build your initial app.

Chances are you did mess with it and it kind of works but
not they way you expect. 

You did your next `sencha app build native` and you had to manually
add in your icons in Xcode and dealing with all that stuff probably
made you very angry and confused.

Here's how my app.js looks after tearing it apart and finally 
getting it to work then orgainizing it so I'm not consfused later.

```javascript
    icon: {

        // IPHONE/IPAD IOS 5 - 8
        // APP SETTINGS + SPOTLIGHT ICONS

        '57'  :   'resources/icons/Icon.png',
        '114' :   'resources/icons/Icon@2x.png',

        '120' :   'resources/icons/Icon-60@2x.png',
        '180' :   'resources/icons/Icon-60@3x.png',

        '72'  :   'resources/icons/Icon-72.png',
        '144' :   'resources/icons/Icon-72@2x.png',

        '76'  :   'resources/icons/Icon-76.png',
        '152' :   'resources/icons/Icon-76@2x.png',

        '29'  :   'resources/icons/Icon-Small.png',
        '58'  :   'resources/icons/Icon-Small@2x.png',
        '87'  :   'resources/icons/Icon-Small@3x.png',

        '40'  :   'resources/icons/Icon-Small-40.png',
        '80'  :   'resources/icons/Icon-Small-40@2x.png',
        '120' :   'resources/icons/Icon-Small-40@3x.png',

        '50'  :   'resources/icons/Icon-Small-50.png',
        '100' :   'resources/icons/Icon-Small-50@2x.png'
    },
    
   isIconPrecomposed: true,
    
    startupImage: {

        // IPHONE -- PORTRAIT
        '320x460'   : 'resources/splash/Launch-Portrait-iPhone-3-@1x-320x460.png',   // iPhone 1-3
        '640x960'   : 'resources/splash/Launch-Portrait-iPhone-4-@2x-640x960.png',   // iPhone 4
        '640x1136'  : 'resources/splash/Launch-Portrait-iPhone-5-@2x-640x1136.png',  // iPhone 5
        '750x1334'  : 'resources/splash/Launch-Portrait-iPhone-6-@2x-750x1334.png',  // iPhone 6
        '1242x2208' : 'resources/splash/Launch-Portrait-iPhone-6-@3x-1242x2208.png', // iPhone 6+

        // IPHONE -- LANDSCAPE
        '460x320'   : 'resources/splash/Launch-Landscape-iPhone-3-@1x-460x320.png',  // iPhone 1-3
        '960x640'   : 'resources/splash/Launch-Landscape-iPhone-4-@2x-960x640.png',  // iPhone 4
        '1136x640'  : 'resources/splash/Launch-Landscape-iPhone-5-@2x-1136x640.png', // iPhone 5
        '1334x750'  : 'resources/splash/Launch-Landscape-iPhone-6-@2x-1334x750.png', // iPhone 6
        '2208x1242' : 'resources/splash/Launch-Landscape-iPhone-6-@3x-2208x1242.png',// iPhone 6+

        // IPAD -- LANDSCAPE
        '1024x768'  : 'resources/splash/Launch-Landscape-iPad@1x-1024x768.png',
        '2048x1536' : 'resources/splash/Launch-Landscape-iPad@2x-2048x1536.png',

        // IPAD -- PORTRAIT
        '768x1024'  : 'resources/splash/Launch-Portrait-iPad@1x-768x1024.png',
        '1536x2048' : 'resources/splash/Launch-Portrait-iPad@2x-1536x2048.png'
    },
```

So you think you're good to go. All solved move on to real issues like programming right? 
Ha! No way man!

You might have noticed in this app that there's my launch images are pointing to `resources/spash/...` 
if you did good! Go to the store and buy yourself a cookie. Add that directory to your resources. 

DON'T FORGET to add to your app.json file!!!

```json

    "resources": [
        "resources/images",
        "resources/icons",
        "resources/splash" // <== replace loading with splash to match cordova
    ],

```

So you're good now right? Nope. One more thing...

In your cordova directory you should see a `config.xml` file. Open up that jerk.

Here's really where the magic happens. This file will save your ass 
from tedius repeditive work in the future. 

It looks something like this right now. You probably never even opened it.

```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.trozdol.icondemo" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>IconDemo</name>
    <description>
        A sample Apache Cordova application that responds to the deviceready event.
    </description>
    <author email="dev@cordova.apache.org" href="http://cordova.io">
        Apache Cordova Team
    </author>
    <content src="index.html" />
    <plugin name="cordova-plugin-whitelist" version="1" />
    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="mailto:*" />
    <allow-intent href="geo:*" />
    <platform name="android">
        <allow-intent href="market:*" />
    </platform>
    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
    </platform>
</widget>
```
### No making sense, yo!

This is how I found out how all this works. When running `sencha app build native` I saw in the Terminal it was saying `file not found in www/resources/splash/blah blah blah` So that's why I added the splash folder. 

Somewhere a while back ago I found a line for `<icon...` and `<splash...` in a config.xml. Can't remember where. Anyway now my config.xml file looks like this. 

```xml

<?xml version='1.0' encoding='utf-8'?>

<widget
    id="com.trozdol.icondemo"
    version="0.0.1"
    xmlns="http://www.w3.org/ns/widgets"
    xmlns:cdv="http://cordova.apache.org/ns/1.0">

    <name>IconDemo</name>

    <description>
        A demo application showing iOS app icons from Sencha copied to Cordova
    </description>

    <author email="shayne@trozdol.com" href="http://trozdol.com">
        Shayne Trosdahl @Trozdol
    </author>

    <content src="index.html" />

    <plugin name="cordova-plugin-whitelist" version="1" />

    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="mailto:*" />
    <allow-intent href="geo:*" />

    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
    </platform>

    <platform name="ios">

        <!-- IPHONE + IPAD ICONS -->
        <icon   src = "www/resources/icons/Icon.png"               width = "57"   height = "57"  />
        <icon   src = "www/resources/icons/Icon@2x.png"            width = "114"  height = "114" />

        <icon   src = "www/resources/icons/Icon-60@2x.png"         width = "120"  height = "120" />
        <icon   src = "www/resources/icons/Icon-60@3x.png"         width = "180"  height = "180" />

        <icon   src = "www/resources/icons/Icon-72.png"            width = "72"   height = "72"  />
        <icon   src = "www/resources/icons/Icon-72@2x.png"         width = "144"  height = "144" />

        <icon   src = "www/resources/icons/Icon-76.png"            width = "76"   height = "76"  />
        <icon   src = "www/resources/icons/Icon-76@2x.png"         width = "152"  height = "152" />

        <icon   src = "www/resources/icons/Icon-Small.png"         width = "29"   height = "29"  />
        <icon   src = "www/resources/icons/Icon-Small@2x.png"      width = "58"   height = "58"  />
        <icon   src = "www/resources/icons/Icon-Small@3x.png"      width = "87"   height = "87"  />

        <icon   src = "www/resources/icons/Icon-Small-40.png"      width = "40"   height = "40"  />
        <icon   src = "www/resources/icons/Icon-Small-40@2x.png"   width = "80"   height = "80"  />
        <icon   src = "www/resources/icons/Icon-Small-40@3x.png"   width = "120"  height = "120" />

        <icon   src = "www/resources/icons/Icon-Small-50.png"      width = "50"   height = "50"  />
        <icon   src = "www/resources/icons/Icon-Small-50@2x.png"   width = "100"  height = "100" />


        <!-- IPHONE == PORTRAIT -->
        <splash src = "www/resources/splash/Launch-Portrait-iPhone-3-@1x-320x460.png"       width = "320"  height  = "460"  />
        <splash src = "www/resources/splash/Launch-Portrait-iPhone-4-@2x-640x960.png"       width = "640"  height  = "960"  />
        <splash src = "www/resources/splash/Launch-Portrait-iPhone-5-@2x-640x1136.png"      width = "640"  height  = "1136" />
        <splash src = "www/resources/splash/Launch-Portrait-iPhone-6-@2x-750x1334.png"      width = "750"  height  = "1334" />
        <splash src = "www/resources/splash/Launch-Portrait-iPhone-6-@3x-1242x2208.png"     width = "1242" height  = "2208" />

        <!-- IPHONE == LANDSCAPE -->
        <splash src = "www/resources/splash/Launch-Landscape-iPhone-3-@1x-460x320.png"      width = "460"  height  = "320"  />
        <splash src = "www/resources/splash/Launch-Landscape-iPhone-4-@2x-960x640.png"      width = "960"  height  = "640"  />
        <splash src = "www/resources/splash/Launch-Landscape-iPhone-5-@2x-1136x640.png"     width = "1136" height  = "640"  />
        <splash src = "www/resources/splash/Launch-Landscape-iPhone-6-@2x-1334x750.png"     width = "1334" height  = "750"  />
        <splash src = "www/resources/splash/Launch-Landscape-iPhone-6-@3x-2208x1242.png"    width = "2208" height  = "1242" />

        <!-- IPAD == PORTRAIT -->
        <splash src = "www/resources/splash/Launch-Portrait-iPad-@1x-768x1024.png"           width = "768"  height  = "1024" />
        <splash src = "www/resources/splash/Launch-Portrait-iPad-@2x-1536x2048.png"          width = "1536" height  = "2048" />

        <!-- IPAD == LANDSCAPE -->
        <splash src = "www/resources/splash/Launch-Landscape-iPad-@1x-1024x768.png"          width = "1024" height  = "768"  />
        <splash src = "www/resources/splash/Launch-Landscape-iPad-@2x-2048x1536.png"         width = "2048" height  = "1536" />

    </platform>
</widget>
```

### Now you can run these...

```
sencha app refresh

sencha app build native

# Check it. Did it work? No?

cd cordova

cordova build ios

# How about now? Still no? Ok then try... 
# (be careful if you had a bunch of custom work done in the platforms/ios folder. It will get whacked)

cordova platform rm ios

cordova platforms add ios

cordova build ios

```

That's it! Easy right? From now on this should work no problem!

