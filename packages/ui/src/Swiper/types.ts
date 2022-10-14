import type { Noop, OnClick } from '../helpers/types'

export type OnActiveIndexChange = (index: number, fromIndex: number) => void

export type OnAnimated = OnActiveIndexChange

export type OnResetItems = (
  items: {
    name: string
    subName: string
    index: number
  }[]
) => void

export interface SwiperProps {
  indicatorDots?: boolean // 是否显示面板指示点
  indicatorColor?: string
  indicatorActiveColor?: string
  navigationButtons?: boolean
  autoplay?: boolean
  interval?: number | string
  duration?: number | string
  initialCircular?: boolean
  initialActiveIndex?: number
  initialVertical?: boolean
  bounces?: boolean // 边界弹性控制
  activeIndex?: number
}

export interface SwiperEmits {
  onUpdateActiveIndex?: (index: number) => void
  onActiveIndexChange?: OnActiveIndexChange
  onAnimated?: OnAnimated
  onClick?: OnClick
}

export type SwiperItemProps = {
  className?: string
  index?: number
  vertical?: boolean
}

export type SwipeTo = (newIndex: number) => void

export type SwiperRef = {
  swipeTo: SwipeTo
  prev: Noop
  next: Noop
}

export type {
  OnActiveIndexChange as SwiperOnActiveIndexChange,
  OnAnimated as SwiperOnAnimated
}
