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
export type DateResource<P extends Record<string, any> = Record<string, any>> =
  P & {
    label: string;
    height?: number;
    expanded?: boolean;
    children?: DateResource<P>[];
  };

export type TimeStartPosFunction = (
  time: string,
  clamp?: boolean
) => boolean | number;
export type TimeStartPosXFunction = TimeStartPosFunction;
export type TimeDurationHeightFunction = (duration: number | string) => number;
export type TimeDurationWidthFunction = (minutes: number) => number;

export type XCalendarRef = {
  prev: () => void;
  next: () => void;
  move: () => void;
  moveToToday: () => void;
  updateCurrent: () => void;
  timeStartPos: TimeStartPosFunction;
  timeDurationHeight: TimeDurationHeightFunction;
  scrollToTime: (time: string) => void;
};

export type XCalendarDayScope = {
  timestamp: Timestamp;
  timeStartPos: TimeStartPosFunction;
  timeDurationHeight: TimeDurationHeightFunction;
  columnIndex?: number;
};

export type XCalendarSlotData<T> = {
  scope: T;
};

export type XCalendarHeadDayScope = XCalendarDayScope & {
  activeDate: boolean;
  droppable: boolean;
};
export type XCalendarHeadDayData = XCalendarSlotData<XCalendarHeadDayScope>;

export type XCalendarHeadDayEventsScope = {
  days: Timestamp;
  ref: Ref<HTMLDivElement>;
};

export type XCalendarHeadDayEventScope = XCalendarDayScope & {
  activeDate: boolean;
};

export type XCalendarDayHeadWeekdayLabelScope = XCalendarDayScope & {
  shortWeekdayLabel: boolean;
};

export type XCalendarHeadDayLabelScope = {
  dayLabel: string;
  timestamp: Timestamp;
  activeDate: boolean;
};
export type XCalendarHeadDayButtonScope = XCalendarHeadDayLabelScope;

export type XCalendarDayContainerScope = {
  days: Timestamp[];
};

export type XCalendarHeadResourcesScope<
  R extends Record<string, any> = Record<string, any>
> = {
  timestamps: Timestamp[];
  date: string;
  resources: DateResource<R>[];
};

export type XCalendarResourceLabelScope<
  R extends Record<string, any> = Record<string, any>
> = {
  resource: DateResource<R>;
  timestamps: Timestamp[];
  resourceIndex: number;
  indentLevel: number;
  label: string;
};

export type XCalendarResourceLabelData<
  R extends Record<string, any> = Record<string, any>
> = XCalendarSlotData<XCalendarResourceLabelScope<R>>;

export type XCalendarResourceExpandedEventData<
  R extends Record<string, any> = Record<string, any>
> = {
  expanded: boolean;
  scope: XCalendarResourceLabelScope<R>;
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
  data: XCalendarSlotData<DateEventScope>
) => boolean;

export type XCalendarIntervalLabelScope = {
  timestamp: Timestamp;
  index: number;
  label: string;
  droppable: boolean;
};

export type XCalendarIntervalLabelData =
  XCalendarSlotData<XCalendarIntervalLabelScope>;
export type XCalendarResourceIntervalScope<
  R extends Record<string, any> = Record<string, any>
> = {
  timestamp: Timestamp;
  resourceIndex: number;
  resource: DateResource<R>;
  activeDate: boolean;
};

export type XCalendarResourceIntervalsScope<
  R extends Record<string, any> = Record<string, any>
> = {
  timestamp: Timestamp;
  resourceIndex: number;
  resource: DateResource<R>;
  droppable: boolean;
  timeStartPosX: TimeStartPosXFunction;
  timeDurationWidth: TimeDurationWidthFunction;
};

export type XCalendarResourceBaseSlots<
  R extends Record<string, any> = Record<string, any>
> = {
  "head-resources"?: (
    data: XCalendarSlotData<XCalendarHeadResourcesScope<R>>
  ) => JSX.Element;
  "resource-label"?: (data: XCalendarResourceLabelData<R>) => JSX.Element;
};

export type XCalendarDaySlotsCommon = {
  "head-days-events"?: (
    data: XCalendarSlotData<XCalendarHeadDayEventsScope>
  ) => JSX.Element;
  "head-day"?: (data: XCalendarSlotData<XCalendarHeadDayScope>) => JSX.Element;
  "head-date"?: (data: XCalendarSlotData<XCalendarHeadDayScope>) => JSX.Element;
  "head-day-event"?: (
    data: XCalendarSlotData<XCalendarHeadDayEventScope>
  ) => JSX.Element;
  "head-weekday-label"?: (
    data: XCalendarSlotData<XCalendarDayHeadWeekdayLabelScope>
  ) => JSX.Element;
  "head-day-label"?: (
    data: XCalendarSlotData<XCalendarHeadDayLabelScope>
  ) => JSX.Element;
  "head-day-button"?: (
    data: XCalendarSlotData<XCalendarHeadDayButtonScope>
  ) => JSX.Element;
  "day-container"?: (
    data: XCalendarSlotData<XCalendarDayContainerScope>
  ) => JSX.Element;
};

export type XCalendarIntervalSlots<
  R extends Record<string, any> = Record<string, any>
> = {
  "interval-label"?: (data: XCalendarIntervalLabelData) => JSX.Element;
  "resource-interval"?: (
    data: XCalendarSlotData<XCalendarResourceIntervalScope<R>>
  ) => JSX.Element;
  "resource-intervals"?: (
    data: XCalendarSlotData<XCalendarResourceIntervalsScope<R>>
  ) => JSX.Element;
};

export type XCalendarTaskFooterDayScope<T = Record<string, any>> = {
  timestamp: Timestamp;
  footer: T;
  index: number;
};

export type XCalendarTaskFooterDayData<T = Record<string, any>> =
  XCalendarSlotData<XCalendarTaskFooterDayScope<T>>;
