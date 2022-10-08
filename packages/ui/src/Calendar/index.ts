import Calendar from './Calendar.vue'
import CalendarPopup from './CalendarPopup.vue'
import CalendarView from './CalendarView.vue'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { ShowCalendarOptions, CalendarSourceDetail } from './types'

const showCalendar = createShowPopup<
  ShowCalendarOptions,
  PopupSuccessConfirmArgs<CalendarSourceDetail>
>({
  apiName: 'showCalendar',
  component: CalendarPopup,
  createHook: createConfirmHook
})

export { Calendar, CalendarPopup, CalendarView, showCalendar }
export default Calendar
