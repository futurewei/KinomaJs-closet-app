import Pins from "pins";

/************************/
/************************/
/***                  ***/
/***  R E A D    M E  ***/
/***                  ***/
/************************/
/************************/

/* CLOSET SPACE MAPPINGS

1 = necklace
2 = blazer
3 = red tank
4 = purple blouse
5 = heels
6 = shorts
7 = jeans
8 = skirt

*/

/***************************/
/***************************/
/***                     ***/
/***   STATE VARIABLES   ***/
/***                     ***/
/***************************/
/***************************/

var isClosetSpace1Empty = true;
var isClosetSpace2Empty = true;
var isClosetSpace3Empty = true;
var isClosetSpace4Empty = true;
var isClosetSpace5Empty = true;
var isClosetSpace6Empty = true;
var isClosetSpace7Empty = true;
var isClosetSpace8Empty = true;


/*****************************************/
/*****************************************/
/***                                   ***/
/***   SKIN, TEXT, COLOR DEFINITIONS   ***/
/***                                   ***/
/*****************************************/
/*****************************************/

let normalStyle = new Style ({font: 'italic 56px Roboto', color: 'black'});
let whiteSkin = new Skin ({fill: '#FFFFFF'});


let space1EmptyTexture = new Texture("Space1Empty.png");
let space2EmptyTexture = new Texture("Space2Empty.png");
let space3EmptyTexture = new Texture("Space3Empty.png");
let space4EmptyTexture = new Texture("Space4Empty.png");
let space5EmptyTexture = new Texture("Space5Empty.png");
let space6EmptyTexture = new Texture("Space6Empty.png");
let space7EmptyTexture = new Texture("Space7Empty.png");
let space8EmptyTexture = new Texture("Space8Empty.png");


let space1FullTexture = new Texture("Space1Full.png");
let space2FullTexture = new Texture("Space2Full.png");
let space3FullTexture = new Texture("Space3Full.png");
let space4FullTexture = new Texture("Space4Full.png");
let space5FullTexture = new Texture("Space5Full.png");
let space6FullTexture = new Texture("Space6Full.png");
let space7FullTexture = new Texture("Space7Full.png");
let space8FullTexture = new Texture("Space8Full.png");

let space1NotificationTexture = new Texture("necklaceReady.png")
let space2NotificationTexture = new Texture("blazerReady.png")
let space3NotificationTexture = new Texture("redTankReady.png")
let space4NotificationTexture = new Texture("purpleBlouseReady.png")
let space5NotificationTexture = new Texture("redStilettosReady.png")
let space6NotificationTexture = new Texture("shortsReady.png")
let space7NotificationTexture = new Texture("grayJeansReady.png")
let space8NotificationTexture = new Texture("whiteSkirtReady.png")



let space1EmptySkin = new Skin({
      width: 80, height: 120,
      texture: space1EmptyTexture,
      fill: "white",
      aspect: "fit"
});

let space2EmptySkin = new Skin({
      width: 80, height: 120,
      texture: space2EmptyTexture,
      fill: "white",
      aspect: "fit"
});

let space3EmptySkin = new Skin({
      width: 80, height: 120,
      texture: space3EmptyTexture,
      fill: "white",
      aspect: "fit"
});

let space4EmptySkin = new Skin({
      width: 80, height: 120,
      texture: space4EmptyTexture,
      fill: "white",
      aspect: "fit"
});

let space5EmptySkin = new Skin({
      width: 80, height: 120,
      texture: space5EmptyTexture,
      fill: "white",
      aspect: "fit"
});

let space6EmptySkin = new Skin({
      width: 80, height: 120,
      texture: space6EmptyTexture,
      fill: "white",
      aspect: "fit"
});

let space7EmptySkin = new Skin({
      width: 80, height: 120,
      texture: space7EmptyTexture,
      fill: "white",
      aspect: "fit"
});

let space8EmptySkin = new Skin({
      width: 80, height: 120,
      texture: space8EmptyTexture,
      fill: "white",
      aspect: "fit"
});

