import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'
import ApisWebRegularEot from '@/fonts/ApisWeb-Regular.eot'
import ApisWebRegularWoff from '@/fonts/ApisWeb-Regular.woff'
import ApisWebRegularWoff2 from '@/fonts/ApisWeb-Regular.woff2'

type GlobalStylesProps = {
  any?: string
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
@font-face {
  font-family: 'Apis Web';
  font-style: normal;
  font-weight: 400;
  src:  url(${ApisWebRegularEot}) format('truetype'),
}
@font-face {
  font-family: 'Apis Web';
  font-style: normal;
  font-weight: 400;
  src:  url(${ApisWebRegularWoff2}) format('truetype')
}
@font-face {
  font-family: 'Apis Web';
  font-style: normal;
  font-weight: 400;
  src:  url(${ApisWebRegularWoff}) format('truetype'); 
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}
  ${({ theme }) => css`
    body {
      font-family: ${theme.fontFamily};
    }
  `}
`

export default GlobalStyles
