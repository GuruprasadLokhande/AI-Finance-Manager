import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import DashboardPage from "./page";

const DashboardLayout = () => {
  return (
    <div className="px-5">
<h1 className="text-4xl sm:text-6xl font-bold gradient-title mb-5">Dashboard</h1>

      {/* Dashboard Page */}
      <Suspense
        fallback={
          <div className="mt-4">
            <BarLoader width={"100%"} color="#9333ea" />
          </div>
        }
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
