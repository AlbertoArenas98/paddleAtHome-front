import { catcher } from "./utils";

const getAll = (client) => async () => catcher(client.get)("group-class/get-all");



const groups = (client) =>({
    getAll: getAll(client),
});

export default groups;