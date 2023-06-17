// insère des virgules à chaque millier

function formatNumberWithCommas(number) {

    const numberString = number.toString();
    let formattedNumber = '';

    for (let i = numberString.length - 1, count = 0; i >= 0; i--, count++) {
        if (count !== 0 && count % 3 === 0) {
            formattedNumber = ',' + formattedNumber;
        }
        formattedNumber = numberString[i] + formattedNumber;
    }

    return formattedNumber;
}

export default formatNumberWithCommas;
