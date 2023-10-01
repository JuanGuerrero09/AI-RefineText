import { type SUPPORTED_LANGUAGES, type AUTO_LANGUAGE } from './constants'

type Languages = keyof typeof SUPPORTED_LANGUAGES
type AutoLanguage = typeof AUTO_LANGUAGE
type FromLanguage = Languages | AutoLanguage
type ToLanguage = Languages

export interface GlobalState {
  fromLanguage: FromLanguage
  toLanguage: ToLanguage
  inputText: string
  outputText: string
  isLoading: boolean
}

export type Action =
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE', payload: ToLanguage }
  | { type: 'INTERCHANGE_LANGUAGE' }
  | { type: 'SET_INPUT_TEXT', payload: string }
  | { type: 'GET_OUTPUT_TEXT', payload: string }

export enum SectionType {
  From = 'from',
  To = 'to'
}
