import { createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9fa8da',
      main: 'rgb(81, 159, 248)',
      dark: '#1a237e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e0e0e0',
      main: '#9e9e9e',
      dark: '#424242',
      contrastText: '#000',
    },
    error: {
      main: '#f44336',
    },
  },
})

export default Theme
