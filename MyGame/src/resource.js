var folder = "";

if (!cc.sys.isNative)
{
    folder = "res/mediumRes/";
}

var buttonOff =
{
    1: folder+ "button1_off.png",
    2: folder+ "button2_off.png",
    3: folder+ "button3_off.png",
    4: folder+ "button4_off.png",
    5: folder+ "button5_off.png",
    6: folder+ "button6_off.png",
    7: folder+ "button7_off.png",
    8: folder+ "button8_off.png",
    9: folder+ "button9_off.png",
    10: folder+ "button10_off.png",
    11: folder+ "button11_off.png",
    12: folder+ "button12_off.png",
    13: folder+ "button13_off.png",
    14: folder+ "button14_off.png",
    15: folder+ "button15_off.png",
    16: folder+ "button16_off.png",
    17: folder+ "button17_off.png",
    18: folder+ "button18_off.png",
    19: folder+ "button19_off.png",
    20: folder+ "button20_off.png",
    21: folder+ "button21_off.png",
    22: folder+ "button22_off.png",
    23: folder+ "button23_off.png",
    24: folder+ "button24_off.png",
    25: folder+ "button25_off.png"
}
var buttonOn={
    1: folder+ "button1_on.png",
    2: folder+ "button2_on.png",
    3: folder+ "button3_on.png",
    4: folder+ "button4_on.png",
    5: folder+ "button5_on.png",
    6: folder+ "button6_on.png",
    7: folder+ "button7_on.png",
    8: folder+ "button8_on.png",
    9: folder+ "button9_on.png",
    10: folder+ "button10_on.png",
    11: folder+ "button11_on.png",
    12: folder+ "button12_on.png",
    13: folder+ "button13_on.png",
    14: folder+ "button14_on.png",
    15: folder+ "button15_on.png",
    16: folder+ "button16_on.png",
    17: folder+ "button17_on.png",
    18: folder+ "button18_on.png",
    19: folder+ "button19_on.png",
    20: folder+ "button20_on.png",
    21: folder+ "button21_on.png",
    22: folder+ "button22_on.png",
    23: folder+ "button23_on.png",
    24: folder+ "button24_on.png",
    25: folder+ "button25_on.png"
}

var res = {
    HelloWorld_png : folder + "HelloWorld.png",
    CloseNormal_png : folder + "CloseNormal.png",
    CloseSelected_png : folder+ "CloseSelected.png",
    Button1 : folder + "backOff.png",
    Button2 : folder+ "backOn.png",

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}