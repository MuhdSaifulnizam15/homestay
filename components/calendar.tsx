'use client'

import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import type { DayCellContentArg } from '@fullcalendar/core'
// import { addOneDay } from '@/lib/utils';

// Example API response shape
interface Booking {
  date: string; // YYYY-MM-DD
  guestName?: string;
  status: "booked" | "reserved" | "unavailable";
  title?: string;
}

interface Holiday {
  date: string;
  type: "public" | "school";
  name: string;
}

const Calendar = () => {
  const [bookings, setBookings] = useState<Record<string, Booking>>({});
  const [holidays, setHolidays] = useState<Record<string, Holiday>>({});

  const today = new Date();
  today.setHours(0, 0, 0, 0); // normalize to midnight

  // 6 months ago → start of that month
  const minDate = new Date(today);
  minDate.setMonth(today.getMonth() - 6, 1); // day = 1
  minDate.setHours(0, 0, 0, 0);

  // 6 months ahead → end of that month
  const maxDate = new Date(today);
  maxDate.setMonth(today.getMonth() + 6 + 1, 0); // day = 0 → last day of previous month
  maxDate.setHours(23, 59, 59, 999);

  useEffect(() => {
    // ✅ Mock API call
    const bookingData: Booking[] = [
      { date: "2025-09-25", guestName: "Ali", status: "booked" },
      { date: "2025-09-26", guestName: "Ali", status: "booked" },
      { date: "2025-09-27", guestName: "Ali", status: "booked" },
      { date: "2025-09-28", guestName: "Siti", status: "reserved" },
      { date: "2025-09-29", guestName: "Siti", status: "reserved" },
      { date: "2025-09-30", status: "unavailable" },
    ];

    const holidayData: Holiday[] = [
      { date: "2025-10-01", type: "public", name: "Hari Malaysia" },
      { date: "2025-09-25", type: "school", name: "School Holiday" },
      { date: "2025-09-26", type: "school", name: "School Holiday" },
      { date: "2025-09-27", type: "school", name: "School Holiday" },
    ];

    // Map to objects for O(1) lookup
    const mappedBookings: Record<string, Booking> = {};
    bookingData.forEach((b) => {
      mappedBookings[b.date] = b;
    });
    
    const mappedHolidays: Record<string, Holiday> = {};
    holidayData.forEach((h) => {
      mappedHolidays[h.date] = h;
    });

    setBookings(mappedBookings);
    setHolidays(mappedHolidays);
  }, []);

  // Apply cell classes (background color for holidays)
  const dayCellClassNames = (arg: { date: Date }) => {
    const dateStr = arg.date.toLocaleDateString("en-CA");
    const holiday = holidays[dateStr];

    if (holiday?.type === "public") {
      return ["bg-blue-100"]; // Public holiday
    }
    if (holiday?.type === "school") {
      return ["bg-purple-100"]; // School holiday
    }
    return [];
  };

  // Inject custom content (booked badge)
  // Cell coloring + label
  const renderDayCellContent = (arg: DayCellContentArg) => {
    const dateStr = arg.date.toLocaleDateString("en-CA");
    const cellDate = new Date(dateStr);

    // Past days + today → no status
    if (cellDate <= today) {
      return (
        <div className="flex flex-col items-center text-xs">
          <span className="font-medium">{arg.dayNumberText}</span>
        </div>
      );
    }

    // Future days → check API or default to available
    const booking = bookings[dateStr];


    let bgColor = "bg-green-100 text-green-800"; // ✅ Default available
    let label = "Available";

    if (booking?.status === "booked") {
      bgColor = "bg-red-200 text-red-800";
      label = "Booked";
    } else if (booking?.status === "reserved") {
      bgColor = "bg-yellow-200 text-yellow-800";
      label = "Reserved";
    } else if (booking?.status === "unavailable") {
      bgColor = "bg-gray-200 text-gray-700";
      label = "Unavailable";
    }

    return (
      <div className="flex flex-col items-center text-xs h-full">
        <span className="font-medium">{arg.dayNumberText}</span>
        <span className={`mt-1 px-1 rounded ${bgColor}`}>{label}</span>

        {booking?.status === "unavailable" && (
          <div className="absolute top-0 right-0 w-[2px] h-full bg-red-600 origin-top-right rotate-[-45deg]" />
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl h-[80vh] mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        validRange={{
          start: minDate.toISOString().split("T")[0],
          end: maxDate.toISOString().split("T")[0],
        }}
        dayCellClassNames={dayCellClassNames}
        dayCellContent={renderDayCellContent}
        eventClassNames={(arg) => arg.event.classNames}
        headerToolbar={{
          left: 'prev next',
          center: 'title',
          right: 'today'
        }}
        height="100%"
        contentHeight="auto"
        expandRows={true}
      />

      {/* Legend */}
      <div className="flex gap-4 justify-center mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-100 border border-blue-300"></span>
          School Holiday
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-100 border border-red-300"></span>
          Public Holiday
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx global>{`
        .fc-daygrid-day.school-holiday {
          background-color: #dbeafe !important; /* Tailwind bg-blue-100 */
        }
        .fc-daygrid-day.public-holiday {
          background-color: #fee2e2 !important; /* Tailwind bg-red-100 */
        }
      `}</style>
    </div>
  )
}

export { Calendar };