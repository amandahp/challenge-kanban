const baseValueToRem = (multiplicator) => {
  return `${multiplicator / 16}rem`
}

const defaultValues = {
  color: {
    primary: '#0065FF',
    secondary: '#FFFFFF',
    tertiary: '#403294',
    default: '#EBECF0',
    grey: '#FAFBFC',
    greyDark: '#cccccc',
    black: '#000000'
  },
  backgroundColor: {
    paper: '#FFFFFF',
    default: '#FAFBFC'
  },
  priority: {
    low: '#23B218',
    medium: '#FF9700',
    high: '#DE1616'
  }
}

const theme = {
  baseValueToRem,
  ...defaultValues
}

export default theme
