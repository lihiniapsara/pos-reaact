import type { Stock } from "../types/Stock";

type StockAction =
    | { type: "ADD"; payload: Stock }
    | { type: "UPDATE"; payload: Stock }
    | { type: "DELETE"; payload: number };

function stockReducer(state: Stock[], action: StockAction): Stock[] {
    if (action.type === "ADD") {
        {
            // Validate payload
            if (!action.payload.name || action.payload.price < 0 || action.payload.quantity < 0) {
                console.warn("Invalid stock data for ADD action");
                return state;
            }
            return [...state, {
                ...action.payload
            }];
        }
    } else if (action.type === "UPDATE") {
        {
            // Validate payload
            if (!action.payload.name || action.payload.price < 0 || action.payload.quantity < 0) {
                console.warn("Invalid stock data for UPDATE action");
                return state;
            }
            return state.map((stock) =>
                stock.id === action.payload.id
                    ? {...action.payload}
                    : stock
            );
        }
    } else if (action.type === "DELETE") {
        return state.filter((stock) => {
            return action.payload !== stock.id;
        });
    } else {// TypeScript should prevent this, but good practice to handle
        console.warn("Unknown action type");
        return state;
    }
}

export default stockReducer;