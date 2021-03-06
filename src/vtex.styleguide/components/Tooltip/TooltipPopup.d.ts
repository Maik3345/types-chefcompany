import PropTypes from 'prop-types';
import { FC } from 'react';
export declare type Position = 'top' | 'right' | 'bottom' | 'left';
export declare type Size = 'mini' | 'small';
declare const propTypes: {
    /** Tooltip content */
    label: PropTypes.Validator<PropTypes.ReactNodeLike>;
    /** Tooltip position */
    position: PropTypes.Requireable<Position>;
    /** Tooltip font size */
    size: PropTypes.Requireable<Size>;
    /** Fallback position (when the tooltip cannot appear in the original position) */
    fallbackPosition: PropTypes.Requireable<Position>;
    /** Boolean to see if the popup should appear */
    visible: PropTypes.Requireable<boolean>;
    /** Delay to show the tooltip */
    delay: PropTypes.Requireable<number>;
    /** Tooltip animation duration */
    duration: PropTypes.Requireable<number>;
    /** Tooltip timming function used to animate the tooltip */
    timmingFn: PropTypes.Requireable<string>;
    /** Child ref. Used to correctly position the tooltip */
    childRef: PropTypes.Requireable<PropTypes.InferProps<{
        current: PropTypes.Requireable<HTMLElement>;
    }>> | PropTypes.Requireable<PropTypes.InferProps<{
        current: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }>>;
};
declare const TooltipPopup: FC<PropTypes.InferProps<typeof propTypes>>;
export default TooltipPopup;