let space1FullSkin = new Skin({
      width: 80, height: 120,
      texture: space1FullTexture,
      fill: "white",
      aspect: "fit"
});

let space2FullSkin = new Skin({
      width: 80, height: 120,
      texture: space2FullTexture,
      fill: "white",
      aspect: "fit"
});

let space3FullSkin = new Skin({
      width: 80, height: 120,
      texture: space3FullTexture,
      fill: "white",
      aspect: "fit"
});

let space4FullSkin = new Skin({
      width: 80, height: 120,
      texture: space4FullTexture,
      fill: "white",
      aspect: "fit"
});

let space5FullSkin = new Skin({
      width: 80, height: 120,
      texture: space5FullTexture,
      fill: "white",
      aspect: "fit"
});

let space6FullSkin = new Skin({
      width: 80, height: 120,
      texture: space6FullTexture,
      fill: "white",
      aspect: "fit"
});

let space7FullSkin = new Skin({
      width: 80, height: 120,
      texture: space7FullTexture,
      fill: "white",
      aspect: "fit"
});

let space8FullSkin = new Skin({
      width: 80, height: 120,
      texture: space8FullTexture,
      fill: "white",
      aspect: "fit"
});

let space1NotificationSkin = new Skin({
      width: 320, height: 240,
      texture: space1NotificationTexture,
      fill: "white",
      aspect: "fit"
});

let space2NotificationSkin = new Skin({
      width: 320, height: 240,
      texture: space2NotificationTexture,
      fill: "white",
      aspect: "fit"
});

let space3NotificationSkin = new Skin({
      width: 320, height: 240,
      texture: space3NotificationTexture,
      fill: "white",
      aspect: "fit"
});

let space4NotificationSkin = new Skin({
      width: 320, height: 240,
      texture: space4NotificationTexture,
      fill: "white",
      aspect: "fit"
});

let space5NotificationSkin = new Skin({
      width: 320, height: 240,
      texture: space5NotificationTexture,
      fill: "white",
      aspect: "fit"
});

let space6NotificationSkin = new Skin({
      width: 320, height: 240,
      texture: space6NotificationTexture,
      fill: "white",
      aspect: "fit"
});

let space7NotificationSkin = new Skin({
      width: 320, height: 240,
      texture: space7NotificationTexture,
      fill: "white",
      aspect: "fit"
});

let space8NotificationSkin = new Skin({
      width: 320, height: 240,
      texture: space8NotificationTexture,
      fill: "white",
      aspect: "fit"
});


/*********************************/
/*********************************/
/***                           ***/
/***   CONTAINER DEFINITION    ***/
/***                           ***/
/*********************************/
/*********************************/

var label1 = new Label({height: 120, width: 80, style: normalStyle, string: "1"});
var label2 = new Label({height: 120, width: 80, style: normalStyle, string: "2"});
var label3 = new Label({height: 120, width: 80, style: normalStyle, string: "3"});
var label4 = new Label({height: 120, width: 80, style: normalStyle, string: "4"});
var label5 = new Label({height: 120, width: 80, style: normalStyle, string: "5"});
var label6 = new Label({height: 120, width: 80, style: normalStyle, string: "6"});
var label7 = new Label({height: 120, width: 80, style: normalStyle, string: "7"});
var label8 = new Label({height: 120, width: 80, style: normalStyle, string: "8"});

let closetSpace1 = new Container({
  name: 'closetSpace1', width:80, height:120, skin: space1EmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
            if (isClosetSpace1Empty) {
                application.distribute("closetSpaceSensor1On");
            } else {
                application.distribute("closetSpaceSensor1Off");
            }
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor1Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace1Empty == true) {
                    isClosetSpace1Empty = false;
                    closetSpace1.skin = space1FullSkin;
                    // show addition
                    trace("FIRST ADD" + "\n");
                }
                isClosetSpace1Empty = false;
                closetSpace1.skin = space1FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace1Empty == false) {
                    isClosetSpace1Empty = true;
                    closetSpace1.skin = space1EmptySkin;                    
                    // show removal
                    application.distribute("space1NotificationToggle", 1);
                }


                isClosetSpace1Empty = true;
                closetSpace1.skin = space1EmptySkin;

            }
        },

    })

});

