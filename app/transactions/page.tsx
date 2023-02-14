import FeeCalendar from "@/components/transactions/FeeCalendar";
import TransactionItem from "@/components/transactions/TransactionItem";


export default function Subscriptions() {
  
  return (
    <>
      <h1>Transactions</h1>

      <div className="flex justify-center w-full p-2 bg-primary-dark z-30">
        <FeeCalendar/>
      </div>

      <div className="w-full flex flex-col gap-4">

        <div className="flex flex-col gap-2 h-max rounded-md bg-secondary-dark/[50%] shadow-md p-2">
          <h2 className="bg-primary-dark py-2 px-4 rounded-md shadow-label w-fit text-extra-light">Upcoming Charges</h2>
          <ul className="w-full flex flex-col gap-4">
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>

            <button className="group btn bg-extra-light flex items-center justify-center w-[40%] mx-auto shadow-btn-shadow">
              <p className="text-secondary-dark group-hover:text-extra-light transition-all duration-300 ease-in-out">more</p>
            </button>
          </ul>  
        </div>

        <div className="flex flex-col gap-2 h-max rounded-md bg-secondary-dark/[50%] shadow-md p-2">
          <h2 className="bg-primary-dark py-2 px-4 rounded-md shadow-label w-fit text-extra-light">Past Charges</h2>
          <ul className="w-full flex flex-col gap-4">
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>

            <button className="group btn bg-extra-light flex items-center justify-center w-[40%] mx-auto shadow-btn-shadow">
              <p className="text-secondary-dark group-hover:text-extra-light transition-all duration-300 ease-in-out">more</p>
            </button>
          </ul>      
        </div>
      </div>
    </>
   )
 }