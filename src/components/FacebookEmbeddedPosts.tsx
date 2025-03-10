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

interface FacebookEmbeddedPostProps {
    url: string;
    width?: string;
    lazy?: boolean;
    showText?: boolean;
    locale?: string;
    version?: string;
}

const FacebookEmbeddedPost: React.FC<FacebookEmbeddedPostProps> = ({
    url,
    width = '', // Default to fluid width
    lazy = false,
    showText = false,
    locale = 'en_US',
    version = 'v22.0'
}) => {
    useFacebookSDK(version, locale);
    return (
        <div 
            className="fb-post" 
            data-href={url} 
            data-width={width} 
            data-lazy={lazy} 
            data-show-text={showText}
        ></div>
    );
};

export default FacebookEmbeddedPost;
