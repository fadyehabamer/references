import React from 'react';


export default function Col() {
    //  * return <div></div>;
    // * Proplem .. at every single <td> .. it will be wrapped with div as parent

    // * soloution ... <Fragment>
    return (
        <React.Fragment>
            <td>
                HI FROM FRAGMENT COLOUMN
            </td>
        </React.Fragment>
    )
}
