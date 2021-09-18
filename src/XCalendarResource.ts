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
  XCalendarRef,
  XCalendarIntervalSlots,
  XCalendarResourceBaseSlots,
  XCalendarResourceExpandedEventData,
  XCalendarResourceLabelScope,
} from "./types";

export type XCalendarResourceRef = XCalendarRef;

export type XCalendarResourceSlots<
  R extends Record<string, any> = Record<string, any>
> = XCalendarResourceBaseSlots<R> & XCalendarIntervalSlots<R>;

export type XCalendarClickResourceEventData<
  R extends Record<string, any> = Record<string, any>
> = {
  event: KeyboardEvent;
  scope: XCalendarResourceLabelScope<R>;
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
    (data: XCalendarResourceExpandedEventData) => void
  >,
  onClickResource: Function as PropType<
    (data: XCalendarClickResourceEventData) => void
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
