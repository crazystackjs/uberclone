import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { DRIVER_TITLE_FIELD } from "./DriverTitle";
import { RIDER_TITLE_FIELD } from "../rider/RiderTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const DriverShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="vehicle" source="vehicle.id" reference="Vehicle">
          <TextField source={VEHICLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Ride" target="driverId" label="Rides">
          <Datagrid rowClick="show">
            <BooleanField label="accepted" source="accepted" />
            <TextField label="attemptedDrivers" source="attemptedDrivers" />
            <TextField label="baseFare" source="baseFare" />
            <TextField label="completedAt" source="completedAt" />
            <DateField source="createdAt" label="Created At" />
            <BooleanField
              label="creditCardVerified"
              source="creditCardVerified"
            />
            <TextField label="currentLocation" source="currentLocation" />
            <TextField label="demandMultiplier" source="demandMultiplier" />
            <ReferenceField
              label="driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="dropoffLocation" source="dropoffLocation" />
            <TextField label="endTime" source="endTime" />
            <TextField label="fare" source="fare" />
            <TextField label="heatMapZone" source="heatMapZone" />
            <TextField label="ID" source="id" />
            <TextField label="paymentDetails" source="paymentDetails" />
            <TextField label="paymentStatus" source="paymentStatus" />
            <TextField label="perKmRate" source="perKmRate" />
            <TextField label="pickupLocation" source="pickupLocation" />
            <TextField label="pricingType" source="pricingType" />
            <TextField label="radius" source="radius" />
            <TextField label="requestedAt" source="requestedAt" />
            <ReferenceField label="rider" source="rider.id" reference="Rider">
              <TextField source={RIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="serviceFee" source="serviceFee" />
            <TextField label="startTime" source="startTime" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Vehicle"
          target="driverId"
          label="Vehicles"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="licensePlate" source="licensePlate" />
            <TextField label="make" source="make" />
            <TextField label="model" source="model" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
