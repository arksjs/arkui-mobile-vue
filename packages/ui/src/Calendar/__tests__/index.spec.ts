import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { Calendar, CalendarPopup, CalendarView } from '@/Calendar'

describe('Calendar', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Calendar, {
      props: {
        options: []
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('CalendarPopup', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(CalendarPopup, {
      props: {
        options: []
      },
      global: {
        stubs: { teleport: true }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('CalendarView', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(CalendarView, {
      props: {
        options: []
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
