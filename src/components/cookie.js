export const setCookie = (name, value, exp) => { // 이름 변수값 기간
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

export const getCookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};

export const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}