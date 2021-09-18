// https://qcalendar.netlify.app/developing/qcalendarmonth/month-getting-started
import { QCalendarMonth, Timestamp } from "@quasar/quasar-ui-qcalendar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  MakeCalendarMouseEvents,
  useCellWidthProps,
  useCheckChangeProps,
  useCommonProps,
  useMonthProps,
  useMoveProps,
  useNavigationProps,
  useTimesProps,
} from "./props";
import { WeekDay, MiniMode, XCalendarSlotData, XCalendarRef } from "./types";

export type XCalendarMonthRef = XCalendarRef;

export type XCalendarMonthWeekScope = {
  week: Timestamp[];
  weekdays: WeekDay[];
  miniMode: MiniMode;
};

export type XCalendarMonthHeadWorkWeekScope = {
  start: Timestamp;
  end: Timestamp;
  miniMode: MiniMode;
};

export type XCalendarMonthHeadDayScope = {
  weekday: WeekDay;
  timestamp: Timestamp;
  days: Timestamp[];
  index: number;
  miniMode: MiniMode;
};

export type XCalendarMonthHeadDayEventScope = XCalendarMonthHeadDayScope & {
  activeDate: boolean;
  disabled: boolean;
};

export type XCalendarMonthWorkWeekScope = {
  workweekLabel: string;
  week: Timestamp[];
  miniMode: MiniMode;
};

export type XCalendarMonthDayScope = {
  outside: boolean;
  timestamp: Timestamp;
  miniMode: MiniMode;
  activeDate: boolean;
  hasMonth: boolean;
  droppable: boolean;
};

export type XCalendarMonthHeadDayLabelScope = {
  dayLabel: boolean;
  timestamp: Timestamp;
  outside: boolean;
  activeDate: boolean;
  selectedDate: boolean;
  miniMode: boolean;
};

export type XCalendarMonthDayOfYearScope = {
  timestamp: Timestamp;
};
export type XCalendarMonthLabelScope = {
  monthLabel: string;
  timestamp: Timestamp;
  miniMode: boolean;
};

export type XCalendarMonthClickDayEventData = {
  event: KeyboardEvent;
  scope: XCalendarMonthDayScope;
};
export type XCalendarMonthClickDateEventData = {
  event: KeyboardEvent;
  scope: XCalendarMonthHeadDayLabelScope;
};
export type XCalendarMonthSlots = {
  day?: (data: XCalendarSlotData<XCalendarMonthDayScope>) => JSX.Element;
  week?: (data: XCalendarSlotData<XCalendarMonthWeekScope>) => JSX.Element;
  workweek?: (
    data: XCalendarSlotData<XCalendarMonthWorkWeekScope>
  ) => JSX.Element;
  "head-workweek"?: (
    data: XCalendarSlotData<XCalendarMonthHeadWorkWeekScope>
  ) => JSX.Element;
  "head-day"?: (
    data: XCalendarSlotData<XCalendarMonthHeadDayScope>
  ) => JSX.Element;
  "head-day-label"?: (
    data: XCalendarSlotData<XCalendarMonthHeadDayLabelScope>
  ) => JSX.Element;
  "head-day-button"?: (
    data: XCalendarSlotData<XCalendarMonthHeadDayLabelScope>
  ) => JSX.Element;
  "head-day-event"?: (
    data: XCalendarSlotData<XCalendarMonthHeadDayEventScope>
  ) => JSX.Element;
  "day-of-year"?: (
    data: XCalendarSlotData<XCalendarMonthDayOfYearScope>
  ) => JSX.Element;
  "month-label"?: (
    data: XCalendarSlotData<XCalendarMonthLabelScope>
  ) => JSX.Element;
};

const calendarMonthProps = {
  ...useCommonProps,
  ...useMonthProps,
  ...useTimesProps,
  ...useCellWidthProps,
  ...useNavigationProps,
  ...useCheckChangeProps,
  ...useMoveProps,
  onMiniMode: Function as PropType<(value: boolean) => void>,
  onClickDay: Function as PropType<
    (data: XCalendarMonthClickDayEventData) => void
  >,
  onClickDate: Function as PropType<
    (data: XCalendarMonthClickDateEventData) => void
  >,
};

export default QCalendarMonth as DefineComponent<
  ComponentObjectPropsOptions<
    ExtractPropTypes<typeof calendarMonthProps> &
      MakeCalendarMouseEvents<"Date"> &
      MakeCalendarMouseEvents<"Day"> &
      MakeCalendarMouseEvents<"HeadWorkweek"> &
      MakeCalendarMouseEvents<"HeadDay"> &
      MakeCalendarMouseEvents<"Workweek">
  >
>;
