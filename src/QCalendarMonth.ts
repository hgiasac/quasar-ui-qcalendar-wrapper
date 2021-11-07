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
import { WeekDay, MiniMode, QCalendarSlotData, QCalendarRef } from "./types";

export type QCalendarMonthRef = QCalendarRef;

export type QCalendarMonthWeekScope = {
  week: Timestamp[];
  weekdays: WeekDay[];
  miniMode: MiniMode;
};

export type QCalendarMonthHeadWorkWeekScope = {
  start: Timestamp;
  end: Timestamp;
  miniMode: MiniMode;
};

export type QCalendarMonthHeadDayScope = {
  weekday: WeekDay;
  timestamp: Timestamp;
  days: Timestamp[];
  index: number;
  miniMode: MiniMode;
};

export type QCalendarMonthHeadDayEventScope = QCalendarMonthHeadDayScope & {
  activeDate: boolean;
  disabled: boolean;
};

export type QCalendarMonthWorkWeekScope = {
  workweekLabel: string;
  week: Timestamp[];
  miniMode: MiniMode;
};

export type QCalendarMonthDayScope = {
  outside: boolean;
  timestamp: Timestamp;
  miniMode: MiniMode;
  activeDate: boolean;
  hasMonth: boolean;
  droppable: boolean;
};

export type QCalendarMonthHeadDayLabelScope = {
  dayLabel: boolean;
  timestamp: Timestamp;
  outside: boolean;
  activeDate: boolean;
  selectedDate: boolean;
  miniMode: boolean;
};

export type QCalendarMonthDayOfYearScope = {
  timestamp: Timestamp;
};
export type QCalendarMonthLabelScope = {
  monthLabel: string;
  timestamp: Timestamp;
  miniMode: boolean;
};

export type QCalendarMonthClickDayEventData = {
  event: KeyboardEvent;
  scope: QCalendarMonthDayScope;
};
export type QCalendarMonthClickDateEventData = {
  event: KeyboardEvent;
  scope: QCalendarMonthHeadDayLabelScope;
};
export type QCalendarMonthSlots = {
  day?: (data: QCalendarSlotData<QCalendarMonthDayScope>) => JSX.Element;
  week?: (data: QCalendarSlotData<QCalendarMonthWeekScope>) => JSX.Element;
  workweek?: (
    data: QCalendarSlotData<QCalendarMonthWorkWeekScope>
  ) => JSX.Element;
  "head-workweek"?: (
    data: QCalendarSlotData<QCalendarMonthHeadWorkWeekScope>
  ) => JSX.Element;
  "head-day"?: (
    data: QCalendarSlotData<QCalendarMonthHeadDayScope>
  ) => JSX.Element;
  "head-day-label"?: (
    data: QCalendarSlotData<QCalendarMonthHeadDayLabelScope>
  ) => JSX.Element;
  "head-day-button"?: (
    data: QCalendarSlotData<QCalendarMonthHeadDayLabelScope>
  ) => JSX.Element;
  "head-day-event"?: (
    data: QCalendarSlotData<QCalendarMonthHeadDayEventScope>
  ) => JSX.Element;
  "day-of-year"?: (
    data: QCalendarSlotData<QCalendarMonthDayOfYearScope>
  ) => JSX.Element;
  "month-label"?: (
    data: QCalendarSlotData<QCalendarMonthLabelScope>
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
    (data: QCalendarMonthClickDayEventData) => void
  >,
  onClickDate: Function as PropType<
    (data: QCalendarMonthClickDateEventData) => void
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
