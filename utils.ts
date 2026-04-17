export const getQatarToday = (): string => {
  // Returns YYYY-MM-DD in Asia/Qatar timezone
  return new Intl.DateTimeFormat('en-CA', { 
    timeZone: 'Asia/Qatar', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  }).format(new Date());
};

export const getQatarDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-CA', { 
        timeZone: 'Asia/Qatar', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
      }).format(date);
};
