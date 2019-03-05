import { createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffecb3',
      main: '#ff8f00',
      dark: '#ff6f00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#81d4fa',
      main: '#03a9f4',
      dark: '#01579b',
      contrastText: '#000',
    },
  },
})

export default Theme
