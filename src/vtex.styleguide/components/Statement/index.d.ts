import React from 'react';
import { SubjectOptions } from './Atoms/SubjectAtom';
declare type Props = {
    isFullWidth?: boolean;
    isRtl?: boolean;
    omitSubject?: boolean;
    omitVerbs?: boolean;
    onChangeStatement: (statement: Props['statement']) => void;
    options: SubjectOptions;
    statement?: {
        subject: string;
        verb: string;
        object?: unknown;
        error?: string;
    };
    subjectPlaceholder: string;
};
declare const Statement: React.FC<Props>;
export default Statement;
