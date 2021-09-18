// https://qcalendar.netlify.app/developing/qcalendartask/task-getting-started
import { QCalendarTask } from "@quasar/quasar-ui-qcalendar";
import { Timestamp } from "@quasar/quasar-ui-qcalendar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  MakeCalendarMouseEvents,
  useCheckChangeProps,
  useMoveProps,
  useNavigationProps,
  useTaskProps,
  useTimesProps,
} from "./props";
import {
  XCalendarSlotData,
  XCalendarHeadDayLabelScope,
  XCalendarResourceExpandedEventData,
  XCalendarHeadDayButtonScope,
  XCalendarHeadDayScope,
  XCalendarTaskFooterDayData,
} from "./types";

export type XCalendarTaskRef = {
  prev: () => void;
  next: () => void;
  move: () => void;
  moveToToday: () => void;
  updateCurrent: () => void;
};

export type XCalendarTaskScope<T = Record<string, any>> = {
  start: Timestamp;
  end: Timestamp;
  task: T;
  taskIndex: number;
  expanded: boolean;
};

export type XCalendarTaskDayScope<T = Record<string, any>> = {
  timestamp: Timestamp;
  task: T;
  taskIndex: number;
  activeDate: boolean;
};

export type XCalendarTaskDaysScope<T = Record<string, any>> = {
  timestamps: Timestamp[];
  task: T;
  taskIndex: number;
  cellWidth: number;
};

export type XCalendarTaskFooterTaskScope<T = Record<string, any>> = {
  start: Timestamp;
  end: Timestamp;
  footer: T;
  index: number;
};
export type XCalendarTaskHeadTasksScope = {
  start: Timestamp;
  end: Timestamp;
};
export type XCalendarTaskTitleTaskScope = {
  start: Timestamp;
  end: Timestamp;
  cellWidth: number;
  title: string;
  index: number;
};
export type XCalendarTaskTitleDayScope = {
  timestamp: Timestamp;
  cellWidth: number;
  title: string;
  index: number;
};

export type XCalendarTaskHeadWeekdayLabelScope = {
  timestamp: Timestamp;
};

export type XCalendarTaskExpandedEventData<T = Record<string, any>> = {
  expanded: boolean;
  scope: XCalendarTaskScope<T>;
};

export type XCalendarTaskSlots<
  T extends Record<string, any> = Record<string, any>
> = {
  task?: (data: XCalendarSlotData<XCalendarTaskScope<T>>) => JSX.Element;
  day?: (data: XCalendarSlotData<XCalendarTaskDayScope<T>>) => JSX.Element;
  days?: (data: XCalendarSlotData<XCalendarTaskDaysScope<T>>) => JSX.Element;
  "footer-task"?: (
    data: XCalendarSlotData<XCalendarTaskFooterTaskScope<T>>
  ) => JSX.Element;
  "footer-day"?: (data: XCalendarTaskFooterDayData<T>) => JSX.Element;
  "head-tasks"?: (
    data: XCalendarSlotData<XCalendarTaskHeadTasksScope>
  ) => JSX.Element;
  "title-task"?: (
    data: XCalendarSlotData<XCalendarTaskTitleTaskScope>
  ) => JSX.Element;
  "head-weekday-label"?: (
    data: XCalendarSlotData<XCalendarTaskHeadWeekdayLabelScope>
  ) => JSX.Element;
  "head-day-label"?: (
    data: XCalendarSlotData<XCalendarHeadDayLabelScope>
  ) => JSX.Element;
  "head-day-button"?: (
    data: XCalendarSlotData<XCalendarHeadDayButtonScope>
  ) => JSX.Element;
  "title-day"?: (
    data: XCalendarSlotData<XCalendarTaskTitleDayScope>
  ) => JSX.Element;
  "head-day"?: (data: XCalendarSlotData<XCalendarHeadDayScope>) => JSX.Element;
  "head-date"?: (data: XCalendarSlotData<XCalendarHeadDayScope>) => JSX.Element;
};

const calendarTaskProps = {
  ...useTimesProps,
  ...useNavigationProps,
  ...useTaskProps,
  ...useCheckChangeProps,
  ...useMoveProps,
  onTaskExpanded: Function as PropType<
    (data: XCalendarResourceExpandedEventData) => void
  >,
  onClickDate: Function as PropType<(data: XCalendarHeadDayLabelScope) => void>,
};

export default QCalendarTask as DefineComponent<
  ComponentObjectPropsOptions<
    ExtractPropTypes<typeof calendarTaskProps> &
      MakeCalendarMouseEvents<"Date"> &
      MakeCalendarMouseEvents<"Day"> &
      MakeCalendarMouseEvents<"HeadDay">
  >
>;
