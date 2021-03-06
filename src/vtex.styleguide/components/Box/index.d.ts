import { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
declare const propTypes: {
    /** Content of the box */
    children: PropTypes.Validator<PropTypes.ReactNodeLike>;
    /** Use the full size of the box. */
    noPadding: PropTypes.Requireable<boolean>;
    /** Title to the box */
    title: PropTypes.Requireable<string>;
};
declare type Props = InferProps<typeof propTypes>;
declare const Box: FC<Props>;
export default Box;
