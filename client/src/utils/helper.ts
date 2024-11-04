import { JobsType } from "@/types/jobsType";
import { intervalToDuration } from "date-fns";
const differenceInDateObj = (date1: Date, date2: Date): string => {
  const dateObj = intervalToDuration({ start: date1, end: date2 });
  let res = "";
  if (dateObj.months) {
    res =
      dateObj.months > 1
        ? dateObj.months + " Months"
        : dateObj.months + " Month";
  } else if (dateObj.weeks) {
    res =
      dateObj.weeks > 1 ? dateObj.weeks + " Weeks" : dateObj.weeks + " Week";
  } else if (dateObj.days) {
    res = dateObj.days > 1 ? dateObj.days + " Days" : dateObj.days + " Day";
  } else if (dateObj.hours) {
    res =
      dateObj.hours > 1 ? dateObj.hours + " Hours" : dateObj.hours + " Hour";
  } else if (dateObj.minutes) {
    res =
      dateObj.minutes > 1
        ? dateObj.minutes + " Minutes"
        : dateObj.minutes + " Minute";
  }

  return res;
};

const searchFilter = <T extends JobsType>(jobs: T[], value: string): T[] => {
  return jobs.filter((job) => {
    const jobTitle = job.jobTitle.split(" ").join("");
    return value.toLowerCase() === jobTitle.toLowerCase();
  });
};

export { differenceInDateObj, searchFilter };
