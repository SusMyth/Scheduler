"use client";

import { useState } from "react";
import SchedulerGrid from "./components/SchedulerGrid";
import ScheduleSidebar from "./components/ScheduleSidebar";
import { Schedule } from "./types/schedule";

const initialSchedules: Schedule[] = [
  {
    id: "classes",
    name: "Classes",
    color: "green",
    cells: [],
  },
  {
    id: "gym",
    name: "Gym",
    color: "yellow",
    cells: [],
  },
];

export default function Home() {
  const [schedules, setSchedules] =
    useState<Schedule[]>(initialSchedules);

  const [activeScheduleId, setActiveScheduleId] =
    useState<string>("classes");

  const activeSchedule = schedules.find(
    (schedule) => schedule.id === activeScheduleId
  );

  const updateScheduleCells = (
    scheduleId: string,
    cells: string[]
  ) => {
    setSchedules((currentSchedules) =>
      currentSchedules.map((schedule) =>
        schedule.id === scheduleId
          ? { ...schedule, cells }
          : schedule
      )
    );
  };

  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        My Scheduler
      </h1>

      <div className="flex gap-8">
        <ScheduleSidebar
          schedules={schedules}
          activeScheduleId={activeScheduleId}
          onSelectedSchedule={setActiveScheduleId}
        />

        <div className="flex-1">
          <SchedulerGrid
            schedule={activeSchedule}
            onCellsChange={(cells) => {
              if (!activeSchedule) return;

              updateScheduleCells(
                activeSchedule.id,
                cells
              );
            }}
          />
        </div>
      </div>
    </main>
  );
}