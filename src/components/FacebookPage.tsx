import React from 'react';
import { useFacebookSDK } from '../hooks/useFacebookSDK';

interface FacebookPagePluginProps {
    pageUrl: string;
    width?: number;
    height?: number;
    tabs?: string;
    hideCover?: boolean;
    showFacepile?: boolean;
    hideCTA?: boolean;
    smallHeader?: boolean;
    adaptContainerWidth?: boolean;
    lazy?: boolean;
    version?: string;
    locale?: string;
}

const FacebookPagePlugin: React.FC<FacebookPagePluginProps> = ({
    pageUrl,
    width = 340,
    height = 500,
    tabs = 'timeline',
    hideCover = false,
    showFacepile = true,
    hideCTA = false,
    smallHeader = false,
    adaptContainerWidth = true,
    lazy = false,
    version = 'v22.0',
    locale = 'en_US'
}) => {
    useFacebookSDK(version, locale);

    return (
        <div
            className="fb-page"
            data-href={pageUrl}
            data-width={width}
            data-height={height}
            data-tabs={tabs}
            data-hide-cover={hideCover}
            data-show-facepile={showFacepile}
            data-hide-cta={hideCTA}
            data-small-header={smallHeader}
            data-adapt-container-width={adaptContainerWidth}
            data-lazy={lazy}
        ></div>
    );
};

export default FacebookPagePlugin;
