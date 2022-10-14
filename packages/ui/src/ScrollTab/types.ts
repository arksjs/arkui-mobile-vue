import type {
  StickyViewItemProps,
  StickyViewOnChange
} from '../StickyView/types'

export interface ScrollTabProps {
  stickyOffsetTop?: number | string
  stickyOffsetBottom?: number | string
}

export interface ScrollTabEmits {
  onChange?: StickyViewOnChange
}

export type ScrollTabItemProps = StickyViewItemProps

export interface ScrollTabRef {
  switchToIndex?: (index: number) => void
}

export type { StickyViewOnChange as ScrollTabOnChange }
