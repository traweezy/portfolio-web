import { AxiosResponse } from 'axios';
import HttpClient from './http-client';

class Api extends HttpClient {
  public constructor() {
    super('https://tyler-schumacher-portfolio-api.herokuapp.com/rest');
  }

  public sendEmail = (
    email: Omit<Email, 'name'>,
  ): Promise<AxiosResponse<Email>> =>
    this.instance.post<Email>(`/send-email`, email);
}

export default Api;
