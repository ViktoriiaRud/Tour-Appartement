import React from 'react';

const MainLayout = ({children}) => {
    return (
        <html lang={'en'}>
        <div>
            {children}
        </div>
        </html>

    );
};

export default MainLayout;