/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'sencha_app.Application',

    name: 'sencha_app',

    requires: [
        // This will automatically load all classes in the sencha_app namespace
        // so that application classes do not need to require each other.
        'sencha_app.*'
    ],

    // The name of the initial view to create.
    mainView: 'sencha_app.view.main.Main'
});
