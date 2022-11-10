import {selectResumo} from '../service/database.js'

async function getResumo(){
    let result = await selectResumo();
    return result;

}

export { getResumo }
