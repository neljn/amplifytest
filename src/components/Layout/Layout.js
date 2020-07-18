import React from 'react';

import Auxfile from '../../hoc/Auxfile';

const layout = (props) => (
    <Auxfile>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxfile>
);

export default layout;