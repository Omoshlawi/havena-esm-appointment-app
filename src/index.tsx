import * as React from "react";
import type { PiletApi } from "@havena/esm-shell-app";
import { Appointments, AppointmentTypes } from "./pages";
import { HeaderLink } from "@havena/esm-core-components";
import PublicListingBookAppointment from "./components/PublicListingBookAppointment";
import { AdminHeaderLink } from "./components/links";

export function setup(app: PiletApi) {
  app.registerPage(
    "/dashboard/appointment-types",
    () => <AppointmentTypes launchWorkspace={app.launchWorkspace} />,
    { layout: "dashboard" }
  );
  app.registerPage(
    "/dashboard/appointments",
    () => <Appointments launchWorkspace={app.launchWorkspace} />,
    { layout: "dashboard" }
  );
  app.registerMenu(
    ({ onClose }: any) => (
      <AdminHeaderLink
        label="Appointment types"
        to={`/dashboard/appointment-types`}
        onClose={onClose ?? (() => {})}
        icon="calendarCog"
      />
    ),
    { type: "admin" }
  );
  app.registerMenu(
    ({ onClose }: any) => (
      <HeaderLink
        label="Appointments"
        to={`/dashboard/appointments`}
        onClose={onClose ?? (() => {})}
        icon="calendar"
      />
    ),
    { type: "admin" }
  );
  app.registerExtension(
    "public-listing-schedule-viewing-extension-slot",
    ({ params }) => <PublicListingBookAppointment {...params} />
  );
}
