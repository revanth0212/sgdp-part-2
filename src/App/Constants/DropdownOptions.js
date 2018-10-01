export const CountryDropDownOptions = {
  USA: {
    code: 'USA',
    desc: 'United States of America'
  },
  IN: {
    code: 'IN',
    desc: 'India'
  }
}

export const getStateDropDownOptions = (country = '') =>
  ({
    USA: {
      TX: {
        code: 'TX',
        desc: 'Texas'
      },
      CA: {
        code: 'CA',
        desc: 'California'
      }
    },
    IN: {
      MH: {
        code: 'MH',
        desc: 'Maharastra'
      },
      AP: {
        code: 'AP',
        desc: 'Andhra Pradesh'
      }
    }
  }[country] || [])
