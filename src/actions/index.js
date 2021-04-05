import { API_ROOT } from '../apiRoot'

export const fetchThings = () => {
    fetch(`${API_ROOT}/things`)
    .then(resp =>  resp.json())
    .then(things => console.log(things))
}