let closetSpace2 = new Container({
  name: 'closetSpace2', width:80, height:120, skin: space2EmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
            if (isClosetSpace2Empty) {
                application.distribute("closetSpaceSensor2On");
            } else {
                application.distribute("closetSpaceSensor2Off");
            }
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor2Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace2Empty == true) {
                    isClosetSpace2Empty = false;
                    closetSpace2.skin = space2FullSkin;
                    // show addition
                    trace("FIRST ADD" + "\n");

                }


                isClosetSpace2Empty = false;
                closetSpace2.skin = space2FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace2Empty == false) {
                    isClosetSpace2Empty = true;
                    closetSpace2.skin = space2EmptySkin;                    
                    // show removal
                    application.distribute("space2NotificationToggle", 1);

                }


                isClosetSpace2Empty = true;
                closetSpace2.skin = space2EmptySkin;

            }
        },

    })

});
let closetSpace3 = new Container({
  name: 'closetSpace3', width:80, height:120, skin: space3EmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
            if (isClosetSpace3Empty) {
                application.distribute("closetSpaceSensor3On");
            } else {
                application.distribute("closetSpaceSensor3Off");
            }
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor3Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace3Empty == true) {
                    isClosetSpace3Empty = false;
                    closetSpace3.skin = space3FullSkin;
                    // show Removal
                }


                isClosetSpace3Empty = false;
                closetSpace3.skin = space3FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace3Empty == false) {
                    isClosetSpace3Empty = true;
                    closetSpace3.skin = space3EmptySkin;                    
                }


                isClosetSpace3Empty = true;
                closetSpace3.skin = space3EmptySkin;

            }
        },

    })

});

let closetSpace4 = new Container({
  name: 'closetSpace4', width:80, height:120, skin: space4EmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
            if (isClosetSpace4Empty) {
                application.distribute("closetSpaceSensor4On");
            } else {
                application.distribute("closetSpaceSensor4Off");
            }
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor4Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace4Empty == true) {
                    isClosetSpace4Empty = false;
                    closetSpace4.skin = space4FullSkin;
                    // show Removal
                }


                isClosetSpace4Empty = false;
                closetSpace4.skin = space4FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace4Empty == false) {
                    isClosetSpace4Empty = true;
                    closetSpace4.skin = space4EmptySkin;                    
                }


                isClosetSpace4Empty = true;
                closetSpace4.skin = space4EmptySkin;

            }
        },

    })

});

let closetSpace5 = new Container({
  name: 'closetSpace5', width:80, height:120, skin: space5EmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
            if (isClosetSpace5Empty) {
                application.distribute("closetSpaceSensor5On");
            } else {
                application.distribute("closetSpaceSensor5Off");
            }
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor5Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace5Empty == true) {
                    isClosetSpace5Empty = false;
                    closetSpace5.skin = space5FullSkin;
                    // show Removal
                }


                isClosetSpace5Empty = false;
                closetSpace5.skin = space5FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace5Empty == false) {
                    isClosetSpace5Empty = true;
                    closetSpace5.skin = space5EmptySkin;                    
                }


                isClosetSpace5Empty = true;
                closetSpace5.skin = space5EmptySkin;

            }
        },

    })

});

let closetSpace6 = new Container({
  name: 'closetSpace6', width:80, height:120, skin: space6EmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
            if (isClosetSpace6Empty) {
                application.distribute("closetSpaceSensor6On");
            } else {
                application.distribute("closetSpaceSensor6Off");
            }
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor6Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace6Empty == true) {
                    isClosetSpace6Empty = false;
                    closetSpace6.skin = space6FullSkin;
                    // show Removal
                }


                isClosetSpace6Empty = false;
                closetSpace6.skin = space6FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace6Empty == false) {
                    isClosetSpace6Empty = true;
                    closetSpace6.skin = space6EmptySkin;                    
                }


                isClosetSpace6Empty = true;
                closetSpace6.skin = space6EmptySkin;

            }
        },

    })

});

