import "./styles.css";
import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import { MobileList, MobileEdit, MobileCreate } from "./mobile";
import jsonServerProvider from "ra-data-json-server";
import MobileIcon from "@material-ui/icons/Group";
const dataProvider = jsonServerProvider("my-json-server.typicode.com");

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="mobile"
          list={MobileList}
          edit={MobileEdit}
          create={MobileCreate}
          icon={MobileIcon}
        />
      </Admin>
    );
  }
}
export default App;
