import NotificationItem from "@/components/notifications/NotificationItem";

export default function Notifications() {
    return (
      <>
        <h1>Notifications</h1>
        <ul className="w-[75%] sm-width:w-full mx-auto">
          <NotificationItem/>
        </ul>
      </>
   )
 }