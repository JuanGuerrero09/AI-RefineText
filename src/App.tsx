/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './App.css'
import { AUTO_LANGUAGE } from './constants'
import { useTranslation } from './hooks/useTranslation'
import { Button } from './components/ui/button'
import ChangeLanguageIcon from './components/icons'
import LanguageSelector from './components/LanguageSelector'
import { TextTranslation } from './components/TextTranslation'

export enum SectionType {
  From = 'from',
  To = 'to'
}

function App() {
  const {
    fromLanguage,
    toLanguage,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage
  } = useTranslation()
  return (
    <>
      <h1>AI-RefineText</h1>
      <p>
        Current language {fromLanguage} to {toLanguage}
      </p>
      <div className="flex gap-3">
        <div>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <TextTranslation></TextTranslation>
        </div>
        <div>
          <Button
            variant="outline"
            size="icon"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={() => {
              interchangeLanguage()
            }}
          >
            <ChangeLanguageIcon />
          </Button>
        </div>
        <div>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
        </div>
      </div>
    </>
  )
}

export default App
