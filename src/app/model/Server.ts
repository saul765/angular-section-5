export class Server {
  public serverName: string;
  public serverContent: string;

  constructor(serverName: string, serverContent: string) {
    this.serverName = serverName;
    this.serverContent = serverContent;
  }
}

export interface IServer {
  serverName: string;
  serverContent: string;

}
