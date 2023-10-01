import { useReducer } from 'react'
import type { Action, FromLanguage, GlobalState, ToLanguage } from '../types'
import { AUTO_LANGUAGE } from '../constants'

const initialState: GlobalState = {
  fromLanguage: 'es',
  toLanguage: 'en',
  inputText: '',
  outputText: '',
  isLoading: false
}

function reducer(state: GlobalState, action: Action): GlobalState {
  const { type } = action
  switch (type) {
    case 'SET_FROM_LANGUAGE': {
      return {
        ...state,
        fromLanguage: action.payload
      }
    }
    case 'SET_TO_LANGUAGE': {
      return {
        ...state,
        toLanguage: action.payload
      }
    }
    case 'INTERCHANGE_LANGUAGE': {
      if (state.fromLanguage === state.toLanguage) {
        return state
      } else if (state.fromLanguage === AUTO_LANGUAGE) {
        return state
      }
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }
    case 'SET_INPUT_TEXT': {
      return {
        ...state,
        inputText: action.payload,
        isLoading: true
      }
    }
    case 'GET_OUTPUT_TEXT': {
      return {
        ...state,
        outputText: action.payload,
        isLoading: false
      }
    }
  }
}

export const useTranslation = () => {
  const [
    { fromLanguage, toLanguage, inputText, outputText, isLoading },
    dispatch
  ] = useReducer(reducer, initialState)

  const interchangeLanguage = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGE' })
  }

  const setFromLanguage = (language: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload: language })
  }

  const setToLanguage = (language: ToLanguage) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload: language })
  }

  const setInputText = (text: string) => {
    dispatch({ type: 'SET_INPUT_TEXT', payload: text })
  }

  const getOutputText = (text: string) => {
    dispatch({ type: 'GET_OUTPUT_TEXT', payload: text })
  }

  return {
    fromLanguage,
    toLanguage,
    inputText,
    outputText,
    isLoading,
    setFromLanguage,
    setInputText,
    setToLanguage,
    interchangeLanguage,
    getOutputText
  }
}
