import React from 'react';
import { useFacebookSDK } from '../hooks/useFacebookSDK';

interface FacebookLikeButtonProps {
    url: string;
    width?: string;
    layout?: 'standard' | 'box_count' | 'button_count' | 'button';
    action?: 'like' | 'recommend';
    size?: 'small' | 'large';
    share?: boolean;
    lazy?: boolean;
    colorScheme?: 'light' | 'dark';
    refLabel?: string;
    kidDirectedSite?: boolean;
    version?: string;
    locale?: string;
}

const FacebookLikeButton: React.FC<FacebookLikeButtonProps> = ({
    url,
    width = '',
    layout = 'standard',
    action = 'like',
    size = 'small',
    share = false,
    lazy = false,
    colorScheme = 'light',
    refLabel = '',
    kidDirectedSite = false,
    version = 'v22.0',
    locale = 'en_US'
}) => {
    useFacebookSDK(version, locale);

    return (
        <div
            className="fb-like"
            data-href={url}
            data-width={width}
            data-layout={layout}
            data-action={action}
            data-size={size}
            data-share={share}
            data-lazy={lazy}
            data-colorscheme={colorScheme}
            data-ref={refLabel}
            data-kid-directed-site={kidDirectedSite}
        ></div>
    );
};

export default FacebookLikeButton;
