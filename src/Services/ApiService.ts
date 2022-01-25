import { Platform } from 'react-native';

export interface IApiService {
    baseUrl: string;
    post(url: string, body: any): void;
}

export default class ApiService implements IApiService {

    baseUrl: string = Platform.OS === 'ios' ? 'http://localhost:5033/api' : 'http://10.0.2.2:5033/api';

    async post(url: string, body: any): Promise<any> {
        let fullUrl = this.baseUrl.concat(url.concat("/post"));
        const res = fetch(fullUrl, {
            method: 'POST',
            body: body
        })
            .then(r => r.json())
            .then(data => {
                return data;
            })
            .catch((error) => {
                console.error(error);
            });
        return res;
    }
}