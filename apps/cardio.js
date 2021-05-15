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
          text: "Cardio Privacy Policy",
          fontSize: 18,
        }),
        Expanded({
          child: Container({
            padding: 10,
            color: "#659b5e",
            child: Column({
              children: [
                Text({
                  text: "Overview:",
                  fontSize: 18,
                }),
                Text({
                  text: "All of your contacts are saved in your device, more specifically inside the cardio app data folder. Absolutely no information is shared or collected by Raw Ware. Privacy is at the core of this application.",
                }),
                Text({
                  text: "App Permissions:",
                  fontSize: 18,
                }),
                Text({
                  text: "- Camera permission is required in order to scan the QR business cards. No data is collected or shared under any circumstances.",
                }),
                Text({
                  text: "- Contacts permission is required in order to import and export contacts to and from the contacts aplication. No contact information is stored or shared by Raw Ware outside your app's storage.",
                }),
                Text({
                  text: "Note: Once you export your contact into the contacts aplication of your device you're now bounded by that aplication's privacy policy and terms of service.",
                }),
              ],
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