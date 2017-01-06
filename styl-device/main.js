import Pins from "pins";
import {
	allItems
} from 'items';
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
var isClosetSpace9Empty = true;
var isClosetSpace10Empty = true;
var isClosetSpace11Empty = true;
var isClosetSpace12Empty = true;

/*****************************************/
/*****************************************/
/***                                   ***/
/***   SKIN, TEXT, COLOR DEFINITIONS   ***/
/***                                   ***/
/*****************************************/
/*****************************************/

let normalStyle = new Style ({font: 'italic 56px Roboto', color: 'black'});
let whiteSkin = new Skin ({fill: '#FFFFFF'});


let spaceEmptyTexture = new Texture("SpaceEmpty.png");
let space1FullTexture = new Texture("Space1Full.png");
let space2FullTexture = new Texture("Space2Full.png");
let space3FullTexture = new Texture("Space3Full.png");
let space4FullTexture = new Texture("Space4Full.png");
let space5FullTexture = new Texture("Space5Full.png");
let space6FullTexture = new Texture("Space6Full.png");
let space7FullTexture = new Texture("Space7Full.png");
let space8FullTexture = new Texture("Space8Full.png");
let space9FullTexture = new Texture("Space9Full.png");
let space10FullTexture = new Texture("Space10Full.png");
let space11FullTexture = new Texture("Space11Full.png");
let space12FullTexture = new Texture("Space12Full.png");


let pickupTexture = new Texture("pickupspace.png");

let spaceNotificationTexture = new Texture("readytopickup.png")

let backgroundTexture = new Texture("background.png")

let backgroundSkin = new Skin({
      width: 320, height: 240,
      texture: backgroundTexture,
      fill: "white",
      aspect: "fit"
});
let spaceEmptySkin = new Skin({
      width: 64, height: 64,
      texture: spaceEmptyTexture,
      fill: "white",
      aspect: "fit"
});
let space1FullSkin = new Skin({
      width: 64, height: 64,
      texture: space1FullTexture,
      fill: "white",
      aspect: "fit"
});
let space2FullSkin = new Skin({
      width: 64, height: 64,
      texture: space2FullTexture,
      fill: "white",
      aspect: "fit"
});
let space3FullSkin = new Skin({
      width: 64, height: 64,
      texture: space3FullTexture,
      fill: "white",
      aspect: "fit"
});
let space4FullSkin = new Skin({
      width: 64, height: 64,
      texture: space4FullTexture,
      fill: "white",
      aspect: "fit"
});
let space5FullSkin = new Skin({
      width: 64, height: 64,
      texture: space5FullTexture,
      fill: "white",
      aspect: "fit"
});
let space6FullSkin = new Skin({
      width: 64, height: 64,
      texture: space6FullTexture,
      fill: "white",
      aspect: "fit"
});
let space7FullSkin = new Skin({
      width: 64, height: 64,
      texture: space7FullTexture,
      fill: "white",
      aspect: "fit"
});
let space8FullSkin = new Skin({
      width: 64, height: 64,
      texture: space8FullTexture,
      fill: "white",
      aspect: "fit"
});
let space9FullSkin = new Skin({
      width: 64, height: 64,
      texture: space9FullTexture,
      fill: "white",
      aspect: "fit"
});
let space10FullSkin = new Skin({
      width: 64, height: 64,
      texture: space10FullTexture,
      fill: "white",
      aspect: "fit"
});
let space11FullSkin = new Skin({
      width: 64, height: 64,
      texture: space11FullTexture,
      fill: "white",
      aspect: "fit"
});
let space12FullSkin = new Skin({
      width: 64, height: 64,
      texture: space12FullTexture,
      fill: "white",
      aspect: "fit"
});
let pickupSkin = new Skin({
      width: 64, height: 64,
      texture: pickupTexture,
      fill: "white",
      aspect: "fit"
});

let spaceNotificationSkin = new Skin({
      width: 320, height: 240,
      texture: spaceNotificationTexture,
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
var label9 = new Label({height: 120, width: 80, style: normalStyle, string: "9"});
var label10 = new Label({height: 120, width: 80, style: normalStyle, string: "10"});
var label11 = new Label({height: 120, width: 80, style: normalStyle, string: "11"});
var label12 = new Label({height: 120, width: 80, style: normalStyle, string: "12"});

let closetSpace1 = new Container({
  name: 'closetSpace1', width:64, height:64, skin: spaceEmptySkin,
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
                }
                isClosetSpace1Empty = false;
                closetSpace1.skin = space1FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace1Empty == false) {
                    isClosetSpace1Empty = true;
                    closetSpace1.skin = spaceEmptySkin;                    
                    // show removal
                    application.distribute("space1NotificationToggle", 1);
                }


                isClosetSpace1Empty = true;
                closetSpace1.skin = spaceEmptySkin;

            }
        },

    })

});

