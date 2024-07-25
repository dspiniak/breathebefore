BreatheBefore is an iOS app that asks you to breathe before using any social media app.

Sometimes, we use social media to cope with anxiety and stress, keeping you stuck in a stress loop. By breathing before entering social media, you engage the parasympathetic system, helping you calm down. Then, you can consciously decide to open social media.

To use BreatheBefore, you have to program an iOS Shortcut and automation, so the BreatheBefore is opened every time you use social media.

Steps:
1. Open iOS Shortcuts app.
You'll need to create a new automation for each social media app that you want to use BreatheBefore with. Below, we'll show an example for Instagram, the same applies to Facebook, X, and TikTok:
2. Create an "automation" that runs every time you open [Instagram] and has the following custom actions:
- If clipboard is not ["instagram"] (note the all small caps here): open BreatheBefore app and then copy to Clipboard the Current Date
- Otherwise, open [Instagram].

BreatheBefore was built using react native and expo. It relies on the native iOS Clipboard and iOS Shortcuts app (in the future, it could have a plug-and-play native third-party iOS Shortcut app).