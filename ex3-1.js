const isValidNumber = num => {
    const parsedNumber = parseInt(num); // 정수 분할
    if (!isFinite(parsedNumber) || isNaN(parsedNumber)) { //정상적인 정수 및 실수가 아니라면
        return false;
    }
    if (parsedNumber != num) { //소수라면
        return false;
    }
    return (parsedNumber >= 1 && parsedNumber <= 9);//올바른 범위 안인지 확인하기
};
