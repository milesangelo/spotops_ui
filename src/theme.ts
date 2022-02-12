import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const Colors = {
    // base colors
    primary: "#194868", // Dark Blue
    secondary: "#FF615F",   // peach

    // colors
    lightPrimary: '#CEE6EF',
    lightBlue: '#CEE6EF',
    darkPrimary: '#3A3257',
    darkPurple: '#3A3257',


    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#F5F7F9",
    lightGray2: '#FAFBFD',
    gray: "#BEC1D2",
    blue: '#42B0FF',
    darkgray: '#898C95',
    yellow: '#FFD573',
    darkgreen: '#008159',
    peach: '#FF615F',
    lightPurple: '#',
    purple: '#8e44ad',
    red: '#FF0000',
};

export const Sizes = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 36,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    
    //zoom buttons
    zoomButton: 50,


    // app dimensions
    width,
    height
};

export const Fonts = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: Sizes.largeTitle, lineHeight: 55 },
    h1: { fontFamily: 'Mono', fontSize: Sizes.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: Sizes.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: Sizes.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: Sizes.h4, lineHeight: 22 },
    body1: { fontSize: Sizes.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: Sizes.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: Sizes.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: Sizes.body4, lineHeight: 22 },
};

const appTheme = { Colors, Sizes, Fonts };

export default appTheme;