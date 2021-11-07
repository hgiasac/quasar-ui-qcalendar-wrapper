// https://github.com/quasarframework/quasar-ui-qcalendar/tree/next
import { Timestamp } from "@quasar/quasar-ui-qcalendar";
import { PropType } from "vue";

import {
  DateAlignment,
  MiniMode,
  CalendarViewType,
  DateEventFunction,
  QDateResource,
  QCalendarHeadDayData,
  QCalendarResourceLabelData,
  QCalendarIntervalLabelData,
  QCalendarTaskFooterDayData,
} from "./types";

export type DateHeaderType = "stacked" | "inline" | "inverted";
export type DateType = "round" | "rounded" | "square";

export type TransitionType =
  | "slide-right"
  | "slide-left"
  | "slide-up"
  | "slide-down"
  | "fade"
  | "scale"
  | "rotate"
  | "flip-right"
  | "flip-left"
  | "flip-up"
  | "flip-down"
  | "jump-right"
  | "jump-left"
  | "jump-up"
  | "jump-down";

const transitionProps = {
  animated: Boolean,
  transitionPrev: {
    type: String as PropType<TransitionType>,
  },
  transitionNext: {
    type: String as PropType<TransitionType>,
  },
};

const useWeekdayStyle = {
  weekdayStyle: Function as PropType<(data: QCalendarHeadDayData) => unknown>,
  weekdayClass: Function as PropType<(data: QCalendarHeadDayData) => unknown>,
};

const useDayStyle = {
  dayStyle: Function as PropType<(data: QCalendarHeadDayData) => unknown>,
  dayClass: Function as PropType<(data: QCalendarHeadDayData) => unknown>,
};

const useResourceStyle = {
  resourceStyle: {
    type: Function as PropType<(interval: Timestamp) => unknown>,
  },
  resourceClass: {
    type: Function as PropType<(data: QCalendarResourceLabelData) => unknown>,
  },
};

export const useCommonProps = {
  ...transitionProps,
  modelValue: {
    type: String,
  },
  weekdays: {
    type: Array as PropType<(0 | 1 | 2 | 3 | 4 | 5 | 6)[]>,
  },
  dateType: {
    type: String as PropType<DateType>,
  },
  weekdayAlign: {
    type: String as PropType<DateAlignment>,
  },
  dateAlign: {
    type: String as PropType<DateAlignment>,
  },
  bordered: Boolean,
  dark: Boolean,
  noAria: Boolean,
  noActiveDate: Boolean,
  noHeader: Boolean,
  noScroll: Boolean,
  shortWeekdayLabel: Boolean,
  noDefaultHeaderText: Boolean,
  noDefaultHeaderBtn: Boolean,
  minWeekdayLabel: {
    type: [Number, String],
  },
  weekdayBreakpoints: {
    type: Array,
  },
  locale: {
    type: String,
  },
  disabledDays: Array,
  disabledBefore: String,
  disabledAfter: String,
  disabledWeekdays: {
    type: Array,
  },
  dragEnterFunc: {
    type: Function as PropType<DateEventFunction>,
  },
  dragOverFunc: {
    type: Function as PropType<DateEventFunction>,
  },
  dragLeaveFunc: {
    type: Function as PropType<DateEventFunction>,
  },
  dropFunc: {
    type: Function as PropType<DateEventFunction>,
  },
  selectedDates: {
    type: Array,
  },
  selectedStartEndDates: {
    type: Array,
  },
  hoverable: Boolean,
  focusable: Boolean,
  focusType: {
    type: Array as PropType<
      ("day" | "date" | "weekday" | "interval" | "resource" | "task")[]
    >,
  },
  onMiniMode: Function as PropType<(val: boolean) => void>,
};

export const useMonthProps = {
  ...useDayStyle,
  ...useWeekdayStyle,
  dayHeight: {
    type: [Number, String],
  },
  dayPadding: String,
  minWeeks: {
    type: [Number, String],
  },
  shortMonthLabel: Boolean,
  showWorkWeeks: Boolean,
  showMonthLabel: {
    type: Boolean,
  },
  showDayOfYearLabel: Boolean,
  enableOutsideDays: Boolean,
  noOutsideDays: Boolean,
  hover: Boolean,
  miniMode: {
    type: [Boolean, String] as PropType<MiniMode>,
  },
  breakpoint: {
    type: [Number, String] as PropType<
      "xs" | "sm" | "md" | "lg" | "xl" | number
    >,
  },
  monthLabelSize: {
    type: String as PropType<"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl">,
  },
  dayMinHeight: {
    type: [Number, String],
  },
};

export const useTimesProps = {
  now: {
    type: String,
  },
};

export const useCellWidthProps = {
  cellWidth: [Number, String],
};

export const useNavigationProps = {
  useNavigation: Boolean,
};

