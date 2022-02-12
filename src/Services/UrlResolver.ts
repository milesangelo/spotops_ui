import { Platform } from "react-native";

type UrlResolver = {
    append: (url: string) => string;
}

function append(url: string) {
    const fullUrl: string = (Platform.OS === 'ios' ?
        'http://localhost:6001/api' : 'http://10.0.2.2:6001/api');
    return fullUrl.concat(url);
}

export const ApiUrlResolver: UrlResolver = { append: append };
