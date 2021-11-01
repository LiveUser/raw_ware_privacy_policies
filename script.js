Scaffold({
  body: Column({
    backgroundColor: "white",
    children: [
      Container({
        margin: 10,
        child: Image({
          imagePath: "./assets/FacebookCover.png",
          width: 300,
        }),
      }),
      Expanded({
        child: Container({
          margin: 10,
          padding: 10,
          color: "#43423e",
          child: Column({
            children: [
              Link({
                child: Text({
                  text: "- Generic strict privacy policy",
                  color: "white",
                }),
                link: "./apps/generic_strict_policy.html",
                openLink: OpenLink.thisTab,
              }),
              Link({
                child: Text({
                  text: "- Raw Camera Privacy policy",
                  color: "white",
                }),
                link: "./apps/rawcam.html",
                openLink: OpenLink.thisTab,
              }),
              Link({
                child: Text({
                  text: "- Cardio Privacy Policy",
                  color: "white",
                }),
                link: "./apps/cardio.html",
              }),
            ],
          }),
        }),
      }),
    ],
  }),
});