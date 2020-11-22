module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      boxShadow: {
        'offset-black-sm': '2px 2px 0px 0px black',
        'offset-black': '5px 5px 0px 0px black',
        'offset-red': '5px 5px 0px 0px #fc8181'
      },
      colors: {
        'clubhouse-gray': '#1d1f38',
      },
      spacing: {
        36: '9rem',
        52: '13rem',
        76: '19rem'
      },
    },
  },
  variants: {
    extend: {
      // boxShadow: ['hover']
    }
  },
  plugins: [],
}
