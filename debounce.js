let count = 0;
const debounce = (callback, timer = 0) => {
  let currentCallbackTimer = -1;

  // 클로저를 이용하기 위해 debounce를 실행하면 함수를 반환한다.
  return () => {
    count += 1;

    // 실행이 예약된 함수(callback)가 있을 경우 캔슬한다.
    clearTimeout(currentCallbackTimer);

    // 특정시간(timer) 후에 callback이 실행되도록 한다.
    currentCallbackTimer = setTimeout(callback, timer);
  };
};
const 야옹 = debounce(() => console.log('야옹' + count), 100);
야옹(); // 실행 취소
야옹(); // 실행 취소
야옹(); // 실행 취소
야옹(); // 실행
setTimeout(야옹, 100); // 실행
