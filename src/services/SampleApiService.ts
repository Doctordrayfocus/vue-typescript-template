import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from './common/ReadOnlyService'

export class SampleApiService extends ReadOnlyApiService {
  constructor() {
    // this is equivalent to your base_url/sample
    super('sample')
  }

  public async customRequest(data = {}): Promise<AxiosResponse<any>> {
    try {
      const response: AxiosResponse = await this.axiosInstance.post(
        this.getUrl() + '/login',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      // you can handle request specific error here
      throw err
    }
  }
}