export const useIntervalProps = {
  ...useWeekdayStyle,
  view: {
    type: String as PropType<"day" | "week" | "month" | "month-interval">,
  },
  shortIntervalLabel: Boolean,
  intervalHeight: {
    type: [Number, String],
  },
  intervalMinutes: {
    type: [Number, String],
  },
  intervalStart: {
    type: [Number, String],
  },
  intervalCount: {
    type: [Number, String],
  },
  intervalStyle: {
    type: Function as PropType<(data: Timestamp) => unknown>,
  },
  intervalClass: {
    type: Function as PropType<(data: QCalendarIntervalLabelData) => unknown>,
  },
  showIntervalLabel: {
    type: Function as PropType<(interval: Timestamp) => boolean>,
  },
  hour24Format: Boolean,
  timeClicksClamped: Boolean,
  dateHeader: {
    type: String as PropType<DateHeaderType>,
  },
};

export const useSchedulerProps = {
  ...useDayStyle,
  ...useWeekdayStyle,
  ...useResourceStyle,
  view: {
    type: String as PropType<CalendarViewType>,
  },
  modelResources: {
    type: Array as PropType<QDateResource[]>,
  },
  resourceKey: {
    type: [String, Number],
  },
  resourceLabel: {
    type: [String, Number],
  },
  resourceHeight: {
    type: [Number, String],
  },
  resourceMinHeight: {
    type: [Number, String],
  },
  dateHeader: {
    type: String as PropType<DateHeaderType>,
  },
};

export type AgendaColumnOption = {
  id: string;
  label: string;
  [key: string]: any;
};

export const useAgendaProps = {
  ...useDayStyle,
  ...useWeekdayStyle,
  view: {
    type: String as PropType<CalendarViewType>,
  },
  leftColumnOptions: {
    type: Array as PropType<AgendaColumnOption[]>,
  },
  rightColumnOptions: {
    type: Array as PropType<AgendaColumnOption[]>,
  },
  columnOptionsId: {
    type: String,
  },
  columnOptionsLabel: {
    type: String,
  },
  dateHeader: {
    type: String as PropType<DateHeaderType>,
  },
  dayHeight: {
    type: [Number, String],
  },
  dayMinHeight: {
    type: [Number, String],
  },
};

export const useResourceProps = {
  ...useResourceStyle,
  modelResources: {
    type: Array,
  },
  resourceKey: {
    type: [String, Number],
  },
  resourceLabel: {
    type: [String, Number],
  },
  resourceHeight: {
    type: [Number, String],
  },
  resourceMinHeight: {
    type: [Number, String],
  },
  cellWidth: {
    type: [Number, String],
  },
  intervalHeaderHeight: {
    type: [Number, String],
  },
  noSticky: Boolean,
};

export const useMaxDaysProps = {
  maxDays: {
    type: Number,
  },
};

export const useTaskProps = {
  ...useCommonProps,
  ...useDayStyle,
  ...useWeekdayStyle,
  modelTasks: {
    type: Array,
  },
  modelTitle: {
    type: Array as PropType<string[]>,
  },
  modelFooter: {
    type: Array,
  },
  taskKey: {
    type: [String, Number],
  },
  taskLabel: {
    type: [String, Number],
  },
  dateHeader: {
    type: String as PropType<DateHeaderType>,
  },
  view: {
    type: String as PropType<"day" | "week" | "month">,
  },
  viewCount: {
    type: Number,
  },
  cellWidth: [Number, String],
  footerDayClass: Function as PropType<
    (data: QCalendarTaskFooterDayData) => unknown
  >,
  taskWidth: {
    type: Number,
  },
};

export const useColumnProps = {
  columnCount: {
    type: [Number, String],
  },
  columnIndexStart: {
    type: [Number, String],
  },
};

export const useMoveProps = {
  onMove: Function as PropType<(val: Timestamp) => void>,
};

export type DateChangeEventData = {
  start: Timestamp;
  end: Timestamp;
  days: Timestamp[];
};

export const useCheckChangeProps = {
  onChange: Function as PropType<(data: DateChangeEventData) => void>,
};

export type CalendarMouseEventData<Ev> = {
  event: Ev;
  scope: {
    timestamp: Timestamp;
    columnIndex: number;
    activeDate: boolean;
    droppable: boolean;
  };
};
export type MakeCalendarMouseEvents<Suffix extends string> = Record<
  | `onClick${Suffix}`
  | `onContextmenu${Suffix}`
  | `onMousedown${Suffix}`
  | `onMousemove${Suffix}`
  | `onMouseup${Suffix}`
  | `onMouseenter${Suffix}`
  | `onMouseleave${Suffix}`,
  (ev?: CalendarMouseEventData<MouseEvent>) => void
> &
  Record<
    `onTouchstart${Suffix}` | `onTouchmove${Suffix}` | `onTouchend${Suffix}`,
    (ev?: CalendarMouseEventData<TouchEvent>) => void
  >;
