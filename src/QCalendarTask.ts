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
  QCalendarSlotData,
  QCalendarHeadDayLabelScope,
  QCalendarResourceExpandedEventData,
  QCalendarHeadDayButtonScope,
  QCalendarHeadDayScope,
  QCalendarTaskFooterDayData,
} from "./types";

export type QCalendarTaskRef = {
  prev: () => void;
  next: () => void;
  move: () => void;
  moveToToday: () => void;
  updateCurrent: () => void;
};

export type QCalendarTaskScope<T = Record<string, any>> = {
  start: Timestamp;
  end: Timestamp;
  task: T;
  taskIndex: number;
  expanded: boolean;
};

export type QCalendarTaskDayScope<T = Record<string, any>> = {
  timestamp: Timestamp;
  task: T;
  taskIndex: number;
  activeDate: boolean;
};

export type QCalendarTaskDaysScope<T = Record<string, any>> = {
  timestamps: Timestamp[];
  task: T;
  taskIndex: number;
  cellWidth: number;
};

export type QCalendarTaskFooterTaskScope<T = Record<string, any>> = {
  start: Timestamp;
  end: Timestamp;
  footer: T;
  index: number;
};
export type QCalendarTaskHeadTasksScope = {
  start: Timestamp;
  end: Timestamp;
};
export type QCalendarTaskTitleTaskScope = {
  start: Timestamp;
  end: Timestamp;
  cellWidth: number;
  title: string;
  index: number;
};
export type QCalendarTaskTitleDayScope = {
  timestamp: Timestamp;
  cellWidth: number;
  title: string;
  index: number;
};

export type QCalendarTaskHeadWeekdayLabelScope = {
  timestamp: Timestamp;
};

export type QCalendarTaskExpandedEventData<T = Record<string, any>> = {
  expanded: boolean;
  scope: QCalendarTaskScope<T>;
};

export type QCalendarTaskSlots<
  T extends Record<string, any> = Record<string, any>
> = {
  task?: (data: QCalendarSlotData<QCalendarTaskScope<T>>) => JSX.Element;
  day?: (data: QCalendarSlotData<QCalendarTaskDayScope<T>>) => JSX.Element;
  days?: (data: QCalendarSlotData<QCalendarTaskDaysScope<T>>) => JSX.Element;
  "footer-task"?: (
    data: QCalendarSlotData<QCalendarTaskFooterTaskScope<T>>
  ) => JSX.Element;
  "footer-day"?: (data: QCalendarTaskFooterDayData<T>) => JSX.Element;
  "head-tasks"?: (
    data: QCalendarSlotData<QCalendarTaskHeadTasksScope>
  ) => JSX.Element;
  "title-task"?: (
    data: QCalendarSlotData<QCalendarTaskTitleTaskScope>
  ) => JSX.Element;
  "head-weekday-label"?: (
    data: QCalendarSlotData<QCalendarTaskHeadWeekdayLabelScope>
  ) => JSX.Element;
  "head-day-label"?: (
    data: QCalendarSlotData<QCalendarHeadDayLabelScope>
  ) => JSX.Element;
  "head-day-button"?: (
    data: QCalendarSlotData<QCalendarHeadDayButtonScope>
  ) => JSX.Element;
  "title-day"?: (
    data: QCalendarSlotData<QCalendarTaskTitleDayScope>
  ) => JSX.Element;
  "head-day"?: (data: QCalendarSlotData<QCalendarHeadDayScope>) => JSX.Element;
  "head-date"?: (data: QCalendarSlotData<QCalendarHeadDayScope>) => JSX.Element;
};

const calendarTaskProps = {
  ...useTimesProps,
  ...useNavigationProps,
  ...useTaskProps,
  ...useCheckChangeProps,
  ...useMoveProps,
  onTaskExpanded: Function as PropType<
    (data: QCalendarResourceExpandedEventData) => void
  >,
  onClickDate: Function as PropType<(data: QCalendarHeadDayLabelScope) => void>,
};

export default QCalendarTask as DefineComponent<
  ComponentObjectPropsOptions<
    ExtractPropTypes<typeof calendarTaskProps> &
      MakeCalendarMouseEvents<"Date"> &
      MakeCalendarMouseEvents<"Day"> &
      MakeCalendarMouseEvents<"HeadDay">
  >
>;
