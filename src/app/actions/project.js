import { Schema, normalize, arrayOf } from 'normalizr'

export const FETCH_JSON = 'FETCH_JSON'
export function fetchJson(data) {
  return {
    type: FETCH_JSON,
    json: data,
  };
}

export const REQUEST_JSON = 'REQUEST_JSON'
function requestJson() {
  return {
    type: REQUEST_JSON,
  };
}

export const RECIEVE_JSON = 'RECIEVE_JSON'
function recieveJson(json) {
  return {
    type: RECIEVE_JSON,
    json: json,
  }
}

export const SELECT_ITEM = 'SELECT_ITEM'
export function selectItem(data) {
  return {
    type: SELECT_ITEM,
    json: data,
  }
}

export const CHANGE_CLASS = 'CHANGE_CLASS'
export function changeClass(data) {
  return {
    type: CHANGE_CLASS,
    json: data,
  }
}

export const SHOW_DETAIL = 'SHOW_DETAIL'
export function showDetail(data) {
  return {
    type: SHOW_DETAIL,
    json: data,
  }
}

export const LINK_SHOP = 'LINK_SHOP'
export function linkShop(data) {
  return {
    type: LINK_SHOP,
    json: data,
  }
}
