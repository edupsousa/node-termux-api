# Termux-API Wrapper for Node.JS

This project aims to create a simple interface to invoke Termux-API commands
directly from Node.JS applications. To use it you need to have Termux and Termux-API
installed on your Android, and Node.JS installed on the Termux environment.

## What is Termux?

From [Termux Website](https://termux.com/): "Termux is a terminal emulator and Linux environment bringing powerful terminal access to Android."

With Termux you can run a small linux environment on your Android device, that means that you
can run a small command-line utilities or a full-featured webserver directly from
your Android phone.

Install [Termux from Google Play](https://play.google.com/store/apps/details?id=com.termux)

## Termux-API

Termux-API is a companion app to Termux, it creates an interface from Termux to your device
features, with Termux-API you can take photos from your phone camera, get location
from GPS, read or send SMS, and a lot of other features. Everything directly from the emulated 
Linux terminal.

Install [Termux-API from Google Play](https://play.google.com/store/apps/details?id=com.termux.api)

## Node.JS on Termux

Termux brings the possibily of running Node.JS on your Android device by simply installing it
with APT (without rooting):

```
apt update
apt install nodejs
````
 
 # Usage

Install the package on yout NPM project by:

```
npm install --save termux-api
```

Import the default object on JavaScript:

```javascript
var api = require('termux-api').default;
```

Or with TypeScript:
```typescript
import default as api from 'termux-api';
```

Now you have a instance of the class TermuxApi as the api variable. To invoke API commands
you must build it using the method createCommand().

The method createCommand() returns an instance of the ApiCommandFactory where you find
one method for each API command you could invoke on Termux-API app. For example, to show
a small popup, or [toast](https://developer.android.com/guide/topics/ui/notifiers/toasts.html)
for those familiarized with Android UI you can use:


```javascript
api.createCommand()
    .toast()
    .setText('Can you see me?')
    .shortDuration()
    .build()
    .run();
```

* line 1: api.createCommand() returns an instance of [ApiCommandFactory](https://github.com/edupsousa/node-termux-api/blob/master/src/lib/ApiCommandFactory.ts) class.
* line 2: ApiCommandFactory.toast() returns an instance of [ToastBuilder](https://github.com/edupsousa/node-termux-api/blob/master/src/lib/builders/ToastBuilder.ts) class.
* line 3: ToastBuilder.setText() sets the text to be displayed and returns the ToastBuilder himself.
* line 4: ToastBuilder.shortDuration() configures the toast to be displayed for a short while and returns himself (ToastBuilder).
* line 5: ToastBuilder.build() builds and return a [ApiCommand](https://github.com/edupsousa/node-termux-api/blob/master/src/lib/ApiCommand.ts) instance.
* line 6: The command is run. 

The process for calling other commands are very similar, you only need to change the
command (line 2) and the options (lines 3 and 4). For example, to vibrate the 
phone for 1 second (1000 ms):

```javascript
api.createCommand()
    .vibrate()
    .setDuration(1000)
    .build()
    .run();
```

You can see all commands available on [ApiCommandFactory](https://github.com/edupsousa/node-termux-api/blob/master/src/lib/ApiCommandFactory.ts) 
source-code. And options for each command are availabe on the correspondent class in the
[builders](https://github.com/edupsousa/node-termux-api/tree/master/src/lib/builders) folder.

### Returning data from the API

Some API commands return data as String or JSON. To gather that data
you could use the instance of [ApiResult](https://github.com/edupsousa/node-termux-api/blob/master/src/lib/ApiResult.ts)
class returned by the method run() by invoking the methods getOutputObject() or getOutputString().

Notice that those 2 methods executes asynchronously returning ES6 
[Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
that resolves to an Object ou a String, respectively.

For example to get a location update from GPS and show the returned object on console:

```javascript
let result = api.createCommand()
            .location()
            .fromGPSProvider()
            .requestOnce()
            .build()
            .run();

result.getOutputObject()
    .then(function(location) {
        console.log('Last known location: ', location);
    });

```

