import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select'
type Languages = keyof typeof SUPPORTED_LANGUAGES
type AutoLanguage = typeof AUTO_LANGUAGE
type FromLanguage = Languages | AutoLanguage
type ToLanguage = Languages

export enum SectionType {
  From = 'from',
  To = 'to'
}

type Props = | {
  type: SectionType.From
  value: FromLanguage
  onChange: (value: FromLanguage) => void
} |
{
  type: SectionType.To
  value: Languages
  onChange: (value: Languages) => void
}

export default function LanguageSelector({ type, value, onChange }: Props) {
  const handleChange = (value: ToLanguage) => {
    onChange(value)
  }
  return (
    <Select onValueChange={(value) => { handleChange(value as Languages) }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue>
          {value === AUTO_LANGUAGE ? 'Detectar idioma' : SUPPORTED_LANGUAGES[value]}
        </SelectValue>
      </SelectTrigger>
      <SelectContent onChange={() => { console.log('hola') }}>
        {type === SectionType.From && <SelectItem value={AUTO_LANGUAGE}>Detectar idioma</SelectItem>}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
          <SelectItem key={key} value={key}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
