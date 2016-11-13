import * as CONSTANTS from '../constants/constants';

export function setLoading(state) {
	return {
		type: 'SET_LOADING',
		payload: state
	}
}

export function setBreadcrumbs(state) {
	return {
		type: 'SET_BREADCRUMBS',
		payload: state
	}
}

export function changeViewport(state) {
	return {
		type: 'SET_DESKTOP',
		payload: state
	}
}