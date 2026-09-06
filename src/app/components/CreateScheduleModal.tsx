"use client";

import { useState } from "react";

type CreateScheduleModalProps = {
  onCreate: (name: string, color: string) => void;
  onClose: () => void;
};

const colors = [
  "green",
  "yellow",
  "red",
  "blue",
  "purple",
  "orange",
];

export default function CreateScheduleModal({
  onCreate,
  onClose,
}: CreateScheduleModalProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("blue");

  const handleCreate = () => {
    if (!name.trim()) return;

    onCreate(name.trim(), color);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <div className="w-80 rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-xl font-semibold">
          New Schedule
        </h2>

        <label className="mb-2 block text-sm font-medium">
          Name
        </label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="e.g. Work"
          className="mb-5 w-full rounded-lg border p-2 outline-none focus:ring-2"
        />

        <label className="mb-2 block text-sm font-medium">
          Color
        </label>

        <div className="mb-6 flex gap-3">
          {colors.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setColor(option)}
              className={`h-8 w-8 rounded-full border-2 ${
                color === option
                  ? "border-black"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: option }}
            />
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}