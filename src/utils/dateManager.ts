export function getTotalDaysByReceivedMonthAndYear(month: number, year: number): number {
  // Logic to get total days from current month
  let totalDays: number;
  if ((month == 1)) {
    totalDays = year % 4 == 0 ? (29) : (28);
  } else if ((month == 6) || (month == 7)) {
    console.log(31);
    totalDays = 31;
  } else {
    console.log(`Month: ${month}`);
    totalDays = (month >= 8)
      ? ((month % 2 == 0 ? 30 : 31))
      : ((month % 2 == 0 ? 31 : 30));
  }

  return totalDays;
}

export function subtractMonth(month: number, year: number): { newMonth: number; newYear: number; } {
  let newMonth: number;
  let newYear: number = year;

  if (month == 0) {
    newMonth = 11;
    newYear = year - 1;
  } else {
    newMonth = month - 1;
  }

  return {
    newMonth,
    newYear
  };
}

export function addMonth(month: number, year: number): { newMonth: number; newYear: number; } {
  let newMonth: number;
  let newYear: number = year;

  if (month == 11) {
    newMonth = 0;
    newYear = year + 1;
  } else {
    newMonth = month + 1;
  }

  return {
    newMonth,
    newYear
  };
}

export function compareDates(firstDate: Date | string, secondDate: Date | string): boolean {
  const formatedFirstDate = new Date(firstDate);
  const formatedSecondDate = new Date(secondDate);
  return (
    formatedFirstDate.toLocaleDateString() == formatedSecondDate.toLocaleDateString()
  );
}

export function getMonthStartingWeekday(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}
