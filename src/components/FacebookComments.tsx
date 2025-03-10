import React from 'react';
import { useFacebookSDK } from '../hooks/useFacebookSDK';

declare global {
    interface Window {
        FB: {
            XFBML: {
                parse: () => void;
            };
        };
    }
}

interface FacebookCommentsProps {
    url: string;
    numPosts?: number;
    width?: string;
    colorscheme?: 'light' | 'dark';
    orderBy?: 'social' | 'reverse_time' | 'time';
    version?: string;
    locale?: string;
    lazy?: boolean;
}

const FacebookComments: React.FC<FacebookCommentsProps> = ({
    url,
    numPosts = 10,
    width = '200px',
    colorscheme = 'light',
    orderBy = 'reverse_time',
    version = 'v22.0',
    locale = 'en_US',
    lazy = false
}) => {
    useFacebookSDK(version, locale);
    return (
        <div className="fb-comments"
            data-href={url}
            data-width={width}
            data-numposts={numPosts}
            data-colorscheme={colorscheme}
            data-order-by={orderBy}
            data-lazy={lazy}></div>
    );
};

export default FacebookComments;