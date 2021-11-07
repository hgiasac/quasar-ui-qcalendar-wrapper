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
  QCalendarRef,
  QCalendarDaySlotsCommon,
  QCalendarDayScope,
  QCalendarSlotData,
  QCalendarHeadDayLabelScope,
} from "./types";

export type QCalendarAgendaRef = QCalendarRef;

export type QCalendarAgendaHeadColumnScope<
  C extends Record<string, any> = Record<string, any>
> = {
  column: C;
  index: number;
  days: Timestamp[];
};

export type QCalendarAgendaColumnScope<
  C extends Record<string, any> = Record<string, any>
> = QCalendarAgendaHeadColumnScope<C>;

export type QCalendarAgendaHeadColumnLabelScope<C = Record<string, any>> = {
  column: C;
};

export type QCalendarAgendaSlots<
  C extends Record<string, any> = Record<string, any>
> = QCalendarDaySlotsCommon & {
  "head-column"?: (
    data: QCalendarSlotData<QCalendarAgendaHeadColumnScope<C>>
  ) => JSX.Element;
  "head-column-label"?: (
    data: QCalendarSlotData<QCalendarAgendaHeadColumnLabelScope<C>>
  ) => JSX.Element;
  column?: (
    data: QCalendarSlotData<QCalendarAgendaColumnScope<C>>
  ) => JSX.Element;
  day?: (data: QCalendarSlotData<QCalendarDayScope>) => JSX.Element;
};

export type QCalendarAgendaClickDateEventData = {
  scope: QCalendarHeadDayLabelScope;
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
    (data: QCalendarAgendaClickDateEventData) => void
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
