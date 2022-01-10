import ApiService, { IApiService } from "../../Services/ApiService";

// Extract & export this into it's own typescript file if any other classes
// implement the interface.
interface ISpotService {
    url: string;
    createSpot(fields: any): void;
}

class SpotService implements ISpotService {
    url: string = '/Spots';
    apiService: IApiService | undefined;

    constructor(apiservice: IApiService) {
        this.apiService = apiservice;
    }

    createSpot(formData: FormData): void {
        console.log(formData);
        this.apiService?.post(this.url, formData);
    };
}

const spotService = new SpotService(new ApiService());

export default spotService;