import { Children } from "react";
import StatCard from "./StateCard";
export default function Dashboard(){
    <>
      <StatCard
        title="Total Patients"
        value={150}
        description="Registered patients"
      />
      <StatCard
        title="Total Events"
        value={80}
        description="Events created"
      />
      <StatCard
        title="Total Doctors"
        value={25}
        description="Available doctors"
      />
    </>;
}

