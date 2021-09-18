import { QCalendar } from "@quasar/quasar-ui-qcalendar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  useCellWidthProps,
  useCommonProps,
  useIntervalProps,
  useMaxDaysProps,
  useMonthProps,
  useNavigationProps,
  useResourceProps,
  useSchedulerProps,
  useTaskProps,
  useTimesProps,
} from "./props";

export type CalendarMode =
  | "day"
  | "month"
  | "agenda"
  | "resource"
  | "scheduler"
  | "task";

const calendarProps = {
  mode: {
    type: String as PropType<CalendarMode>,
  },
  ...useCommonProps,
  ...useMonthProps,
  ...useTimesProps,
  ...useCellWidthProps,
  ...useNavigationProps,
  ...useIntervalProps,
  ...useSchedulerProps,
  ...useResourceProps,
  ...useMaxDaysProps,
  ...useTaskProps,
};

export default QCalendar as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof calendarProps>>
>;