let closetSpace7 = new Container({
  name: 'closetSpace7', width:80, height:120, skin: space7EmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
            if (isClosetSpace7Empty) {
                application.distribute("closetSpaceSensor7On");
            } else {
                application.distribute("closetSpaceSensor7Off");
            }
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor7Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace7Empty == true) {
                    isClosetSpace7Empty = false;
                    closetSpace7.skin = space7FullSkin;
                    // show Removal
                }


                isClosetSpace7Empty = false;
                closetSpace7.skin = space7FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace7Empty == false) {
                    isClosetSpace7Empty = true;
                    closetSpace7.skin = space7EmptySkin;                    
                }


                isClosetSpace7Empty = true;
                closetSpace7.skin = space7EmptySkin;

            }
        },

    })

});

let closetSpace8 = new Container({
  name: 'closetSpace8', width:80, height:120, skin: space8EmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
            if (isClosetSpace8Empty) {
                application.distribute("closetSpaceSensor8On");
            } else {
                application.distribute("closetSpaceSensor8Off");
            }
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor8Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace8Empty == true) {
                    isClosetSpace8Empty = false;
                    closetSpace8.skin = space8FullSkin;
                    // show addition
                }


                isClosetSpace8Empty = false;
                closetSpace8.skin = space8FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace8Empty == false) {
                    isClosetSpace8Empty = true;
                    closetSpace8.skin = space8EmptySkin;                    
                }


                isClosetSpace8Empty = true;
                closetSpace8.skin = space8EmptySkin;

            }
        },

    })

});

let row1 = new Line({
  name: 'row1', top: 0, left: 0, right: 0, height: 120, skin: whiteSkin,
  active: true,
  contents: [
    closetSpace1,
    closetSpace2,
    closetSpace3,
    closetSpace4
  ]
})

let row2 = new Line({
  name: 'row2', top: 0, left: 0, right: 0, height: 120, skin: whiteSkin,
  active: true,
  contents: [
    closetSpace5,
    closetSpace6,
    closetSpace7,
    closetSpace8
  ]
})


let mainContainer = new Column({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true,
//    skin: new Skin({ fill: $.backgroundColor }),
    contents: [
/*
        Label($, {
            top: 70, bottom: 70, left: 70, right: 70,
            behavior: Behavior({
            	onValueChanged: function(content, result) {
           			if (result) {
           				content.string = result;
           			} else {
           				content.string = 0;
           			}
           		},
                onAnalogValueChanged: function(content, result) {
                    content.string = result;
                }
            }),
            style: textStyle,
            string: $.string
        }),

*/  row1,
    row2

    ]
});

let space1Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: space1NotificationSkin,
    active: true,
    contents: [
        label1
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space1NotificationToggle", 0)            
        }
    })

});

let space2Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: space2NotificationSkin,
    active: true,
    contents: [
        label1
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space2NotificationToggle", 0)            
        }
    })

});


/******************************************/
/******************************************/
/***                                    ***/
/***   PINS AND BEHAVIORS DEFINITION    ***/
/***                                    ***/
/******************************************/
/******************************************/



