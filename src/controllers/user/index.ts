import { ctrlWrapper } from '../../utils';
import {registerController} from './registerController';

export const ctrl = {
    register: ctrlWrapper(registerController)
}
