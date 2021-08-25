                                                        /* Default Parameter */
/*
//Old Style
function showMyInfo(username, role, theme){

    username = username ||'No Name';
    role = role ||'No Role';
    theme = theme ||'No Color';

    return `
    Hello ${username},
    Your Role Is: ${role},
    Website Theme Colour Is: ${theme}.`;
}
console.log(showMyInfo());
console.log(showMyInfo('Omar'));
console.log(showMyInfo('Omar', 'Admin'));
console.log(showMyInfo('Omar', 'Admin', 'Red'));
*/
//New Style
function showMyInfo(username = 'Default Name', role = 'Default Admin', theme = 'Default Colour'){

    return `
    Hello ${username},
    Your Role Is: ${role},
    Website Theme Colour Is: ${theme}.`;
}
console.log(showMyInfo());
console.log(showMyInfo('Omar'));
console.log(showMyInfo('Omar', 'Admin'));
console.log(showMyInfo('Omar', 'Admin', 'Red'));


                                        