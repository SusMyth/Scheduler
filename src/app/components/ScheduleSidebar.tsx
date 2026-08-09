import { Schedule } from "../types/schedule";

type ScheduleSidebarProps = {
  schedules: Schedule[];
  activeScheduleId: string;
  onSelectedSchedule: (id: string) => void;
};

export default function ScheduleSidebar({
  schedules,
  activeScheduleId,
  onSelectedSchedule
}: ScheduleSidebarProps) {
  return (
    <aside className="w-64 border-r pr-6">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide">
        My Schedules
      </h2>

      <div className="space-y-2">
        {schedules.map((schedule) => (
          <button
            key={schedule.id}
            onClick={() => onSelectedSchedule(schedule.id)}
            className={`flex items-center gap-3 rounded-lg p-2 text-left ${
                activeScheduleId === schedule.id
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
            }`}
          >
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: schedule.color }}
            />

            <span>{schedule.name}</span>
          </button>
        ))}
      </div>

      <button className="mt-6 w-full rounded-lg border border-dashed p-2 text-sm hover:bg-gray-50">
        + New Schedule
      </button>
    </aside>
  );
}