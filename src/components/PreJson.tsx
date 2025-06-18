import React from 'react';
import ReactJson from 'react-json-view';
import { useTheme } from '../context/ThemeContext';

const PreJson = ({ data }: { data: Object|String|null }): React.ReactElement => {
    const { isDarkMode } = useTheme();

    return (
        <>
            {!!data && (
                <ReactJson
                    src={data}
                    displayDataTypes={false}
                    theme={isDarkMode ? 'colors' : 'rjv-default'}
                    style={{
                        fontSize: '13px',
                        backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                    }}
                />
            )}
        </>
    );
};

export default PreJson;
