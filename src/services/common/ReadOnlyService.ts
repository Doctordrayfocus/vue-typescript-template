import { AxiosResponse } from 'axios'
import { BaseApiService } from './BaseService'

export class ReadOnlyApiService extends BaseApiService {
  constructor(resource: string) {
    super(resource)
  }

  public async fetch(): Promise<AxiosResponse<any>> {
    try {
      const response: AxiosResponse = await this.axiosInstance.get(
        this.getUrl(),
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      throw err
    }
  }

  public async get(id: string): Promise<AxiosResponse<any>> {
    try {
      if (!id) throw Error('Id is not provided')

      const response: AxiosResponse = await this.axiosInstance.get(
        this.getUrl(id),
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      throw err
    }
  }

  public async search(query: string): Promise<AxiosResponse<any>> {
    try {
      if (!query) throw Error('query is not provided')

      const response: AxiosResponse = await this.axiosInstance.get(
        this.getUrl() + '?q=' + query,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      throw err
    }
  }
}
