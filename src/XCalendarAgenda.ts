// https://qcalendar.netlify.app/developing/qcalendarscheduler/scheduler-getting-started
import { QCalendarAgenda, Timestamp } from "@quasar/quasar-ui-qcalendar";
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
  XCalendarRef,
  XCalendarDaySlotsCommon,
  XCalendarDayScope,
  XCalendarSlotData,
  XCalendarHeadDayLabelScope,
} from "./types";

export type XCalendarAgendaRef = XCalendarRef;

export type XCalendarAgendaHeadColumnScope<
  C extends Record<string, any> = Record<string, any>
> = {
  column: C;
  index: number;
  days: Timestamp[];
};

export type XCalendarAgendaColumnScope<
  C extends Record<string, any> = Record<string, any>
> = XCalendarAgendaHeadColumnScope<C>;

export type XCalendarAgendaHeadColumnLabelScope<C = Record<string, any>> = {
  column: C;
};

export type XCalendarAgendaSlots<
  C extends Record<string, any> = Record<string, any>
> = XCalendarDaySlotsCommon & {
  "head-column"?: (
    data: XCalendarSlotData<XCalendarAgendaHeadColumnScope<C>>
  ) => JSX.Element;
  "head-column-label"?: (
    data: XCalendarSlotData<XCalendarAgendaHeadColumnLabelScope<C>>
  ) => JSX.Element;
  column?: (
    data: XCalendarSlotData<XCalendarAgendaColumnScope<C>>
  ) => JSX.Element;
  day?: (data: XCalendarSlotData<XCalendarDayScope>) => JSX.Element;
};

export type XCalendarAgendaClickDateEventData = {
  scope: XCalendarHeadDayLabelScope;
};

const calendarAgendaProps = {
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
    (data: XCalendarAgendaClickDateEventData) => void
  >,
};

export default QCalendarAgenda as DefineComponent<
  ComponentObjectPropsOptions<
    ExtractPropTypes<typeof calendarAgendaProps> &
      MakeCalendarMouseEvents<"Date"> &
      MakeCalendarMouseEvents<"HeadDay"> &
      MakeCalendarMouseEvents<"Time">
  >
>;
