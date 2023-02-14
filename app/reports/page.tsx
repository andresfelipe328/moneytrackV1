import BarGraph from "@/components/reports/BarGraph";
import FinanceOverview from "@/components/reports/FinanceOverview";
import PieChart from "@/components/reports/PieChart";
import SpendingOverview from "@/components/reports/SpendingOverview";


export default function Reports() {
  return (
    <>
      <h1>Reports</h1>

        <div className="flex flex-col gap-2 h-max rounded-md bg-secondary-dark/[50%] shadow-md p-2">
          <h2 className="bg-primary-dark py-2 px-4 rounded-md shadow-label w-fit text-extra-light">Finances</h2>
          <div className='h-[12rem] w-[75%] sm-width:w-full mx-auto'>
            <BarGraph/>
          </div>
          <FinanceOverview/>
        </div>

        <div className="flex flex-col gap-2 h-max rounded-md bg-secondary-dark/[50%] shadow-md p-2">
          <h2 className="bg-primary-dark py-2 px-4 rounded-md shadow-label w-fit text-extra-light">Spending</h2>
          <div className="w-full flex flex-col">
            <PieChart/>
            <SpendingOverview/>
          </div>
        </div>
    </>
   )
 }