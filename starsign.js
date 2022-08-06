const calculateStarSign = () => {
    // Get the birth month as a number between 1 and 12
    const birthMonthEle = document.getElementById('birthMonth')
    const birthMonthSelected = parseInt(birthMonthEle.value)
    console.log('birthMonthEle: ', birthMonthEle, birthMonthSelected)

    // Get the birth day of month as a number between 1 and 31
    const birthDayEle = document.getElementById('birthDay')
    const birthDaySelected = parseInt(birthDayEle.value)
    console.log('birthDayEle: ', birthDayEle, birthDaySelected)

    const starsign = findStarSignFromMonthAndDay(birthMonthSelected, birthDaySelected)
    console.log('Your starsign is ' + starsign)

    // Set the starsign in the HTML
    const starsignEle = document.getElementById('starsign')
    starsignEle.innerText = starsign
}

const findStarSignFromMonthAndDay = (month, day) => {
    if (month === 1 && day <= 20) {
        return 'Capricorn'
    } else if (month === 1 && day >= 21) {
        return 'Aquarius'
    } else if (month === 2 && day <= 18) {
        return 'Aquarius'
    } else if (month === 2 && day >= 19) {
        return 'Pisces'
    } else if (month === 3 && day <= 20) {
        return 'Pisces'
    } else if (month === 3 && day >= 21) {
        return 'Aries'
    } else if (month === 4 && day <= 19) {
        return 'Aries'
    } else if (month === 4 && day >= 20) {
        return 'Taurus'
    } else if (month === 5 && day <= 20) {
        return 'Taurus'
    } else if (month === 5 && day >= 21) {
        return 'Gemini'
    } else if (month === 6 && day <= 20) {
        return 'Gemini'
    } else if (month === 6 && day >= 21) {
        return 'Cancer'
    } else if (month === 7 && day <= 22) {
        return 'Cancer'
    } else if (month === 7 && day >= 23) {
        return 'Leo'
    } else if (month === 8 && day <= 22) {
        return 'Leo'
    } else if (month === 8 && day >= 23) {
        return 'Virgo'
    } else if (month === 9 && day <= 22) {
        return 'Virgo'
    } else if (month === 9 && day >= 23) {
        return 'Libra'
    } else if (month === 10 && day <= 22) {
        return 'Libra'
    } else if (month === 10 && day >= 23) {
        return 'Scorpio'
    } else if (month === 11 && day <= 21) {
        return 'Scorpio'
    } else if (month === 11 && day >= 22) {
        return 'Sagittarius'
    } else if (month === 12 && day <= 21) {
        return 'Sagittarius'
    } else if (month === 12 && day >= 22) {
        return 'Capricorn'
    } else {
        return 'Invalid'
    }
}
