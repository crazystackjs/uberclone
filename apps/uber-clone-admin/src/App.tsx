import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DriverList } from "./driver/DriverList";
import { DriverCreate } from "./driver/DriverCreate";
import { DriverEdit } from "./driver/DriverEdit";
import { DriverShow } from "./driver/DriverShow";
import { RiderList } from "./rider/RiderList";
import { RiderCreate } from "./rider/RiderCreate";
import { RiderEdit } from "./rider/RiderEdit";
import { RiderShow } from "./rider/RiderShow";
import { RideRequestList } from "./rideRequest/RideRequestList";
import { RideRequestCreate } from "./rideRequest/RideRequestCreate";
import { RideRequestEdit } from "./rideRequest/RideRequestEdit";
import { RideRequestShow } from "./rideRequest/RideRequestShow";
import { VehicleList } from "./vehicle/VehicleList";
import { VehicleCreate } from "./vehicle/VehicleCreate";
import { VehicleEdit } from "./vehicle/VehicleEdit";
import { VehicleShow } from "./vehicle/VehicleShow";
import { RideList } from "./ride/RideList";
import { RideCreate } from "./ride/RideCreate";
import { RideEdit } from "./ride/RideEdit";
import { RideShow } from "./ride/RideShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UberClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Driver"
          list={DriverList}
          edit={DriverEdit}
          create={DriverCreate}
          show={DriverShow}
        />
        <Resource
          name="Rider"
          list={RiderList}
          edit={RiderEdit}
          create={RiderCreate}
          show={RiderShow}
        />
        <Resource
          name="RideRequest"
          list={RideRequestList}
          edit={RideRequestEdit}
          create={RideRequestCreate}
          show={RideRequestShow}
        />
        <Resource
          name="Vehicle"
          list={VehicleList}
          edit={VehicleEdit}
          create={VehicleCreate}
          show={VehicleShow}
        />
        <Resource
          name="Ride"
          list={RideList}
          edit={RideEdit}
          create={RideCreate}
          show={RideShow}
        />
      </Admin>
    </div>
  );
};

export default App;
