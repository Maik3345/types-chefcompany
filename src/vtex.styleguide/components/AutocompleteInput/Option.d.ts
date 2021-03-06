import PropTypes from 'prop-types';
import React from 'react';
/** Structured Autocomplete option shape */
declare const structuredAutocompleteOptionShape: PropTypes.Requireable<PropTypes.InferProps<{
    value: PropTypes.Requireable<any>;
    label: PropTypes.Validator<string>;
}>>;
declare type StructuredAutocompleteOption = PropTypes.InferType<typeof structuredAutocompleteOptionShape>;
export declare type AutocompleteOption = string | StructuredAutocompleteOption;
/** Autocomplete option shape */
export declare const autocompleteOptionShape: PropTypes.Requireable<string | PropTypes.InferProps<{
    value: PropTypes.Requireable<any>;
    label: PropTypes.Validator<string>;
}>>;
export declare const getTermFromOption: (option: string | PropTypes.InferProps<{
    value: PropTypes.Requireable<any>;
    label: PropTypes.Validator<string>;
}>) => string;
declare const propTypes: {
    /** Determine if the option should have a rounded bottom */
    roundedBottom: PropTypes.Requireable<boolean>;
    /** Option icon */
    icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    /** Search term used to highlight it into the label */
    searchTerm: PropTypes.Validator<string>;
    /** Option title */
    value: PropTypes.Validator<string | PropTypes.InferProps<{
        value: PropTypes.Requireable<any>;
        label: PropTypes.Validator<string>;
    }>>;
    /** Option key used in the list */
    key: PropTypes.Validator<string>;
    /** Determine if an option is selected and should be highlighted */
    selected: PropTypes.Validator<boolean>;
    /** Click handler */
    onClick: PropTypes.Validator<(...args: any[]) => any>;
};
declare const Option: React.FunctionComponent<PropTypes.InferProps<typeof propTypes>>;
export default Option;
