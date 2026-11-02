import type {
  Locale,
  Localized
} from '~/data/portfolio'

// Returns a reader that picks the current language from a `Localized` pair.
export function useLocalized() {
  const {
    locale
  } = useI18n()

  return (text: Localized) => text[locale.value as Locale]
}
