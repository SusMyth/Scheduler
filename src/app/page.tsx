import SchedulerGrid from "./components/SchedulerGrid"

export default function Home(){
  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Welcome to My Scheduler!</h1>
      <SchedulerGrid />
    </main>
  );
}