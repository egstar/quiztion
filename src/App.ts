import express from "express";
import * as v from './App/Config/config'
import { Startup } from "./App/Config/echo";
import Routes from './App/Routes/routes'

const App = express();

const Port: number = Number(v.AppPort) || 80;
App.use(Routes);


App.listen(Port, () => {
    Startup();
})

export default App;