import { getUserAccount } from "@/actions/dashboard";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";
import AccountCard from "./_components/account-card";

async function DashboardPage() {
  const accounts = await getUserAccount();
  return (
    <div className="px-5">
      {/* Budget Progress  */}

      {/* Overview */}

      {/* Account Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground pt-5 h-full">
              <Plus className="w-10 h-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>

        {accounts.length > 0 && accounts.map((account) => {
          return <AccountCard key={account.id} account={account}/>
        }
        
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
