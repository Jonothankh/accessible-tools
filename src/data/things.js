const things = [
    {
        categories: ["Vision", "Speech", "Hearing", "Neurodiversity"],
        image: "immersive-reader.jpeg",
        title: "Microsoft Immersive Reader",
        description: "All-in-one tool for easier reading and text to speech.",
        platformSupport: ["browser", "windows", "macos", "ios", "android"],
        links: {
            "Get Immersive Reader": "https://www.onenote.com/learningtools",
            "How Immersive Reader works": "https://content.cloudguides.com/en-us/guides/Help%20students%20read%20more%20effectively"
        }
    },
    {
        categories: ["Vision"],
        image: "seeing-ai.jpeg",
        title: "Microsoft Seeing AI",
        description: "An app that narrates the world around you.",
        platformSupport: ["ios"],
        links: {
            "Get Seeing AI": "https://www.onenote.com/learningtools",
        }
    },
    {
        categories: ["Vision", "Neurodiversity"],
        image: "assistant-voice-typing.webp",
        title: "Built-in dictation",
        description: "Dictation services built-in to devices. Android's Gboard and Windows 11 lead in terms of automatic punctuation, however voice accuracy is pretty good across the baord.",
        platformSupport: ["windows", "macos", "ios", "android"],
        links: {
            "How to use voice typing on Windows": "https://support.microsoft.com/en-us/windows/speech-voice-activation-inking-typing-and-privacy-149e0e60-7c93-dedd-a0d8-5731b71a4fef",
            "How to use dictation on MacOS": "https://support.apple.com/en-gb/guide/mac-help/mh40584/mac",
            "How to use dictation on iOS": "https://support.apple.com/en-gb/guide/iphone/iph2c0651d2/ios",
            "How to use Talk to write on Android": "https://support.google.com/gboard/answer/2781851?hl=en-GB&co=GENIE.Platform%3DAndroid"
        }
    },
    {
        categories: ["Hearing"],
        image: "live-caption.jpeg",
        title: "Built-in captioning",
        description: "Captioning services built-in to devices. Note that some Android devices have AI powered Live Caption, which captions any audio even if it hasn't got captions.",
        platformSupport: ["windows", "macos", "ios", "android"],
        links: {
            "How to use captions on Windows": "https://support.microsoft.com/en-us/windows/change-caption-settings-135c465b-8cfd-3bac-9baf-4af74bc0069a",
            "How to use captions on MacOS": "https://support.apple.com/en-gb/guide/mac-help/mchlc1cb8d54/mac",
            "How to use captions on iOS": "https://support.apple.com/en-gb/guide/iphone/iph3e2e23d1/ios",
            "How to use captions on Android": "https://support.google.com/accessibility/android/answer/6006554?hl=en-GB",
            "How to use Live Caption on Android": "https://support.google.com/accessibility/android/answer/9350862?hl=en-GB"
        }
    },
    {
        categories: ["Vision", "Mobility"],
        image: "soundscape.jpeg",
        title: "Microsoft Soundscape",
        description: "A map delivered in 3D sound.",
        platformSupport: ["ios"],
        links: {
            "Download Soundscape on iOS": "https://apps.apple.com/us/app/microsoft-soundscape/id1240320677?ls=1"
        }
    },
    {
        categories: ["Hearing"],
        image: "petralex.jpeg",
        title: "Petralex",
        description: "Phone-based hearing aid.",
        platformSupport: ["ios", "android"],
        links: {
            "Download Petralex on iOS": "https://itunes.apple.com/us/app/apple-store/id816133779?pt=10593899&ct=sait&mt=8",
            "Download Petralex on Android": "https://play.google.com/store/apps/details?id=com.it4you.petralex"
        }
    },
    {
        categories: ["Vision"],
        image: "be-my-eyes.png",
        title: "Be My Eyes",
        description: "Be My Eyes connects people needing sighted support with volunteers and companies through live video around the world.",
        platformSupport: ["ios", "android"],
        links: {
            "Download Be My Eyes on iOS": "https://apps.apple.com/app/apple-store/id905177575?pt=15492800&ct=BeMyEyesWebsite&mt=8",
            "Download Be My Eyes on Android": "https://play.google.com/store/apps/details?id=com.bemyeyes.bemyeyes"
        }
    }
]

export default things;