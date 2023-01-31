import express, { Express } from 'express';
import * as bodyParser from 'body-parser';

class App {
  public app: Express;
  private bodyParser;

  constructor () {
    this.app = express();
    this.middleware();
    this.routes();  
  }

  middleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }  

  routes() {    

    this.app.route("/").get((req, res) => {
      res.status(200).json({ result: 'v1' });
    });
  }
}

export default new App();