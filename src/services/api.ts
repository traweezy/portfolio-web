import HttpClient from './http-client';

class Api extends HttpClient {
  public constructor() {
    super('https://tyler-schumacher-portfolio-api.herokuapp.com/rest');
  }

  public sendEmail = (email: Omit<Email, 'name' | 'email'>): Promise<Email> =>
    this.instance.post(`/send-email`, email);

  public getProjects = (): Promise<Project[]> => this.instance.get('/project');
}

export default Api;
