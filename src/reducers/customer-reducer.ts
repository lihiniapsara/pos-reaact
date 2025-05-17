

// Action type
import type {Customer} from "../types/Customer";

type CustomerAction =
    | { type: "ADD"; payload: Omit<Customer, "id"> }
    | { type: "UPDATE"; payload: Customer }
    | { type: "DELETE"; payload: number };

// Reducer function
function customerReducer(state: Customer[], action: CustomerAction): Customer[] {
    switch (action.type) {
        case "ADD":
            return [...state, { ...action.payload, id: Date.now() }];
        case "UPDATE":
            return state.map((c) => (c.id === action.payload.id ? action.payload : c));
        case "DELETE":
            return state.filter((c) => c.id !== action.payload);
        default:
            return state;
    }
}

export default customerReducer