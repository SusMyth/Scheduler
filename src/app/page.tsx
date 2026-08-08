const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const times = [
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
  "00:00",
];

export default function Home(){
  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Welcome to My Scheduler!</h1>

      <div className="grid grid-cols-[80px_repeat(7,1fr)] gap-1">
        <div></div>

        
        {days.map((day)=>(
          <div 
            key={day}
            className="p-3 text-center font-semibold">{day}</div>
        ))}

        {times.map((time)=>(
          <div key={time} className="contents">
            <div className= "border-t p-2 text-sm text-gray-500">
              {time}
            </div>

            {days.map((day)=>(
              <button 
                key={`${day}-${time}`}
                className="h-10 border border-gray-200 bg-white hover:bg-gray-100"
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}