let closetSpace2 = new Container({
  name: 'closetSpace2', width:64, height:64, skin: spaceEmptySkin,
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

                }

                isClosetSpace2Empty = false;
                closetSpace2.skin = space2FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace2Empty == false) {
                    isClosetSpace2Empty = true;
                    closetSpace2.skin = spaceEmptySkin;                    
                    // show removal
                    application.distribute("space2NotificationToggle", 1);

                }


                isClosetSpace2Empty = true;
                closetSpace2.skin = spaceEmptySkin;

            }
        },

    })

});
let closetSpace3 = new Container({
  name: 'closetSpace3', width:64, height:64, skin: spaceEmptySkin,
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
                    closetSpace3.skin = spaceEmptySkin;                    
                    application.distribute("space3NotificationToggle", 1);
                }


                isClosetSpace3Empty = true;
                closetSpace3.skin = spaceEmptySkin;

            }
        },

    })

});

let closetSpace4 = new Container({
  name: 'closetSpace4', width:64, height:64, skin: spaceEmptySkin,
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
                    closetSpace4.skin = spaceEmptySkin;                    
                    application.distribute("space4NotificationToggle", 1);
                }


                isClosetSpace4Empty = true;
                closetSpace4.skin = spaceEmptySkin;

            }
        },

    })

});

let closetSpace5 = new Container({
  name: 'closetSpace5', width:64, height:64, skin: spaceEmptySkin,
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
                    closetSpace5.skin = spaceEmptySkin;                    
                    application.distribute("space5NotificationToggle", 1);
                }

                isClosetSpace5Empty = true;
                closetSpace5.skin = spaceEmptySkin;

            }
        },

    })

});

let closetSpace6 = new Container({
  name: 'closetSpace6', width:64, height:64, skin: spaceEmptySkin,
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
                    closetSpace6.skin = spaceEmptySkin;                    
                    application.distribute("space6NotificationToggle", 1);
                }


                isClosetSpace6Empty = true;
                closetSpace6.skin = spaceEmptySkin;

            }
        },

    })

});

let closetSpace7 = new Container({
  name: 'closetSpace7', width:64, height:64, skin: spaceEmptySkin,
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
                    closetSpace7.skin = spaceEmptySkin;                    
                    application.distribute("space7NotificationToggle", 1);
                }


                isClosetSpace7Empty = true;
                closetSpace7.skin = spaceEmptySkin;

            }
        },

    })

});

let closetSpace8 = new Container({
  name: 'closetSpace8', width:64, height:64, skin: spaceEmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
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
                    closetSpace8.skin = spaceEmptySkin;                    
                    application.distribute("space8NotificationToggle", 1);

                }
                isClosetSpace8Empty = true;
                closetSpace8.skin = spaceEmptySkin;

            }
        },

    })

});

//new
let closetSpace9 = new Container({
  name: 'closetSpace9', width:64, height:64, skin: spaceEmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor9Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace9Empty == true) {
                    isClosetSpace9Empty = false;
                    closetSpace9.skin = space9FullSkin;
                    // show addition
                }

                isClosetSpace9Empty = false;
                closetSpace9.skin = space9FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace9Empty == false) {
                    isClosetSpace9Empty = true;
                    closetSpace9.skin = spaceEmptySkin;                    
                    application.distribute("space9NotificationToggle", 1);
                }
                isClosetSpace9Empty = true;
                closetSpace9.skin = spaceEmptySkin;
            }
        },
    })
});



//new
let closetSpace10 = new Container({
  name: 'closetSpace10', width:64, height:64, skin: spaceEmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor10Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace10Empty == true) {
                    isClosetSpace10Empty = false;
                    closetSpace10.skin = space10FullSkin;
                    // show addition
                }
                isClosetSpace10Empty = false;
                closetSpace10.skin = space10FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace10Empty == false) {
                    isClosetSpace10Empty = true;
                    closetSpace10.skin = spaceEmptySkin;                    
                    application.distribute("space10NotificationToggle", 1);
                }
                isClosetSpace10Empty = true;
                closetSpace10.skin = spaceEmptySkin;
            }
        },
    })
});


