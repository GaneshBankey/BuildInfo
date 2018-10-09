import { FETCH_BUILD_ENV } from '../constants/buildapp-action-types';

export const loadBuildEnvs = buildEnvs => ({ type : FETCH_BUILD_ENV, payload: buildEnvs});