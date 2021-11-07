// https://qcalendar.netlify.app/developing/qcalendarscheduler/scheduler-getting-started
import { QCalendarResource } from "@quasar/quasar-ui-qcalendar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  MakeCalendarMouseEvents,
  useCheckChangeProps,
  useColumnProps,
  useCommonProps,
  useIntervalProps,
  useMaxDaysProps,
  useMoveProps,
  useNavigationProps,
  useResourceProps,
  useTimesProps,
} from "./props";
import {
  QCalendarRef,
  QCalendarIntervalSlots,
  QCalendarResourceBaseSlots,
  QCalendarResourceExpandedEventData,
  QCalendarResourceLabelScope,
} from "./types";

export type QCalendarResourceRef = QCalendarRef;

export type QCalendarResourceSlots<
  R extends Record<string, any> = Record<string, any>
> = QCalendarResourceBaseSlots<R> & QCalendarIntervalSlots<R>;

export type QCalendarClickResourceEventData<
  R extends Record<string, any> = Record<string, any>
> = {
  event: KeyboardEvent;
  scope: QCalendarResourceLabelScope<R>;
};

const calendarSchedulerProps = {
  ...useCommonProps,
  ...useResourceProps,
  ...useIntervalProps,
  ...useColumnProps,
  ...useMaxDaysProps,
  ...useTimesProps,
  ...useNavigationProps,
  ...useCheckChangeProps,
  ...useMoveProps,
  onResourceExpanded: Function as PropType<
    (data: QCalendarResourceExpandedEventData) => void
  >,
  onClickResource: Function as PropType<
    (data: QCalendarClickResourceEventData) => void
  >,
};

export default QCalendarResource as DefineComponent<
  ComponentObjectPropsOptions<
    ExtractPropTypes<typeof calendarSchedulerProps> &
      MakeCalendarMouseEvents<"Date"> &
      MakeCalendarMouseEvents<"Interval"> &
      MakeCalendarMouseEvents<"HeadDay"> &
      MakeCalendarMouseEvents<"Time"> &
      MakeCalendarMouseEvents<"HeadResources"> &
      MakeCalendarMouseEvents<"Resource">
  >
>;
