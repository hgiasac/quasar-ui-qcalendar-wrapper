// https://qcalendar.netlify.app/developing/qcalendarscheduler/scheduler-getting-started
import { QCalendarScheduler } from "@quasar/quasar-ui-qcalendar";
import { Timestamp } from "@quasar/quasar-ui-qcalendar";
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
  useMaxDaysProps,
  useMoveProps,
  useNavigationProps,
  useSchedulerProps,
  useTimesProps,
} from "./props";
import {
  DateResource,
  XCalendarDaySlotsCommon,
  XCalendarRef,
  XCalendarResourceBaseSlots,
  XCalendarSlotData,
  XCalendarHeadDayLabelScope,
  XCalendarResourceExpandedEventData,
} from "./types";

export type XCalendarSchedulerRef = XCalendarRef;

export type XCalendarSchedulerColumnHeaderBeforeScope = {
  timestamp: Timestamp;
  columnIndex: number;
};
export type XCalendarSchedulerColumnHeaderAfterScope =
  XCalendarSchedulerColumnHeaderBeforeScope;

export type XCalendarSchedulerResourceDaysScope<T = Record<string, any>> = {
  resource: DateResource<T>;
  resourceIndex: number;
  indentLevel: number;
  expanded: boolean;
  cellWidth: number;
  timestamps: Timestamp;
};

export type XCalendarSchedulerDayScope = {
  timestamp: Timestamp;
  columnIndex?: number;
  resource: DateResource;
  resourceIndex: number;
  activeDate: boolean;
  droppable: boolean;
  indentLevel: number;
};

export type XCalendarSchedulerClickResourceEventData = {
  event: KeyboardEvent;
  scope: XCalendarSchedulerDayScope;
};

export type XCalendarSchedulerSlots<
  R extends Record<string, any> = Record<string, any>
> = XCalendarResourceBaseSlots<R> &
  XCalendarDaySlotsCommon & {
    "column-header-before"?: (
      data: XCalendarSlotData<XCalendarSchedulerColumnHeaderBeforeScope>
    ) => JSX.Element;
    "column-header-after"?: (
      data: XCalendarSlotData<XCalendarSchedulerColumnHeaderAfterScope>
    ) => JSX.Element;
    "resource-days"?: (
      data: XCalendarSlotData<XCalendarSchedulerResourceDaysScope>
    ) => JSX.Element;
    day?: (data: XCalendarSlotData<XCalendarSchedulerDayScope>) => JSX.Element;
  };

const calendarSchedulerProps = {
  ...useCommonProps,
  ...useSchedulerProps,
  ...useColumnProps,
  ...useTimesProps,
  ...useCellWidthProps,
  ...useNavigationProps,
  ...useMaxDaysProps,
  ...useMoveProps,
  ...useCheckChangeProps,
  onResourceExpanded: Function as PropType<
    (data: XCalendarResourceExpandedEventData) => void
  >,
  onClickResource: Function as PropType<
    (data: XCalendarSchedulerClickResourceEventData) => void
  >,
  onClickDate: Function as PropType<(data: XCalendarHeadDayLabelScope) => void>,
};

export default QCalendarScheduler as DefineComponent<
  ComponentObjectPropsOptions<
    ExtractPropTypes<typeof calendarSchedulerProps> &
      MakeCalendarMouseEvents<"Date"> &
      MakeCalendarMouseEvents<"DayResources"> &
      MakeCalendarMouseEvents<"HeadResources"> &
      MakeCalendarMouseEvents<"HeadDay"> &
      MakeCalendarMouseEvents<"Resource">
  >
>;