//new
let closetSpace11 = new Container({
  name: 'closetSpace11', width:64, height:64, skin: spaceEmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor11Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace11Empty == true) {
                    isClosetSpace11Empty = false;
                    closetSpace11.skin = space11FullSkin;
                    // show addition
                }
                isClosetSpace11Empty = false;
                closetSpace11.skin = space11FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace11Empty == false) {
                    isClosetSpace11Empty = true;
                    closetSpace11.skin = spaceEmptySkin;                    
                    application.distribute("space11NotificationToggle", 1);
                }
                isClosetSpace11Empty = true;
                closetSpace11.skin = spaceEmptySkin;
            }
        },
    })
});


//new
let closetSpace12 = new Container({
  name: 'closetSpace12', width:64, height:64, skin: spaceEmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor12Read(container, value) {
            if (value) {
            // onAdd
                if (isClosetSpace12Empty == true) {
                    isClosetSpace12Empty = false;
                    closetSpace12.skin = space12FullSkin;
                    // show addition
                }
                isClosetSpace12Empty = false;
                closetSpace12.skin = space12FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace12Empty == false) {
                    isClosetSpace12Empty = true;
                    closetSpace12.skin = spaceEmptySkin;                    
                    application.distribute("space12NotificationToggle", 1);
                }
                isClosetSpace12Empty = true;
                closetSpace12.skin = spaceEmptySkin;
            }
        },
    })
});

let pickup1 = new Container({
  name: 'pickup1', width:66, height:64, skin: pickupSkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
          
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor12Read(container, value) {
         
        },
    })
});
let pickup2 = new Container({
  name: 'pickup2', width:66, height:64, skin: pickupSkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
          
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor12Read(container, value) {
         
        },
    })
});
let pickup3 = new Container({
  name: 'pickup3', width:66, height:64, skin: pickupSkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
          
        },
        onTouchEnded(container) {
        },
        onClosetSpaceSensor12Read(container, value) {
         
        },
    })
});
/*
let pickupSpace1 = new Container({
  name: 'pickupSpace1', width:64, height:64, skin: pickEmptySkin,
  active: true,
  contents: [
  ],
  behavior: Behavior({
        onTouchBegan(container) {
            if (ispickup1Empty) {
                application.distribute("closetSpaceSensor8On"); //???
            } else {
                application.distribute("closetSpaceSensor8Off"); //???
            }
        },
        onTouchEnded(container) {
        },
        onpickupSpace1Read(container, value) {
            if (value) {
            // onAdd
                if (ispickup1Empty == true) {
                    ispickupEmpty = false;
                    pickupSpace1.skin = pickup1FullSkin;
                    // show addition
                }
                ispickup1Empty = false;
                closetSpace12.skin = space12FullSkin;
            } else {
            // onRemoval
                if (isClosetSpace12Empty == false) {
                    isClosetSpace12Empty = true;
                    closetSpace12.skin = space12EmptySkin;                    
                    application.distribute("space12NotificationToggle", 1);
                }
                isClosetSpace12Empty = true;
                closetSpace12.skin = space12EmptySkin;
            }
        },
    })
});

*/


let col1 = new Column({
  name: 'col1', top: 50, left: 0, height: 189, skin: whiteSkin,
  active: true,
  contents: [
    closetSpace1,
    closetSpace2,
    closetSpace3
  ]
})

let col2 = new Column({
  name: 'col2', top: 50, left: 0, height: 189, skin: whiteSkin,
  active: true,
 contents: [
    closetSpace4,
    closetSpace5,
    closetSpace6

  ]
})

let col_mid = new Column({
  name: 'col_mid', top: 50, left: 0, height: 189, skin: whiteSkin,
  active: true,
  contents: [
    pickup1,
    pickup2,
    pickup3 
  ]
})
let col3 = new Column({
  name: 'col3', top: 50, left:0, height: 189, skin: whiteSkin,
  active: true,
  contents: [
    closetSpace7,
    closetSpace8,
    closetSpace9
  ]
})

let col4 = new Column({
  name: 'col4', top: 50, left: 0, height: 189, skin: whiteSkin,
  active: true,
  contents: [
    closetSpace10,
    closetSpace11,
    closetSpace12
  ]
})


let mainContainer = new Line({
    top: 0, bottom: 0, left: 0, right: 0,
    active: true, skin: backgroundSkin,
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

	*/  col1,
		col2,
		col_mid,
		col3,
		col4
    ]
});

let space1Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space1NotificationToggle", 0)            
        }
    })

});

let space2Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space2NotificationToggle", 0)            
        }
    })

});

let space3Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space3NotificationToggle", 0)            
        }
    })

});

