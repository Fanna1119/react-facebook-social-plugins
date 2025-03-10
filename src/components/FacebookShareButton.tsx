import React from 'react';
import { useFacebookSDK } from '../hooks/useFacebookSDK';

interface FacebookShareButtonProps {
    url?: string;
    layout?: 'box_count' | 'button_count' | 'button' | 'icon_link';
    size?: 'small' | 'large';
    lazy?: boolean;
    version?: string;
    locale?: string;
}

const FacebookShareButton: React.FC<FacebookShareButtonProps> = ({
    url = window.location.href,
    layout = 'button_count',
    size = 'small',
    lazy = false,
    version = 'v22.0',
    locale = 'en_US'
}) => {
    useFacebookSDK(version, locale);

    return (
        <div
            className="fb-share-button"
            data-href={url}
            data-layout={layout}
            data-size={size}
            data-lazy={lazy}
        ></div>
    );
};

export default FacebookShareButton;
