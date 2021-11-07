import { Timestamp } from "@quasar/quasar-ui-qcalendar";
import { Ref } from "vue";

export type DateAlignment = "left" | "center" | "right";
export type MiniMode = true | false | "auto";
export type CalendarViewType = "day" | "week" | "month" | "month-interval";

export type TransitionType =
  | "slide-right"
  | "slide-left"
  | "slide-up"
  | "slide-down"
  | "fade"
  | "scale"
  | "rotate"
  | "flip-right"
  | "flip-left"
  | "flip-up"
  | "flip-down"
  | "jump-right"
  | "jump-left"
  | "jump-up"
  | "jump-down";

export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type QDateResource<P extends Record<string, any> = Record<string, any>> =
  P & {
    label: string;
    height?: number;
    expanded?: boolean;
    children?: QDateResource<P>[];
  };

export type TimeStartPosFunction = (
  time: string,
  clamp?: boolean
) => boolean | number;
export type TimeStartPosXFunction = TimeStartPosFunction;
export type TimeDurationHeightFunction = (duration: number | string) => number;
export type TimeDurationWidthFunction = (minutes: number) => number;

export type QCalendarRef = {
  prev: () => void;
  next: () => void;
  move: () => void;
  moveToToday: () => void;
  updateCurrent: () => void;
  timeStartPos: TimeStartPosFunction;
  timeDurationHeight: TimeDurationHeightFunction;
  scrollToTime: (time: string) => void;
};

export type QCalendarDayScope = {
  timestamp: Timestamp;
  timeStartPos: TimeStartPosFunction;
  timeDurationHeight: TimeDurationHeightFunction;
  columnIndex?: number;
};

export type QCalendarSlotData<T> = {
  scope: T;
};

export type QCalendarHeadDayScope = QCalendarDayScope & {
  activeDate: boolean;
  droppable: boolean;
};
export type QCalendarHeadDayData = QCalendarSlotData<QCalendarHeadDayScope>;

export type QCalendarHeadDayEventsScope = {
  days: Timestamp;
  ref: Ref<HTMLDivElement>;
};

export type QCalendarHeadDayEventScope = QCalendarDayScope & {
  activeDate: boolean;
};

export type QCalendarDayHeadWeekdayLabelScope = QCalendarDayScope & {
  shortWeekdayLabel: boolean;
};

export type QCalendarHeadDayLabelScope = {
  dayLabel: string;
  timestamp: Timestamp;
  activeDate: boolean;
};
export type QCalendarHeadDayButtonScope = QCalendarHeadDayLabelScope;

export type QCalendarDayContainerScope = {
  days: Timestamp[];
};

export type QCalendarHeadResourcesScope<
  R extends Record<string, any> = Record<string, any>
> = {
  timestamps: Timestamp[];
  date: string;
  resources: QDateResource<R>[];
};

export type QCalendarResourceLabelScope<
  R extends Record<string, any> = Record<string, any>
> = {
  resource: QDateResource<R>;
  timestamps: Timestamp[];
  resourceIndex: number;
  indentLevel: number;
  label: string;
};

export type QCalendarResourceLabelData<
  R extends Record<string, any> = Record<string, any>
> = QCalendarSlotData<QCalendarResourceLabelScope<R>>;

export type QCalendarResourceExpandedEventData<
  R extends Record<string, any> = Record<string, any>
> = {
  expanded: boolean;
  scope: QCalendarResourceLabelScope<R>;
};

export type DateEventScope = {
  column: Record<string, any>;
  index: number;
  days: Timestamp[];
  timestamp?: Timestamp;
};

export type DateEventFunction = (
  ev: Event,
  type: "head-day" | "head-column" | "column",
  data: QCalendarSlotData<DateEventScope>
) => boolean;

export type QCalendarIntervalLabelScope = {
  timestamp: Timestamp;
  index: number;
  label: string;
  droppable: boolean;
};

export type QCalendarIntervalLabelData =
  QCalendarSlotData<QCalendarIntervalLabelScope>;
export type QCalendarResourceIntervalScope<
  R extends Record<string, any> = Record<string, any>
> = {
  timestamp: Timestamp;
  resourceIndex: number;
  resource: QDateResource<R>;
  activeDate: boolean;
};

export type QCalendarResourceIntervalsScope<
  R extends Record<string, any> = Record<string, any>
> = {
  timestamp: Timestamp;
  resourceIndex: number;
  resource: QDateResource<R>;
  droppable: boolean;
  timeStartPosX: TimeStartPosXFunction;
  timeDurationWidth: TimeDurationWidthFunction;
};

export type QCalendarResourceBaseSlots<
  R extends Record<string, any> = Record<string, any>
> = {
  "head-resources"?: (
    data: QCalendarSlotData<QCalendarHeadResourcesScope<R>>
  ) => JSX.Element;
  "resource-label"?: (data: QCalendarResourceLabelData<R>) => JSX.Element;
};

export type QCalendarDaySlotsCommon = {
  "head-days-events"?: (
    data: QCalendarSlotData<QCalendarHeadDayEventsScope>
  ) => JSX.Element;
  "head-day"?: (data: QCalendarSlotData<QCalendarHeadDayScope>) => JSX.Element;
  "head-date"?: (data: QCalendarSlotData<QCalendarHeadDayScope>) => JSX.Element;
  "head-day-event"?: (
    data: QCalendarSlotData<QCalendarHeadDayEventScope>
  ) => JSX.Element;
  "head-weekday-label"?: (
    data: QCalendarSlotData<QCalendarDayHeadWeekdayLabelScope>
  ) => JSX.Element;
  "head-day-label"?: (
    data: QCalendarSlotData<QCalendarHeadDayLabelScope>
  ) => JSX.Element;
  "head-day-button"?: (
    data: QCalendarSlotData<QCalendarHeadDayButtonScope>
  ) => JSX.Element;
  "day-container"?: (
    data: QCalendarSlotData<QCalendarDayContainerScope>
  ) => JSX.Element;
};

export type QCalendarIntervalSlots<
  R extends Record<string, any> = Record<string, any>
> = {
  "interval-label"?: (data: QCalendarIntervalLabelData) => JSX.Element;
  "resource-interval"?: (
    data: QCalendarSlotData<QCalendarResourceIntervalScope<R>>
  ) => JSX.Element;
  "resource-intervals"?: (
    data: QCalendarSlotData<QCalendarResourceIntervalsScope<R>>
  ) => JSX.Element;
};

export type QCalendarTaskFooterDayScope<T = Record<string, any>> = {
  timestamp: Timestamp;
  footer: T;
  index: number;
};

export type QCalendarTaskFooterDayData<T = Record<string, any>> =
  QCalendarSlotData<QCalendarTaskFooterDayScope<T>>;
