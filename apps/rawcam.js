Scaffold({
  body: Container({
    padding: 10,
    child: Column({
      children: [
        GestureDetector({
          onTap: ()=>{
            //Go to the previous page
            window.history.go(-1);
          },
          child: Card({
            child: Image({
              imagePath: "../assets/arrow.svg",
            }),
          }),
        }),
        Text({
          text: "Raw Cam Privacy Policy",
          fontSize: 18,
        }),
        Expanded({
          child: Container({
            padding: 10,
            color: "#659b5e",
            child: Text({
              text: "All of your media is saved into your device. Absolutely no information is shared or collected by Raw Ware. Privacy is at the core of this application.",
            }),
          }),
        }),
        SizedBox({
          height: 20,
        }),
        Image({
          imagePath: "../assets/FacebookCover.png",
          width: 300,
        }),
      ],
    }),
  }),
});