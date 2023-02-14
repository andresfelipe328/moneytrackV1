import AreaGraph from "@/components/dashboard/AreaGraph";
import Balances from "@/components/dashboard/Balances";
import BudgetInfo from "@/components/dashboard/BudgetInfo";
import SubCount from "@/components/dashboard/SubCount";
import HomeLayout from "@/components/layouts/HomeLayout";
import TransactionItem from "@/components/transactions/TransactionItem";

export default function Home() {
  return (
    <HomeLayout>
      <h1 className="mb-4 p-2">Dashboard</h1>

      <div className="relative h-[10rem] mb-2">
        <AreaGraph/>
      </div>

      <BudgetInfo/>

      <div className="flex flex-col gap-2 h-max rounded-md bg-secondary-dark/[50%] shadow-md p-2">
        <h2 className="bg-primary-dark py-2 px-4 rounded-md shadow-label w-fit text-extra-light">
          Balances
        </h2>
        <Balances/>
      </div>

      <div className="flex flex-col gap-2 h-max rounded-md bg-secondary-dark/[50%] shadow-md p-2">
        <h2 className="bg-primary-dark py-2 px-4 rounded-md shadow-label w-fit text-extra-light">
          Subscriptions
        </h2>
        <SubCount/>
      </div>

      <div className="flex flex-col gap-2 h-max rounded-md bg-secondary-dark/[50%] shadow-md p-2">
        <h2 className="bg-primary-dark py-2 px-4 rounded-md shadow-label w-fit text-extra-light">
          Upcoming Charges
        </h2>
        <TransactionItem/>
        <TransactionItem/>
        <TransactionItem/>
      </div>
    </HomeLayout>
  )
}
