import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ECommerceProgramList } from "./eCommerceProgram/ECommerceProgramList";
import { ECommerceProgramCreate } from "./eCommerceProgram/ECommerceProgramCreate";
import { ECommerceProgramEdit } from "./eCommerceProgram/ECommerceProgramEdit";
import { ECommerceProgramShow } from "./eCommerceProgram/ECommerceProgramShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { RideBookingList } from "./rideBooking/RideBookingList";
import { RideBookingCreate } from "./rideBooking/RideBookingCreate";
import { RideBookingEdit } from "./rideBooking/RideBookingEdit";
import { RideBookingShow } from "./rideBooking/RideBookingShow";
import { HealthServiceList } from "./healthService/HealthServiceList";
import { HealthServiceCreate } from "./healthService/HealthServiceCreate";
import { HealthServiceEdit } from "./healthService/HealthServiceEdit";
import { HealthServiceShow } from "./healthService/HealthServiceShow";
import { FoodDeliveryList } from "./foodDelivery/FoodDeliveryList";
import { FoodDeliveryCreate } from "./foodDelivery/FoodDeliveryCreate";
import { FoodDeliveryEdit } from "./foodDelivery/FoodDeliveryEdit";
import { FoodDeliveryShow } from "./foodDelivery/FoodDeliveryShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
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
        title={"CoreService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ECommerceProgram"
          list={ECommerceProgramList}
          edit={ECommerceProgramEdit}
          create={ECommerceProgramCreate}
          show={ECommerceProgramShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="RideBooking"
          list={RideBookingList}
          edit={RideBookingEdit}
          create={RideBookingCreate}
          show={RideBookingShow}
        />
        <Resource
          name="HealthService"
          list={HealthServiceList}
          edit={HealthServiceEdit}
          create={HealthServiceCreate}
          show={HealthServiceShow}
        />
        <Resource
          name="FoodDelivery"
          list={FoodDeliveryList}
          edit={FoodDeliveryEdit}
          create={FoodDeliveryCreate}
          show={FoodDeliveryShow}
        />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
      </Admin>
    </div>
  );
};

export default App;
