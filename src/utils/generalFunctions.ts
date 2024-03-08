export const handleImageLoad = (event:any, imageReceiver: (imagePath: string) => void) => {
    imageReceiver(URL.createObjectURL(event.target.files[0]));
}

export const setCookie = (name: string, value: string, days: number) => {
    let expires = "";

    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";
}

export const getCookie = (name: string) =>  {
    const cookieName = name + "=";
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookies.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    
    return null;
}

export const handleFirebaseSuccess = (successText: string) => {
     console.log(successText);
}

export const handleFirebaseError = (errorText: string, error: any) => {
   console.error(errorText, error.message);
}

export const getCompanyId = () => {
    return getCookie("companyId") as string;
}

export const getCompanyIdFromInviteCode = (inviteCode: string) => {
        const symbolIndex = inviteCode.indexOf("_"); // Разделитель между инвайт кодом и id компании

        if (symbolIndex !== -1) {
            const companyId = inviteCode.substring(symbolIndex + 1).match(/^\d+/);

            if (companyId) {
                return companyId[0];
            }
        }

        return null;
}

