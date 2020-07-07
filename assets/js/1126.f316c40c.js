(window.webpackJsonp=window.webpackJsonp||[]).push([[1126],{1172:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"audio-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#audio-apis"}},[t._v("#")]),t._v(" Audio APIs")]),t._v(" "),s("h2",{attrs:{id:"objective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),s("p",[t._v("In this chapter, you'll learn how to play and record sounds. As with images, you'll see you can play both local and remote sound files, and have programmatic control over that playback.")]),t._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),s("p",[t._v("The audio APIs are part of the larger "),s("code",[t._v("Ti.Media")]),t._v(" module, which contains all the APIs for media-related functionality. Sound related APIs in that module are available in the following namespaces:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("Ti.Media.Sound")]),t._v(" - used for playing basic sounds")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Ti.Media.AudioPlayer")]),t._v(" - used for streaming audio to the device and low-level control of the audio playback")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Ti.Media.AudioRecorder")]),t._v(" - used for recording audio from the device microphone")])])]),t._v(" "),s("h3",{attrs:{id:"playing-basic-sounds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playing-basic-sounds"}},[t._v("#")]),t._v(" Playing basic sounds")]),t._v(" "),s("p",[t._v("You can use the "),s("code",[t._v("Ti.Media.Sound")]),t._v(" object to add beeps and other user-feedback sounds. You can also use it for ambient sounds (that play in the background while the app is active). Keep in mind though that with the Sound object, the entire sound file is loaded into memory before it's played. This increases memory use in your app. It also creates a delay before the sound can be played the first time (while the file is being read into memory). You can set "),s("code",[t._v("sound.preload=true")]),t._v(" to preload the sound, but there's still that delay as the file is read into memory.")]),t._v(" "),s("p",[t._v("The Sound object includes a few useful methods, including "),s("code",[t._v("play()")]),t._v(", "),s("code",[t._v("pause()")]),t._v(", and "),s("code",[t._v("stop()")]),t._v(". The "),s("code",[t._v("url")]),t._v(" property accepts a local file path or a URL to a remote sound file. (The entire sound file must be downloaded before it can be played; it won't be streamed). You can control the volume with either the "),s("code",[t._v("setVolume()")]),t._v(" method or by setting the "),s("code",[t._v("volume")]),t._v(" property. See the "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs"),s("OutboundLink")],1),t._v(" for full information.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create the sound/media object")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sound "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Media"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSound")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your_sound_file.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  preload"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" button "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Click to play sound'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'40'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbutton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("In this sample, we attached an event listener to a button so that the sound plays when the button is clicked. You could add an event listener to a view or window (say, to watch for the "),s("code",[t._v("open")]),t._v(" event) to play the sound while that component is visible. Typically, you'd attach a listener to another component, such as a different view or window, to stop the sound when the window loses focus. This sort of \"background\" sound won't continue playing when the app closes unless you set "),s("code",[t._v("allowBackground=true")]),t._v(", though any buffered portion might continue to play after the app closes.")]),t._v(" "),s("h3",{attrs:{id:"streaming-audio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streaming-audio"}},[t._v("#")]),t._v(" Streaming audio")]),t._v(" "),s("p",[t._v("You can stream audio from a web URL with the "),s("code",[t._v("Ti.Media.AudioPlayer")]),t._v(" object. The AudioPlayer supports pseudo-streaming (of MP3 or other files) as well as "),s("a",{attrs:{href:"http://developer.apple.com/library/ios/#documentation/networkinginternet/conceptual/streamingmediaguide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008332-CH1-DontLinkElementID_39",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML Live Streaming"),s("OutboundLink")],1),t._v(". You could also implement HTML live streaming with a WebView, but the native player gives you easier programmatic control and handling of events within your app's native (non-HTML) code.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" streamer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Media"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAudioPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/somefile.mp3'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstreamer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("When using streaming, you should make sure to account for interruptions, such as receiving a phone call while the audio plays. You can pause and resume the audio automatically by watching a couple of app-level events.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Titanium.App.addEventListener('pause', function(e) {\n  // app is paused during phone call, so pause the stream\n    streamer.setPaused(true);\n  // you could also use streamer.pause()\n});\nTitanium.App.addEventListener('resume', function(e) {\n  // app resumes when call ends, so un-pause the stream\n    streamer.setPaused(false);\n  // or use streamer.start()\n});\n")])])]),s("h3",{attrs:{id:"recording-audio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recording-audio"}},[t._v("#")]),t._v(" Recording audio")]),t._v(" "),s("p",[t._v("You can record audio from the device's microphone using the "),s("code",[t._v("Ti.Media.AudioRecorder")]),t._v(" object. This object includes a few useful methods, including "),s("code",[t._v("start()")]),t._v(", "),s("code",[t._v("pause()")]),t._v("/"),s("code",[t._v("resume()")]),t._v(", and "),s("code",[t._v("stop()")]),t._v(". It also has two key properties that you use to control the quality and size of the recorded audio data. These are:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("compression")]),t._v(" - which specifies the compression type, such as "),s("code",[t._v("Ti.Media.AUDIO_FORMAT_ULAW")]),t._v(" (low-fidelity) or "),s("code",[t._v("Ti.Media.AUDIO_FORMAT_LINEAR_PCM")]),t._v(" (hi-fi, but creates larger files)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("format")]),t._v(" - which specifies the file format type, such as "),s("code",[t._v("Ti.Media.AUDIO_FILEFORMAT_WAVE")])])])]),t._v(" "),s("p",[t._v("See the "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media-module",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Media")]),t._v(" object API docs"),s("OutboundLink")],1),t._v(" for a complete list of compression and format types available in Titanium.")]),t._v(" "),s("h3",{attrs:{id:"hands-on-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hands-on-practice"}},[t._v("#")]),t._v(" Hands-on Practice")]),t._v(" "),s("h4",{attrs:{id:"goal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[t._v("#")]),t._v(" Goal")]),t._v(" "),s("p",[t._v("In this activity, you will write a simple app that will play basic sounds and stream a remote sound file. You'll add a button that when clicked will play a short \"beep\" tone. You'll add another button that when clicked will stream a sound file. You'll also add a sound that plays when a window is active and stops when it loses focus.")]),t._v(" "),s("h4",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),s("p",[t._v("To perform the steps in this activity, you will need two sound files. You can use your own, select sounds from a source like "),s("a",{attrs:{href:"http://www.freesound.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.freesound.org"),s("OutboundLink")],1),t._v(", or download these sounds (from freesound.org): "),s("a",{attrs:{href:"http://wiki.appcelerator.org/download/attachments/19202905/2156__nicstage__lightswitchimpact.mp3",target:"_blank",rel:"noopener noreferrer"}},[t._v("button sound"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"http://wiki.appcelerator.org/download/attachments/19202905/25921__suonho__funkysynth-retweek-talkboxer-wha-116bpm.mp3",target:"_blank",rel:"noopener noreferrer"}},[t._v("window sound"),s("OutboundLink")],1),t._v(" (right-click those links and choose Save). You'll also access a remote mp3 file from freesound.org, so the simulator/emulator or your test device will need network access.")]),t._v(" "),s("h4",{attrs:{id:"steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a new Titanium Mobile app. You can keep the starting code for this app; you'll modify what's there.")])]),t._v(" "),s("li",[s("p",[t._v("Remove "),s("code",[t._v("label1")]),t._v(" (it's definition, and the "),s("code",[t._v("win1.add()")]),t._v(" statement). In its place, add a button with these characteristics:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Title: Click to play sound")])]),t._v(" "),s("li",[s("p",[t._v("Width/height: 200 x40")])]),t._v(" "),s("li",[s("p",[t._v("Top: 20")])])])]),t._v(" "),s("li",[s("p",[t._v("Define a sound object that preloads the sounds/2156__nicstage__lightswitchimpact.mp3 file.")])]),t._v(" "),s("li",[s("p",[t._v("Add an event listener to the button that plays the sound when the button is clicked.")])]),t._v(" "),s("li",[s("p",[t._v("Add another button to win1 with these characteristics:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Title: Click to stream sound")])]),t._v(" "),s("li",[s("p",[t._v("Width/height: 200 x40")])]),t._v(" "),s("li",[s("p",[t._v("Top: 75")])])])]),t._v(" "),s("li",[s("p",[t._v("Define an AudioPlayer that will stream the sound at "),s("a",{attrs:{href:"http://www.freesound.org/data/previews/2/2686_5150-lq.mp3",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.freesound.org/data/previews/2/2686_5150-lq.mp3"),s("OutboundLink")],1),t._v("\nAdd an event listener to your streaming button so that when the button is clicked:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If the streaming player is not playing currently, start the stream and change the button's title to 'Click to pause stream'")])]),t._v(" "),s("li",[s("p",[t._v("If the streaming player is playing, pause the stream and change the button's title back to 'Click to stream sound'")])])])]),t._v(" "),s("li",[s("p",[t._v("Add the app event listeners to pause the stream and restart in the case a call is received during streaming.")])]),t._v(" "),s("li",[s("p",[t._v("On win2, create a looping, preloaded sound that will play the sounds/25921__suonho__funkysynth-retweek-talkboxer-wha-116bpm.mp3 file.")])]),t._v(" "),s("li",[s("p",[t._v("Add an event listener to the tab group that monitors the "),s("code",[t._v("focus")]),t._v(" event. If the tab index is 0 (the first tab), pause the sound. Otherwise, play the sound. This will play the sound when tab 2 is displayed and pause it when tab 1 is active.")])]),t._v(" "),s("li",[s("p",[t._v("Build and test the app in the simulator/emulator.")])])]),t._v(" "),s("h3",{attrs:{id:"windows-development-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-development-considerations"}},[t._v("#")]),t._v(" Windows development considerations")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),s("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),s("p",[t._v("In order to enable background audio for Windows Phone, you need to provide appropriate Capabilities in your "),s("code",[t._v("tiapp.xml")]),t._v(". Windows Phone users are prompted to grant or deny permission when your application attempt to use background audio. Note that background audio does not work on Windows 10 Mobile due to the system resource policy changes.")]),t._v(" "),s("h4",{attrs:{id:"grant-access-to-background-audio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grant-access-to-background-audio"}},[t._v("#")]),t._v(" Grant access to background audio")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Extensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Extension")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Category")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("windows.backgroundTasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Executable")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$targetnametoken$.exe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("EntryPoint")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("TitaniumWindows_Media.AudioBackground"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BackgroundTasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("audio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("BackgroundTasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Extension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Extensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("manifest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"grant-access-to-video-stream-and-audio-stream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grant-access-to-video-stream-and-audio-stream"}},[t._v("#")]),t._v(" Grant access to video stream and audio stream")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Capabilities")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DeviceCapability")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("microphone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DeviceCapability")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("webcam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Capabilities")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"grant-access-to-music-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grant-access-to-music-library"}},[t._v("#")]),t._v(" Grant access to music library")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Capabilities")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Capability")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("musicLibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Capabilities")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("windows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("For more information about audio configuration in "),s("code",[t._v("tiapp.xml")]),t._v(", see "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/#tiapp.xmlandtimodule.xmlReference-Windows-specific"}},[t._v("Windows-specific section")]),t._v(" in "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/"}},[t._v("tiapp.xml and timodule.xml Reference")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"references-and-further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[t._v("#")]),t._v(" References and further reading")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/7.1_audio.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Finished code"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("The "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media-module",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Media")]),t._v(" object API docs"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("In this chapter, you learned how to play and record sounds. You saw you can play both local and remote sound files, and have programmatic control over that playback.")])])}),[],!1,null,null,null);a.default=n.exports}}]);