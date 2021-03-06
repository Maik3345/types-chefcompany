import PropTypes from 'prop-types';
import React from 'react';
declare const _default: React.ForwardRefExoticComponent<PropTypes.InferPropsInner<Pick<{
    /**
     * The children to render into the `container`.
     */
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    /**
     * A node, component instance, or function that returns either.
     * The `container` will have the portal children appended to it.
     * By default, it uses the body of the top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container: PropTypes.Requireable<Object>;
    /**
     * Callback fired once the children has been mounted into the `container`.
     */
    onRendered: PropTypes.Requireable<(...args: any[]) => any>;
}, never>> & Partial<PropTypes.InferPropsInner<Pick<{
    /**
     * The children to render into the `container`.
     */
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    /**
     * A node, component instance, or function that returns either.
     * The `container` will have the portal children appended to it.
     * By default, it uses the body of the top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container: PropTypes.Requireable<Object>;
    /**
     * Callback fired once the children has been mounted into the `container`.
     */
    onRendered: PropTypes.Requireable<(...args: any[]) => any>;
}, "children" | "container" | "onRendered">>> & React.RefAttributes<HTMLElement>>;
export default _default;
