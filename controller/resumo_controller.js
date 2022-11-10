import {selectResumo} from '../service/database.js'

async function getResumo(){
    let result = await selectResumo();
    console.log(result);
    return result;

}

export { getResumo }
