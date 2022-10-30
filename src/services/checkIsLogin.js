export default function checkIsLogin(history) {
    if (document.cookie.indexOf('SignIn=true') == -1 && document.cookie.indexOf('Exit=false') == -1)
        history("/Binerals");

    document.cookie = "SignIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/Binerals;";
}