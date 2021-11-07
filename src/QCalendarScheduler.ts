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
  QDateResource,
  QCalendarDaySlotsCommon,
  QCalendarRef,
  QCalendarResourceBaseSlots,
  QCalendarSlotData,
  QCalendarHeadDayLabelScope,
  QCalendarResourceExpandedEventData,
} from "./types";

export type QCalendarSchedulerRef = QCalendarRef;

export type QCalendarSchedulerColumnHeaderBeforeScope = {
  timestamp: Timestamp;
  columnIndex: number;
};
export type QCalendarSchedulerColumnHeaderAfterScope =
  QCalendarSchedulerColumnHeaderBeforeScope;

export type QCalendarSchedulerResourceDaysScope<T = Record<string, any>> = {
  resource: QDateResource<T>;
  resourceIndex: number;
  indentLevel: number;
  expanded: boolean;
  cellWidth: number;
  timestamps: Timestamp;
};

export type QCalendarSchedulerDayScope = {
  timestamp: Timestamp;
  columnIndex?: number;
  resource: QDateResource;
  resourceIndex: number;
  activeDate: boolean;
  droppable: boolean;
  indentLevel: number;
};

export type QCalendarSchedulerClickResourceEventData = {
  event: KeyboardEvent;
  scope: QCalendarSchedulerDayScope;
};

export type QCalendarSchedulerSlots<
  R extends Record<string, any> = Record<string, any>
> = QCalendarResourceBaseSlots<R> &
  QCalendarDaySlotsCommon & {
    "column-header-before"?: (
      data: QCalendarSlotData<QCalendarSchedulerColumnHeaderBeforeScope>
    ) => JSX.Element;
    "column-header-after"?: (
      data: QCalendarSlotData<QCalendarSchedulerColumnHeaderAfterScope>
    ) => JSX.Element;
    "resource-days"?: (
      data: QCalendarSlotData<QCalendarSchedulerResourceDaysScope>
    ) => JSX.Element;
    day?: (data: QCalendarSlotData<QCalendarSchedulerDayScope>) => JSX.Element;
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
    (data: QCalendarResourceExpandedEventData) => void
  >,
  onClickResource: Function as PropType<
    (data: QCalendarSchedulerClickResourceEventData) => void
  >,
  onClickDate: Function as PropType<(data: QCalendarHeadDayLabelScope) => void>,
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