let space4Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space4NotificationToggle", 0)            
        }
    })

});

let space5Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space5NotificationToggle", 0)            
        }
    })

});

let space6Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space6NotificationToggle", 0)            
        }
    })

});

let space7Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space7NotificationToggle", 0)            
        }
    })
});

let space8Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space8NotificationToggle", 0)            
        }
    })

});

//skin: space notification skin.
let space9Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space9NotificationToggle", 0)            
        }
    })

});

let space10Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space10NotificationToggle", 0)            
        }
    })

});


let space11Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space11NotificationToggle", 0)            
        }
    })

});

let space12Notification = new Container({
    top: 0, bottom: 0, left: 0, right: 0, skin: spaceNotificationSkin,
    active: true,
    contents: [
    ],
    behavior: Behavior({
        onTouchBegan(container) {
            application.distribute("space12NotificationToggle", 0)            
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
            closetSpaceSensor9: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 59, direction: "output" },
                }
            },
            closetSpaceSensor10: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 60, direction: "output" },
                }
            },
            closetSpaceSensor11: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 61, direction: "output" },
                }
            },
            closetSpaceSensor12: {
                require: "Digital", // use built-in digital BLL
                pins: {
                    ground: { pin: 66, type: "Ground" },
                    digital: { pin: 62, direction: "output" },
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
            isClosetSpace6Empty = false;
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
            Pins.repeat("/closetSpaceSensor9/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor8Read", value);
            });
            Pins.repeat("/closetSpaceSensor10/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor8Read", value);
            });
            Pins.repeat("/closetSpaceSensor11/read", 83, value => {
//                trace(value + "\n");
            application.distribute("onClosetSpaceSensor8Read", value);
            });
            Pins.repeat("/closetSpaceSensor12/read", 83, value => {
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
    closetSpaceSensor9On(application, value) {
            Pins.invoke("/closetSpaceSensor9/write", 1);        
    }
    closetSpaceSensor9Off(application, value) {
            Pins.invoke("/closetSpaceSensor9/write", 0);        
    }
    closetSpaceSensor10On(application, value) {
            Pins.invoke("/closetSpaceSensor10/write", 1);        
    }
    closetSpaceSensor10Off(application, value) {
            Pins.invoke("/closetSpaceSensor10/write", 0);        
    }
    closetSpaceSensor11On(application, value) {
            Pins.invoke("/closetSpaceSensor11/write", 1);        
    }
    closetSpaceSensor11Off(application, value) {
            Pins.invoke("/closetSpaceSensor11/write", 0);        
    }
    closetSpaceSensor12On(application, value) {
            Pins.invoke("/closetSpaceSensor12/write", 1);        
    }
    closetSpaceSensor12Off(application, value) {
            Pins.invoke("/closetSpaceSensor12/write", 0);        
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
    space3NotificationToggle(application, value) {
        if (value == 1) {
            application.add(space3Notification);
        } else if (value == 0) {
            application.remove(space3Notification);
        }
    }
    space4NotificationToggle(application, value) {
        if (value == 1) {
            application.add(space4Notification);
        } else if (value == 0) {
            application.remove(space4Notification);
        }
    }
    space5NotificationToggle(application, value) {
        if (value == 1) {
            application.add(space5Notification);
        } else if (value == 0) {
            application.remove(space5Notification);
        }
    }
    space6NotificationToggle(application, value) {
        if (value == 1) {
            application.add(space6Notification);
        } else if (value == 0) {
            application.remove(space6Notification);
        }
    }
    space7NotificationToggle(application, value) {
        if (value == 1) {
            application.add(space7Notification);
        } else if (value == 0) {
            application.remove(space7Notification);
        }
    }
    space8NotificationToggle(application, value) {
        if (value == 1) {
            application.add(space8Notification);
        } else if (value == 0) {
            application.remove(space8Notification);
        }
    }
	space9NotificationToggle(application, value) {
        if (value == 1) {
            application.add(space9Notification);
        } else if (value == 0) {
            application.remove(space9Notification);
        }
    }
    space10NotificationToggle(application, value) {
            if (value == 1) {
                application.add(space10Notification);
            } else if (value == 0) {
                application.remove(space10Notification);
            }
        }
    space11NotificationToggle(application, value) {
            if (value == 1) {
                application.add(space11Notification);
            } else if (value == 0) {
                application.remove(space11Notification);
            }
        }
    space12NotificationToggle(application, value) {
            if (value == 1) {
                application.add(space12Notification);
            } else if (value == 0) {
                application.remove(space12Notification);
            }
        }
}

application.behavior = new AppBehavior();