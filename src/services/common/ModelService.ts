import { ReadOnlyApiService } from "./ReadOnlyService";
import { AxiosResponse } from "axios";

export class ModelApiService extends ReadOnlyApiService {
  constructor(resource: string) {
    super(resource);
  }

  public async post(data = {}): Promise<AxiosResponse<any, any>> {
    try {
      const response = await this.axiosInstance.post(this.getUrl(), data);

      return response;
    } catch (err) {
      this.handleErrors(err);
      throw err;
    }
  }

  public async put(id: string, data = {}): Promise<AxiosResponse<any, any>> {
    if (!id) throw Error("Id is not provided");

    try {
      const response: AxiosResponse = await this.axiosInstance.put(
        this.getUrl(id),
        data
      );

      return response;
    } catch (err) {
      this.handleErrors(err);
      throw err;
    }
  }

  public async delete(
    id: string | undefined
  ): Promise<AxiosResponse<any, any>> {
    if (!id) throw Error("Id is not provided");
    try {
      const response = await this.axiosInstance.delete(this.getUrl(id));

      return response;
    } catch (err) {
      this.handleErrors(err);
      throw err;
    }
  }
}
