import localFont from 'next/font/local';

const clashDisplay = localFont({
  src: [
    {
      path: './ClashDisplay-Regular.otf',
      weight: '400',
      style:'normal',
    },
    {
      path: './ClashDisplay-Medium.otf',
      weight:'500',
      style:'normal'
    },
    {
      path: './ClashDisplay-Semibold.otf',
      weight:'600',
      style:'normal'
    }
  ]
})

const archivo = localFont({
  src: [
    {
      path: './Archivo-Light.otf',
      weight:'300',
      style:'normal'
    },
    {
      path: './Archivo-Regular.otf',
      weight:'400',
      style:'normal'
    },
    {
      path: './Archivo-Medium.otf',
      weight:'500',
      style:'normal'
    },
  ]
})

export {clashDisplay,archivo}