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

export type QCalendarMode =
  | "day"
  | "month"
  | "agenda"
  | "resource"
  | "scheduler"
  | "task";

export const useCalendarProps = {
  mode: {
    type: String as PropType<QCalendarMode>,
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
  ComponentObjectPropsOptions<ExtractPropTypes<typeof useCalendarProps>>
>;
