const type = {
  base: 'Montserrat-Light',
  bold: 'Montserrat-SemiBold',
  semiBold: 'Montserrat-SemiBold',
  medium: 'Montserrat-Medium'
}

const size = {
  h1: 38,
  h2: 34,
  h5: 20,
  regular: 17,
  medium: 14
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}
