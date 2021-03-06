import React from 'react';
import { Labels, Operator } from './typings';
import { SubjectOptions } from '../Statement/Atoms/SubjectAtom';
declare type Props = {
    canDelete?: boolean;
    isFullWidth?: boolean;
    isRtl?: boolean;
    labels?: Labels;
    onChangeStatements: (statement: Props['statements']) => void;
    onChangeOperator: (operator: Props['operator']) => void;
    operator: Operator;
    options: SubjectOptions;
    hideOperator?: boolean;
    statements: {
        subject: string;
        verb: string;
        object?: any;
        error?: string;
    }[];
    subjectPlaceholder: string;
};
declare const Conditions: React.FC<Props>;
export default Conditions;
