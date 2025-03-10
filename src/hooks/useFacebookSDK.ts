import { useEffect } from 'react';

export const useFacebookSDK = (version: string = 'v17.0', locale: string = 'en_US') => {
    useEffect(() => {
        if (!window.FB) {
            const script = document.createElement('script');
            script.async = true;
            script.defer = true;
            script.crossOrigin = 'anonymous';
            script.src = `https://connect.facebook.net/${locale}/sdk.js#xfbml=1&version=${version}`;
            document.body.appendChild(script);
        } else {
            window.FB.XFBML.parse();
        }
    }, [version, locale]);
};

