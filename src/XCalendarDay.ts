// https://qcalendar.netlify.app/developing/qcalendaragenda/agenda-getting-started
import { QCalendarDay, Timestamp } from "@quasar/quasar-ui-qcalendar";
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
  useColumnProps,
  useCommonProps,
  useIntervalProps,
  useMaxDaysProps,
  useMoveProps,
  useNavigationProps,
  useTimesProps,
} from "./props";
import {
  XCalendarSlotData,
  XCalendarDayScope,
  XCalendarRef,
  XCalendarDaySlotsCommon,
  XCalendarHeadDayLabelScope,
} from "./types";

export type XCalendarDayRef = XCalendarRef;

export type XCalendarDayHeadIntervalsScope = {
  timestamps: Timestamp;
  date: Timestamp;
};

export type XCalendarDayIntervalScope = XCalendarDayScope & {
  droppable: boolean;
};

export type XCalendarDayColumnHeaderBeforeScope = {
  timestamp: Timestamp;
  columnIndex: number;
};

export type XCalendarDayColumnHeaderAfterScope =
  XCalendarDayColumnHeaderBeforeScope;

export type XCalendarDayIntervalLabelScope = {
  timestamp: Timestamp;
  label?: string;
};

export type XCalendarDayClickDateEventData = {
  scope: XCalendarHeadDayLabelScope;
};
export type XCalendarDateClickTimeEventData = {
  event: KeyboardEvent;
  scope: XCalendarDayIntervalScope;
};

export type XCalendarDaySlots = XCalendarDaySlotsCommon & {
  "head-intervals"?: (
    data: XCalendarSlotData<XCalendarDayHeadIntervalsScope>
  ) => JSX.Element;
  "column-header-before"?: (
    data: XCalendarSlotData<XCalendarDayColumnHeaderBeforeScope>
  ) => JSX.Element;
  "column-header-after"?: (
    data: XCalendarSlotData<XCalendarDayColumnHeaderAfterScope>
  ) => JSX.Element;
  "day-body"?: (data: XCalendarSlotData<XCalendarDayScope>) => JSX.Element;
  "day-interval"?: (
    data: XCalendarSlotData<XCalendarDayIntervalScope>
  ) => JSX.Element;
  "interval-label"?: (
    data: XCalendarSlotData<XCalendarDayIntervalLabelScope>
  ) => JSX.Element;
};

const calendarDayProps = {
  ...useCommonProps,
  ...useIntervalProps,
  ...useColumnProps,
  ...useMaxDaysProps,
  ...useTimesProps,
  ...useCellWidthProps,
  ...useNavigationProps,
  ...useMoveProps,
  ...useCheckChangeProps,
  onClickDate: Function as PropType<
    (data: XCalendarDayClickDateEventData) => void
  >,
  onClickTime: Function as PropType<
    (data: XCalendarDateClickTimeEventData) => void
  >,
};

export default QCalendarDay as DefineComponent<
  ComponentObjectPropsOptions<
    ExtractPropTypes<typeof calendarDayProps> &
      MakeCalendarMouseEvents<"Date"> &
      MakeCalendarMouseEvents<"Interval"> &
      MakeCalendarMouseEvents<"HeadIntervals"> &
      MakeCalendarMouseEvents<"HeadDay"> &
      MakeCalendarMouseEvents<"Time">
  >
>;
