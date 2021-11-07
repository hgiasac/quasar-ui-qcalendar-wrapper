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
  QCalendarSlotData,
  QCalendarDayScope,
  QCalendarRef,
  QCalendarDaySlotsCommon,
  QCalendarHeadDayLabelScope,
} from "./types";

export type QCalendarDayRef = QCalendarRef;

export type QCalendarDayHeadIntervalsScope = {
  timestamps: Timestamp;
  date: Timestamp;
};

export type QCalendarDayIntervalScope = QCalendarDayScope & {
  droppable: boolean;
};

export type QCalendarDayColumnHeaderBeforeScope = {
  timestamp: Timestamp;
  columnIndex: number;
};

export type QCalendarDayColumnHeaderAfterScope =
  QCalendarDayColumnHeaderBeforeScope;

export type QCalendarDayIntervalLabelScope = {
  timestamp: Timestamp;
  label?: string;
};

export type QCalendarDayClickDateEventData = {
  scope: QCalendarHeadDayLabelScope;
};
export type QCalendarDateClickTimeEventData = {
  event: KeyboardEvent;
  scope: QCalendarDayIntervalScope;
};

export type QCalendarDaySlots = QCalendarDaySlotsCommon & {
  "head-intervals"?: (
    data: QCalendarSlotData<QCalendarDayHeadIntervalsScope>
  ) => JSX.Element;
  "column-header-before"?: (
    data: QCalendarSlotData<QCalendarDayColumnHeaderBeforeScope>
  ) => JSX.Element;
  "column-header-after"?: (
    data: QCalendarSlotData<QCalendarDayColumnHeaderAfterScope>
  ) => JSX.Element;
  "day-body"?: (data: QCalendarSlotData<QCalendarDayScope>) => JSX.Element;
  "day-interval"?: (
    data: QCalendarSlotData<QCalendarDayIntervalScope>
  ) => JSX.Element;
  "interval-label"?: (
    data: QCalendarSlotData<QCalendarDayIntervalLabelScope>
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
    (data: QCalendarDayClickDateEventData) => void
  >,
  onClickTime: Function as PropType<
    (data: QCalendarDateClickTimeEventData) => void
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
