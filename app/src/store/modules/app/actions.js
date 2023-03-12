import types from './types';

export function updateUser(user) {
    return {type: types.UPDATE.USER, user}
}

export function createUser() {
    return{type: types.CREATE_USER};
}