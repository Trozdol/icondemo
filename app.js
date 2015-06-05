/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'IconDemo',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

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

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('IconDemo.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
