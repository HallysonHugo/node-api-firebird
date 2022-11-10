import {selectResumo} from '../service/database'

async function getResumo(){
    let result = await selectResumo();
    return result;

}

export { getResumo }