class AppBehavior extends Behavior {
    onLaunch(application) {
        Pins.configure({
            closetSpaceSensor1: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 51, direction: "output" },
                }
            }, 
            closetSpaceSensor2: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 52, direction: "output" },
                }
            },
            closetSpaceSensor3: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 53, direction: "output" },
                }
            }, 
            closetSpaceSensor4: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 54, direction: "output" },
                }
            }, 
            closetSpaceSensor5: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 55, direction: "output" },
                }
            }, 
            closetSpaceSensor6: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 56, direction: "output" },
                }
            },
            closetSpaceSensor7: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 57, direction: "output" },
                }
            },             
            closetSpaceSensor8: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 58, direction: "output" },
                }
            }, 
        },  success => {
            if (success) {   	
                Pins.share("ws", {zeroconf: true, name: "pins-share-led"});
                application.add(mainContainer);
                application.distribute("initializePins");
                application.distribute("readPins");

            } else {
                    application.add(mainContainer);
//                   application.add(new MainContainer({ string: "Error", backgroundColor: "red" }));
               };
        });
    }

    initializePins(application, value) {
            Pins.invoke("/closetSpaceSensor2/write", 1);
            isClosetSpace2Empty = false;
            Pins.invoke("/closetSpaceSensor3/write", 1);
            isClosetSpace3Empty = false;
            Pins.invoke("/closetSpaceSensor5/write", 1);
            isClosetSpace5Empty = false;
            Pins.invoke("/closetSpaceSensor6/write", 1);
            isClosetSpace5Empty = false;
    }
    readPins(application, value) {
            Pins.repeat("/closetSpaceSensor1/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor1Read", value);
            });
            Pins.repeat("/closetSpaceSensor2/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor2Read", value);
            });
            Pins.repeat("/closetSpaceSensor3/read", 83, value => {
//               trace(value + "\n");
            application.distribute("onClosetSpaceSensor3Read", value);
            });
            Pins.repeat("/closetSpaceSensor4/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor4Read", value);
            });
            Pins.repeat("/closetSpaceSensor5/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor5Read", value);
            });
            Pins.repeat("/closetSpaceSensor6/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor6Read", value);
            });
            Pins.repeat("/closetSpaceSensor7/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor7Read", value);
            });
            Pins.repeat("/closetSpaceSensor8/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor8Read", value);
            });

    }
    closetSpaceSensor1On(application, value) {
            Pins.invoke("/closetSpaceSensor1/write", 1);        
    }
    closetSpaceSensor1Off(application, value) {
            Pins.invoke("/closetSpaceSensor1/write", 0);        
    }
    closetSpaceSensor2On(application, value) {
            Pins.invoke("/closetSpaceSensor2/write", 1);        
    }
    closetSpaceSensor2Off(application, value) {
            Pins.invoke("/closetSpaceSensor2/write", 0);        
    }
    closetSpaceSensor3On(application, value) {
            Pins.invoke("/closetSpaceSensor3/write", 1);        
    }
    closetSpaceSensor3Off(application, value) {
            Pins.invoke("/closetSpaceSensor3/write", 0);        
    }
    closetSpaceSensor4On(application, value) {
            Pins.invoke("/closetSpaceSensor4/write", 1);        
    }
    closetSpaceSensor4Off(application, value) {
            Pins.invoke("/closetSpaceSensor4/write", 0);        
    }
    closetSpaceSensor5On(application, value) {
            Pins.invoke("/closetSpaceSensor5/write", 1);        
    }
    closetSpaceSensor5Off(application, value) {
            Pins.invoke("/closetSpaceSensor5/write", 0);        
    }
    closetSpaceSensor6On(application, value) {
            Pins.invoke("/closetSpaceSensor6/write", 1);        
    }
    closetSpaceSensor6Off(application, value) {
            Pins.invoke("/closetSpaceSensor6/write", 0);        
    }    
    closetSpaceSensor7On(application, value) {
            Pins.invoke("/closetSpaceSensor7/write", 1);        
    }
    closetSpaceSensor7Off(application, value) {
            Pins.invoke("/closetSpaceSensor7/write", 0);        
    }    
    closetSpaceSensor8On(application, value) {
            Pins.invoke("/closetSpaceSensor8/write", 1);        
    }
    closetSpaceSensor8Off(application, value) {
            Pins.invoke("/closetSpaceSensor8/write", 0);        
    }
    space1NotificationToggle(application, value) {
        if (value == 1) {
            application.add(space1Notification);
        } else if (value == 0) {
            application.remove(space1Notification);
        }
    }
    space2NotificationToggle(application, value) {
        if (value == 1) {
            application.add(space2Notification);
        } else if (value == 0) {
            application.remove(space2Notification);
        }
    }

}

application.behavior = new AppBehavior();