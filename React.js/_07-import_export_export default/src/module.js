//  * export then import
export const x = 2;
export const y = 3;

export function moduleFunc (){
    return (
        <h2> Hi From moduleFunc from module.js file </h2>
    )
}

function exportDefault(){
    return(
        <h2> HELLO FROM EXPORT DEFAULT FUNCTION </h2>
    )
}
// * export default is written only once without ()
export default exportDefault;